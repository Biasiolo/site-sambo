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
    <header className="relative overflow-hidden bg-transparent">

      {/* Fundo parede */}
      <div
        className="relative min-h-screen w-full overflow-hidden bg-transparent"

      >

        {/* Navbar */}
        <nav className="absolute top-0 left-0 z-30 flex w-full justify-center px-6 py-8 text-stone-900">

          <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-bold uppercase tracking-[0.25em] md:gap-6">

            <a
              href="#agenda"
              className="transition-opacity hover:opacity-60"
            >
              Agenda
            </a>

            <a
              href="#sobre"
              className="transition-opacity hover:opacity-60"
            >
              Sobre
            </a>

            <a
              href="#contato"
              className="transition-opacity hover:opacity-60"
            >
              Contato
            </a>

            <div className="h-4 w-px bg-black/20" />

            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaInstagram size={22} /></a>
            <a href="#"><FaYoutube size={22} /></a>
            <a href="#"><FaSpotify size={22} /></a>
            <a href="#"><FaTiktok size={20} /></a>
            <a href="#"><FaApple size={22} /></a>
            <a href="#"><FaAmazon size={22} /></a>
            <a href="#"><FaDeezer size={22} /></a>
            <a href="#"><SiTidal size={22} /></a>

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