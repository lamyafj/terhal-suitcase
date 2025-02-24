import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6"; 

const SocialLinks = () => {
  return (
    <div className="w-full flex justify-center gap-6 my-10">
      {/* X (Twitter) */}
      <a 
        href="https://x.com/terhalsaudi?s=21&t=fYOEg6LPzCuPX5ooT7nR-g"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full transition-all hover:bg-gray-200 hover:scale-110 shadow-md"
      >
        <FaXTwitter className="text-black text-2xl" />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/terhalsaudi?igsh=ZjJsNmdvcHY0Nzhn&utmsource=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full transition-all hover:bg-gray-200 hover:scale-110 shadow-md"
      >
        <FaInstagram className="text-pink-500 text-2xl" />
      </a>

      {/* WhatsApp */}
      <a 
        href="https://whatsapp.com/channel/0029Vb7Iuzr2P59jByjSkK2S"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-100 rounded-full transition-all hover:bg-gray-200 hover:scale-110 shadow-md"
      >
        <FaWhatsapp className="text-green-500 text-2xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
