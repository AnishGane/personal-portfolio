import ToolTip from '../ToolTips/ToolTip';
import { motion } from "motion/react";

const ProfileImage = () => {
  return (
    <div className="flex sm:items-center justify-between gap-4">

      <div className="relative size-24 rounded-full  p-[1.5px]">
        <img
          src="/Images/GhibliImage.webp"
          alt="My Image"
          className="h-full w-full rounded-full object-cover"
          title="Anish Gane"
          loading="lazy"
        />

        <div className="group transition-scale absolute right-[3px] bottom-px z-90 flex size-5 items-center justify-center rounded-full bg-white shadow-md drop-shadow-neutral-100 duration-200 hover:scale-105 dark:bg-black dark:ring-1 dark:ring-neutral-500">
          <span className="text-neutral-8 text-xs font-semibold">A</span>

          <ToolTip />
        </div>
      </div>

      <div className='flex-1 sm:ml-10'>
        <h1 className="font-ownBold text-neutral-8 bg-clip-text text-2xl sm:text-3xl">
          Hi, I'm Anish —{' '}
          <span className=" text-neutral-6 text-2xl sm:text-3xl">
            A{" "}
            <motion.span
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative inline-block cursor-default">
              <span className='text-black dark:text-white'>MERN</span>
              <span className="absolute -bottom-1 left-0">
                <motion.svg
                  viewBox="0 0 427 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 md:w-18 h-auto"
                  variants={{
                    rest: { x: 0 },
                    hover: { x: -7 }
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 14 }}
                >
                  <motion.path
                    d="M5.3772 23.44C16.0439 1.89333 26.7105 1.89333 37.3772 23.44C48.3079 46.0533 58.9746 46.0533 69.3772 23.44C80.0439 0.826668 90.7105 0.826668 101.377 23.44C111.893 45.4133 122.56 45.4133 133.377 23.44C144.044 1.46667 154.711 1.46667 165.377 23.44C175.889 44.7733 186.555 44.7733 197.377 23.44C208.044 2.10667 218.711 2.10667 229.377 23.44C240.097 44.9867 250.764 44.9867 261.377 23.44C272.044 1.89333 282.711 1.89333 293.377 23.44C304.414 46.48 315.08 46.48 325.377 23.44C336.044 0.4 346.711 0.4 357.377 23.44C368.093 46.6933 378.76 46.6933 389.377 23.44C400.044 0.186666 410.711 0.186666 421.377 23.44"
                    stroke="#05E326"
                    strokeWidth="12"
                    strokeLinecap="round"
                    variants={{
                      rest: { pathLength: 1, opacity: 1 },
                      hover: { pathLength: 0, opacity: 0 }
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  />
                </motion.svg>
              </span>
            </motion.span>{" "}
            Stack Developer.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ProfileImage;