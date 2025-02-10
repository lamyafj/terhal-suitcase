"use client";

import Header from "./header";
import AboutUs from "./aboutus";
import TerhalApp from "./TerhalApp";
import ContactUs from "./ContactUs";
import TerhalSuitcase from "./terhalsuitcase";
import { useState, useEffect } from "react";
import { useLanguage } from "./language"; // Import useLanguage hook

const sections = [
  { id: "about-us", title: { en: "About Us", ar: "من نحن" } },
  { id: "terhal-suitcase", title: { en: "Terhal Suitcase", ar: "حقيبة ترحال" } },
  { id: "terhal-app", title: { en: "Terhal App", ar: "تطبيق ترحال" } },
  { id: "terhal-video", title: { en: "Terhal Video", ar: "فيديو ترحال" } },
  { id: "contact-us", title: { en: "Contact Us", ar: "اتصل بنا" } },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-us");
  const { language }: { language: "en" | "ar" } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`relative ${language === "ar" ? "rtl text-right" : "ltr text-left"}`}>
      <Header />

      {/* Background SVG */}
      <img
        src="./blob-scene.svg"
        alt="Background"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
      />

      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* About Us Section */}
        <section id="about-us" className="min-h-screen">
          <AboutUs />
        </section>

        {/* Terhal Suitcase Section */}
        <section id="terhal-suitcase" className="min-h-screen flex items-center justify-center">
          <div>
            <TerhalSuitcase />
          </div>
        </section>

        {/* Terhal App Section */}
        <section id="terhal-app" className="min-h-screen flex items-center justify-center text-black">
          <TerhalApp />
        </section>

        {/* Terhal Video Section */}
        <section id="terhal-video" className="min-h-screen flex flex-col items-center justify-center text-black">
          <h2 className="text-4xl font-bold mb-4">
            {language === "ar" ? "فيديو ترحال" : "Terhal Video"}
          </h2>
{/* /مقطع/ */}
          {/* <div className="w-full max-w-3xl">
            <iframe
              width="100%"
              height="400"
              src={language === "ar" ? "https://www.youtube.com/embed/PeiVyMMPNy4" : "https://www.youtube.com/embed/PeiVyMMPNy4"}
              title={language === "ar" ? "فيديو ترحال" : "Terhal Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}


        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="min-h-screen flex items-center justify-center text-black">
          <ContactUs />
        </section>
      </main>

      {/* Dots Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-4 h-4 rounded-full ${activeSection === section.id ? "bg-black" : "bg-gray-400"}`}
            onClick={() => scrollToSection(section.id)}
          ></button>
        ))}
      </div>
    </div>
  );
}
