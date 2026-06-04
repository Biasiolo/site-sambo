import logoSambo from "@/assets/logo-sambo.png";
import bandaFront from "@/assets/banda-front.png";
import colagemBg from "@/assets/colagem-bg.png";

import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
  FaApple,
  FaAmazon,
  FaDeezer,
} from "react-icons/fa";

import { SiTidal } from "react-icons/si";

export function Header() {
  return (
    <header id="topo" className="relative overflow-hidden bg-transparent">

      {/* Fundo parede */}
      <div
        className="relative min-h-screen w-full overflow-hidden bg-transparent"

      >

        {/* Navbar */}
<nav className="absolute top-0 left-0 z-30 flex w-full justify-center px-6 py-8 text-stone-900">

  <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-bold uppercase tracking-[0.25em] md:gap-6">

    {/* Navegação */}
    <a
      href="#agenda"
      className="transition-opacity hover:opacity-60"
    >
      Agenda
    </a>

    <a
      href="#integrantes"
      className="transition-opacity hover:opacity-60"
    >
      Integrantes
    </a>

    <a
      href="#contato"
      className="transition-opacity hover:opacity-60"
    >
      Contato
    </a>

    <div className="h-4 w-px bg-black/20" />

    {/* Redes sociais */}
    <a
      href="https://www.facebook.com/gruposambo"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Facebook"
    >
      <FaFacebookF size={20} />
    </a>

    <a
      href="https://www.instagram.com/gruposambo/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Instagram"
    >
      <FaInstagram size={22} />
    </a>
    <a
      href="https://www.tiktok.com/@gruposambo"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="TikTok"
    >
      <FaTiktok size={22} />
    </a>

    <a
      href="https://www.youtube.com/channel/UC-584XbPKNVLe_CWdgUa1dw"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="YouTube"
    >
      <FaYoutube size={22} />
    </a>

    <a
      href="https://open.spotify.com/intl-pt/artist/6IToOQDfAKMsBckqH9tDUZ"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Spotify"
    >
      <FaSpotify size={22} />
    </a>

    <a
      href="https://music.apple.com/br/artist/samb%C3%B4/597757435"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Apple Music"
    >
      <FaApple size={22} />
    </a>

    <a
      href="https://music.amazon.com.br/artists/B0085WQWOI/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Amazon Music"
    >
      <FaAmazon size={22} />
    </a>

    <a
      href="https://www.deezer.com/br/artist/179512"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Deezer"
    >
      <FaDeezer size={22} />
    </a>

    <a
      href="https://tidal.com/artist/4626868/"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
      aria-label="Tidal"
    >
      <SiTidal size={22} />
    </a>

  </div>
</nav>

        {/* HERO */}
        <div className="relative z-10 flex min-h-screen items-start justify-center px-4 pt-30">

          {/* Colagem central */}
          <div className="relative w-full max-w-295">

            {/* Fundo colorido */}
            <img
              src={colagemBg}
              alt=""
              className="relative z-10 w-full object-contain"
            />

            {/* Banda */}
            <img
              src={bandaFront}
              alt="Integrantes Sambô"
              className="absolute bottom-[8%] left-1/2 z-20 w-[82%] -translate-x-1/2 object-contain"
            />

            {/* Logo */}
            <img
              src={logoSambo}
              alt="Logo Sambô"
              className="absolute top-[-12%] left-1/2 z-30 w-[95%] -translate-x-1/2 object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}