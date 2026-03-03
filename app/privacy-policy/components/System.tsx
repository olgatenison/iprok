import Image from "next/image";
import type { SectionFields } from "../types/contentful";

import {
  BLOCKS,
  INLINES,
  MARKS,
  type Document,
  type TopLevelBlock,
  type UnorderedList,
  type ListItem,
  type Paragraph,
  type Text,
  type Block,
  type Inline,
} from "@contentful/rich-text-types";

import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";

type Feature = { name: string; description: string; icon: string };

type SystemProps = Pick<
  SectionFields,
  "title" | "title1" | "subtitle1" | "subtitle2" | "description" | "description2"
> & {
  richText?: Document; // правая колонка
  richText1?: Document; // список утепления (bullets)
  featuresTitle?: string;
  imageSrc?: string;
};

const FEATURE_ICONS = [
  "/img/001.webp",
  "/img/002.webp",
  "/img/003.webp",
  "/img/004.webp",
  "/img/005.webp",
];

const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-semibold text-slate-800">{text}</b>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p className="mt-6 text-lg/8 text-slate-600 first:mt-0">{children}</p>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="underline underline-offset-4"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ),
  },
};

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

function parseFeaturesFromRichText(doc?: Document): Feature[] {
  if (!doc) return [];

  const top = doc.content as TopLevelBlock[];
  const ul = top.find(isUnorderedList);
  if (!ul) return [];

  const items = ul.content.filter(isListItem);

  return items.map((li, index) => {
    const p = li.content.find(isParagraph);
    const nodes = p ? p.content : [];

    let title = "";
    let desc = "";

    for (const n of nodes) {
      if (!isText(n)) continue;

      const value = n.value ?? "";
      const isBold = (n.marks ?? []).some((m) => m.type === "bold");

      if (isBold) title += value;
      else desc += value;
    }

    desc = desc.replace(/^—\s*/, "").trim();

    return {
      name: title.trim(),
      description: desc,
      icon: FEATURE_ICONS[index] ?? FEATURE_ICONS[FEATURE_ICONS.length - 1],
    };
  });
}

export default function System({
  title,
  title1,
  subtitle1,
  subtitle2,
  description,
    description2,
  richText,
  richText1,
  imageSrc = "/img/w.webp",

}: SystemProps) {
  const features = parseFeaturesFromRichText(richText1);

  return (
    <section id="system" className="bg-white py-14 sm:pt-20">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-black sm:text-5xl">
            {title}
            <span className="mt-3 block text-[#2c5cf2]">{title1}</span>
          </h2>
        </div>

        {/* Text block */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12">
          {/* LEFT */}
          <div>
            <h3 className="text-pretty text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {subtitle1}
            </h3>

            <p className="mt-6 text-lg/8 text-slate-600">{subtitle2}</p>

            {description ? (
              <div className="mt-4 flex items-center gap-4">
                <Image
                  src="/img/eco_safe_icon_512_final.webp"
                  alt="Екологічно безпечні матеріали"
                  width={64}
                  height={64}
                />
                <p className="font-semibold text-[#003fdd] whitespace-pre-line">
                  {description}
                </p>
              </div>
            ) : null}
          </div>

          {/* RIGHT */}
          <div>
            {richText ? (
              <div>{documentToReactComponents(richText, richTextOptions)}</div>
            ) : null}
          </div>
        </div>

        {/* Image + list */}
        <div className="mt-16 grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 lg:gap-x-12 lg:place-items-stretch">
          {/* LEFT: image */}
          <div className="w-full">
            <div className="relative mx-auto flex justify-center overflow-hidden lg:-mt-20">
              <Image
                src={imageSrc}
                alt="Зразок системи iProk"
                width={1200}
                height={400}
                className="h-auto w-full max-w-2xl object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT: list */}
          <div className="mx-auto w-full max-w-4xl lg:mx-0">
            <p className="mb-6 text-center text-3xl font-semibold tracking-tight text-[#2c5cf2] lg:text-left">
              {  description2}
            </p>

            <dl className="w-full space-y-5">
              {features.map((feature) => (
                <div key={feature.name} className="w-full">
                  <dt className="flex items-center gap-5">
                    <span className="flex-none">
                      <span className="relative block h-12 w-12 overflow-hidden bg-gray-100">
                        <Image
                          src={feature.icon}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                          aria-hidden="true"
                        />
                      </span>
                    </span>

                    <span className="text-2xl font-semibold tracking-tight text-gray-900">
                      {feature.name}
                    </span>
                  </dt>

                  <dd className="mt-2 pl-17 text-base leading-7 text-slate-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-gray-900" />
      </div>
    </section>
  );
}