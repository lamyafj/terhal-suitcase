"use client";

import Header from './header';
import AboutUs from './aboutus';
import TerhalApp from './TerhalApp';
import ContactUs from './ContactUs';
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
    <div className="relative">
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <section
  id="about-us"
  className="min-h-screen flex items-center justify-center bg-fixed bg-cover text-black"
  style={{ backgroundImage: "url('/path-to-background.jpg')" }}
>
  <div>
    <h1 className="text-4xl font-bold">About Us</h1>
    <p className="mt-4 text-lg">This is the About Us section content.</p>
  </div>
</section>

<section
  id="terhal-suitcase"
  className="min-h-screen flex items-center justify-center text-black"
>
  <div>
    <h1 className="text-4xl font-bold">Terhal Suitcase</h1>
    <p className="mt-4 text-lg">Content for Terhal Suitcase section.</p>
  </div>
</section>
<section
  id="terhal-app"
  className="min-h-screen flex items-center justify-center text-black"
>
  <TerhalApp />

</section>

<section
  id="contact-us"
  className="min-h-screen flex items-center justify-center text-black"
>
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
