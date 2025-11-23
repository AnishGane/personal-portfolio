import axios from "axios";
import { useEffect, useState } from "react";
import ToolTip from "../ToolTip";

const ProfileImage = () => {
  const [cursorStatus, setCursorStatus] = useState<string>("offline");

  const [totalTimeToday, setTotalTimeToday] = useState<number>(0);
  const [totalTimeYesterday, setTotalTimeYesterday] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get("http://localhost:4000/status");
        setCursorStatus(res.data.online ? "online" : "offline");
        setTotalTimeToday(res.data.todayWorked);
        setTotalTimeYesterday(res.data.yesterdayWorked);
      } catch {
        setCursorStatus("offline");
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
        className="object-cover w-full h-full rounded-full"
        title="Anish Gane"
      />

      <div className="absolute z-90 group bottom-px hover:scale-110 transition-scale duration-200 flex items-center justify-center right-[3px] shadow-md drop-shadow-neutral-100 size-5 rounded-full bg-white dark:bg-black dark:ring-1 dark:ring-neutral-500">
        <span
          className={`size-[7px] rounded-full ${
            cursorStatus === "online" ? "bg-green-500" : "bg-[#737373]"
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
