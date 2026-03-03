import type {
  Block,
  Document,
  Inline,
  ListItem,
  Paragraph,
  Text,
  TopLevelBlock,
} from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import type { ReactNode } from "react";

type FAQProps = {
  title?: string;
  richText1?: Document;
};

type RTNode = Block | Inline | TopLevelBlock | Text;

function isText(node: RTNode): node is Text {
  return node.nodeType === "text";
}

function isParagraph(node: RTNode): node is Paragraph {
  return node.nodeType === BLOCKS.PARAGRAPH;
}

function isListItem(node: RTNode): node is ListItem {
  return node.nodeType === BLOCKS.LIST_ITEM;
}

function plainFromParagraph(p: Paragraph): string {
  return (p.content ?? [])
    .map((n) => (isText(n) ? n.value : ""))
    .join("")
    .trim();
}

function qaFromListItem(li: ListItem): { q: string; a: string } {
  const paragraphs = (li.content ?? []).filter(isParagraph);

  // 1й параграф = вопрос, 2й = ответ
  if (paragraphs.length >= 2) {
    return {
      q: plainFromParagraph(paragraphs[0]),
      a: plainFromParagraph(paragraphs[1]),
    };
  }

  // fallback: если всё в одном параграфе
  const one = paragraphs[0] ? plainFromParagraph(paragraphs[0]) : "";
  const lines = one
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  return {
    q: lines[0] ?? "",
    a: lines.slice(1).join(" ") ?? "",
  };
}

const faqOptions: Options = {
  renderNode: {
    [BLOCKS.UL_LIST]: (_node, children: ReactNode) => (
      <dl className="mt-20 divide-y divide-gray-900/10">{children}</dl>
    ),

    [BLOCKS.LIST_ITEM]: (node: RTNode) => {
      if (!isListItem(node)) return null;

      const { q, a } = qaFromListItem(node);

      return (
        <div className="py-6 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-4">
          <dt className="text-xl font-semibold text-gray-900 lg:col-span-5">
            {q}
          </dt>
          <dd className="mt-4 lg:col-span-7 lg:mt-0">
            <p className="text-base/7 text-gray-600">{a}</p>
          </dd>
        </div>
      );
    },

    // ключевой момент: не рендерим параграфы отдельно
    [BLOCKS.PARAGRAPH]: () => null,
  },
};

export default function FAQ({
  title = "Поширені запитання",
  richText1,
}: FAQProps) {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <h2 className="text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl">
          {title}
        </h2>

        {richText1 ? documentToReactComponents(richText1, faqOptions) : null}
      </div>
    </section>
  );
}