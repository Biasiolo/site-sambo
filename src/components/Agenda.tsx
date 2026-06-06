import { useQuery } from "@tanstack/react-query";

import { fetchShows } from "@/lib/shows";

import fundoTitle from "@/assets/convert/fundo-title.webp";
import selo from "@/assets/convert/selo.webp";
import fundoCard from "@/assets/convert/fundo-card.webp";

import {
  Clock3,
  MapPin,
} from "lucide-react";

export function Agenda() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
    staleTime: 60_000,
  });

  const shows = data?.slice(0, 4);

  return (
    <section
      id="agenda"
      className="bg-transparent px-6 py-6 md:px-6"
    >
      <div className="mx-auto max-w-400">

        {/* Título */}
        <div className="relative  flex justify-center">

          {/* Área do título */}
          <div className="relative flex w-[60%] min-w-120 mb-[-3%] justify-center">

            {/* Fundo amarelo */}

            <img
              src={fundoTitle}
              alt="fundoTitle"
              loading="lazy"
              className="w-full object-contain "
            />

            {/* Texto centralizado */}
            <h2
              className="font-display font-medium absolute left-1/2 top-3/7 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-stone-950"
              style={{
                fontSize: "clamp(1.7rem, 3.6vw, 5rem)",
                lineHeight: "1",
                letterSpacing: "-2px",
              }}
            >
              AGENDA DE SHOWS
            </h2>

            {/* Selo */}
            <img
              src={selo}
              loading="lazy"
              alt="selo"
              className="absolute right-[-10%] top-[-2%] z-30 w-35 rotate-[-8deg] object-contain md:w-65"
            />
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex flex-col gap-7.5">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-60 animate-pulse rounded-[40px] bg-white/10"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="rounded-[30px] bg-black/40 p-10 text-center text-black">
            Não foi possível carregar a agenda.
          </div>
        )}

        {/* Empty */}
        {shows && shows.length === 0 && (
          <div className="rounded-[30px] bg-black/40 p-10 text-center text-black">
            Em breve novas datas.
          </div>
        )}

        {/* Agenda */}
        {shows && shows.length > 0 && (
          <div className="flex flex-col gap-1">

            {shows.map((show, index) => (
              <article
                key={index}
                className="relative overflow-hidden "
              >

                {/* Fundo */}
                <img
                  src={fundoCard}
                  loading="lazy"
                  alt="fundoCard"
                  className="absolute inset-0 h-full w-full object-fill px-10"
                />

                {/* Conteúdo */}
                <div className="relative z-10 flex min-h-50 flex-col justify-between px-[12%] py-9 md:flex-row md:items-center md:gap-10 md:px-[12%] md:py-9">

                  {/* Data */}
                  <div className="flex items-center gap-5 md:min-w-70 ">

                    <h3
                      className="font-display text-black"
                      style={{
                        fontSize: "clamp(3rem, 6vw, 6rem)",
                        lineHeight: "0.8",
                      }}
                    >
                      {show.data}
                    </h3>

                  </div>

                  {/* Infos */}
                  <div className="mt-8 flex flex-1 flex-col justify-center gap-2 md:mt-2">

                    <div
                      className="font-black text-stone-900"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        lineHeight: "1",
                      }}
                    >
                      {show.local}
                    </div>

                    <div className="flex items-center gap-3 text-[1rem] text-stone-800 md:text-[1.3rem]">
                      <MapPin
                        size={18}
                        color="#faaa15"
                      />

                      {show.cidade}
                    </div>

                    {show.horario && (
                      <div className="flex items-center gap-2.5 text-[1rem] text-stone-800">
                        <Clock3
                          size={18}
                          color="#faaa15"
                        />

                        {show.horario}
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  {show.ingresso && (
                    <a
                      href={show.ingresso}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7.5 inline-flex whitespace-nowrap rounded-full bg-amber-500 px-8 py-4.5 text-center text-[0.9rem] font-black uppercase tracking-[0.15em] text-black transition-transform hover:scale-[1.02] md:mt-0"
                    >
                      Comprar ingresso
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}