import Image from "next/image";
import type { SectionFields } from "../types/contentful";
import type { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

type TextNode = { nodeType: "text"; value?: string };
type NodeWithContent = { content: unknown[] };
type AnyNode = { nodeType?: unknown; content?: unknown; value?: unknown };

function hasContent(node: unknown): node is NodeWithContent {
  return (
    typeof node === "object" &&
    node !== null &&
    Array.isArray((node as AnyNode).content)
  );
}

function isTextNode(node: unknown): node is TextNode {
  return (
    typeof node === "object" &&
    node !== null &&
    (node as AnyNode).nodeType === "text"
  );
}

function plainText(node: unknown): string {
  if (!node) return "";
  if (isTextNode(node)) return node.value ?? "";
  if (hasContent(node)) return node.content.map(plainText).join("");
  return "";
}

function normalizeSpaces(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

function normalizeString(s?: string) {
  return (s ?? "").trim();
}

// берём первый UL из richText и вытаскиваем пункты
function extractBulletsFromRichText(doc?: Document): string[] {
  if (!doc?.content?.length) return [];

  const ul = doc.content.find((n) => (n as AnyNode)?.nodeType === BLOCKS.UL_LIST);
  if (!ul || !hasContent(ul)) return [];

  const bullets: string[] = [];

  for (const li of ul.content) {
    if ((li as AnyNode)?.nodeType !== BLOCKS.LIST_ITEM || !hasContent(li)) continue;
    const t = normalizeSpaces(plainText(li));
    if (t) bullets.push(t);
  }

  return bullets;
}

type HonestEngineeringProps = Pick<SectionFields, "title" | "title1" | "subtitle1" | "richText"> & {
  imageSrc?: string;
  imageAlt?: string;
  factoryPct?: string;
  sitePct?: string;
};

export default function HonestEngineering({
  // Contentful
  title,
  title1,     // используем как CTA line
  subtitle1,  // абзац
  richText,   // UL со steps

  // optional
  imageSrc = "/img/progress_bars_90pct_2c5cf2_2x.webp",
  imageAlt = "90% робіт виконано у контрольованих умовах",
  factoryPct = "≈ 90%",
  sitePct = "≈ 10%",
}: HonestEngineeringProps) {
  const steps = extractBulletsFromRichText(richText);

  const h = normalizeString(title) || "Більша частина робіт — у контрольованому середовищі на заводі";
  const body = normalizeString(subtitle1);
  const cta = normalizeString(title1);

  return (
    <section className="bg-white pt-10 pb-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mt-14 grid grid-cols-1 gap-15 lg:grid-cols-12 lg:items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black text-balance">
              {h}
            </h3>

            {body ? (
              <p className="mt-10 text-lg leading-8 text-gray-700 whitespace-pre-line">
                {body}
              </p>
            ) : null}

            {steps.length ? (
              <ul className="mt-12 space-y-3">
                {steps.map((s, i) => (
                  <li key={`${i}-${s}`} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#2c5cf2]" />
                    <p className="text-base leading-7 text-gray-700">{s}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Right */}
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="bg-[#eceffa]/70 p-6">
              <p className="text-base font-bold tracking-wide text-[#2c5cf2] text-center">
                Частка робіт у контрольованих умовах
              </p>

              <div className="mt-4">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={592}
                  height={142}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-base font-bold text-[#2c5cf2]">На заводі</span>
                <span className="text-lg font-bold text-[#2c5cf2]">{factoryPct}</span>
              </div>

              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="text-sm text-gray-600">На ділянці</span>
                <span className="text-sm font-semibold text-gray-800">{sitePct}</span>
              </div>

              <p className="mt-4 text-sm text-gray-600 text-center">
                Менше техніки, менше «людського фактору», більше прогнозованості.
              </p>
            </div>
          </div>
        </div>

        {/* CTA line (Title1) */}
        {cta ? (
          <p className="mt-10 max-w-2xl text-lg leading-8 text-black font-bold">
            {cta}
          </p>
        ) : null}
      </div>
    </section>
  );
}