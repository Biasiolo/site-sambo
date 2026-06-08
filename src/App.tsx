import { useState } from "react";

import { Header } from "@/components/Header";
import { MobileLinks } from "@/components/MobileLinks";
import { Agenda } from "@/components/Agenda";
import { Integrantes } from "@/components/Integrantes";
import { Contato } from "@/components/Contato";
import { WhatsappFloat } from "@/components/WhatsappFloat";

import { MobileAgenda } from "@/components/mobile/MobileAgenda";
import { MobileSobre } from "@/components/mobile/MobileSobre";
import { MobileContato } from "@/components/mobile/MobileContato";

type MobileScreen =
  | "home"
  | "agenda"
  | "sobre"
  | "contato";

export default function App() {
  const [mobileScreen, setMobileScreen] =
    useState<MobileScreen>("home");

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <Header />
        <Agenda />
        <Integrantes />
        <Contato />

        <WhatsappFloat />
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">

        {mobileScreen === "home" && (
          <MobileLinks
            onNavigate={(screen) =>
              setMobileScreen(screen)
            }
          />
        )}

        {mobileScreen === "agenda" && (
          <MobileAgenda
            onBack={() => setMobileScreen("home")}
          />
        )}

        {mobileScreen === "sobre" && (
          <MobileSobre
            onBack={() => setMobileScreen("home")}
          />
        )}

        {mobileScreen === "contato" && (
          <MobileContato
            onBack={() => setMobileScreen("home")}
          />
        )}

      </div>
    </>
  );
}