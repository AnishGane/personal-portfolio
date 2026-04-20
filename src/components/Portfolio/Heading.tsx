import type { HeadingProps } from '@/types';

const Heading = ({ subHeading, heading }: HeadingProps) => {
  return (
    <>
      <p className="font-own text-sm tracking-tighter text-gray-700 dark:text-gray-300">{subHeading}</p>
      <h2 className="text-neutral-8 font-tooltip tracking-[0.022em] text-2xl font-bold">{heading}</h2>
    </>
  );
};

export default Heading;
