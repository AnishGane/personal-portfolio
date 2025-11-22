import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

let lastSeen = null;

// Store total worked per day
const dailyTotals = {};

app.post("/heartbeat", (req, res) => {
  const now = Date.now();
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  // If lastSeen exists and was online recently, add to previous interval
  if (lastSeen && now - lastSeen < 10000) {
    // 10s considered active
    if (!dailyTotals[today]) dailyTotals[today] = 0;
    dailyTotals[today] += now - lastSeen;
  }

  lastSeen = now;
  res.sendStatus(200);
});

app.get("/status", (req, res) => {
  const now = Date.now();
  const today = new Date().toISOString().split("T")[0];
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = yesterdayDate.toISOString().split("T")[0];

  const isOnline = lastSeen && now - lastSeen < 10000;

  res.json({
    online: isOnline,
    todayWorked: dailyTotals[today] || 0,
    yesterdayWorked: dailyTotals[yesterday] || 0,
  });
});

app.listen(4000, () => console.log("Status server running on port 4000"));
