"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./language";

export default function TerhalSuitcase() {
  const { language }: { language: "en" | "ar" } = useLanguage();

  // Intersection Observers
  const [img1Ref, img1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [img2Ref, img2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [img3Ref, img3InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [img4Ref, img4InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [leftRef, leftInView] = useInView({ threshold: 0.3, triggerOnce: true });


  const features: Record<"en" | "ar", string[]> = {
    en: [
      "GPS Tracking",
      "Biometric Security Lock",
      "Built-in Weight Scale",
      "USB Charging Port",
      "TSA-Approved Lock",
      "Smart Interior Organization",
      "Real-Time Luggage Status in App",
      "Remote Lock/Unlock Feature",
      "Scratch-Resistant Material",
      "Long-Lasting Battery Life",
    ],
    ar: [
      "تتبع GPS",
      "قفل بالبصمة آمن",
      "ميزان مدمج للوزن",
      "منفذ شحن USB",
      "قفل معتمد من TSA",
      "تنظيم داخلي ذكي",
      "حالة الأمتعة في الوقت الفعلي عبر التطبيق",
      "ميزة القفل/إلغاء القفل عن بُعد",
      "مادة مقاومة للخدوش",
      "بطارية تدوم طويلاً",
    ],
  };
  

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* Title */}
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

      {/* Subtitle */}
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

      {/* Features + Flying Suitcases */}
      <div className="flex items-center justify-center gap-10 px-4 py-5 relative">
        


        {/* Flying Suitcases */}
        <motion.img
          ref={img1Ref}
          src="./suitcase1.webp"
          alt="Suitcase"
          className="absolute w-[550px] md:w-[400px] lg:w-[550px] z-[-1]"
          initial={{ x: "-40vw", y: "20vh", scale: 0.5, rotate: -30, opacity: 0 }}
          animate={
            img1InView
              ? { x: "-37vw", y: "25vh", scale: 1.5, rotate: -15, opacity: 1 }
              : {}
          }
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <motion.img
          ref={img2Ref}
          src="./suitcase5.webp"
          alt="Suitcase"
          className="absolute w-[550px] md:w-[400px] lg:w-[500px] z-[-1]"
          initial={{ x: "40vw", y: "20vh", scale: 0.5, rotate: 90, opacity: 0 }}
          animate={
            img2InView
              ? { x: "33vw", y: "15vh", scale: 1.5, rotate: 30, opacity: 1 }
              : {}
          }
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <motion.img
          ref={img3Ref}
          src="./suitcase4.webp"
          alt="Suitcase"
          className="absolute w-[550px] md:w-[400px] lg:w-[400px] z-[-1]"
          initial={{ x: "-40vw", y: "20vh", scale: 0.5, rotate: -30, opacity: 0 }}
          animate={
            img3InView
              ? { x: "-40vw", y: "-30vh", scale: 1.5, rotate: -10, opacity: 1 }
              : {}
          }
          transition={{ duration: 3, ease: "easeOut" }}
        />

        <motion.img
          ref={img4Ref}
          src="./suitcase3.webp"
          alt="Suitcase"
          className="absolute w-[400px] md:w-[400px] lg:w-[400px] z-[-1]"
          initial={{ x: "40vw", y: "20vh", scale: 0.5, rotate: -20, opacity: 0 }}
          animate={
            img4InView
              ? { x: "40vw", y: "-30vh", scale: 1.5, rotate: -20, opacity: 1 }
              : {}
          }
          transition={{ duration: 3, ease: "easeOut" }}
        />

        {/* Right-Side Features */}
{/* Features Grid */}
<div className="flex flex-wrap  justify-center grid-cols-1 sm:grid-cols-2 gap-10 px-4 py-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
  
{/* Features in a Single Centered Row */}
<motion.div
  ref={leftRef}
  initial={{ opacity: 0, y: 20 }}
  animate={leftInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="flex flex-wrap justify-center gap-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center"
>
  {features[language].map((feature, index) => (
    <div key={index} className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
      {feature}
    </div>
  ))}
</motion.div>


</div>

      </div>
    </div>
  );
}
