import GitHubActivitySkeleton from '@/skeletons/github-activity-skeleton';
import type { GitHubResponse, Week } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const dayLabels = ['Mon', 'Wed', 'Fri'];

// Simple in-memory cache: key → { data, timestamp }
const cache = new Map<string, { data: GitHubResponse; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

const GitHubActivity = ({ username }: { username: string }) => {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    // Check cache first
    const cached = cache.get(username);
    if (cached && Date.now() - cached.ts < CACHE_TTL) {
      const cal = cached.data.user.contributionsCollection.contributionCalendar;
      setWeeks(cal.weeks);
      setTotalContributions(cal.totalContributions);
      return;
    }

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
        // Store in cache
        cache.set(username, { data, ts: Date.now() });

        const cal = data.user.contributionsCollection.contributionCalendar;
        setWeeks(cal.weeks);
        setTotalContributions(cal.totalContributions);
      })
      .catch(() => setError('Failed to load GitHub data'))
      .finally(() => setLoading(false));
  }, [username]);

  /**
   * FIX: Month label alignment
   *
   * GitHub's heatmap shows a month label only when the FIRST day of that month
   * falls within a week — and we skip the very first label if it would overlap
   * with the second one (i.e. the first week is mid-month).
   *
   * We also skip a label if it is too close (< 2 week columns) to the previous
   * one, which prevents the "MaJun" / "AprMay" overlap you saw.
   */
  const getMonthLabels = () => {
    const labels: { month: string; weekIndex: number }[] = [];

    weeks.forEach((week, weekIndex) => {
      week.contributionDays.forEach((day) => {
        const date = new Date(day.date);
        // Only care about the 1st of the month
        if (date.getDate() !== 1) return;

        const month = monthNames[date.getMonth()];
        const lastLabel = labels[labels.length - 1];

        // Skip if too close to the previous label (< 2 columns gap)
        if (lastLabel && weekIndex - lastLabel.weekIndex < 2) return;

        labels.push({ month, weekIndex });
      });
    });

    // Drop the first label if it starts at week 0 AND the week doesn't actually
    // begin on the 1st (i.e. the month started before the calendar window).
    if (labels.length > 0 && labels[0].weekIndex === 0) {
      const firstDay = weeks[0]?.contributionDays[0];
      if (firstDay && new Date(firstDay.date).getDate() !== 1) {
        labels.shift();
      }
    }

    return labels;
  };

  const monthLabels = getMonthLabels();

  if (loading) return <GitHubActivitySkeleton />;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const cellSize = 11;
  const cellGap = 3;
  const step = cellSize + cellGap;

  return (
    <div className="relative mb-8">
      <div className="font-tooltip text-neutral-8 mb-4 text-sm">
        <p>
          <strong className="font-bold">{totalContributions}</strong> Contributions till now
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-hidden">
        <div className="inline-block" style={{ minWidth: 'fit-content' }}>
          <div className="flex gap-2">
            {/* Day labels column */}
            <div
              className="flex flex-col justify-between pt-6"
              style={{ height: `${7 * step - cellGap}px` }}
            >
              {dayLabels.map((day, index) => (
                <span
                  key={index}
                  className="text-xs mt-3.5 text-neutral-6"
                  style={{ lineHeight: `${cellSize}px` }}
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Graph section */}
            <div>
              {/* Month labels row — each label is absolutely positioned by weekIndex */}
              <div className="relative mb-1" style={{ height: '20px' }}>
                {monthLabels.map((label, index) => (
                  <span
                    key={index}
                    className="absolute text-xs text-neutral-6"
                    style={{ left: `${label.weekIndex * step}px` }}
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
          {['#c9cccf', '#9BE9A8', '#40C463', '#30A14E', '#216E39'].map((color) => (
            <div key={color} className="size-2.5 rounded-xs" style={{ backgroundColor: color }} />
          ))}
        </div>
        <p>More</p>
      </div>
    </div>
  );
};

export default GitHubActivity;