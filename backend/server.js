import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

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
