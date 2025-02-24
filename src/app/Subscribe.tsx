"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useLanguage } from "./language";
import { db, collection, addDoc } from "./firbase";

const Subscribe = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission (send data to Firestore)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(language === "en" ? "Subscribing..." : "جارِ الاشتراك...");

    try {
      await addDoc(collection(db, "newsletter_subscribers"), {
        email,
        timestamp: new Date(),
      });

      setStatus(language === "en" ? "Subscribed successfully!" : "تم الاشتراك بنجاح!");
      setEmail(""); // Reset input field
    } catch (error) {
      console.error("Firestore Error:", error);
      setStatus(language === "en" ? "Subscription failed." : "فشل في الاشتراك.");
    }
  };

  return (
    <section id="subscribe" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        {language === "en" ? "Stay Updated with Terhal News" : "ابقَ على اطلاع بآخر أخبار ترحال"}
      </h2>
      <p className="text-2xl mb-6 text-gray-600">
        {language === "en" ? "Subscribe to our newsletter now" : "اشترك في نشرتنا البريدية الآن"}
      </p>
      
      {/* FLEX container for email input & button, adjusted dynamically */}
      <form 
        onSubmit={handleSubmit} 
        className={`max-w-lg mx-auto flex gap-2 items-center ${language === "ar" ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* Email Input Field */}
        <input
          type="email"
          name="email"
          placeholder={language === "en" ? "Email Address" : "عنوان البريد الإلكتروني"}
          className="flex-grow p-3 border border-gray-400 text-lg rounded-lg"
          value={email}
          onChange={handleChange}
          required
        />

        {/* Subscribe Button - Position Adjusted */}
        <button
          type="submit"
          className={`px-5 py-3 text-white text-sm rounded-lg ${language === "ar" ? "order-last" : "order-first"}`}
          style={{
            backgroundColor: "#112838",
            transition: "background-color 0.3s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#112838")}
        >
          {language === "en" ? "Subscribe" : "اشترك"}
        </button>
      </form>
      
      {/* Status message */}
      {status && <p className="mt-6 text-xl text-gray-600">{status}</p>}
    </section>
  );
};

export default Subscribe;
