import { formatTime } from "@/utils/helper";
type ToolTipProps = {
  status: string;
  totalTimeToday: number;
  totalTimeYesterday: number;
};

const ToolTip = ({
  status,
  totalTimeToday,
  totalTimeYesterday,
}: ToolTipProps) => {
  return (
    <div
      className="
      font-own tracking-tight
          absolute left-9 pointer-events-none
          opacity-0 group-hover:opacity-100 mt-6
          transition-opacity duration-200
          z-20 w-max
          px-3 py-2 rounded-lg shadow-md
          bg-white dark:bg-neutral-800
          border border-neutral-200 dark:border-neutral-700
        "
    >
      {/* Tooltip Arrow */}
      <span
        className="absolute -left-[4.5px] top-3 size-2 rotate-45 border-l border-b border-neutral-200 dark:border-neutral-700
    bg-white dark:bg-neutral-800 -z-10"
      ></span>

      <p className="text-sm font-medium flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
        ● {status === "online" ? "Online" : "Offline"} in{" "}
        <span className="flex items-center gap-2">
          <img
            src="/Images/cursor.png"
            alt="cursor image"
            className="size-[1.22rem]"
          />{" "}
          Cursor
        </span>
      </p>

      <p className="ml-4 text-[11px] text-neutral-500 tracking-wide dark:text-neutral-400 mt-0.5">
        {totalTimeToday > 0 ? (
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
