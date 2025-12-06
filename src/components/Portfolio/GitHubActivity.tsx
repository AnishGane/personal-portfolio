import type { GitHubResponse, MonthLabel, Week } from '@/types';
import { formatTime } from '@/utils/helper';
import axios from 'axios';
import { useEffect, useState } from 'react';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const GitHubActivity = ({ username }: { username: string }) => {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [cursorStatus, setCursorStatus] = useState<string>('offline');
  const [totalTimeToday, setTotalTimeToday] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get('http://localhost:4000/status');
        setCursorStatus(res.data.online ? 'online' : 'offline');
        setTotalTimeToday(res.data.todayWorked);
      } catch {
        setCursorStatus('offline');
        setTotalTimeToday(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`http://localhost:4000/github-activity?username=${username}`)
      .then((res) => {
        const data: GitHubResponse = res.data;
        if (!data?.user) {
          setError('User data not found');
          return;
        }
        setWeeks(data.user.contributionsCollection.contributionCalendar.weeks);
        setTotalContributions(
          data.user.contributionsCollection.contributionCalendar.totalContributions
        );
      })
      .catch(() => setError('Failed to load GitHub data'))
      .finally(() => setLoading(false));
  }, [username]);

  // Extract month labels aligned with weeks
  const monthLabels: MonthLabel[] = [];
  let lastMonth: number | null = null;
  weeks.forEach((week) => {
    if (week.contributionDays.length > 0) {
      const firstDay = new Date(week.contributionDays[0].date);
      const month = firstDay.getMonth();
      if (month !== lastMonth) {
        monthLabels.push({ month, label: monthNames[month], date: week.contributionDays[0].date });
        lastMonth = month;
      } else {
        monthLabels.push(null);
      }
    }
  });

  if (loading) return <p className="text-neutral-500">Loading GitHub activity…</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="mb-8">
      <div className="font-tooltip text-neutral-8 mb-4 flex items-center justify-between text-sm font-medium">
        <p>
          Total contributions: <strong className="font-bold">{totalContributions}</strong>
        </p>
        <p className="flex gap-1 font-normal capitalize">
          <span className={`font-semibold ${cursorStatus === 'online' ? 'text-green-400' : 'text-gray-700'}`}>
            {cursorStatus}
          </span>
          <span>
            <img src="/Images/cursor.png" alt="cursor image" className="size-5" />
          </span>
          <span>Today Worked {formatTime(totalTimeToday)}</span>
        </p>
      </div>

      <div className="github-grid border-neutral-6/40 rounded-xl border border-dashed p-4 shadow-sm">
        {/* Month labels row */}
        {monthLabels.map((item, i) => (
          <div key={`m-${i}`} className="month-cell">
            {item ? item.label : ''}
          </div>
        ))}

        {/* Days (7 rows) */}
        {weeks.map((week, wi) =>
          week.contributionDays.map((day, di) => (
            <div
              key={`d-${wi}-${di}`}
              className="day-cell"
              style={{ backgroundColor: day.color }}
              title={`${day.date} — ${day.contributionCount} contributions`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GitHubActivity;
