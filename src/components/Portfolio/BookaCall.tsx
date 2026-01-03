import { useTheme } from '@/hooks/useTheme';

const BookaCall = () => {
  const { theme } = useTheme();
  return (
    <div className="border-neutral-6/50 text-neutral-8 mt-16 mb-8 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-16 text-lg tracking-tighter transition-colors duration-200">
      <p>Since, You have scrolled up to here, let's talk.</p>
      <button className="border-neutral-6/50 text-neutral-8 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed bg-neutral-400/35 px-3.5 py-0.5 shadow-sm">
        <img
          key={theme}
          src={theme === 'dark' ? '/Images/AG_white.svg' : '/Images/AG.svg'}
          alt="main logo"
          className="h-3"
        />
        <span className="font-tooltip text-[13px] font-semibold tracking-wide">
          Book a Free Call
        </span>
      </button>
    </div>
  );
};

export default BookaCall;
