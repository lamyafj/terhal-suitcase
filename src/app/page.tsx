import Script from "next/script";
import Header from "./header";
import AboutUs from "./aboutus";
import TerhalApp from "./TerhalApp";
import ContactUs from "./ContactUs";
import TerhalSuitcase from "./terhalsuitcase";
import { useState, useEffect } from "react";
import { useLanguage } from "./language";
import { Analytics } from "@vercel/analytics/react";

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
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-4CT32D4D6Q`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('event', 'session_start', {
              session_id: Date.now(),
            });

            gtag('config', 'G-4CT32D4D6Q', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* ✅ Plausible Analytics with Extended Features */}
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

      {/* Background SVG */}
      <img
        src="./blob-scene.svg"
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

        <section id="contact-us" className="min-h-screen flex items-center justify-center text-black">
          <ContactUs />
        </section>
      </main>

      <footer className="w-full text-center py-4 mt-10 text-sm text-gray-500">
        {language === "ar" ? "© 2025 جميع الحقوق محفوظة لترحال" : "© 2025 All rights reserved to Terhal"}
      </footer>

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
