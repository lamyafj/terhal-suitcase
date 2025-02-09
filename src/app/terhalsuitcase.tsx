"use client";
import "@google/model-viewer";
import { useLanguage } from "./language";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function TerhalSuitcase() {
  // Ensure `language` is properly typed
  const { language }: { language: "en" | "ar" } = useLanguage();

  // Intersection Observer for animation triggers
  const [leftRef, leftInView] = useInView({ threshold: 0.3 });
  const [rightRef, rightInView] = useInView({ threshold: 0.3 });

  // Define suitcase features in both languages
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
      "🔒 قفل بيومتري آمن",
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
        style={{ textAlign: language === "ar" ? "right" : "left", fontSize: "18px", fontWeight: "bold" }}
      >
        {features[language].slice(0, 3).map((feature, index) => (
          <div key={index} style={{ margin: "10px 0" }}>{feature}</div>
        ))}
      </motion.div>

      {/* 3D Suitcase Model in the Center */}
      <model-viewer
        src="/suitcase2.glb"
        alt={language === "ar" ? "حقيبة ثلاثية الأبعاد" : "3D Suitcase"}
        auto-rotate
        camera-controls
        style={{ width: "400px", height: "500px" }}
      ></model-viewer>

      {/* Right-Side Features (Left for Arabic) */}
      <motion.div
        ref={rightRef}
        initial={{ x: language === "ar" ? 100 : -100, opacity: 0 }}
        animate={rightInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{ textAlign: language === "ar" ? "left" : "right", fontSize: "18px", fontWeight: "bold" }}
      >
        {features[language].slice(3, 6).map((feature, index) => (
          <div key={index} style={{ margin: "10px 0" }}>{feature}</div>
        ))}
      </motion.div>

    </div>
  );
}
