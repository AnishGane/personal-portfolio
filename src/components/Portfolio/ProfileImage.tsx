import ToolTip from '../ToolTips/ToolTip';

const ProfileImage = () => {
  return (
    <div className="relative size-24 rounded-full p-[1.5px]">
      <img
        src="/Images/GhibliImage.webp"
        alt="My Image"
        className="h-full w-full rounded-full object-cover"
        title="Anish Gane"
        loading="lazy"
      />

      <div className="group transition-scale absolute right-[3px] bottom-px z-90 flex size-5 items-center justify-center rounded-full bg-white shadow-md drop-shadow-neutral-100 duration-200 hover:scale-105 dark:bg-black dark:ring-1 dark:ring-neutral-500">
        <span className="text-neutral-8 text-xs font-medium">A</span>

        <ToolTip />
      </div>
    </div>
  );
};

export default ProfileImage;