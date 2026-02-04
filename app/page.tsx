import Image from "next/image";

import Hero from "./components/Hero";
import Header from "./components/Header";

import Stats from "./components/Stats";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Header />
      <Stats />
      <FAQ />
    </>
  );
}
