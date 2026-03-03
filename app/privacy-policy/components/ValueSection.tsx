import type { SectionFields } from "../types/contentful";
import type { Document } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

type Item = { n: string; title: string; text: string };

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

/**
 * 4 колонки: UL из richText1.
 * Поддерживает:
 * - 2 параграфа внутри li (заголовок + текст)
 * - 1 параграф "01. ...: описание"
 */
function extractItemsFromRichText(doc?: Document): Item[] {
  if (!doc?.content?.length) return [];

  const ul = doc.content.find((n) => (n as AnyNode)?.nodeType === BLOCKS.UL_LIST);
  if (!ul || !hasContent(ul)) return [];

  const items: Item[] = [];

  for (const li of ul.content) {
    if ((li as AnyNode)?.nodeType !== BLOCKS.LIST_ITEM || !hasContent(li)) continue;

    const paragraphs = (li as NodeWithContent).content.filter(
      (n) => (n as AnyNode)?.nodeType === BLOCKS.PARAGRAPH
    );

    const p0 = normalizeSpaces(plainText(paragraphs[0] ?? ""));
    const p1 = normalizeSpaces(plainText(paragraphs[1] ?? ""));

    if (!p0 && !p1) continue;

    // номер + остальное
    const m = p0.match(/^(\d{2})\.\s*(.*)$/);
    const n = m ? `${m[1]}.` : "";
    const rest = normalizeSpaces(m?.[2] ?? p0);

    // если второго параграфа нет, пробуем отделить описание после ":"
    let title = rest;
    let textFromHead = "";

    const colonIdx = rest.indexOf(":");
    if (!p1 && colonIdx !== -1 && colonIdx < rest.length - 1) {
      title = normalizeSpaces(rest.slice(0, colonIdx + 1));
      textFromHead = normalizeSpaces(rest.slice(colonIdx + 1));
    }

    items.push({
      n,
      title,
      text: p1 || textFromHead,
    });
  }

  return items;
}

export default function ValueSection({
  title,
  title1,
  richText1,

}: SectionFields) {
  const items = extractItemsFromRichText(richText1);

  const t =
    normalizeString(title) ||
    "Ми вибудовали для вас систему, що забезпечує повну передбачуваність результату";

  const t1 = normalizeString(title1);



  return (
    <section id="advantages" className="bg-white pt-14 sm:pt-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto w-full max-w-4xl md:mx-0">
          <h2 className="my-10 text-balance text-center text-4xl font-bold tracking-tight text-black md:text-left lg:text-5xl">
            {t}
          </h2>
        </div>

        {/* 4 columns */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          {items.map((it, idx) => (
            <div key={`${it.n}-${it.title}-${idx}`} className="w-full">
              <div className="flex items-start gap-3">
                <span className="mt-2 inline-block h-3 w-3 shrink-0 rounded-full bg-[#2c5cf2]" />
                <div>
                  <p className="text-xl font-semibold text-black">
                    {it.n ? (
                      <span className="mr-2 font-bold text-[#2c5cf2]">{it.n}</span>
                    ) : null}
                    {it.title}
                  </p>

                  {it.text ? (
                    <p className="mt-2 text-base leading-7 text-gray-700">{it.text}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="relative">
            <div className="h-2 w-full rounded-full bg-linear-to-r from-[#2c5cf2]/35 to-[#2c5cf2]" />
            <div className="absolute right-0 top-1/2 -mr-2 -translate-y-1/2">
              <div className="h-0 w-0 border-y-18 border-y-transparent border-l-26 border-l-[#2c5cf2]" />
            </div>
          </div>

          <div className="mt-4 flex justify-between text-base font-semibold text-[#2c5cf2]">
            <span>start</span>
            <span>finish</span>
          </div>
        </div>

        {/* Title1 (CTA line) */}
        {t1 ? (
          <p className="mt-10 max-w-2xl text-lg leading-8 text-black font-bold">
            {t1}
          </p>
        ) : null}
      </div>
    </section>
  );
}