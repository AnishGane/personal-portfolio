import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

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
    icon: <SiMongodb className="text-2xl w-14 h-14" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-2xl w-14 h-14" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-2xl w-14 h-14" />,
  },
];

const About = () => {
  return (
    <div className="w-full overflow-auto hide-scrollbar">
      <div className="py-14 px-28 max-w-3/4 mx-auto">
        <h2 className=" w-fit scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          About Me
          <hr className="border-gray-200 border-1 mt-1" />
        </h2>
        <p className="text-md text-gray-200 text-justify mt-4">
          Hi! I'm a 20-year-old BCA Student with a strong passion for building
          modern web applications having experience working with technologies
          like JavaScript, React, and Node.js. I enjoy learning new tools,
          collaborating on creative projects, and continuously improving my
          skills in both frontend and backend development.
        </p>
        <div className="flex items-center gap-10">
          <p className="text-md flex items-center gap-2 justify-start text-justify mt-4">
            <FaLocationDot /> Bhaktapur, Nepal
          </p>
          <p className="text-md flex items-center gap-2 justify-start text-justify mt-4">
            <MdAttachEmail />
            <a href="mailto:anishgane10@gmail.com">anishgane10@gmail.com</a>
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full mt-10 pt-2">
          <h2 className=" w-fit scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            My Skills
            <hr className="border-gray-200 border-1 mt-1" />
          </h2>
          <div className="flex gap-2">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="flex items-center max-w-fit gap-2  bg-gray-800/40 rounded-lg p-3 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 60 }}
                whileHover="hovered"
              >
                {skill.icon}
                <motion.span
                  className="ml-2 text-lg overflow-hidden whitespace-nowrap"
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
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
