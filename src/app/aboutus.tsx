"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "./language";

const AboutUs = () => {
  const { language } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: width < 768px (md)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define animation based on screen size
  const planeVariants = {
    desktop: {
      x: "-30vw",
      y: "10vh",
      scale: 1.5,
      rotate: -10,
      opacity: 1,
    },
    mobile: {
      x: "-10vw",
      y: "40vh", // Move further down on mobile
      scale: 2, // Make it bigger on mobile
      rotate: 0,
      opacity: 1,
    },
  };

  return (
    <div className="w-full mb-50 min-h-[450px] flex justify-center relative">
      {/* Flying Plane Animation */}
      <motion.img
        src="./plane.png"
        alt="Flying Plane"
        className="absolute w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]"
        initial={{ x: "-40vw", y: "80vh", scale: 0.5, rotate: -30, opacity: 1 }}
        animate={isMobile ? planeVariants.mobile : planeVariants.desktop}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

      {/* About Us Text Content */}
      <motion.div
        className="relative z-2 max-w-3xl px-6 text-center text-xl sm:text-2xl md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {language === "en" ? (
          <>
            At{" "}
            <span className="text-primary text-4xl sm:text-5xl font-bold">
              Terhal
            </span>
            , we are dedicated to transforming the travel experience by introducing smart luggage that blends innovation, security, and convenience. Our mission is to eliminate common travel concerns such as lost luggage, security risks, and unexpected baggage fees by integrating advanced technologies{" "}
            <span className="text-primary text-2xl sm:text-3xl font-bold">
              all-in-one
            </span>{" "}
            stylish and functional design.
          </>
        ) : (
          <>
            في{" "}
            <span className="text-primary text-4xl sm:text-5xl font-bold">
              ترحال
            </span>
            ، نسعى إلى إعادة تعريف تجربة السفر من خلال تقديم حقائب ذكية تجمع بين الابتكار، الأمان، والراحة. مهمتنا هي القضاء على مشاكل السفر الشائعة مثل فقدان الأمتعة، المخاطر الأمنية، والرسوم الزائدة على الوزن، وذلك عبر{" "}
            <span className="text-primary text-2xl sm:text-3xl font-bold">
              دمج
            </span>{" "}
            أحدث التقنيات في تصميم أنيق وعملي.
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AboutUs;
