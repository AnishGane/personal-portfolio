import axios from 'axios';
import { useEffect, useState } from 'react';
import ToolTip from '../ToolTips/ToolTip';

const ProfileImage = () => {
  const [cursorStatus, setCursorStatus] = useState<string>('offline');

  const [totalTimeToday, setTotalTimeToday] = useState<number>(0);
  const [totalTimeYesterday, setTotalTimeYesterday] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/status`);
        setCursorStatus(res.data.online ? 'online' : 'offline');
        setTotalTimeToday(res.data.todayWorked);
        setTotalTimeYesterday(res.data.yesterdayWorked);
      } catch {
        setCursorStatus('offline');
        setTotalTimeToday(0);
        setTotalTimeYesterday(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative size-24 rounded-full p-[1.5px]">
      <img
        src="/Images/GhibliImage.png"
        alt="My Image"
        className="h-full w-full rounded-full object-cover"
        title="Anish Gane"
        loading="lazy"
      />

      <div className="group transition-scale absolute right-[3px] bottom-px z-90 flex size-5 items-center justify-center rounded-full bg-white shadow-md drop-shadow-neutral-100 duration-200 hover:scale-105 dark:bg-black dark:ring-1 dark:ring-neutral-500">
        <span
          className={`size-[6.5px] rounded-full ${
            cursorStatus === 'online' ? 'bg-green-500' : 'bg-[#737373]'
          }`}
        ></span>

        <ToolTip
          status={cursorStatus}
          totalTimeToday={totalTimeToday}
          totalTimeYesterday={totalTimeYesterday}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
