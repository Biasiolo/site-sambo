import { useQuery } from "@tanstack/react-query";
import { fetchShows } from "@/lib/shows";

type MobileAgendaProps = {
  onBack: () => void;
}

export function MobileAgenda({
  onBack,
}: MobileAgendaProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["shows"],
    queryFn: fetchShows,
  });

  if (isLoading) {
    return (
      <div className="p-6 text-center">
        Carregando agenda...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-6">

      {data?.map((show, index) => (
        <div
          key={index}
          className="rounded-3xl bg-stone-200 p-5 shadow-md"
        >
          <div className="mb-2 text-4xl font-black">
            {show.data}
          </div>

          <div className="text-xl font-bold">
            {show.local}
          </div>

          <div className="text-sm text-stone-600">
            {show.cidade}
          </div>

          {show.horario && (
            <div className="mt-1 text-sm">
              {show.horario}
            </div>
          )}

          {show.ingresso && (
            <a
              href={show.ingresso}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-yellow-400 px-5 py-2 font-bold"
            >
              Comprar ingresso
            </a>
          )}
          
        </div>
        
      ))}
      <button 
        onClick={onBack}
        className="mb-2 text-xl font-black font-display"
      >
        ← Voltar
      </button>
    </div>
  );
}