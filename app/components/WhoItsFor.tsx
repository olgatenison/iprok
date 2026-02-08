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
      <div className="relative mx-auto max-w-7xl py-12 sm:py-20">
        {/* decorative skew shape */}
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-56 w-[150vw] origin-bottom-left skew-x-[-68deg] bg-[#0f172a] ring-4 ring-[#2c5cf2] sm:mr-20 md:mr-0 lg:right-full lg:mr-65 lg:origin-center" />

        {/* layout */}
        <div className="flex w-full justify-start lg:justify-end">
          {/* content pinned to the right on lg */}
          <div className="w-full max-w-xl  lg:ml-auto">
            <div className="p-0 sm:p-4 lg:p-8">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Вам точно підійде iProk, якщо:
              </h2>

              <ul className="mt-10 space-y-5">
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
