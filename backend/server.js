import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

// ─── In-memory cache ──────────────────────────────────────────────────────────
// Stores GitHub activity per username with a TTL.
// On a real server this survives between requests (unlike client-side state).
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

const activityCache = new Map();

function getCached(key) {
  const entry = activityCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    activityCache.delete(key);
    return null;
  }
  return entry.data;
}

function setCache(key, data) {
  activityCache.set(key, { data, expiresAt: Date.now() + CACHE_TTL_MS });
}

// ─── GitHub Activity endpoint ─────────────────────────────────────────────────
// Only fetches the fields we actually render (color, date, count).
// Reduced query payload → faster response when cache is cold.
const GH_QUERY = `
  query ($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

app.get('/github-activity', async (req, res) => {
  const username = req.query.username?.trim();

  if (!username) {
    return res.status(400).json({ error: 'username is required' });
  }

  // ── 1. Return cached data immediately if still fresh ──────────────────────
  const cached = getCached(username);
  if (cached) {
    res.setHeader('X-Cache', 'HIT');
    return res.json(cached);
  }

  // ── 2. Fetch from GitHub GraphQL ──────────────────────────────────────────
  try {
    const response = await axios.post(
      process.env.GITHUB_GRAPHQL_URL,
      { query: GH_QUERY, variables: { username } },
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PortfolioApp',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Hard timeout so a slow GitHub response doesn't hang the request
        timeout: 8000,
      }
    );

    const { data, errors } = response.data;

    if (errors?.length) {
      return res.status(500).json({ error: errors });
    }

    if (!data?.user) {
      return res.status(404).json({ error: 'GitHub user not found' });
    }

    // Cache the successful result
    setCache(username, data);

    res.setHeader('X-Cache', 'MISS');
    return res.json(data);
  } catch (err) {
    const isTimeout = err.code === 'ECONNABORTED';
    console.error('GitHub API ERROR:', err.response?.data || err.message);
    return res.status(isTimeout ? 504 : 500).json({
      error: isTimeout ? 'GitHub API timed out' : 'Failed to fetch GitHub data',
      details: err.response?.data || err.message,
    });
  }
});

// ─── Optional: manual cache-bust endpoint ─────────────────────────────────────
// Call DELETE /github-activity?username=foo to force a fresh fetch next time.
app.delete('/github-activity', (req, res) => {
  const username = req.query.username?.trim();
  if (!username) return res.status(400).json({ error: 'username is required' });
  const deleted = activityCache.delete(username);
  return res.json({ cleared: deleted });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
