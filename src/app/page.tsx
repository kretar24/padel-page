import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyEpic from "@/components/WhyEpic";
import Courts from "@/components/Courts";
import Pozos from "@/components/Pozos";
import Store from "@/components/Store";
import Pricing from "@/components/Pricing";
import HowToBook from "@/components/HowToBook";
import Location from "@/components/Location";
import Instagram from "@/components/Instagram";
import ComunidadWhatsApp from "@/components/ComunidadWhatsApp";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyEpic />
      <Courts />
      <Pozos />
      <Store />
      <Pricing />
      <HowToBook />
      <Location />
      <Instagram />
      <ComunidadWhatsApp />
      <FinalCTA />
      <Footer />
    </main>
  );
}
