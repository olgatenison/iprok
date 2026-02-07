import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";

const points = [
  "Ви не хочете експериментів з конструктивом — потрібне перевірене рішення.",
  "Потрібно знизити ризики на майданчику: менше “людського фактора”, переробок і простоїв.",
  "Важлива технологічна ясність: зрозумілий процес, контроль якості на кожному етапі.",
  "Будуєте “в довгу”: розрахунок на надійність, прогнозовану експлуатацію та ресурс.",
];

export default function WhoItsFor() {
  return (
    <section className="isolate overflow-hidden bg-black px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-12 sm:py-20 lg:max-w-4xl">
        {/* background shapes (оставила твою идею) */}

        <div className="absolute inset-y-0 right-1/2 -z-10 mr-56 w-[150vw] origin-bottom-left skew-x-[-68deg] bg-black shadow-2xl shadow-indigo-500/0 ring-4 ring-[#2c5cf2] sm:mr-20 md:mr-0 lg:right-full lg:mr-65 lg:origin-center" />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: text */}{" "}
          <div className="lg:col-span-5 lg:pt-2">
            <div className=" p-2">
              {/* <Image
                alt="Виробництво модулів iProk"
                width={900}
                height={900}
                src="/img/office.png"
                className="block w-full object-cover"
                priority={false}
              /> */}
            </div>
          </div>
          {/* RIGHT: image */}
          <div className="lg:col-span-7">
            <div className=" p-8">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Вам точно підійде iProk, якщо:
              </h2>

              <ul className="mt-10 space-y-4">
                {points.map((text, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
