"use client";
import { motion } from "framer-motion";
import { useLanguage } from "./language";

const AboutUs = () => {
  const { language } = useLanguage();

  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/blob-scene.svg"
        alt="Background"
        className="w-full h-full absolute top-0 left-0 z-[-100] object-cover"
      />

      {/* Flying Plane Animation */}
      <motion.img
        src="./plane.png"
        alt="Flying Plane"
        className="absolute w-[120px] md:w-[150px] lg:w-[400px]"
        initial={{ x: "-40vw", y: "80vh", scale: 0.5, rotate: -30, opacity: 1 }}
        animate={{ x: "-30vw", y: "30vh", scale: 1.5, rotate: -10, opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeOut",
        }}
      />

      {/* About Us Text Content (Fades In) */}
      <motion.div
        className="relative z-2 max-w-3xl px-6 text-center text-xl sm:text-2xl md:text-2xl "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {language === "en" ? (
         <>
         At{" "}
         <span className="text-primary text-4xl sm:text-5xl font-bold">
           Terhal
         </span>
         , we are dedicated to transforming the travel experience by introducing smart luggage that blends innovation, security, and convenience. Our mission is to eliminate common travel concerns such as lost luggage, security risks, and unexpected baggage fees by integrating advanced technologies into a stylish and functional design.
       </>
     ) : (
       <>
         في{" "}
         <span className="text-primary text-4xl sm:text-5xl font-bold">
           ترحال
         </span>
         ، نسعى إلى إعادة تعريف تجربة السفر من خلال تقديم حقائب ذكية تجمع بين الابتكار، الأمان، والراحة. مهمتنا هي القضاء على مشاكل السفر الشائعة مثل فقدان الأمتعة، المخاطر الأمنية، والرسوم الزائدة على الوزن، وذلك عبر دمج أحدث التقنيات في تصميم أنيق وعملي.
       </>
        )}
      </motion.div>

    </div>
  );
};

export default AboutUs;
