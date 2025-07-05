import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { assets } from "../assets/assets";

const Project = () => {
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
    "Here are some of the projects I have worked on, showcasing my skills in web development, UI/UX design.";

  const projects = [
    {
      title: "Smart Finance Tracker",
      description:
        "A full-stack web application for tracking personal finances, allowing users to manage income, expenses, and visualize spending trends with interactive charts.",
      image: assets.project_1,
      link: "https://smart-finance-tracker-1.onrender.com/",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Chart.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "AI Powered background removal",
      description:
        "A web app that uses AI to quickly remove backgrounds from images, making it easy to create transparent images.",
      image: assets.project_2,
      link: "https://ai-background-removal.onrender.com/",
      tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "AI Powered image enhancer",
      description:
        "A web application that leverages AI to enhance and upscale images, improving their quality and resolution with a simple user interface.",
      image: assets.project_3,
      link: "https://ai-image-enhancer-1oli.onrender.com/",
      tags: ["React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Sushi Website",
      description:
        "A visually appealing website for a sushi restaurant, featuring a modern UI, interactive menu, and smooth animations to enhance user experience.",
      image: assets.project_4,
      link: "https://sushi-website-anish.onrender.com/",
      tags: ["HTML", "CSS"],
    },
    {
      title: "Doctor Appointment Booking",
      description:
        "A web platform that enables users to book doctor appointments online, view available time slots, and manage their bookings efficiently.",
      image: assets.project_5,
      link: "https://doctor-appointment-booking-v5i4.onrender.com/",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Softstitch Ecommerce Website",
      description:
        "A comprehensive e-commerce platform for Softstitch, featuring product catalog, shopping cart functionality, user authentication, and secure payment processing with a modern, responsive design.",
      image: assets.project_6,
      link: "https://softstitch-ecommerce.onrender.com",
      tags: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Framer Motion",
        "Cloudinary",
        "Multer",
      ],
    },
  ];
  return (
    <div className="w-full overflow-auto hide-scrollbar ">
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
          Projects
          <hr className="border-gray-200 border-1 w-1/2 mt-1.5" />
        </motion.h2>
        <div
          ref={scope}
          className="text-md sm:text-[1.1rem] tracking-wide text-neutral-300 text-justify mt-2"
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
      </div>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 max-w-3/4 mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            className="group relative"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className="h-72 w-full object-cover rounded-xl group-hover:scale-[1.02] transition duration-300 ease-in-out"
                src={project.image}
                alt={project.title || "project image"}
              />
              <motion.h2
                className="text-md sm:text-[1.4rem] tracking-wide text-neutral-100 text-justify mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 * idx,
                  ease: "easeOut",
                }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                className="text-md sm:text-[0.9rem] tracking-wide text-neutral-300 text-justify mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 * idx + 0.1,
                  ease: "easeOut",
                }}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags &&
                  project.tags.map((tag, tagIdx) => (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 * idx + 0.1 + tagIdx * 0.07, // stagger by tagIdx
                        ease: "easeOut",
                      }}
                      key={tagIdx}
                      className="bg-neutral-800 text-neutral-200 px-2 py-1 rounded text-xs font-semibold border border-neutral-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
