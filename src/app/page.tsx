"use client";

import Header from './header';
import AboutUs from './aboutus';  // We're using this now
import TerhalApp from './TerhalApp';
import ContactUs from './ContactUs';
import TerhalSuitcase from './terhalsuitcase'
import { useState, useEffect } from "react";

const sections = [
  { id: "about-us", title: "About Us" },
  { id: "terhal-suitcase", title: "Terhal Suitcase" },
  { id: "terhal-app", title: "Terhal App" },
  { id: "contact-us", title: "Contact Us" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about-us");

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
    <div className="relative">\
      <Header />     
      

            {/* Background SVG */}
            <img
        src="./blob-scene.svg"
        alt="Background"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
      />

      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        {/* Use AboutUs component here */}
        <section id="about-us" className="min-h-screen">
          <AboutUs />
        </section>

        <section id="terhal-suitcase" className="min-h-screen flex items-center justify-center ">
          <div>
            <TerhalSuitcase/>
            {/* <h1 className="text-4xl font-bold">Terhal Suitcase</h1>
            <p className="mt-4 text-lg">Content for Terhal Suitcase section.</p> */}
          </div>
        </section>

        <section id="terhal-app" className="min-h-screen flex items-center justify-center text-black">
          <TerhalApp />
        </section>

        <section id="contact-us" className="min-h-screen flex items-center justify-center text-black">
          <ContactUs />
        </section>
      </main>

      {/* Dots Navigation */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`w-4 h-4 rounded-full ${
              activeSection === section.id ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => scrollToSection(section.id)}
          ></button>
        ))}
      </div>
    </div>
  );
}
