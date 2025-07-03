import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const bentoCards = [
  {
    key: "hero",
    className: "md:col-span-2 row-span-3",
    img: assets.hero_image,
    title: "Welcome to My Portfolio",
    text: "Showcasing creativity, code, and passion for building beautiful web experiences.",
    link: "/",
  },
  {
    key: "about",
    className: "md:col-span-2 row-span-2",
    img: assets.about_image,
    title: "About Me",
    text: "I am a web developer with a love for modern UI, clean code, and solving real-world problems.",
    link: "/about",
  },
  {
    key: "projects",
    className: "md:col-span-1 row-span-3",
    img: assets.project_image,
    title: "Projects",
    text: "Explore my latest work & best projects.",
    link: "/projects",
  },
  {
    key: "skills",
    className: "md:col-span-1 row-span-2",
    img: assets.skill_image,
    title: "Skills",
    text: "JavaScript, React, Node.js, and more.",
    link: "/about",
  },
  {
    key: "contact",
    className: "md:col-span-2 row-span-2",
    img: assets.contact_image,
    title: "Contact",
    text: "Let's connect! Reach out for collaborations or just to say hi.",
    link: "/contact",
  },
];

const BentoCard = ({ card }) => {
  const [circle, setCircle] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCircle((c) => ({
      ...c,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
  };

  // Show circle on hover start, hide on hover end
  const handleHoverStart = () => setCircle((c) => ({ ...c, visible: true }));
  const handleHoverEnd = () => setCircle((c) => ({ ...c, visible: false }));

  return (
    <Link
      to={card.link}
      className="contents"
      style={{ textDecoration: "none" }}
    >
      <motion.div
        key={card.key}
        className={`${
          card.className
        } relative rounded-3xl shadow-lg overflow-hidden flex items-center justify-center ${
          card.key === "hero" ? "cursor-default" : "cursor-pointer"
        }`}
        onMouseMove={handleMouseMove}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={card.img}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute w-full bottom-0 left-0 right-0 z-20 flex flex-col items-start p-4 sm:p-6 md:p-8">
          <h2 className="text-white text-md sm:text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">
            {card.title}
          </h2>
          <p className="text-slate-100/90 pt-2.5 mb-1 w-full sm:w-4/5 md:w-3/4 text-xs sm:text-sm md:text-md font-medium drop-shadow-lg">
            {card.text}
          </p>
        </div>
        <AnimatePresence>
          {circle.visible && card.key !== "hero" && (
            <motion.div
              className="text-center absolute z-30"
              style={{
                left: circle.x - 50,
                top: circle.y - 50,
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "rgba(255,255,255)",
                border: "2px solid #fff",
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "#222",
                fontSize: 14,
                cursor: "pointer",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              Click Here
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="w-full  flex items-center justify-center mt-8 p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-6 gap-4 w-full max-w-6xl h-[80vh]">
        {bentoCards.map((card) => (
          <BentoCard card={card} key={card.key} />
        ))}
      </div>
    </div>
  );
};

export default Home;
