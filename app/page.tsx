import Image from "next/image";

import Hero from "./components/Hero";
import Header from "./components/Header";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Header />
      <FAQ />
    </>
  );
}
