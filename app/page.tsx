import Header from "./components/Header";
import Hero from "./components/Hero";
import System from "./components/System";
import Stats from "./components/Stats";
import Top from "./components/Top";
import DNA from "./components/DNA";
import Spheres from "./components/Spheres";
import ValueSection from "./components/ValueSection";
import HonestEngineering from "./components/HonestEngineering";
import Philosophy from "./components/Philosophy";
import FAQ from "./components/FAQ";
import WhoItsFor from "./components/WhoItsFor";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-white">
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
    </div>
  );
}
