import Image from "next/image";
import {
  BLOCKS,
  type Document,
  type ListItem,
  type Paragraph,
  type Text,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type Stat = {
  title: string;
  text: string;
};

type StatsProps = {
  title?: string;
  richText?: Document;
  richText1?: Document;
};

function parseStatsFromRichText(doc?: Document): Stat[] {
  if (!doc) return [];

  const ul = doc.content.find(
    (n) => n.nodeType === BLOCKS.UL_LIST
  );

  if (!ul || !("content" in ul)) return [];

  return (ul.content as ListItem[]).map((li) => {
    const p = li.content[0] as Paragraph;

    let title = "";
    let text = "";

    p.content.forEach((node) => {
      const t = node as Text;
      const value = t.value ?? "";
      const isBold = t.marks?.some((m) => m.type === "bold");

      if (isBold) title += value;
      else text += value;
    });

    return {
      title: title.trim(),
      text: text.replace(/^—\s*/, "").trim(),
    };
  });
}

export default function Stats({
  title,
  richText,
  richText1,
}: StatsProps) {
  const stats = parseStatsFromRichText(richText1);

  return (
    <section id="production" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h3 className="max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl">
            {title}
          </h3>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* LEFT IMAGE */}
          <div className="pt-10 lg:py-16">
            <div className="relative w-full overflow-hidden bg-gray-50 h-56 sm:h-80 lg:h-140">
              <Image
                alt="Виробництво iProk"
                src="/img/office.webp"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="pb-24 pt-12 sm:pb-32 lg:py-16">
            <div className="max-w-2xl mx-auto lg:mx-0">
              {richText && (
                <div className="text-lg/8 text-slate-600">
                  {documentToReactComponents(richText)}
                </div>
              )}

              <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="border-t-2 sm:border-t-0 sm:border-l-2 border-[#2c5cf2]/90 pt-4 sm:pt-0 sm:pl-6"
                  >
                    <dt className="text-2xl font-semibold tracking-tight text-gray-900">
                      {stat.title}
                    </dt>
                    <dd className="mt-3 text-base text-slate-600">
                      {stat.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}