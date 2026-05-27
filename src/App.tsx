import { Header } from "@/components/Header";
import { MobileLinks } from "@/components/MobileLinks";
import { Agenda } from "@/components/Agenda";

export default function App() {
  return (
    <>
      <div className="hidden md:block">
        <Header />
        <Agenda />
      </div>

      <div className="block md:hidden">
        <MobileLinks />
      </div>
    </>
  );
}