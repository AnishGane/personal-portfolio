import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

// TIME HELPERS
const dayKey = (d) => d.toISOString().split('T')[0];

// STATE (portfolio-level)
let lastSeen = null;
let lastDay = null;
const dailyTotals = {};

// HEARTBEAT
app.post('/heartbeat', (_req, res) => {
  const now = Date.now();
  const today = dayKey(new Date(now));

  if (lastSeen) {
    const elapsed = now - lastSeen;
    dailyTotals[lastDay] = (dailyTotals[lastDay] || 0) + Math.max(0, elapsed);
  }

  lastSeen = now;
  lastDay = today;
  dailyTotals[today] ??= 0;

  res.sendStatus(200);
});

// OFFLINE (clean close)
app.post('/offline', (_req, res) => {
  lastSeen = null;
  lastDay = null;
  res.sendStatus(200);
});

// STATUS
app.get('/status', (_req, res) => {
  const now = Date.now();
  const today = dayKey(new Date());

  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = dayKey(yesterdayDate);

  const online = lastSeen && now - lastSeen < 10_000;

  res.json({
    online: Boolean(online),
    todayWorked: dailyTotals[today] || 0,
    yesterdayWorked: dailyTotals[yesterday] || 0,
  });
});

app.post('/offline', (req, res) => {
  finalizeIfOffline();
  res.sendStatus(200);
});

// GITHUB ACTIVITY GRAPH DATA API

app.get('/github-activity', async (req, res) => {
  const username = req.query.username;

  if (!username) {
    return res.status(400).json({ error: 'username is required' });
  }

  const query = `
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

  try {
    const response = await axios.post(
      `${process.env.GITHUB_GRAPHQL_URL}`,
      { query, variables: { username } },
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PortfolioApp',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const data = response.data;
    // console.log('GitHub User:', JSON.stringify(data.data?.user, null, 2));

    if (data.errors) {
      return res.status(500).json({ error: data.errors });
    }

    res.json(data.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch GitHub data', details: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
