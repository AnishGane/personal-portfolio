import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Particles from './lib/Particles';

const App = () => {
  return (
    <div className="w-full h-screen text-white relative overflow-hidden">
      {/* Particles Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Particles
          particleColors={['#111111', '#ffffff']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={140}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      {/* Main Content */}
      <div className="absolute w-2/3 h-screen py-7 flex flex-col m-auto left-0 right-0 top-0 bottom-0 z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<div className="text-center my-auto text-[7rem]">404 Not Found</div>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
