import { formatTime } from '@/utils/helper';
type ToolTipProps = {
  status: string;
  totalTimeToday: number;
  totalTimeYesterday: number;
};

const ToolTip = ({ status, totalTimeToday, totalTimeYesterday }: ToolTipProps) => {
  return (
    <div className="font-own pointer-events-none absolute left-9 z-20 mt-6 w-max rounded-lg border border-neutral-200 bg-white px-3 py-2 tracking-tight opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800">
      {/* Tooltip Arrow */}
      <span className="absolute top-3 -left-[4.5px] -z-10 size-2 rotate-45 border-b border-l border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800"></span>

      <p className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
        ● {status === 'online' ? 'Online' : 'Offline'} in{' '}
        <span className="flex items-center gap-2">
          <img src="/Images/cursor.png" alt="cursor image" className="size-[1.22rem]" /> Cursor
        </span>
      </p>

      <p className="mt-0.5 ml-4 text-[11px] tracking-wide text-neutral-500 dark:text-neutral-400">
        {status === 'online' ? (
          <>
            Today worked: <strong>{formatTime(totalTimeToday)}</strong>
          </>
        ) : totalTimeToday > 0 ? (
          <>
            Today worked: <strong>{formatTime(totalTimeToday)}</strong>
          </>
        ) : (
          <>
            Yesterday worked: <strong>{formatTime(totalTimeYesterday)}</strong>
          </>
        )}
      </p>
    </div>
  );
};

export default ToolTip;
