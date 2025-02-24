"use client";

import Script from "next/script";
import Header from "./header";
import AboutUs from "./aboutus";
import TerhalApp from "./TerhalApp";
import TerhalSuitcase from "./terhalsuitcase";
import { useState, useEffect } from "react";
import { useLanguage } from "./language";
import { Analytics } from "@vercel/analytics/react";
import Subscribe from "./Subscribe";
import SocialLinks from "./SocialLinks";  


const sections = [
  { id: "about-us", title: { en: "About Us", ar: "من نحن" } },
  { id: "terhal-suitcase", title: { en: "Terhal Suitcase", ar: "حقيبة ترحال" } },
  { id: "terhal-app", title: { en: "Terhal App", ar: "تطبيق ترحال" } },
  { id: "terhal-video", title: { en: "Terhal Video", ar: "فيديو ترحال" } },
  { id: "Subscribe", title: { en: "Subscribe", ar: "اشترك معنا" } },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-us");
  const { language }: { language: "en" | "ar" } = useLanguage();
  const [backgroundImage, setBackgroundImage] = useState("./blob-scene.svg");

  useEffect(() => {
    // Function to update background based on screen size
    const updateBackground = () => {
      setBackgroundImage(window.innerWidth <= 768 ? "./phone.png" : "./blob-scene.svg");
    };

    // Function to track active section while scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    // Set initial values
    updateBackground();
    window.addEventListener("resize", updateBackground);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBackground);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`relative ${language === "ar" ? "rtl text-right" : "ltr text-left"}`}>
      {/* Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-4CT32D4D6Q`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());
            gtag('event', 'session_start', { session_id: Date.now() });
            gtag('config', 'G-4CT32D4D6Q', { page_path: window.location.pathname });
          `,
        }}
      />

<Script
        strategy="lazyOnload"
        data-domain="terhal-suitcase.vercel.app"
        src="https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
      />
      <Script
        id="plausible-events"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible = window.plausible || function() { 
              (window.plausible.q = window.plausible.q || []).push(arguments);
            };
          `,
        }}
      />
      <Header />

      {/* Background Image (Changes Based on Device) */}
      <img
        src={backgroundImage}
        alt="Background"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-3]"
      />

      <Analytics />

      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <section id="about-us" className="min-h-screen">
          <AboutUs />
        </section>

        <section id="terhal-suitcase" className="min-h-screen flex items-center justify-center">
          <TerhalSuitcase />
        </section>

        <section id="terhal-app" className="min-h-screen flex items-center justify-center text-black">
          <TerhalApp />
        </section>

        <section id="terhal-video" className="min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">
            {language === "ar" ? "ألقِ نظرة على ترحال" : "Take a look at Terhal"}
          </h2>
          <div className="w-full max-w-3xl">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/5gFS0omyeZo"
              title={language === "ar" ? "فيديو ترحال" : "Terhal Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section id="Subscribe" className="min-h-screen flex items-center justify-center text-black">
          <Subscribe />
        </section>

        <SocialLinks />

      </main>

      <footer className="w-full text-center py-4 mt-10 text-sm text-gray-500">
        {language === "ar" ? "© 2025 جميع الحقوق محفوظة لترحال" : "© 2025 All rights reserved to Terhal"}
      </footer>

      {/* Scroll Navigation Dots (Active Section) */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              activeSection === section.id ? "bg-black scale-125" : "bg-gray-400"
            }`}
            onClick={() => scrollToSection(section.id)}
          ></button>
        ))}
      </div>
    </div>
  );
}
