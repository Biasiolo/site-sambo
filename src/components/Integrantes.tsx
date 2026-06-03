import papel from "@/assets/integrantes/papel.png";
import faixaTitulo from "@/assets/integrantes/faixa-titulo.png";
import smile from "@/assets/integrantes/smile.png";

import Janaina from "@/assets/integrantes/1.webp";
import Digao from "@/assets/integrantes/2.webp";
import Fejuca from "@/assets/integrantes/3.webp";
import Gama from "@/assets/integrantes/4.webp";
import Jackes from "@/assets/integrantes/5.webp";
import Ze from "@/assets/integrantes/6.webp";

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
];

export function Integrantes() {
    return (
        <section
            id="integrantes"
            className="px-8 py-12"
        >
            <div className="mx-auto max-w-350">

                {/* Título */}
                <div className="relative mb-[-2%] flex justify-center">

                    <img
                        src={smile}
                        alt=""
                        className="absolute left-[-2.5%] top-[-10%] z-20 w-45 md:w-lg"
                    />

                    <div className="relative">

                        <img
                            src={faixaTitulo}
                            alt=""
                            className="w-125 md:w-187.5"
                        />

                        <h2
                            className="font-display absolute inset-0 flex items-center justify-center text-black"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 5rem)",
                            }}
                        >
                            INTEGRANTES
                        </h2>

                    </div>
                </div>

                {/* Texto */}
                <div className="mb-2 flex justify-center">

                    <div className="relative w-full max-w-300">

                        <img
                            src={papel}
                            alt=""
                            className="w-full"
                        />

                        <div className="absolute inset-0 flex items-center justify-center px-[6%] py-[8%]">

                            <div
                                className="max-w-[82%] text-left font-extrabold text-stone-900"
                                style={{
                                    fontSize: "clamp(1.1rem, 1vw, 1.25rem)",
                                    lineHeight: "1.35",
                                }}
                            >
                                <p className="mb-[1.6em]">
                                    A vontade era se divertir, sem rótulos e com muita música. Assim nasceu o
                                    Sambô em 2003. Com uma roda de samba contagiante, repertório variado,
                                    batucada presente e energia única, a banda logo conquistou o público e se
                                    espalhou pelas cidades da região e pela internet.
                                </p>

                                <p className="mb-[1.6em]">
                                    Dez anos depois, em 2013, o Sambô já tocava por todo o Brasil, nos maiores
                                    festivais, programas de TV e canais da mídia. Vieram milhares de CDs e DVDs
                                    vendidos, milhões de acessos na internet e uma multidão curtindo os shows
                                    ao vivo.
                                    <br />
                                    Mais do que uma banda, o Sambô virou estilo e conceito. Hoje, é comum ouvir
                                    que determinado artista toca “estilo Sambô”, motivo de grande orgulho.
                                </p>

                                <p className="mb-[1.6em]">
                                    A vontade de se divertir continua a mesma, os rótulos seguem não existindo
                                    e a união entre os integrantes, dentro e fora dos palcos, está ainda maior.
                                    <br />
                                    A direção musical e artística permanece com Ricardo Gama, ex-integrante e
                                    idealizador da banda, em parceria com Júlio Fejuca, produtores experientes
                                    e com muitos trabalhos de sucesso.
                                </p>

                                <p>Esse é o Sambô!</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Integrantes */}
                <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2">

                    {integrantes.map((integrante) => (
                        <a
                            key={integrante.nome}
                            href={integrante.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block"
                        >
                            <div className="relative h-220 w-full">
                                <img
                                    src={integrante.foto}
                                    alt={integrante.nome}
                                    className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Nome sobre a foto */}
                            <div
                                className="
          absolute
          bottom-[13%]
          left-1/2
          z-20
          w-[70%]
          -translate-x-1/2
          text-center
        "
                            >

                            </div>

                        </a>
                    ))}

                </div>

            </div>
        </section>
    );
}