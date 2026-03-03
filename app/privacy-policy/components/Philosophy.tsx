import type { SectionFields } from "../types/contentful";

type PhilosophyProps = Pick<SectionFields, "title" | "title1" | "description" | "btn"> & {
  href?: string; // если хочешь переопределять ссылку (по умолчанию #contacts)
};

function normalizeString(s?: string) {
  return (s ?? "").trim();
}

export default function Philosophy({
  title,
  title1,
  description,
  btn,
  href = "#contacts",
}: PhilosophyProps) {
  const eyebrow = normalizeString(title1) || "Філософія бренду";
  const heading = normalizeString(title) || "Чесна інженерія без маркетингових ілюзій";
  const body = normalizeString(description) || "";
  const cta = normalizeString(btn) || "Отримати консультацію";

  return (
    <div className="bg-[#2c5cf2]">
      <div className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-center text-base/7 font-semibold text-white">
            {eyebrow}
          </h3>

          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl my-10">
            {heading}
          </h2>

          {body ? (
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-indigo-200 whitespace-pre-line">
              {body}
            </p>
          ) : null}

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={href}
              className="
                relative z-10 block w-fit mx-auto
                bg-white px-8 py-3 text-center
                text-[#2c5cf2] shadow-sm
                text-xl tracking-tight
                transition duration-200
                hover:bg-[#244fe0]/50
                border border-white hover:text-white focus:text-white
              "
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}