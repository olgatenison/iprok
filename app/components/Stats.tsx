import Image from "next/image";

const stats = [
  {
    id: 1,
    name: "Модулі збираються на стапелях — без «на око» та перекосів",
    value: "Геометрична стабільність",
  },
  {
    id: 2,
    name: "Сухий цех, професійне обладнання й технагляд на кожному етапі.",
    value: "Контрольовані умови",
  },
  {
    id: 3,
    name: "На об’єкт приїжджають готові стіни — без набору матеріалів і задач «на місці».",
    value: "Заводська готовність",
  },
  {
    id: 4,
    name: "Менше простоїв і переробок — легше планувати графік та кошторис.",
    value: "Прогнозованість витрат",
  },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="mt-12 text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl">
          Якість, створена в цеху, а не на будмайданчику
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* LEFT: IMAGE (внутри контейнера, не на полэкрана) */}
          <div className="pt-10 lg:py-16">
            <div className="relative w-full overflow-hidden bg-gray-50 h-56 sm:h-80 lg:h-140">
              <Image
                alt=""
                src="/img/office.png"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="pb-24 pt-12 sm:pb-32 lg:py-16">
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-[#2c5cf2]">
                Переваги заводу
              </h2>

              <p className="mt-3 text-lg/8 text-gray-600">
                Заводське виробництво <b>прибирає головні ризики </b>класичного
                будівництва: залежність від погоди, людські помилки, “мокрі”
                процеси та бруд на об’єкті. Натомість — контроль, повторюваність
                і прогнозовані строки.
              </p>

              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col gap-y-3 border-l-2 border-[#2c5cf2]/90 pl-6"
                  >
                    <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
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
