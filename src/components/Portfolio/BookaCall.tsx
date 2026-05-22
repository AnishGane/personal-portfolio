import { useTheme } from '@/context/ThemeContext';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

const BookaCall = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="border-neutral-6/50 text-neutral-8 px-6 mt-16 mb-8 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-16 text-sm text-center sm:text-lg tracking-tighter transition-colors duration-200 relative overflow-hidden">
      <p>Since, You have scrolled up to here, let's talk.</p>
      <Link
        to={'/contact-me'}

        className="border-neutral-6/50 text-neutral-8 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed bg-neutral-400/35 px-3.5 py-1.5 shadow-sm"
      >
        <img
          key={theme}
          src={theme === 'dark' ? '/Images/AG_white.svg' : '/Images/AG.svg'}
          alt="main logo"
          className="h-3"
          loading='lazy'
          draggable="false"
        />
        <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-tooltip text-[13px] font-semibold tracking-wide">
          Book a Free Call
        </span>
      </Link>

      <motion.div
        className='absolute -right-10 bottom-0 '
        variants={{
          rest: { opacity: 0, rotate: 40, y: 10, x: 15, scale: 0.9 },
          hover: {
            opacity: 1,
            rotate: 20,
            y: -10,
            x: -5,
            scale: 1.05,
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 12,
            },
          },
        }}
      >
        <Phone className=' text-neutral-6/80 size-30' />
      </motion.div>
    </motion.div >
  );
};

export default BookaCall;
