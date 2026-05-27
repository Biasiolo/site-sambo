import { useQuery } from "@tanstack/react-query";

import { fetchShows } from "@/lib/shows";

import fundoTitle from "@/assets/fundo-title.png";
import selo from "@/assets/selo.png";

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
      className="bg-transparent px-[20px] py-[40px] md:px-[20px]"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Título */}
<div className="relative mb-[10px] flex justify-center">

  {/* Área do título */}
  <div className="relative flex w-[60%] min-w-[480px] justify-center">

    {/* Fundo amarelo */}
    <img
      src={fundoTitle}
      alt=""
      className="w-full object-contain"
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
      alt=""
      className="absolute right-[-10%] top-[-2%] z-30 w-[140px] rotate-[-8deg] object-contain md:w-[260px]"
    />
  </div>
</div>

        {/* Loading */}
        {isLoading && (
          <div className="flex flex-col gap-[30px]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[240px] animate-pulse rounded-[40px] bg-white/10"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="rounded-[30px] bg-black/40 p-[40px] text-center text-black">
            Não foi possível carregar a agenda.
          </div>
        )}

        {/* Empty */}
        {shows && shows.length === 0 && (
          <div className="rounded-[30px] bg-black/40 p-[40px] text-center text-black">
            Em breve novas datas.
          </div>
        )}

        {/* Agenda */}
        {shows && shows.length > 0 && (
          <div className="flex flex-col gap-[30px]">

            {shows.map((show, index) => (
              <article
                key={index}
                className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[42px] bg-[#7e7171] px-[30px] py-[35px] md:flex-row md:items-center md:gap-[40px] md:px-[50px] md:py-[40px]"
              >

                {/* Data */}
                <div className="flex items-center gap-[20px] md:min-w-[280px]">

                  <h3
                    className="font-display text-black"
                    style={{
                      fontSize: "clamp(4rem, 8vw, 8rem)",
                      lineHeight: "0.8",
                    }}
                  >
                    {show.data}
                  </h3>

                  <span className="rotate-180 text-[0.9rem] font-extrabold uppercase tracking-[0.3em] text-yellow-400 [writing-mode:vertical-rl] md:text-[1rem]">
                    {show.mes}
                  </span>
                </div>

                {/* Infos */}
                <div className="mt-[30px] flex flex-1 flex-col justify-center gap-[18px] md:mt-0">

                  <div
                    className="font-black text-black"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: "1",
                    }}
                  >
                    {show.local}
                  </div>

                  <div className="flex items-center gap-[12px] text-[1rem] text-white/85 md:text-[1.1rem]">
                    <MapPin
                      size={18}
                      color="#facc15"
                    />

                    {show.cidade}
                  </div>

                  {show.horario && (
                    <div className="flex items-center gap-[10px] text-[1rem] text-white">
                      <Clock3
                        size={18}
                        color="#facc15"
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
                    className="mt-[30px] inline-flex whitespace-nowrap rounded-full bg-yellow-400 px-[32px] py-[18px] text-center text-[0.9rem] font-black uppercase tracking-[0.15em] text-black transition-transform hover:scale-[1.02] md:mt-0"
                  >
                    Comprar ingresso
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}