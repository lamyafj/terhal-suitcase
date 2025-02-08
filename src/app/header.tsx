"use client"; // Required for client-side interactivity
import { useLanguage } from "./language";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex px-0 py justify-between text-xl sm:text-1xl md:text-2xl lg:text-1xl ">
      <div className="font-bold flex justify-center items-center">
      <img 
  src="./logo.png" 
  alt="logo" 
  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
/>

      </div>
      <div className="flex px-4 p-8 space-x-4 gap-3 text-black">
        <a href="#about-us" className="cursor-pointer hover:underline ">
          {language === "en" ? "About Us" : "معلومات عنا"}
        </a>
        <a href="#terhal-suitcase" className="cursor-pointer hover:underline">
          {language === "en" ? "Terhal Suitcase" : "حقيبة ترحال"}
        </a>
        <a href="#terhal-application" className="cursor-pointer hover:underline">
          {language === "en" ? "Terhal Application" : "تطبيق ترحال"}
        </a>
        <a href="#contact-us" className="cursor-pointer hover:underline">
          {language === "en" ? "Contact Us" : "تواصل معنا"}
        </a>
        <button
          onClick={toggleLanguage}
          className="rounded text-black"
        >
          {language === "en" ? "Arabic" : "English"}
        </button>
      </div>
    </div>
  );
};

export default Header;
