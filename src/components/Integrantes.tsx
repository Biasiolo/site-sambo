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
        instagram: "@janainaandrade",
        foto: Janaina,
    },
    {
        nome: "DIGÃO DI SOUZA",
        instagram: "@digaodisouza",
        foto: Digao,
    },
    {
        nome: "FEJUCA",
        instagram: "@fejuca",
        foto: Fejuca,
    },
    {
        nome: "RICARDO GAMA",
        instagram: "@ricardogama",
        foto: Gama,
    },
    {
        nome: "JACQUES MONASTIER",
        instagram: "@jacquesmonastier",
        foto: Jackes,
    },
    {
        nome: "ZÉ DA PAZ",
        instagram: "@zedapaz",
        foto: Ze,
    },
];

export function Integrantes() {
    return (
        <section
            id="integrantes"
            className="px-6 py-12"
        >
            <div className="mx-auto max-w-[1400px]">

                {/* Título */}
                <div className="relative mb-[-2%] flex justify-center">

                    <img
                        src={smile}
                        alt=""
                        className="absolute left-[-2.5%] top-[-10%] z-20 w-45 md:w-128"
                    />

                    <div className="relative">

                        <img
                            src={faixaTitulo}
                            alt=""
                            className="w-[500px] md:w-[750px]"
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

                    <div className="relative w-full max-w-[1200px]">

                        <img
                            src={papel}
                            alt=""
                            className="w-full"
                        />

                        <div className="absolute inset-0 flex items-center justify-center px-[6%] py-[8%]">

                            <div
                                className="max-w-[82%] text-left font-extrabold text-stone-900"
                                style={{
                                    fontSize: "clamp(0.7rem, 1vw, 1.25rem)",
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    {integrantes.map((integrante) => (
                        <div
                            key={integrante.nome}
                            className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm"
                        >
                            {/* Foto */}
                            <img
                                src={integrante.foto}
                                alt={integrante.nome}
                                className="h-full w-full object-cover object-top transition-transform duration-400 group-hover:scale-105 px-12"
                            />

                            {/* Overlay gradiente */}
                            <div className="absolute inset-0 bg-transparent" />

                            {/* Nome e Instagram */}
                            <div className="absolute bottom-16 left-0 right-0 p-10 text-center">

                                <h3
                                    className="font-display text-stone-900 drop-shadow-lg"
                                    style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", lineHeight: 1.2 }}
                                >
                                    {integrante.nome}
                                </h3>
                                <p className="mt-1 text-sm font-semibold text-stone-800">
                                    {integrante.instagram}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}