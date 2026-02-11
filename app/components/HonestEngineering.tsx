import Image from "next/image";

export default function HonestEngineering() {
  const steps = [
    "Модулі привозимо невеликою машиною — без важкої логістики та зайвих витрат.",
    "Елементи легко піднімаються на висоту без кранів: монтаж швидше, простіше і без переплат.",
    "Збірка відбувається на майданчику за чіткою технологією — без «мокрих» процесів і залежності від погоди.",
    "Складні та критично важливі роботи виконані на заводі — на ділянці залишається точний монтаж і стикування.",
  ];

  return (
    <section className="bg-white pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Process + scale */}
        <div className="mt-14 grid grid-cols-1 gap-15 lg:grid-cols-12 lg:items-center">
          {/* Left: steps */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
              Більша частина робіт — у контрольованому середовищі на заводі
            </h3>

            <p className="mt-10 text-lg leading-8 text-gray-700">
              Ми переносимо максимум складних процесів у виробництво, де є
              контроль якості та точність. На об’єкті — мінімум хаосу: швидке
              збирання, менше ризиків і чіткі строки. Це напряму зменшує витрати
              на техніку, логістику та переробки.
            </p>

            <ul className="mt-12 space-y-3">
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
            <div className=" bg-[#eceffa]/70  p-6">
              <p className="text-base font-bold tracking-wide text-[#2c5cf2] text-center">
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

              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="text-base font-bold text-[#2c5cf2]">
                  На заводі
                </span>
                <span className="text-lg font-bold text-[#2c5cf2]">≈ 90%</span>
              </div>

              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="text-sm text-gray-600">На ділянці</span>
                <span className="text-sm font-semibold text-gray-800">
                  ≈ 10%
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-600 text-center">
                Менше техніки, менше «людського фактору», більше
                прогнозованості.
              </p>
            </div>
          </div>
        </div>

        {/* CTA line */}
        <p className="mt-10 max-w-2xl text-lg leading-8 text-black font-bold">
          Результат не «залежить від бригади» — він закладений у технології,
          заводському контролі та точному монтажі без зайвих витрат.
        </p>
      </div>
    </section>
  );
}
