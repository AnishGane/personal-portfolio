import { useEffect, useState } from "react";
import axios from "axios";
import ToolTip from "@/components/ToolTip";

const Portfolio = () => {
  const [cursorStatus, setCursorStatus] = useState<string>("offline");
  const [totalTimeToday, setTotalTimeToday] = useState<number>(0);
  const [totalTimeYesterday, setTotalTimeYesterday] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER}/status`);
        setCursorStatus(res.data.online ? "online" : "offline");
        setTotalTimeToday(res.data.todayWorked);
        setTotalTimeYesterday(res.data.yesterdayWorked);
      } catch (err) {
        setCursorStatus("offline");
        setTotalTimeToday(0);
        setTotalTimeYesterday(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-10">
      <div className="flex items-center justify-self-start gap-4">
        {/* Profile Image */}
        <div className=" relative size-24 rounded-full p-[1.5px]">
          <img
            src="/Images/GhibliImage.png"
            alt="My Image"
            className="object-cover w-full h-full rounded-full"
            title="Anish Gane"
          />

          <div className="absolute z-90 group bottom-px hover:scale-110 transition-scale duration-200 flex items-center justify-center -right-[5px] size-6 rounded-full bg-white dark:bg-black   dark:ring-1 dark:ring-neutral-600">
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

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200">
            Anish Gane
          </h1>

          <p className="text-base tracking-wide text-neutral-600 dark:text-neutral-400 font-semibold">
            MERN Stack Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
