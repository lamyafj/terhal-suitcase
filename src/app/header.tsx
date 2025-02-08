"use client"; // Required for client-side interactivity
import { useLanguage } from "./language";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex px-8 py justify-between text-xl sm:text-1xl md:text-2xl lg:text-1xl">
      <div className="font-bold flex justify-center items-center">
        Terhal Logo
      </div>
      <div className="flex px-2 space-x-4 gap-3 text-black">
        <div>{language === "en" ? "About Us" : "معلومات عنا"}</div>
        <div>{language === "en" ? "Terhal Suitcase" : "حقيبة ترحال"}</div>
        <div>{language === "en" ? "Terhal Application" : "تطبيق ترحال"}</div>
        <div>{language === "en" ? "Contact Us" : "تواصل معنا"}</div>
        <button
          onClick={toggleLanguage}
          className=" rounded text-black"
        >
          {language === "en" ? "Arabic" : "English"}
        </button>
      </div>
    </div>
  );
};

export default Header;
