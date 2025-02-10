"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./language";

type LanguageKey = "en" | "ar";

interface ImageData {
  src: string;
  description: Record<LanguageKey, string>;
}

const images: ImageData[] = [
  {
    src: "./images/terhal1.png",
    description: { en: "Login", ar: "تسجيل الدخول" },
  },
  {
    src: "./images/terhal2.png",
    description: { en: "Event Scheduling", ar: "جدولة الفعاليات" },
  },
  {
    src: "./images/terhal3.png",
    description: { en: "Add Event", ar: "إضافة حدث" },
  },
  {
    src: "./images/terhal4.png",
    description: { en: "Today's Schedule", ar: "مراجعة جدول اليوم" },
  },
  {
    src: "./images/terhal5.png",
    description: { en: "Track Luggage Location", ar: "تحديد موقع الأمتعة" },
  },
];

const TerhalApp = () => {
  const { language } = useLanguage() as { language: LanguageKey };

  // Use state to store threshold, which depends on screen size (mobile vs. not).
  const [threshold, setThreshold] = useState(0.3);

  // Determine if we're on mobile; adjust threshold accordingly.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setThreshold(0.1); // Mobile threshold
      } else {
        setThreshold(0.3); // Larger screens threshold
      }
    };

    // Run once on mount and then on every resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Animation + InView
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section id="terhal-app" ref={ref} className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, y: -20 },
        }}
      >
        {language === "en" ? "Terhal Application" : "تطبيق ترحال"}
      </motion.h2>

      <motion.p
        className="text-lg text-gray-700 mb-8"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          hidden: { opacity: 0 },
        }}
      >
        {language === "en"
          ? "The Terhal app allows you to track your trips and luggage safely and easily."
          : "يتيح لك تطبيق ترحال متابعة رحلاتك وتتبع أمتعتك بسهولة وأمان."}
      </motion.p>

      {/* 
        flex-col = vertical (mobile default)
        md:flex-row = horizontal (from medium screens and up)
      */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 overflow-hidden">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.2 + 0.4, duration: 0.5 },
              },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <img
              src={image.src}
              alt={image.description[language]}
              className="w-[300px] h-auto"
            />
            <p className="text-lg text-gray-600 mt-4">
              {image.description[language]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TerhalApp;
