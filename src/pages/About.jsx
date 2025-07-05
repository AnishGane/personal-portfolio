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
  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimating();
  }, []);

  const startAnimating = () => {
    if (!scope.current) return;

    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.4,
        ease: "easeInOut",
        delay: stagger(0.02),
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
          transition={{ duration: 0.6, delay: 0.2 }}
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
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p
            className="border border-slate-200 px-5 rounded-sm bg-gray-400/20 py-1.5 text-sm flex items-center gap-2 justify-start text-justify hover:bg-gray-400/30 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLocationDot className="text-blue-400" /> Bhaktapur, Nepal
          </motion.p>
          <motion.p
            className="border border-slate-200 px-5 rounded-sm bg-gray-400/20 py-1.5 text-sm flex items-center gap-2 justify-start text-justify hover:bg-gray-400/30 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdAttachEmail className="text-green-400" />
            <a
              href="mailto:anishgane10@gmail.com"
              className="hover:text-green-400 transition-colors"
            >
              anishgane10@gmail.com
            </a>
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-5 w-full mt-12 pt-2">
          <motion.h2
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: -30,
              scrollBehavior: "smooth",
            }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="w-fit scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
          >
            My Skills
            <hr className="border-gray-200 border-1 w-1/2 mt-1.5" />
          </motion.h2>
          <div className="items-center pl-0 lg:pl-5 flex gap-3 sm:gap-5 flex-wrap">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="flex items-center max-w-fit gap-0 bg-gray-800/40 rounded-lg p-2 sm:py-3 cursor-pointer overflow-hidden hover:bg-gray-800/60 transition-all duration-300"
                initial={{ opacity: 0, x: -30, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 60 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 4,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.p
                  className="pl-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.p>
                {/* <motion.span
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
                </motion.span> */}
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
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-fit scroll-m-20 pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0"
          >
            Education
            <hr className="border-gray-200 w-1/2 border-1 mt-1.5" />
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-row gap-10 items-start"
          >
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                className="flex mt-1 flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-white"
                  whileHover={{ scale: 1.5, backgroundColor: "#3b82f6" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.span
                  className="w-1 h-28 bg-white"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                ></motion.span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-white"
                  whileHover={{ scale: 1.5, backgroundColor: "#10b981" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.span
                  className="w-1 h-28 bg-white"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                ></motion.span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.6 }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-white"
                  whileHover={{ scale: 1.5, backgroundColor: "#f59e0b" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.span
                  className="w-1 h-20 bg-white"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                ></motion.span>
              </motion.div>
              <motion.div
                className="w-3 h-3 rounded-full bg-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 3.0 }}
                whileHover={{ scale: 1.5, backgroundColor: "#ef4444" }}
              ></motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaSchool className="text-blue-400" /> Primary Schooling
                </motion.p>
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaSchool className="text-blue-400" /> Sooryodaya Secondary
                  School
                </motion.p>
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaCalendar className="text-blue-400" /> 2062 - 2077 B.S.
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col mt-13 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-green-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaSchool className="text-green-400" /> +2 (Science)
                </motion.p>
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-green-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaSchool className="text-green-400" /> Khwopa Higher
                  Secondary College
                </motion.p>
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-green-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaCalendar className="text-green-400" /> 2077 - 2079 B.S.
                </motion.p>
              </motion.div>
              <motion.div
                className="flex flex-col mt-13 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.8 }}
              >
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaGraduationCap className="text-yellow-400" /> Bachelor in
                  Computer Application
                </motion.p>
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaUniversity className="text-yellow-400" /> Bhaktapur
                  Multiple Campus
                </motion.p>
                <motion.p
                  className="text-base sm:text-md flex items-center gap-2 justify-start text-justify hover:text-yellow-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <FaCalendar className="text-yellow-400" /> 2079 B.S. - Present
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
