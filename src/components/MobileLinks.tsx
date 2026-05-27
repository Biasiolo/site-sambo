import heroBanner from "@/assets/banner1.png";

import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

export function MobileLinks() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Banner */}
      <img
        src={heroBanner}
        alt="Sambô"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-10">

        {/* Logo */}
        <h1 className="font-display text-6xl text-white">
          Sambô
        </h1>

        {/* Links */}
        <div className="mt-12 flex w-full max-w-sm flex-col gap-4">

          <a
            href="#agenda"
            className="rounded-full bg-[#f4c430] px-6 py-4 text-center text-sm font-extrabold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
          >
            Agenda
          </a>

          <a
            href="#"
            className="rounded-full bg-white/10 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            Contrate o Sambô
          </a>

          <a
            href="#"
            className="rounded-full bg-white/10 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            Spotify
          </a>

          <a
            href="#"
            className="rounded-full bg-white/10 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            YouTube
          </a>

          <a
            href="#"
            className="rounded-full bg-white/10 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            Instagram
          </a>
        </div>

        {/* Redes */}
        <div className="mt-10 flex items-center gap-5 text-white">

          <a href="#">
            <FaSpotify size={22} />
          </a>

          <a href="#">
            <FaYoutube size={22} />
          </a>

          <a href="#">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}