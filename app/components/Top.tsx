// app\components\Top.tsx
import Image from "next/image";
import type { SectionFields } from "../types/contentful";

type TopProps = Pick<SectionFields, "subtitle1" | "title" | "title1">;

export default function Top({ subtitle1, title, title1 }: TopProps) {
  return (
    <section className="pt-8 pb-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 text-center">
        {/* Верхняя строка */}
        {subtitle1 ? (
          <p className="text-sm md:text-base/7 font-semibold text-[#2c5cf2]">
            {subtitle1}
          </p>
        ) : null}

        {/* Заголовок */}
        <h2 className="mx-auto my-5 text-balance text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          {title}
          <br />
          <span className="font-bold tracking-tight text-[#2c5cf2]">
            {title1}
          </span>
        </h2>

        {/* Картинка */}
        <Image
          src="/img/three-2.webp"
          alt="..."
          width={570}
          height={170}
          className="mx-auto"
          sizes="(max-width: 768px) 90vw, 570px"
        />
      </div>
    </section>
  );
}
