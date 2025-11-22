import { useEffect, useState } from "react";
import axios from "axios";

import ToolTip from "@/components/ToolTip";
import LanguageDiv from "@/components/LanguageDiv";

import type { LanguageType } from "@/types";

import TSLogo from "@/components/icons/TSLogo";
import ReactLogo from "@/components/icons/ReactLogo";
import NextLogo from "@/components/icons/NextLogo";
import Bun from "@/components/icons/Bun";
import Postgress from "@/components/icons/Postgress";

export const LanguageItem: LanguageType[] = [
  {
    id: 1,
    icon: <TSLogo />,
    languageName: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: 2,
    icon: <ReactLogo />,
    languageName: "React",
    href: "https://react.dev/",
  },
  {
    id: 3,
    icon: <NextLogo />,
    languageName: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    id: 4,
    icon: <Bun />,
    languageName: "Bun",
    href: "https://bun.com/",
  },
  {
    id: 5,
    icon: <Postgress />,
    languageName: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
];

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
      } catch {
        setCursorStatus("offline");
        setTotalTimeToday(0);
        setTotalTimeYesterday(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-10">
      <div>
        {/* Profile Image */}
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

        {/* Details */}
        <div className="flex font-tooltip flex-col gap-3 mt-8 tracking-wide ">
          <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-gray-800 dark:from-gray-300 dark:via-gray-200 dark:to-gray-100 bg-clip-text">
            Hi, I'm Anish —
            <span className="text-neutral-400/80"> MERN Stack Developer.</span>
          </h1>

          <div className="flex flex-wrap mt-4 whitespace-pre-wrap items-center gap-2 text-neutral-6">
            <span>I build interactive web apps using</span>
            {LanguageItem.map((item, idx) => (
              <LanguageDiv
                key={item.id + item.languageName}
                item={item}
                idx={idx}
                totalCount={LanguageItem.length}
              />
            ))}
            <span>. With a focus on</span>
            <strong>UI</strong>
            <span>design. Enthusiastic about </span>
            <span>
              {" "}
              <strong>Three.js </strong>, driven by a
            </span>
            <span>eye for design.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
