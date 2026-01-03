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
  const [totalTimeYesterday, setTotalTimeYesterday] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get('http://localhost:4000/status');
        setCursorStatus(res.data.online ? 'online' : 'offline');
        setTotalTimeToday(res.data.todayWorked);
        setTotalTimeYesterday(res.data.yesterdayWorked);
      } catch {
        setCursorStatus('offline');
        setTotalTimeToday(0);
        setTotalTimeYesterday(0);
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
  const monthLabels: (MonthLabel | null)[] = [];

  let primaryYear: number | null = null;
  let lastRenderedMonth: number | null = null;

  weeks.forEach((week) => {
    let label: MonthLabel | null = null;

    for (const day of week.contributionDays) {
      const date = new Date(day.date);

      if (date.getDate() === 1) {
        const month = date.getMonth();
        const year = date.getFullYear();

        // Lock primary year on first January
        if (primaryYear === null && month === 0) {
          primaryYear = year;
        }

        // Only render months belonging to primary year
        if (year === primaryYear && month !== lastRenderedMonth) {
          label = {
            month,
            label: monthNames[month],
            date: day.date,
          };
          lastRenderedMonth = month;
        }

        break;
      }
    }

    monthLabels.push(label);
  });

  if (loading) return <p className="text-neutral-500">Loading GitHub activity…</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="relative mb-8">
      <div className="font-tooltip text-neutral-8 mb-4 flex items-center justify-between text-sm font-medium">
        <p>
          Total contributions: <strong className="font-bold">{totalContributions}</strong>
        </p>
        <p className="flex gap-1 font-normal capitalize">
          <span
            className={`font-semibold ${cursorStatus === 'online' ? 'text-green-400' : 'text-gray-700'}`}
          >
            {cursorStatus}
          </span>
          <span>
            <img src="/Images/cursor.png" alt="cursor image" className="size-5" />
          </span>
          {cursorStatus === 'online' ? (
            <span>Today Worked {formatTime(totalTimeToday)}</span>
          ) : (
            <span>Yesterday Worked {formatTime(totalTimeYesterday)}</span>
          )}
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-hidden lg:overflow-x-hidden">
        <div className="github-grid">
          {/* Month labels */}
          {monthLabels.map((item, i) => (
            <div key={`m-${i}`} className="month-cell text-neutral-8">
              {item?.label ?? ''}
            </div>
          ))}

          {/* Days */}
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

      <div className="font-tooltip bg-neutral-6/10 text-neutral-6 absolute right-0 -bottom-10 flex w-fit items-center justify-end-safe gap-2 rounded-md px-2 py-1.5 text-right text-xs">
        <p>Less</p>
        <div className="flex items-center gap-[2px]">
          <div className="size-2.5 rounded-xs bg-[#216E39]"></div>
          <div className="size-2.5 rounded-xs bg-[#30A14E]"></div>
          <div className="size-2.5 rounded-xs bg-[#40C463]"></div>
          <div className="size-2.5 rounded-xs bg-[#9BE9A8]"></div>
          <div className="size-2.5 rounded-xs bg-[#c9cccf]"></div>
        </div>

        <p>More</p>
      </div>
    </div>
  );
};

export default GitHubActivity;
