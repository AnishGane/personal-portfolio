import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="px-2 py-1 mx-auto bg-[#1E1E1E] rounded-full w-fit"
      initial={{ opacity: 0, filter: "blur(10px)", y: -40 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <ul className="mx-2 my-1 flex justify-center items-center ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-slide-bg${
              isActive ? " active" : ""
            } font-medium tracking-wider text-xs rounded-full ${
              isActive ? "px-10" : "px-7"
            } py-3 transition-all duration-300`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-slide-bg${
              isActive ? " active" : ""
            } font-medium tracking-wider text-xs  rounded-full ${
              isActive ? "px-10" : "px-7"
            } py-3 transition-all duration-300`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `nav-slide-bg${
              isActive ? " active" : ""
            } font-medium tracking-wider text-xs  rounded-full ${
              isActive ? "px-10" : "px-7"
            } py-3 transition-all duration-300`
          }
        >
          PROJECT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-slide-bg${
              isActive ? " active" : ""
            } font-medium tracking-wider text-xs rounded-full ${
              isActive ? "px-10" : "px-7"
            } py-3 transition-all duration-300`
          }
        >
          CONTACT
        </NavLink>
      </ul>
    </motion.div>
  );
};

export default Navbar;
