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

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Header />
      <System />
      <DNA />
      <Stats />
      <Top />

      <Spheres />
      <FAQ />
      <Philosophy />
      <WhoItsFor />
      <Contact />
      <Footer />
    </div>
  );
}
