type MobileSobreProps = {
  onBack: () => void;
}
export function MobileSobre({
  onBack,
}: MobileSobreProps) {
  return (
    <div className="p-6">

      <h2 className="mb-6 text-center text-3xl font-bold">
        Sobre o Sambô
      </h2>

      <div className="space-y-4 text-lg leading-relaxed">

        <p>
          A vontade era se divertir, sem rótulos e com muita música.
          Assim nasceu o Sambô em 2003.
        </p>

        <p>
          Com uma roda de samba contagiante, repertório variado,
          batucada presente e energia única, a banda conquistou
          o público e se espalhou pela internet.
        </p>

        <p>
          Mais do que uma banda, o Sambô virou estilo e conceito.
        </p>

        <p>
          Esse é o Sambô!
        </p>

      </div>
      <button
        onClick={onBack}
      >
        ← Voltar
      </button>
    </div>
  );
}