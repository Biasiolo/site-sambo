import { useQuery } from "@tanstack/react-query";
import { fetchShows } from "@/lib/shows";

import fundoTitle from "@/assets/convert/fundo-title.webp";
import fundoCard from "@/assets/convert/fundo-card.webp";
import selo from "@/assets/convert/selo.webp";

import { Clock3, MapPin } from "lucide-react";

type MobileAgendaProps = {
  onBack: () => void;
};

export function MobileAgenda({ onBack }: MobileAgendaProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
  });

  // 🔁 Pega apenas os 4 últimos shows (mais recentes)
  const ultimosShows = data?.slice(-5);

  if (isLoading) {
    return <div className="p-6 text-center">Carregando agenda...</div>;
  }

  return (
    <div className="px-4 py-6">
      {/* Voltar */}
      <button
        onClick={onBack}
        className="mb-6 text-xl font-display font-semibold text-stone-900"
      >
        ← Voltar
      </button>

      {/* Título */}
      <div className="relative mb-2 flex justify-center">
        <div className="relative w-full max-w-85">
          <img src={fundoTitle} alt="" className="w-full" />
          <h2 className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-medium text-black">
            AGENDA DE SHOWS
          </h2>
          <img
            src={selo}
            alt=""
            className="absolute -right-4 -top-2 w-18 rotate-[-8deg]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* Exibe apenas os 4 últimos shows */}
        {ultimosShows?.map((show, index) => (
          <article
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            {/* Fundo do ingresso */}
            <img
              src={fundoCard}
              alt=""
              className="absolute inset-0 h-[120%] w-full object-fill"
            />

            {/* Conteúdo achatado (compacto) */}
            <div className="relative z-10 top-3 px-8 py-6">
              {/* Linha 1: Data + Local (lado a lado) */}
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display font-medium ms-4 text-4xl leading-tight text-stone-800 pt-2">
                  {show.data}
                </span>
                <span className="font-display me-2 font-semibold uppercase leading-tight text-stone-700">
                  {show.local}
                </span>
              </div>

              {/* Linha 2: Cidade + Horário (mesma linha) */}
              <div className="mt-1 flex flex-wrap items-center justify-between gap-1 text-sm text-stone-800 px-2">
                <div className="flex items-center gap-1">
                  <MapPin size={12} color="#faaa15" />
                  <span>{show.cidade}</span>
                </div>
                {show.horario && (
                  <div className="flex items-center gap-1">
                    <Clock3 size={12} color="#faaa15" />
                    <span>{show.horario}</span>
                  </div>
                )}
              </div>

              {/* Botão compacto e alinhado à direita */}
              {show.ingresso && (
                <div className="mt-2 flex justify-end">
                  <a
                    href={show.ingresso}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full bg-amber-500 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-black shadow-sm transition hover:bg-amber-400"
                  >
                    + Informações
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      {/* Voltar - bottom */}
      <div className="my-8 flex justify-center">
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