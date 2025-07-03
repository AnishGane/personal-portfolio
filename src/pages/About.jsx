import React, { useEffect } from "react";
import {
  FaCalendar,
  FaGraduationCap,
  FaLocationDot,
  FaSchool,
} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaJsSquare, FaUniversity } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { motion, stagger, useAnimate } from "framer-motion";

const skills = [
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-2xl w-14 h-14" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-2xl w-14 h-14" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-2xl w-14 h-14" />,
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb className="text-2xl w-14 h-14" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-2xl w-14 h-14" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-2xl w-14 h-14" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-2xl w-14 h-14" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-2xl w-14 h-14" />,
  },
];

const About = () => {
  // animating the about me text
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
        delay: stagger(0.035),
      }
    );
  };

  const text =
    " Hi! I'm a 20 years old BCA Student with a strong passion for building modern web applications having experience working with technologies like JavaScript, React, and Node.js. I enjoy learning new tools, collaborating on creative projects, and continuously improving my skills in both frontend and backend development.";

  return (
    <div className="w-full overflow-auto hide-scrollbar">
      <div className="py-10 max-w-3/4 mx-auto mt-2">
        <motion.h2
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: -30,
            scrollBehavior: "smooth",
          }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-fit scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
        >
          About Me
          <hr className="border-gray-200 border-1 w-1/2 mt-1.5" />
        </motion.h2>
        <div
          ref={scope}
          className="text-md sm:text-[1.1rem] tracking-wide text-gray-200 text-justify mt-4"
        >
          {text.split(" ").map((word, idx) => (
            <motion.span
              key={word + idx}
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-4">
          <p className="text-sm flex items-center gap-2 justify-start text-justify">
            <FaLocationDot /> Bhaktapur, Nepal
          </p>
          <p className="text-sm flex items-center gap-2 justify-start text-justify">
            <MdAttachEmail />
            <a href="mailto:anishgane10@gmail.com">anishgane10@gmail.com</a>
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full mt-12 pt-2">
          <motion.h2
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: -30,
              scrollBehavior: "smooth",
            }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-fit scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
          >
            My Skills
            <hr className="border-gray-200 border-1 w-1/2 mt-1.5" />
          </motion.h2>
          <div className=" items-center pl-0 lg:pl-5 flex gap-3 sm:gap-5 flex-wrap">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="flex items-center max-w-fit gap-0 bg-gray-800/40 rounded-lg p-2 sm:py-3 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 60 }}
                whileHover="hovered"
              >
                <p className="pl-2">{skill.icon}</p>
                <motion.span
                  className="ml-2 text-base sm:text-lg border-l-2 border-gray-200 overflow-hidden whitespace-nowrap"
                  initial={{ opacity: 0, x: -10, maxWidth: 0 }}
                  animate={{ opacity: 0, x: -10, maxWidth: 0 }}
                  variants={{
                    hovered: {
                      opacity: 1,
                      x: 0,
                      maxWidth: 200,
                      transition: {
                        duration: 0.3,
                        delay: idx * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    },
                  }}
                  style={{ display: "inline-block" }}
                >
                  <p className="mx-2">{skill.name}</p>
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full mt-12 pt-2">
          <motion.h2
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: -30,
              scrollBehavior: "smooth",
            }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-fit scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
          >
            Education
            <hr className="border-gray-200 w-1/2 border-1 mt-1.5" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-row gap-10 items-start"
          >
            <div className="flex flex-col">
              <div className="flex mt-1 flex-col items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="w-1 h-28 bg-white"></span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="w-1 h-28 bg-white"></span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="w-1 h-20 bg-white"></span>
              </div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start">
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaSchool /> Primary Schooling
                </p>
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaSchool /> Sooryodaya Secondary School
                </p>
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaCalendar /> 2062 - 2077 B.S.
                </p>
              </div>
              <div className="flex flex-col mt-13 items-start">
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaSchool /> +2 (Science)
                </p>
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaSchool /> Khwopa Higher Secondary College
                </p>
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaCalendar /> 2077 - 2079 B.S.
                </p>
              </div>
              <div className="flex flex-col mt-13 items-start">
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaGraduationCap /> Bachelor in Computer Application
                </p>
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaUniversity /> Bhaktapur Multiple Campus
                </p>
                <p className="text-base sm:text-md flex items-center gap-2 justify-start text-justify">
                  <FaCalendar /> 2079 B.S. - Present
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
