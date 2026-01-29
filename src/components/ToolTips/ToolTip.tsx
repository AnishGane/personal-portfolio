import { Github } from 'lucide-react';

const ToolTip = () => {
  return (
    <div className="font-own pointer-events-none absolute left-8 z-20 mt-6 w-max rounded-lg border border-neutral-200 bg-white p-3 tracking-tight opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800">
      {/* Tooltip Arrow */}
      <span className="absolute top-4 -left-[4.5px] -z-10 size-2 rotate-45 border-b border-l border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800"></span>

      <div className="font-ownBold flex flex-col items-start gap-1 font-medium text-neutral-700 dark:text-neutral-300">
        <div className="flex items-center gap-2">
          <div className="bg-neutral-6/20 ring-neutral-8/20 rounded-full p-1 ring-1">
            <Github className="text-neutral-8 size-5 rounded-full" />
          </div>
          <p>AnishGane</p>
        </div>
        <span className="text-neutral-6/80 ml-1 text-xs tracking-wide">
          Currently a <span className="underline">BCA</span> 3<sup>rd</sup> year at Bhaktapur
          Multiple Campus
        </span>
      </div>
    </div>
  );
};

export default ToolTip;