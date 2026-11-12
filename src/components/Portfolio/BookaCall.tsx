import { Link } from 'react-router-dom';

const BookaCall = () => {

  return (
    <div className="relative my-12 flex h-56 flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-black/20 dark:border-white/20 px-6 text-center text-sm text-neutral-8 transition-colors duration-200 sm:text-lg">
      <img
        src="/Images/sunset_wallpaper.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
        loading="lazy"
        draggable="false"
      />

      <div className="absolute inset-0 dark:bg-black/30" />

      <p className="relative z-10 tracking-tighter text-white">
        Since you’ve scrolled this far, let’s talk.
      </p>

      <Link
        to="/contact-me"
        className="relative z-10 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/40 bg-black/30 px-3.5 py-1.5 text-white shadow-sm backdrop-blur-sm"
      >
        <span className="font-tooltip text-[14px] font-semibold tracking-wide">
          Book a Free Call
        </span>
      </Link>
    </div>
  );
};

export default BookaCall;