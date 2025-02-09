"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./language";

export default function TerhalSuitcase() {
  const { language }: { language: "en" | "ar" } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  // Ensure component is only rendered on client
  useEffect(() => {
    setIsClient(true);
    import("@google/model-viewer").catch(console.error);
  }, []);

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

      {/* 3D Suitcase Model (Only Rendered on Client) */}
      {isClient ? (
        <model-viewer
          src="/suitcase2.glb"
          alt={language === "ar" ? "حقيبة ثلاثية الأبعاد" : "3D Suitcase"}
          auto-rotate
          camera-controls
          style={{ width: "400px", height: "500px" }}
        ></model-viewer>
      ) : (
        <div style={{ width: "400px", height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p>Loading...</p> {/* Placeholder to prevent hydration mismatch */}
        </div>
      )}

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
