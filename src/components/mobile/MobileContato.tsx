import {
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

type MobileContatoProps = {
  onBack: () => void;
}
export function MobileContato({
  onBack,
}: MobileContatoProps) {
  return (
    <div className="p-6">

      <h2 className="mb-8 text-center text-3xl font-bold">
        Contato
      </h2>

      <div className="flex flex-col gap-4">

        <a
          href="https://wa.me/5511943067725?text=Olá%20Geisa!%20Vim%20pelo%20site%20do%20Sambô."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl bg-stone-200 p-5"
        >
          <FaWhatsapp size={24} />
          (11) 94306-7725
        </a>

        <a
          href="mailto:sambo@sambo.com.br"
          className="flex items-center gap-4 rounded-2xl bg-stone-200 p-5"
        >
          <FaEnvelope size={22} />
          sambo@sambo.com.br
        </a>

      </div>
      <button
        onClick={onBack}
      >
        ← Voltar
      </button>
    </div>
  );
}