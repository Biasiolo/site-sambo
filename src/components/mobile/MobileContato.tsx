import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

import papelContato from "@/assets/convert/papel-contato.webp";

type MobileContatoProps = {
  onBack: () => void;
};

export function MobileContato({ onBack }: MobileContatoProps) {
  return (
    // Container principal ocupa a altura inteira da tela
    <div className="flex min-h-screen flex-col px-4">
      {/* Botão Voltar - mantido no topo */}
      

      {/* Área flexível que empurra o conteúdo para o centro */}
      <div className="flex-1 flex items-center justify-center">
        {/* Card de papel - centralizado horizontalmente */}
        <div className="relative mx-auto w-full max-w-[380px]">
          <img src={papelContato} alt="" className="w-full" />

          {/* Conteúdo centralizado dentro do papel */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-[10%]">
            <h2 className="font-display mb-6 text-center text-3xl text-stone-950">
              CONTATOS
            </h2>

            <div className="flex flex-col text-center gap-6">
              <a
                href="https://wa.me/5511943067725?text=Olá%20Geisa!%20Vim%20pelo%20site%20do%20Sambô%20e%20gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-all"
              >
                <FaWhatsapp size={28} className="text-stone-900" />
                <span className="text-2xl font-bold text-center text-stone-900">
                  (11) 94306-7725
                </span>
              </a>

              <a
                href="mailto:sambo@sambo.com.br"
                className="flex items-center gap-3 transition-all"
              >
                <FaEnvelope size={25} className="text-stone-900" />
                <span className="text-lg font-bold text-stone-900">
                  sambo@sambo.com.br
                </span>
              </a>
            </div>
          </div>
        </div>
        
      </div>

      {/* Espaçamento opcional para evitar que o conteúdo encoste na borda inferior */}
      {/* Voltar - bottom */}
      <div className="mb-8 flex justify-center">
        <button
          onClick={onBack}
          className="text-xl font-display font-semibold text-stone-900"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
}