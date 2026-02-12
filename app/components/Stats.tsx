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
    <section id="production" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="max-w-2xl mx-auto text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl">
          Якість, створена в цеху, а не на будмайданчику
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* LEFT: IMAGE */}
          <div className="pt-10 lg:py-16">
            <div className="relative w-full overflow-hidden bg-gray-50 h-56 sm:h-80 lg:h-140">
              <Image
                alt="Виробництво iProk"
                src="/img/office.webp"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="pb-24 pt-12 sm:pb-32 lg:py-16">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h2 className="text-lg font-bold text-[#2c5cf2]">
                Чому завод — це перевага
              </h2>

              <p className="mt-3 text-lg/8 text-gray-600">
                Заводське виробництво <b>прибирає головні ризики</b> класичного
                будівництва: залежність від погоди, людські помилки, “мокрі”
                процеси та бруд на об’єкті. Натомість — контроль, повторюваність
                і прогнозовані строки.
              </p>

              {/* ✅ Валідний dl: тільки dt/dd всередині */}
              <dl className="mt-16 grid w-full max-w-2xl mx-auto lg:mx-0 grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="border-t-2 sm:border-t-0 sm:border-l-2 border-[#2c5cf2]/90 pt-4 sm:pt-0 sm:pl-6"
                  >
                    {/* По семантиці краще: dt = заголовок, dd = опис */}
                    <dt className="text-2xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dt>
                    <dd className="mt-3 text-base text-gray-600">
                      {stat.name}
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
