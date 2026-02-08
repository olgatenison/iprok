import Image from "next/image";
import type { ComponentType } from "react";
import {
  BoltIcon,
  SunIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

type Feature = {
  name: string;
  description: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
};

const features: Feature[] = [
  {
    name: "Несуча здатність",
    description:
      "Силовий каркас: потужне внутрішнє армування бере на себе навантаження та зберігає форму конструкції.",
    icon: BoltIcon,
  },
  {
    name: "Жодних містків холоду",
    description:
      "Без “холодних зон”: пластик не проводить холод у конструкцію — комфортні стіни без конденсату та промерзання.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Терморозрив",
    description:
      "Тепло всередині: комбінація пластику та повітряних камер зменшує тепловтрати й підвищує енергоефективність.",
    icon: SunIcon,
  },
  {
    name: "Геометрія",
    description:
      "Точність, що прискорює монтаж: стабільна геометрія профілю дає щільні стики та менше підгонки на об’єкті.",
    icon: Squares2X2Icon,
  },
];

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
    <div className={`flex ${rowJustify}`}>
      <div
        className={`flex gap-4 ${
          align === "right" ? "flex-row" : "flex-row lg:flex-row-reverse"
        }`}
      >
        <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center">
          <Icon className="h-7 w-7 text-[#2c5cf2]" aria-hidden="true" />
        </span>

        <div className={`max-w-md ${textAlign}`}>
          <dt className="text-3xl font-semibold tracking-tight text-gray-900">
            {feature.name}
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-600">
            {feature.description}
          </dd>
        </div>
      </div>
    </div>
  );
}

function CenterImage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl lg:max-w-md overflow-hidden bg-gray-50">
        <Image
          src="/img/dna2.jpg"
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

export default function DNA() {
  const [f1, f2, f3, f4] = features;

  return (
    <section className="bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Конструктивна ДНК iProk
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium text-gray-700 sm:text-xl">
            Каркас, що тримає навантаження й економить тепло
          </p>
        </div>

        {/* MOBILE */}
        <div className="mt-14 space-y-12 md:hidden">
          <dl className="grid gap-10">
            <FeatureItem feature={f1} />
            <FeatureItem feature={f2} />
          </dl>

          <CenterImage />

          <dl className="grid gap-10">
            <FeatureItem feature={f3} />
            <FeatureItem feature={f4} />
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
            <CenterImage />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
          <dl className="grid gap-10 lg:col-span-4">
            <FeatureItem feature={f1} align="left" />
            <FeatureItem feature={f2} align="left" />
          </dl>

          <div className="lg:col-span-4">
            <CenterImage />
          </div>

          <dl className="grid gap-10 lg:col-span-4">
            <FeatureItem feature={f3} align="right" />
            <FeatureItem feature={f4} align="right" />
          </dl>
        </div>
      </div>
    </section>
  );
}
