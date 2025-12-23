import type { HeadingProps } from '@/types';

const Heading = ({ subHeading, heading }: HeadingProps) => {
  return (
    <>
      <p className="font-own text-sm tracking-tighter text-gray-500">{subHeading}</p>
      <h2 className="text-neutral-8 font-tooltip tracking-[0.022em] text-2xl font-bold">{heading}</h2>
    </>
  );
};

export default Heading;
