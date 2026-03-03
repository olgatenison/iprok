import Image from "next/image";
import type { ComponentType } from "react";
import {
  BoltIcon,
  SunIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

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

type Feature = {
  name: string;
  description: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

type DNAProps = Pick<SectionFields, "title" | "subtitle1"> & {
  richText1?: Document; // список из 4 пунктов
  imageSrc?: string;
};

const ICONS = [BoltIcon, ShieldCheckIcon, SunIcon, Squares2X2Icon];

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

function parseFeaturesFromRichText(doc?: Document): Omit<Feature, "icon">[] {
  if (!doc) return [];

  const top = doc.content as TopLevelBlock[];
  const ul = top.find(isUnorderedList);
  if (!ul) return [];

  const items = ul.content.filter(isListItem);

  return items.map((li) => {
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
    };
  });
}

type FeatureItemProps = {
  feature: Feature;
  align?: "left" | "right";
};

function FeatureItem({ feature, align = "left" }: FeatureItemProps) {
  const Icon = feature.icon;

  const textAlign = align === "right" ? "text-left" : "text-left lg:text-right";
  const rowJustify =
    align === "right" ? "justify-start" : "justify-start lg:justify-end";

  return (
    <>
      <dt className={`flex ${rowJustify}`}>
        <div
          className={`flex gap-4 ${
            align === "right" ? "flex-row" : "flex-row lg:flex-row-reverse"
          }`}
        >
          <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center">
            <Icon className="h-7 w-7 text-[#2c5cf2]" aria-hidden="true" />
          </span>

          <span
            className={`max-w-md ${textAlign} text-3xl font-semibold tracking-tight text-gray-900`}
          >
            {feature.name}
          </span>
        </div>
      </dt>

      <dd className={`mt-2 flex ${rowJustify}`}>
        <div className={`max-w-md ${textAlign}`}>
          <p className="text-base leading-7 text-slate-600">
            {feature.description}
          </p>
        </div>
      </dd>
    </>
  );
}

function CenterImage({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl overflow-hidden bg-gray-50 lg:max-w-md">
        <Image
          src={imageSrc}
          alt="Профіль iProk"
          width={900}
          height={900}
          className="h-auto w-full object-contain"
          sizes="(min-width: 1024px) 28vw, 80vw"
        />
      </div>
    </div>
  );
}

export default function DNA({
  title,
  subtitle1,
  richText1,
  imageSrc = "/img/dna2.webp",
}: DNAProps) {
  const parsed = parseFeaturesFromRichText(richText1);

  const features: Feature[] = parsed.slice(0, 4).map((f, idx) => ({
    ...f,
    icon: ICONS[idx] ?? Squares2X2Icon,
  }));

  const [f1, f2, f3, f4] = features;

  return (
    <section id="constructive" className="bg-white px-6 pt-8 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-black sm:text-5xl">
            {title}
          </h2>
          {subtitle1 ? (
            <p className="mt-4 text-pretty text-lg font-medium text-slate-700 sm:text-xl">
              {subtitle1}
            </p>
          ) : null}
        </div>

        {/* MOBILE */}
        <div className="mt-14 space-y-12 md:hidden">
          <dl className="grid gap-10">
            {f1 ? <FeatureItem feature={f1} /> : null}
            {f2 ? <FeatureItem feature={f2} /> : null}
          </dl>

          <CenterImage imageSrc={imageSrc} />

          <dl className="grid gap-10">
            {f3 ? <FeatureItem feature={f3} /> : null}
            {f4 ? <FeatureItem feature={f4} /> : null}
          </dl>
        </div>

        {/* TABLET */}
        <div className="mt-14 hidden md:block lg:hidden">
          <dl className="grid grid-cols-2 gap-x-10 gap-y-10">
            {features.map((f) => (
              <FeatureItem key={f.name} feature={f} />
            ))}
          </dl>

          <div className="mt-12">
            <CenterImage imageSrc={imageSrc} />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          <dl className="grid gap-10 lg:col-span-4">
            {f1 ? <FeatureItem feature={f1} align="left" /> : null}
            {f2 ? <FeatureItem feature={f2} align="left" /> : null}
          </dl>

          <div className="lg:col-span-4">
            <CenterImage imageSrc={imageSrc} />
          </div>

          <dl className="grid gap-10 lg:col-span-4">
            {f3 ? <FeatureItem feature={f3} align="right" /> : null}
            {f4 ? <FeatureItem feature={f4} align="right" /> : null}
          </dl>
        </div>
      </div>
    </section>
  );
}