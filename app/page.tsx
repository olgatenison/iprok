import Hero from "./components/Hero";
import Header from "./components/Header";
import Philosophy from "./components/Philosophy";
import Stats from "./components/Stats";
import Top from "./components/Top";
import FAQ from "./components/FAQ";
import WhoItsFor from "./components/WhoItsFor";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Header />

      <Stats />
      <Top />
      <Philosophy />
      <FAQ />
      <WhoItsFor />
      <Contact />
      <Footer />
    </div>
  );
}
