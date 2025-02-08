"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const LanguageContext = createContext();

// Provider Component
export const LanguageProvider = ({ children }) => {
  // Initialize State (Default English LTR)
  const [language, setLanguage] = useState("ar");
  const [direction, setDirection] = useState("ltr");

  // Load Cached Language on Page Load
  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
    setDirection(storedLang === "ar" ? "rtl" : "ltr");

    // Update <html> direction
    document.documentElement.setAttribute("dir", storedLang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", storedLang);
  }, []);

  // Toggle Language and Direction
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    const newDir = newLang === "ar" ? "rtl" : "ltr";

    setLanguage(newLang);
    setDirection(newDir);
    localStorage.setItem("language", newLang);

    // Update <html> direction dynamically
    document.documentElement.setAttribute("dir", newDir);
    document.documentElement.setAttribute("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook
export const useLanguage = () => useContext(LanguageContext);
