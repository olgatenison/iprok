import Image from "next/image";
import type { SectionFields } from "../types/contentful";

type HeroProps = Pick<
  SectionFields,
  | "title"
  | "subtitle1"
  | "subtitle2"
  | "description"
  | "description2"
  | "btn"
>;

export default function Hero({
  title,
  subtitle1,
  subtitle2,
  description,
   description2,
  btn,
}: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden bg-black py-12 sm:py-20">
      <Image
        alt=""
        width={1200}
        height={800}
        src="/img/hero2.webp"
        className="absolute inset-0 -z-10 size-full object-cover lg:object-contain object-bottom"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* SUBTITLE */}
          <p className="md:mt-8 text-pretty text-xl font-base text-[#dfb88e] max-w-[26ch]">
  {subtitle1}
</p>

          {/* TITLE */}
          <h1 className="text-pretty text-8xl lg:text-[200px] font-bold tracking-tight text-blue-600">
            {title}
          </h1>

          {/* DESCRIPTION */}
          <div className="mt-8 text-pretty text-lg font-base text-gray-500 max-w-xl">
            <div className="text-white block font-semibold ">
              {subtitle2}
            </div>
            {description}
          </div>

          {/* BUTTON */}
          <a
            href="#contacts"
            className="block w-fit mt-12 bg-transparent border-white border md:px-8 px-5 py-3 text-center text-white shadow-sm hover:bg-[#2c5cf2] text-base md:text-xl tracking-tight"
          >
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
}