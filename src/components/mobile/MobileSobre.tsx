import papel from "@/assets/integrantes/papel.png";
import faixaTitulo from "@/assets/integrantes/faixa-titulo.png";
import smile from "@/assets/integrantes/smile.png";

import Janaina from "@/assets/integrantes/1.png";
import Digao from "@/assets/integrantes/2.png";
import Fejuca from "@/assets/integrantes/3.png";
import Gama from "@/assets/integrantes/4.png";
import Jackes from "@/assets/integrantes/5.png";
import Ze from "@/assets/integrantes/6.png";

const integrantes = [
  {
    nome: "JANAINA ANDRADE",
    instagram: "@cantorajanaina",
    url: "https://instagram.com/cantorajanaina",
    foto: Janaina,
  },
  {
    nome: "DIGÃO DI SOUZA",
    instagram: "@digaodisouza",
    url: "https://instagram.com/digaodisouza",
    foto: Digao,
  },
  
  {
    nome: "JACQUES MONASTIER",
    instagram: "@jacquesbatera",
    url: "https://instagram.com/jacquesbatera",
    foto: Jackes,
  },
  {
    nome: "ZÉ DA PAZ",
    instagram: "@zedapaz",
    url: "https://instagram.com/zedapaz",
    foto: Ze,
  },
  {
    nome: "FEJUCA",
    instagram: "@fejuca",
    url: "https://instagram.com/fejuca",
    foto: Fejuca,
  },
  {
    nome: "RICARDO GAMA",
    instagram: "@gamaprodutor",
    url: "https://instagram.com/gamaprodutor",
    foto: Gama,
  },
];

type MobileSobreProps = {
  onBack: () => void;
};

export function MobileSobre({ onBack }: MobileSobreProps) {
  return (
    <div className="px-4 py-6">
      {/* Voltar - topo */}
      <button
        onClick={onBack}
        className="mb-6 text-xl font-display font-semibold text-stone-900"
      >
        ← Voltar
      </button>

      {/* Título */}
      <div className="relative mb-4 flex justify-center">
        <img
          src={smile}
          alt=""
          className="absolute left-0 -top-2.5 z-20 w-24"
        />

        <div className="relative mb-0 w-full max-w-85">
          <img src={faixaTitulo} alt="" className="w-full" />
          <h2 className="absolute inset-0 flex items-center justify-center font-display text-xl text-black">
            INTEGRANTES
          </h2>
        </div>
      </div>

      {/* Texto com fundo de papel - imagem de fundo que se adapta ao texto */}
      <div
        className="relative w-full bg-fill bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${papel})` }}
      >
        {/* Conteúdo do texto - determina a altura do container */}
        <div className="px-[8%] py-[9%] text-center">
          <div className="space-y-2 text-xs font-extrabold leading-relaxed text-stone-800">
            <p>
              A vontade era se divertir, sem rótulos e com muita música. Assim
              nasceu o Sambô em 2003. Com uma roda de samba contagiante,
              repertório variado, batucada presente e energia única, a banda
              logo conquistou o público e se espalhou pelas cidades da região e
              pela internet.
            </p>

            <p>
              Dez anos depois, em 2013, o Sambô já tocava por todo o Brasil, nos
              maiores festivais, programas de TV e canais da mídia. Vieram
              milhares de CDs e DVDs vendidos, milhões de acessos na internet e
              uma multidão curtindo os shows ao vivo.
            </p>

            <p>
              Mais do que uma banda, o Sambô virou estilo e conceito. Hoje, é
              comum ouvir que determinado artista toca “estilo Sambô”, motivo de
              grande orgulho.
            </p>

            <p>
              A vontade de se divertir continua a mesma, os rótulos seguem não
              existindo e a união entre os integrantes, dentro e fora dos
              palcos, está ainda maior.
            </p>

            <p>
              A direção musical e artística permanece com Ricardo Gama,
              ex-integrante e idealizador da banda, em parceria com Júlio
              Fejuca, produtores experientes e com muitos trabalhos de sucesso.
            </p>

            <p>Esse é o Sambô!</p>
          </div>
        </div>
      </div>

      {/* Integrantes */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {integrantes.map((integrante) => (
          <a
            key={integrante.nome}
            href={integrante.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={integrante.foto}
              alt={integrante.nome}
              className="w-full object-contain"
            />
          </a>
        ))}
      </div>

      {/* Voltar - bottom */}
      <div className="mt-8 flex justify-center">
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