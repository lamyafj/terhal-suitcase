"use client";
import { useLanguage } from "./language";

const ContactUs = () => {
  const { language } = useLanguage();

  return (
    <section id="contact-us" className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {language === "en" ? "Contact Us" : "تواصل معنا"}
      </h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder={language === "en" ? "Full Name" : "الاسم الكامل"}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder={language === "en" ? "Email Address" : "البريد الإلكتروني"}
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder={language === "en" ? "Your Message" : "رسالتك"}
          className="w-full p-3 border border-gray-300 rounded"
          required
        ></textarea>
         <button
          type="submit"
          className="px-6 py-2 text-white rounded"
          style={{
            backgroundColor: "#112838",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#112838")}
        >
          {language === "en" ? "Send" : "إرسال"}
        </button>
      </form>

    </section>
    
  );
};

export default ContactUs;
