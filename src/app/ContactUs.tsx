"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useLanguage } from "./language";
import { db, collection, addDoc } from "./firbase";

const ContactUs = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 🛠 Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔥 Handle form submission (send data to Firestore)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(language === "en" ? "Sending..." : "جار الإرسال...");

    try {
      await addDoc(collection(db, "contact_messages"), {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(), // Add timestamp for tracking
      });

      setStatus(language === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!");
      setFormData({ fullName: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Firestore Error:", error);
      setStatus(language === "en" ? "Failed to send message." : "فشل في إرسال الرسالة.");
    }
  };

  return (
    <section id="contact-us" className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {language === "en" ? "Stay up-to-date on all our latest news" : "لا تفوت أي جديد"}
      </h2>
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        {language === "en" ? "Contact Us" : "تواصل معنا"}
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder={language === "en" ? "Full Name" : "الاسم الكامل"}
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={language === "en" ? "Email Address" : "البريد الإلكتروني"}
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={language === "en" ? "Your Message" : "رسالتك"}
          className="w-full p-3 border border-gray-300 rounded"
          value={formData.message}
          onChange={handleChange}
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
      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </section>
  );
};

export default ContactUs;
