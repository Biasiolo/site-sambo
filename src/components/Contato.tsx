import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import papelContato from "@/assets/papel-contato.png";
import seloPreto from "@/assets/selo-preto.png";
import seloAmarelo from "@/assets/selo-amarelo.png";

export function Contato() {
  return (
    <section
      id="contato"
      className="px-6 pb-54 pt-0"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="relative flex justify-center">

          {/* selo esquerdo */}
          <img
            src={seloPreto}
            alt=""
            className="
              absolute
              left-[1%]
              bottom-[-27%]
              hidden
              w-[420px]
              -translate-y-1/2
              z-99

              lg:block
            "
          />

          {/* papel azul */}
          <div className="relative w-full max-w-[720px]">

            <img
              src={papelContato}
              alt=""
              className="w-full"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-[10%]">

              <h2
                className="font-display mb-8 text-center text-stone-950"
                style={{
                  fontSize: "clamp(2rem,4vw,5rem)",
                }}
              >
                CONTATOS
              </h2>

              <div className="flex flex-col gap-8">

                <div className="flex items-center gap-5">
                  <FaWhatsapp
                    size={42}
                    className="text-stone-900"
                  />

                  <span className="text-[clamp(1rem,2vw,2rem)] font-bold text-stone-900">
                    (11) 94306-7725 (Geisa)
                  </span>
                </div>

                <div className="flex items-center gap-5">
                  <FaEnvelope
                    size={38}
                    className="text-stone-900"
                  />

                  <span className="text-[clamp(1rem,2vw,2rem)] font-bold text-stone-900">
                    sambo@sambo.com.br
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* selo amarelo */}
          <img
            src={seloAmarelo}
            alt=""
            className="
              absolute
              right-[12%]
              top-[20%]
              hidden
              w-[280px]
              rotate-[-10deg]
              lg:block
            "
          />

        </div>
      </div>
    </section>
  );
}