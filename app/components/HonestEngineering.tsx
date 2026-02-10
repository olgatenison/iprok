import Image from "next/image";

export default function HonestEngineering() {
  const pillars = [
    {
      n: "01.",
      title: "Заводська точність",
      text: "Критично важливі операції виконуються у контрольованих умовах — менше людського фактору, більше прогнозованості.",
    },
    {
      n: "02.",
      title: "Довговічність конструктиву",
      text: "Система проєктується як цілісна: каркас, утеплення та обшивка працюють разом — без компромісів по суті.",
    },
    {
      n: "03.",
      title: "Швидкість без ризиків",
      text: "Мінімум «мокрих» процесів — стабільні терміни, незалежність від погоди та менше переробок.",
    },
    {
      n: "04.",
      title: "Менше хаосу на ділянці",
      text: "Невеликий обсяг складних робіт на місці — менше сміття, техніки та непередбачуваних затримок.",
    },
  ];

  const steps = [
    "Готові модулі доставляються на об’єкт у запланований час.",
    "Монтаж відбувається безпосередньо на майданчику за чіткою технологією.",
    "Обсяг складних робіт на місці критично знижено — ключова частина зроблена на заводі.",
  ];

  return (
    <section className="bg-white py-14 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Process + scale */}
        <div className="mt-14 grid grid-cols-1 gap-15 lg:grid-cols-12 lg:items-center">
          {/* Left: steps */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Більша частина робіт — у контрольованому середовищі на заводі
            </h3>
            <p className="mt-10 text-lg leading-8 text-gray-700">
              На ділянці — лише точний монтаж і стикування. Це дає стабільні
              строки, менше ризиків і прогнозований результат.
            </p>

            <ul className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#2c5cf2]" />
                  <p className="text-base leading-7 text-gray-700">{s}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: scale */}
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="rounded-2xl bg-gray-50 p-6">
              <p className="text-sm font-semibold tracking-wide text-gray-800 uppercase">
                Частка робіт у контрольованих умовах
              </p>

              <div className="mt-4">
                <Image
                  src="/img/progress_bars_90pct_2c5cf2_2x.png"
                  alt="90% робіт виконано у контрольованих умовах"
                  width={592}
                  height={142}
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-600">На заводі</span>
                <span className="text-lg font-bold text-[#2c5cf2]">≈ 90%</span>
              </div>

              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm text-gray-600">На ділянці</span>
                <span className="text-sm font-semibold text-gray-800">
                  ≈ 10%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Optional CTA line */}
        <p className="mt-10 max-w-xl text-lg leading-8 text-black font-bold">
          Результат не «залежить від бригади» — він закладений у технології та
          контролі якості на кожному етапі.
        </p>
      </div>
    </section>
  );
}
