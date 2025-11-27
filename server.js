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

let lastSeen = null;
let lastSeenDay = null;
const dailyTotals = {};

app.post('/heartbeat', (req, res) => {
  const now = Date.now();
  const today = new Date().toISOString().split('T')[0];

  // Initialize today's total if not exists
  if (!dailyTotals[today]) dailyTotals[today] = 0;

  // Only add time if lastSeen exists AND it was on the same day
  if (lastSeen !== null && lastSeenDay === today) {
    dailyTotals[today] += now - lastSeen;
  }

  lastSeen = now;
  lastSeenDay = today;

  res.sendStatus(200);
});

app.get('/status', (req, res) => {
  const now = Date.now();
  const today = new Date().toISOString().split('T')[0];
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toISOString().split('T')[0];

  const isOnline = lastSeen && now - lastSeen < 10000;

  res.json({
    online: isOnline,
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
