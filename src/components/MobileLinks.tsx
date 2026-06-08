import { useState } from "react";

import heroBanner from "@/assets/banner4.png";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaSpotify,
  FaCalendarAlt,
  FaPhoneAlt,
  FaBookOpen,
  FaAmazon,
  FaDeezer,
} from "react-icons/fa";

import {
  SiTidal,
  SiApplemusic,
} from "react-icons/si";

type MobileLinksProps = {
  onNavigate: (screen: "agenda" | "sobre" | "contato") => void;
};

export function MobileLinks({
  onNavigate,
}: MobileLinksProps) {
  const [openMusic, setOpenMusic] = useState(false);

  const buttonClass =
    "flex items-center rounded-[24px] bg-stone-200 px-5 py-2 shadow-md transition-transform hover:scale-[1.02]";

  const iconClass =
    "flex h-12 w-12 items-center justify-center rounded-full bg-black text-white";

  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-4 pb-6">

        {/* Hero */}
        <div className="mb-8 flex justify-center">
          <img
            src={heroBanner}
            alt="Sambô"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Botões */}
        <div className="mx-auto flex max-w-md flex-col gap-3">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/gruposambo"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaFacebookF size={22} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              FACEBOOK
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gruposambo/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaInstagram size={22} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              INSTAGRAM
            </span>
          </a>

          {/* Youtube */}
          <a
            href="https://www.youtube.com/channel/UC-584XbPKNVLe_CWdgUa1dw"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaYoutube size={22} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              YOUTUBE
            </span>
          </a>

          {/* Música */}
          <button
            onClick={() => setOpenMusic(true)}
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaSpotify size={22} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              MÚSICA
            </span>
          </button>

          {/* Sobre */}
          <button
            onClick={() => onNavigate("sobre")}
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaBookOpen size={20} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              SOBRE
            </span>
          </button>

          {/* Agenda */}
          <button
            onClick={() => onNavigate("agenda")}
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaCalendarAlt size={20} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              AGENDA
            </span>
          </button>

          {/* Contato */}
          <button
            onClick={() => onNavigate("contato")}
            className={buttonClass}
          >
            <div className={iconClass}>
              <FaPhoneAlt size={20} />
            </div>

            <span className="flex-1 text-center text-xl font-medium text-stone-900">
              CONTATO
            </span>
          </button>

        </div>
      </section>

      {/* Modal Música */}
      {openMusic && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6">

          <div className="w-full max-w-md rounded-[30px] bg-stone-200 p-6">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-stone-900">
                Ouça o Sambô
              </h2>

              <button
                onClick={() => setOpenMusic(false)}
                className="text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-3">

              <a
                href="https://open.spotify.com/intl-pt/artist/6IToOQDfAKMsBckqH9tDUZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4"
              >
                <FaSpotify />
                Spotify
              </a>

              <a
                href="https://music.apple.com/br/artist/samb%C3%B4/597757435"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4"
              >
                <SiApplemusic />
                Apple Music
              </a>

              <a
                href="https://music.amazon.com.br/artists/B0085WQWOI/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4"
              >
                <FaAmazon />
                Amazon Music
              </a>

              <a
                href="https://www.deezer.com/br/artist/179512"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4"
              >
                <FaDeezer />
                Deezer
              </a>

              <a
                href="https://tidal.com/artist/4626868/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4"
              >
                <SiTidal />
                Tidal
              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
}