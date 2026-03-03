import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";
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

/** UL из Rich text → массив строк */
function extractBullets(doc?: Document): string[] {
  if (!doc?.content?.length) return [];

  const ul = doc.content.find((n) => (n as AnyNode)?.nodeType === BLOCKS.UL_LIST);
  if (!ul || !hasContent(ul)) return [];

  const out: string[] = [];

  for (const li of ul.content) {
    if ((li as AnyNode)?.nodeType !== BLOCKS.LIST_ITEM || !hasContent(li)) continue;
    const t = normalizeSpaces(plainText(li));
    if (t) out.push(t);
  }

  return out;
}

type WhoItsForProps = Pick<SectionFields, "title" | "subtitle1" | "richText">;

export default function WhoItsFor({ title, subtitle1, richText }: WhoItsForProps) {
  const heading = normalizeString(title) || "Вам точно підійде iProk, якщо:";

  // если подпись не приходит — оставляем дефолт как было
  const caption =
    normalizeString(subtitle1) ||
    "Патентовані рішення iProk: \nпідтверджена унікальність ключових вузлів конструкції.";

  const points = extractBullets(richText);

  return (
    <section className="isolate overflow-hidden bg-black px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl py-12 sm:py-20">
        {/* decorative skew shape */}
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-56 w-[150vw] origin-bottom-left skew-x-[-68deg] ring-4 ring-[#2c5cf2] sm:mr-20 md:mr-0 lg:right-full lg:mr-65 lg:origin-center" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* LEFT: image + caption (image STATIC, not from Contentful) */}
          <div className="lg:col-span-5">
            <figure className="relative mx-auto w-full max-w-md">
              <Image
                src="/img/patent.webp"
                alt="Патент iProk"
                width={900}
                height={900}
                className="h-auto w-full object-contain"
                priority
              />
              <figcaption className="mt-4 text-lg leading-7 text-gray-200 font-light whitespace-pre-line">
                {caption}
              </figcaption>
            </figure>
          </div>

          {/* RIGHT: content */}
          <div className="lg:col-span-7 lg:justify-self-end">
            <div className="w-full max-w-xl mx-auto lg:ml-auto">
              <div className="p-0 sm:p-4 lg:p-8">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center lg:text-left">
                  {heading}
                </h2>

                {points.length > 0 ? (
                  <ul className="mt-10 space-y-5">
                    {points.map((text, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center">
                          <CheckIcon
                            className="h-6 w-6"
                            style={{ color: "#2c5cf2" }}
                            aria-hidden="true"
                          />
                        </span>
                        <p className="text-lg leading-7 text-gray-200 font-light">
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}