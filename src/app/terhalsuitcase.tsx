"use client";
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./language";

export default function TerhalSuitcase() {
  const { language }: { language: "en" | "ar" } = useLanguage();

  // Intersection Observers for images (Trigger animations when in view)
  const [img1Ref, img1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [img2Ref, img2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [img3Ref, img3InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [img4Ref, img4InView] = useInView({ threshold: 0.2, triggerOnce: true });

  const [leftRef, leftInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [rightRef, rightInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const features: Record<"en" | "ar", string[]> = {
    en: [
      "GPS Tracking",
      "Biometric Security Lock",
      "Built-in Weight Scale",
      "USB Charging Port",
      "Stylish & Durable Design",
      "Smart Interior Organization",
    ],
    ar: [
      "تتبع GPS",
      "قفل بالبصمة آمن",
      "ميزان مدمج للوزن",
      "منفذ شحن USB",
      "تصميم أنيق ومتين",
      "تنظيم داخلي ذكي",
    ],
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* 🔥 Dynamic Header with Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginBottom: "30px",
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {language === "ar" ? "حقيبة ترحال الذكية" : "Terhal Smart Suitcase"}
      </motion.h1>

      {/* 🔥 Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          fontSize: "20px",
          color: "#555",
          marginBottom: "40px",
          direction: language === "ar" ? "rtl" : "ltr",
        }}
      >
        {language === "ar"
          ? "استكشف مميزات حقيبة السفر الذكية لدينا"
          : "Explore the features of our smart travel suitcase"}
      </motion.p>

      {/* 🔥 Features Section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", padding: "20px" }}>
        
        {/* Left-Side Features (Right for Arabic) */}
        <motion.div
          ref={leftRef}
          initial={{ x: language === "ar" ? -100 : 100, opacity: 0 }}
          animate={leftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: language === "ar" ? "right" : "left", fontSize: "28px", fontWeight: "bold" }}
        >
          {features[language].slice(0, 3).map((feature, index) => (
            <div key={index} style={{ margin: "10px 0" }}>{feature}</div>
          ))}
        </motion.div>

        {/* 🔥 Flying Suitcases Animation (Start Only When In View) */}
        <motion.img
          ref={img1Ref}
          src="./suitcase1.webp"
          alt="Suitcase"
          className="absolute w-[120px] md:w-[150px] lg:w-[550px]"
          initial={{ x: "-40vw", y: "20vh", scale: 0.5, rotate: -30, opacity: 0 }}
          animate={img1InView ? { x: "-37vw", y: "20vh", scale: 1.5, rotate: -10, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <motion.img
          ref={img2Ref}
          src="./suitcase5.webp"
          alt="Suitcase"
          className="absolute w-[120px] md:w-[150px] lg:w-[500px]"
          initial={{ x: "40vw", y: "20vh", scale: 0.5, rotate: 90, opacity: 0 }}
          animate={img2InView ? { x: "33vw", y: "10vh", scale: 1.5, rotate: 30, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <motion.img
          ref={img3Ref}
          src="./suitcase4.webp"
          alt="Suitcase"
          className="absolute w-[120px] md:w-[150px] lg:w-[400px]"
          initial={{ x: "-40vw", y: "20vh", scale: 0.5, rotate: -30, opacity: 0 ,}}
          animate={img3InView ? { x: "-40vw", y: "-30vh", scale: 1.5, rotate: -10, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <motion.img
          ref={img4Ref}
          src="./suitcase3.webp"
          alt="Suitcase"
          className="absolute w-[120px] md:w-[150px] lg:w-[400px]"
          initial={{ x: "40vw", y: "20vh", scale: 0.5, rotate: -20, opacity: 0 }}
          animate={img4InView ? { x: "35vw", y: "-30vh", scale: 1.5, rotate: -20, opacity: 1 } : {}}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        {/* Right-Side Features (Left for Arabic) */}
        <motion.div
          ref={rightRef}
          initial={{ x: language === "ar" ? 100 : -100, opacity: 0 }}
          animate={rightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: language === "ar" ? "left" : "right", fontSize: "28px", fontWeight: "bold" }}
        >
          {features[language].slice(3, 6).map((feature, index) => (
            <div key={index} style={{ margin: "10px 0" }}>{feature}</div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
