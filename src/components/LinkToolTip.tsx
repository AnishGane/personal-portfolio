const LinkToolTip = ({ label }: { label: string }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-[46px] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 px-3 py-2 rounded-lg shadow-md text-xs font-medium bg-neutral-8 text-neutral-200 dark:text-neutral-800 whitespace-nowrap z-20">
      {label}

      <div className="absolute left-1/2 -translate-x-1/2 top-full size-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-neutral-8" />
    </div>
  );
};

export default LinkToolTip;
