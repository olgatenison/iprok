import { getHomePage } from "../lib/getHomePage";
import type { SectionEntry } from "./types/contentful";

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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isSectionEntry(value: unknown): value is SectionEntry {
  if (!isRecord(value)) return false;
  if (!("fields" in value)) return false;

  const fields = (value as Record<string, unknown>).fields;
  if (!isRecord(fields)) return false;

  return typeof fields.sectionName === "string";
}

export default async function Home() {
  const page = await getHomePage();
  if (!page) return null;

  const rawSections: unknown = page.fields.sections ?? [];
  const sections = Array.isArray(rawSections) ? rawSections.filter(isSectionEntry) : [];

  const hero = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "hero");
  const system = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "system");
  const stats = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "stats");
  const top = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "top");
  const dna = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "dna");
  const spheres = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "spheres");
  const faq = sections.find((s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "faq");
  const valueSection = sections.find(  (s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "valuesection");
    const honestEngineering = sections.find(  (s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "honestengineering");
const philosophy = sections.find(  (s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "philosophy");
const whoItsFor = sections.find(  (s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "whoitsfor");
const contact = sections.find(  (s) => (s.fields.sectionName ?? "").trim().toLowerCase() === "contact");


  return (
    <div className="bg-white">
      <Header />

      {hero && <Hero {...hero.fields} />}
      {system && <System {...system.fields} />}
      {stats && <Stats {...stats.fields} />}
      {top && <Top {...top.fields} />}
      {dna && <DNA {...dna.fields} />}
      {spheres && <Spheres {...spheres.fields} />}

      {valueSection && <ValueSection {...valueSection.fields} />}
      {honestEngineering && <HonestEngineering {...honestEngineering.fields} />}
      {philosophy && <Philosophy {...philosophy.fields} />}


      {faq && <FAQ {...faq.fields} />}

      {whoItsFor && <WhoItsFor {...whoItsFor.fields} />}
      {contact && <Contact {...contact.fields} />}
    </div>
  );
}