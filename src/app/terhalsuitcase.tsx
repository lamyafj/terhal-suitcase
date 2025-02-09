"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./language";

export default function TerhalSuitcase() {
  const { language }: { language: "en" | "ar" } = useLanguage();

  // Ensure component is only rendered on client

  // Intersection Observer for animations
  const [leftRef, leftInView] = useInView({ threshold: 0.3 });
  const [rightRef, rightInView] = useInView({ threshold: 0.3 });

  const features: Record<"en" | "ar", string[]> = {
    en: [
      "📍 GPS Tracking",
      "🔒 Biometric Security Lock",
      "⚖️ Built-in Weight Scale",
      "🔋 USB Charging Port",
      "💼 Stylish & Durable Design",
      "🎒 Smart Interior Organization",
    ],
    ar: [
      "📍 تتبع GPS",
      "🔒 قفل بالبصمة آمن",
      "⚖️ ميزان مدمج للوزن",
      "🔋 منفذ شحن USB",
      "💼 تصميم أنيق ومتين",
      "🎒 تنظيم داخلي ذكي",
    ],
  };

  return (
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

      <motion.img
        src="./suitcase1.png"
        alt="Flying Plane"
        className="absolute w-[120px] md:w-[150px] lg:w-[550px]"
        initial={{ x: "-40vw", y: "80vh", scale: 0.5, rotate: -30, opacity: 1  }}
        animate={{ x: "-36vw", y: "20vh", scale: 1.5, rotate: -10, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

<motion.img
        src="./suitcase5.png"
        alt="Flying Plane"
        className="absolute w-[120px] md:w-[150px] lg:w-[500px]"
        initial={{ x: "60vw", y: "80vh", scale: 0.5, rotate: 90, opacity: 1 }}
        animate={{ x: "30vw", y: "25vh", scale: 1.5, rotate: 30, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

<motion.img
        src="./suitcase4.png"
        alt="Flying Plane"
        className="absolute w-[120px] md:w-[150px] lg:w-[400px]"
        initial={{ x: "-60vw", y: "80vh", scale: 0.5, rotate: -30, opacity: 1 }}
        animate={{ x: "-40vw", y: "-10vh", scale: 1.5, rotate: -10, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />
<motion.img
        src="./suitcase3.png"
        alt="Flying Plane"
        className="absolute w-[120px] md:w-[150px] lg:w-[400px]"
        initial={{ x: "40vw", y: "80vh", scale: 0.5, rotate: -20, opacity: 1 }}
        animate={{ x: "35vw", y: "-15vh", scale: 1.5, rotate: -20, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
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
  );
}
