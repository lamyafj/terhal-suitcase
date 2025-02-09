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
    <div className="fixed top-0 left-0 right-0 bg-white z-50 flex px-8 py-4 justify-between text-xl sm:text-1xl md:text-2xl lg:text-1xl shadow">
      <div className="font-bold flex justify-center items-center">
      <img src="/logo.png" alt="Terhal Logo" className="h-12 w-auto object-contain" />
      </div>
      <div className="flex px-2 space-x-4 gap-3 text-black">
        <button onClick={() => scrollToSection("about-us")} className="hover:underline">
          {language === "en" ? "About Us" : "معلومات عنا"}
        </button>
        <button onClick={() => scrollToSection("terhal-suitcase")} className="hover:underline">
          {language === "en" ? "Terhal Suitcase" : "حقيبة ترحال"}
        </button>
        <button onClick={() => scrollToSection("terhal-app")} className="hover:underline">
  {language === "en" ? "Terhal Application" : "تطبيق ترحال"}
</button>
        <button onClick={() => scrollToSection("contact-us")} className="hover:underline">
          {language === "en" ? "Contact Us" : "تواصل معنا"}
        </button>
        <button onClick={toggleLanguage} className="rounded text-black hover:underline">
          {language === "en" ? "Arabic" : "English"}
        </button>
      </div>
    </div>
  );
};

export default Header;
