"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "./language";

type LanguageKey = "en" | "ar";

interface ImageData {
  src: string;
  description: Record<LanguageKey, string>;
}

const images: ImageData[] = [
  { src: "./images/terhal1.png", description: { en: "Login", ar: "تسجيل الدخول" } },
  { src: "./images/terhal2.png", description: { en: "Event Scheduling", ar: "جدولة الفعاليات" } },
  { src: "./images/terhal3.png", description: { en: "Add Event", ar: "إضافة حدث" } },
  { src: "./images/terhal4.png", description: { en: "Today's Schedule", ar: "مراجعة جدول اليوم" } },
  { src: "./images/terhal5.png", description: { en: "Track Luggage Location", ar: "تحديد موقع الأمتعة" } },
];

const TerhalApp = () => {
  const { language } = useLanguage() as { language: LanguageKey };

  // Animation and InView Hook
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

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
        - flex-col on mobile will stack items vertically
        - md:flex-row on larger screens will switch them to horizontal if you like
        - gap-8 adds some space between items
        - items-center ensures everything is centered along cross-axis
        - Remove overflow-x-auto unless you specifically want horizontal scrolling on larger screens
      */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
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
            {/* 
              - w-full makes the image take full width of its container
              - max-w-[300px] restricts it to 300px wide maximum
              - h-auto keeps the aspect ratio correct
            */}
            <img
              src={image.src}
              alt={image.description[language]}
              className="w-full max-w-[300px] h-auto"
            />
            <p className="text-lg text-gray-600 mt-4">{image.description[language]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TerhalApp;
