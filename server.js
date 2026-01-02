import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 8080;

// HEARTBEAT SYSTEM

// HELPER FUNCTIONS
const getDayKey = (date) => date.toISOString().split('T')[0];
const finalizeLastSession = () => {
  if (!lastSeen) return;

  const now = Date.now();
  const nowDate = new Date(now);
  const today = getDayKey(nowDate);

  // If still online, do nothing
  if (now - lastSeen < 10_000) return;

  const elapsed = now - lastSeen;

  if (lastSeenDay !== today) {
    const midnight = new Date(nowDate);
    midnight.setHours(0, 0, 0, 0);

    const yesterdayTime = midnight.getTime() - lastSeen;
    const todayTime = now - midnight.getTime();

    dailyTotals[lastSeenDay] = (dailyTotals[lastSeenDay] || 0) + Math.max(0, yesterdayTime);

    dailyTotals[today] = (dailyTotals[today] || 0) + Math.max(0, todayTime);
  } else {
    dailyTotals[today] = (dailyTotals[today] || 0) + elapsed;
  }

  // prevent double counting
  lastSeen = null;
  lastSeenDay = null;
};

let lastSeen = null;
let lastSeenDay = null;
const dailyTotals = {};

app.post('/heartbeat', (req, res) => {
  const now = Date.now();
  const nowDate = new Date(now);
  const today = getDayKey(nowDate);

  if (!lastSeen) {
    lastSeen = now;
    lastSeenDay = today;
    dailyTotals[today] ??= 0;
    return res.sendStatus(200);
  }

  const elapsed = now - lastSeen;

  // If day changed, split time correctly
  if (lastSeenDay !== today) {
    const midnight = new Date(nowDate);
    midnight.setHours(0, 0, 0, 0);

    const yesterdayTime = midnight.getTime() - lastSeen;
    const todayTime = now - midnight.getTime();

    dailyTotals[lastSeenDay] = (dailyTotals[lastSeenDay] || 0) + Math.max(0, yesterdayTime);

    dailyTotals[today] = (dailyTotals[today] || 0) + Math.max(0, todayTime);
  } else {
    dailyTotals[today] = (dailyTotals[today] || 0) + elapsed;
  }

  lastSeen = now;
  lastSeenDay = today;

  res.sendStatus(200);
});

app.get('/status', (req, res) => {
  finalizeLastSession();

  const now = Date.now();
  const today = getDayKey(new Date());
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = getDayKey(yesterdayDate);

  const isOnline = lastSeen && now - lastSeen < 10_000;

  res.json({
    online: Boolean(isOnline),
    todayWorked: dailyTotals[today] || 0,
    yesterdayWorked: dailyTotals[yesterday] || 0,
  });
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
      'https://api.github.com/graphql',
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
    console.log('GitHub User:', JSON.stringify(data.data?.user, null, 2));

    if (data.errors) {
      return res.status(500).json({ error: data.errors });
    }

    res.json(data.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch GitHub data', details: err.message });
  }
});
// Start server
app.listen(PORT, () => console.log('Server running on port: ' + PORT));
