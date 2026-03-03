import Image from "next/image";
import type { SectionFields } from "../types/contentful";
import {
  BLOCKS,
  type Document,
  type TopLevelBlock,
  type UnorderedList,
  type ListItem,
  type Paragraph,
  type Text,
  type Block,
  type Inline,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Card = {
  name: string;
  details: string;
  imageSrc: string;
  imageAlt: string;
};

type SpheresProps = Pick<SectionFields, "title" | "subtitle1" | "btn"> & {
  richText?: Document; // нижний большой синий текст (если нужен)
  richText1?: Document; // bullets: 3 пункта, внутри каждого 2 строки (2 paragraphs)
};

const CARD_IMAGES = [
  {
    imageSrc: "/img/01.webp",
    imageAlt:
      "Змішане призначення: комерція на 1-му поверсі, житло/офіси вище",
  },
  {
    imageSrc: "/img/02.webp",
    imageAlt: "Житлові об’єкти різного типу",
  },
  {
    imageSrc: "/img/03.webp",
    imageAlt: "Інженерні та виробничі об’єкти з прогнозованим результатом",
  },
];

function isUnorderedList(node: TopLevelBlock): node is UnorderedList {
  return node.nodeType === BLOCKS.UL_LIST;
}
function isListItem(node: Block | Inline): node is ListItem {
  return node.nodeType === BLOCKS.LIST_ITEM;
}
function isParagraph(node: Block | Inline): node is Paragraph {
  return node.nodeType === BLOCKS.PARAGRAPH;
}
function isText(node: Block | Inline | Text): node is Text {
  return (node as Text).nodeType === "text";
}

function listItemToTextLines(li: ListItem): string[] {
  // собираем ВСЁ текстовое содержимое list-item (включая переносы)
  const paragraphs = li.content.filter(isParagraph);

  const full = paragraphs
    .map((p) =>
      p.content
        .filter(isText)
        .map((t) => t.value ?? "")
        .join("")
    )
    .join("\n") // если параграфов несколько — разделим строкой
    .trim();

  // режем по переносам строк
  return full
    .split(/\n+/)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function cleanLeadingNumber(s: string): string {
  // "1) ..." | "1. ..." | "1 ..." | "01 ..." -> убираем
  return s.replace(/^\s*\d+\s*[\).\:-]?\s*/, "").trim();
}

function parseCardsFromRichText(
  doc?: Document
): Array<{ name: string; details: string }> {
  if (!doc) return [];

  const top = doc.content as TopLevelBlock[];
  const ul = top.find(isUnorderedList);
  if (!ul) return [];

  const items = ul.content.filter(isListItem);

  return items.map((li) => {
    const lines = listItemToTextLines(li);

    const rawName = lines[0] ?? "";
    const name = cleanLeadingNumber(rawName);

    const details = lines.slice(1).join(" ").trim(); // всё остальное

    return { name, details };
  });
}

export default function Spheres({
  title = "Сфери застосування:",
  subtitle1 = "там, де важлива інженерна логіка.",
  richText,
  richText1,
  btn = "Отримати консультацію",
}: SpheresProps) {
  const parsed = parseCardsFromRichText(richText1);

  // ✅ Тексты из Contentful, картинки по индексу
  const cards: Card[] = parsed.slice(0, 3).map((c, idx) => ({
    name: c.name,
    details: c.details,
    imageSrc: CARD_IMAGES[idx]?.imageSrc ?? "/img/01.webp",
    imageAlt: CARD_IMAGES[idx]?.imageAlt ?? "",
  }));

  return (
    <section id="use-cases" className="relative bg-white">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="h-105 w-full bg-[#0f172a] sm:h-130" />
        <div className="h-48 w-full bg-white" />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 text-center sm:pt-24 sm:pb-40 lg:px-8">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        {subtitle1 ? (
          <p className="mt-3 text-xl text-white/80">{subtitle1}</p>
        ) : null}
      </div>

      {/* Cards */}
      <div className="relative mx-auto -mt-10 grid max-w-md grid-cols-1 gap-6 px-6 pb-16 sm:-mt-20 sm:max-w-7xl sm:grid-cols-3 lg:gap-8 lg:px-8">
        {cards.map((c) => (
          <article key={c.name} className="overflow-hidden bg-white shadow-xl">
            {/* Image */}
            <div className="group relative aspect-4/5 w-full overflow-hidden">
              <Image
                src={c.imageSrc}
                alt={c.imageAlt}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/0 via-black/30 to-black/70" />

              {/* ✅ title ONLY on image */}
              <div className="absolute inset-x-0 top-0 p-6">
                <h3 className="text-2xl font-semibold leading-snug text-white">
                  {c.name}
                </h3>
              </div>
            </div>

            {/* ✅ details ONLY in white block */}
            <div className="p-6">
              <p className="text-lg leading-6 text-gray-900">{c.details}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom text + button */}
      <div className="relative px-8 pb-14">
        {richText ? (
          <div className="mx-auto my-5 max-w-4xl text-balance text-center text-5xl/14 font-bold tracking-tight text-[#2c5cf2]">
            {documentToReactComponents(richText)}
          </div>
        ) : null}

        <a
          href="#contacts"
          className="relative z-10 block w-fit mx-auto mt-12 bg-[#2c5cf2] px-8 py-3 text-center text-white shadow-sm text-xl tracking-tight transition duration-200 hover:bg-[#244fe0] focus-visible:outline-offset-2 focus-visible:outline-[#2c5cf2]"
        >
          {btn}
        </a>
      </div>
    </section>
  );
}