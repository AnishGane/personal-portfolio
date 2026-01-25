import type { GitHubResponse, Week } from '@/types';
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

const dayLabels = ['Mon', 'Wed', 'Fri'];

const GitHubActivity = ({ username }: { username: string }) => {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/github-activity?username=${username}`)
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

  // Calculate month labels with proper positioning like GitHub
  const getMonthLabels = () => {
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      // Check the first day of the week
      const firstDay = week.contributionDays[0];
      if (firstDay) {
        const date = new Date(firstDay.date);
        const month = date.getMonth();

        // Add label when month changes
        if (month !== lastMonth) {
          labels.push({
            month: monthNames[month],
            weekIndex: weekIndex,
          });
          lastMonth = month;
        }
      }
    });

    return labels;
  };

  const monthLabels = getMonthLabels();

  if (loading) return <p className="text-neutral-500">Loading GitHub activity…</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const cellSize = 11; // Size of each square
  const cellGap = 3; // Gap between squares

  return (
    <div className="relative mb-8">
      <div className="font-tooltip text-neutral-8 mb-4 flex items-center justify-between text-sm">
        <p>
          <strong className="font-bold">{totalContributions}</strong> Contributions till now
        </p>
        <p className="hidden text-neutral-6/90 sm:flex gap-1 text-xs font-normal capitalize italic">
          `Trying to be more active in Github`
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-hidden">
        <div className="inline-block" style={{ minWidth: 'fit-content' }}>
          {/* Container with day labels and graph */}
          <div className="flex gap-2">
            {/* Day labels column */}
            <div
              className="flex flex-col justify-between pt-6"
              style={{ height: `${7 * (cellSize + cellGap) - cellGap}px` }}
            >
              {dayLabels.map((day, index) => (
                <span
                  key={index}
                  className="text-xs mt-3.5 text-neutral-500"
                  style={{ lineHeight: `${cellSize}px` }}
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Graph section */}
            <div>
              {/* Month labels row */}
              <div className="relative mb-1" style={{ height: '20px' }}>
                {monthLabels.map((label, index) => (
                  <span
                    key={index}
                    className="absolute text-xs text-neutral-400"
                    style={{
                      left: `${label.weekIndex * (cellSize + cellGap)}px`,
                    }}
                  >
                    {label.month}
                  </span>
                ))}
              </div>

              {/* Contribution grid */}
              <div
                className="grid"
                style={{
                  gridTemplateRows: 'repeat(7, 1fr)',
                  gridAutoFlow: 'column',
                  gap: `${cellGap}px`,
                }}
              >
                {weeks.map((week, weekIndex) =>
                  week.contributionDays.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className="rounded-xs transition-all hover:ring-1 hover:ring-white/50"
                      style={{
                        width: `${cellSize}px`,
                        height: `${cellSize}px`,
                        backgroundColor: day.color || '#161b22',
                      }}
                      title={`${day.date} — ${day.contributionCount} contributions`}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="font-tooltip text-neutral-6 mt-4 flex items-center justify-end gap-2 text-xs">
        <p>Less</p>
        <div className="flex items-center gap-[2px]">
          <div className="size-2.5 rounded-xs bg-[#c9cccf]"></div>
          <div className="size-2.5 rounded-xs bg-[#9BE9A8]"></div>
          <div className="size-2.5 rounded-xs bg-[#40C463]"></div>
          <div className="size-2.5 rounded-xs bg-[#30A14E]"></div>
          <div className="size-2.5 rounded-xs bg-[#216E39]"></div>
        </div>

        <p>More</p>
      </div>
    </div>
  );
};

export default GitHubActivity;