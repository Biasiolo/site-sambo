import { Header } from "@/components/Header";
import { MobileLinks } from "@/components/MobileLinks";
import { Agenda } from "@/components/Agenda";
import { Integrantes } from "@/components/Integrantes";
import { Contato } from "@/components/Contato";
import { WhatsappFloat } from "./components/WhatsappFloat";

export default function App() {
  return (
    <>
      <div className="hidden md:block">
        <Header />
        <Agenda />
        <Integrantes />
        <Contato />

        <WhatsappFloat />
      </div>

      <div className="block md:hidden">
        <MobileLinks />
      </div>
    </>
  );
}