import { FaWhatsapp } from "react-icons/fa";

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/5511943067725?text=Olá%20Geisa!%20Vim%20pelo%20site%20do%20Sambô%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-999
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-2xl
        opacity-85
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}