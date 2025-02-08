"use client";
import {  motion } from "framer-motion";


//import { useLanguage } from "./language";


const AboutUs = () => {

  return (
    <div className="overflow-hidden" >

      {/* Flying Plane Animation (Infinite Loop) */}
      <motion.img
        src="/plane.png"
        alt="Flying Plane"
        className="absolute w-[120px] md:w-[150px] lg:w-[400px]"
        initial={{ x: "-20vw", y: "80vh", scale: 0.5, rotate: -30, opacity: 1 }}
        animate={{ x: "1vw", y: "30vh", scale: 1.5, rotate: -10, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

  <img src="/blob-scene.svg" alt="Background" className="w-full h-full absolute top-0 left-0 z-[-100]  object-cover" />

    </div>
  );
};

export default AboutUs;
