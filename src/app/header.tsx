"use client";
import { useState } from "react";
import { useLanguage } from "./language";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to scroll to section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="flex items-center justify-between px-8 py-4 text-xl bg-white bg-opacity-0 h-20">
      {/* Logo */}
      <img 
        src="./logo.png" 
        alt="logo" 
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-20 " 
      />

      {/* Hamburger Menu for Mobile */}
      <button
        className="sm:hidden p-2 text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-3 text-black">
        <button onClick={() => scrollToSection("about-us")}>
          {language === "en" ? "About Us" : " معلومات عنا"}
        </button>
        <button onClick={() => scrollToSection("terhal-suitcase")}>
          {language === "en" ? "Terhal Suitcase" : "حقيبة ترحال"}
        </button>
        <button onClick={() => scrollToSection("terhal-app")}>
          {language === "en" ? "Terhal Application" : "تطبيق ترحال"}
        </button>
        <button onClick={() => scrollToSection("contact-us")}>
          {language === "en" ? "Contact Us" : "تواصل معنا"}
        </button>
        <button onClick={toggleLanguage} className="rounded text-black">
          {language === "en" ? "Arabic" : "English"}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
       <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden flex flex-col items-center space-y-4 py-4 opacity-100 z-10">
          <button onClick={() => scrollToSection("about-us")}>
            {language === "en" ? "About Us" : "معلومات عنا"}
          </button>
          <button onClick={() => scrollToSection("terhal-suitcase")}>
            {language === "en" ? "Terhal Suitcase" : "حقيبة ترحال"}
          </button>
          <button onClick={() => scrollToSection("terhal-app")}>
            {language === "en" ? "Terhal Application" : "تطبيق ترحال"}
          </button>
          <button onClick={() => scrollToSection("contact-us")}>
            {language === "en" ? "Contact Us" : "تواصل معنا"}
          </button>
          <button onClick={toggleLanguage} className="rounded text-black">
            {language === "en" ? "Arabic" : "English"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
