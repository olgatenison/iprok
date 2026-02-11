import Hero from "./components/Hero";
import Header from "./components/Header";
import Philosophy from "./components/Philosophy";
import Spheres from "./components/Spheres";
import DNA from "./components/DNA";
import Stats from "./components/Stats";
import Top from "./components/Top";
import FAQ from "./components/FAQ";
import WhoItsFor from "./components/WhoItsFor";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import System from "./components/System";
import ValueSection from "./components/ValueSection";
import HonestEngineering from "./components/HonestEngineering";

export default function Home() {
  return (
    <div className="bg-white">
      {" "}
      <Header />
      <Hero />
      <System />
      <Stats />
      <Top />
      <DNA />
      <Spheres />
      <ValueSection />
      <HonestEngineering />
      <Philosophy />
      <FAQ />
      <WhoItsFor />
      <Contact />
      <Footer />
      {/* <Hero />
      <Header />
      <System />
      <Stats />
      <Top />
      <HonestEngineering />

      <ValueSection />
      <DNA />
      <Spheres />
      <FAQ />
      <Philosophy />
      <WhoItsFor />
      <Contact />
      <Footer /> */}
    </div>
  );
}
