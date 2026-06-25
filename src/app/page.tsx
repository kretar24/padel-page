import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyEpic from "@/components/WhyEpic";
import Courts from "@/components/Courts";
import Pozos from "@/components/Pozos";
import Store from "@/components/Store";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import HowToBook from "@/components/HowToBook";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Instagram from "@/components/Instagram";
import ComunidadWhatsApp from "@/components/ComunidadWhatsApp";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main>
        <Hero />
        <WhyEpic />
        <Courts />
        <Pozos />
        <Store />
        <Pricing />
        <Testimonials />
        <HowToBook />
        <Location />
        <FAQ />
        <Instagram />
        <ComunidadWhatsApp />
        <FinalCTA />
      </main>
      <Footer />
    </MotionProvider>
  );
}
