"use client"; // Required for client-side interactivity
import { useLanguage } from "./language";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  // Function to scroll to section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex px-8 py justify-between text-xl sm:text-1xl md:text-2xl lg:text-1xl">
      <div className="font-bold flex justify-center items-center">
        Terhal Logo
      </div>
      <div className="flex px-2 space-x-4 gap-3 text-black">
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
    </div>
  );
};

export default Header;
