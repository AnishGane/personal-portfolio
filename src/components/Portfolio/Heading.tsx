import type { HeadingProps } from "@/types";

const Heading = ({ subHeading, heading }: HeadingProps) => {
  return (
    <>
      <p className="text-gray-500 text-sm tracking-tighter">{subHeading}</p>
      <h2 className="text-2xl font-bold text-neutral-8 font-tooltip">
        {heading}
      </h2>
    </>
  );
};

export default Heading;
