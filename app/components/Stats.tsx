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
    <div className="relative bg-white">
      <Image
        alt=""
        width={200}
        height={800}
        src="/img/hero2.webp"
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-black">
              Переваги заводу
            </h2>
            <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl">
              Якість, створена в цеху, а не на будмайданчику
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Заводський підхід дає те, чого не вистачає класичному будівництву:
              контроль, повторюваність і готові рішення. Стабільна геометрія,
              перевірка на кожному етапі та готові модулі забезпечують
              прогнозований результат без зайвих переробок і пауз на об’єкті.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l-2 border-[#2c5cf2]/90 pl-6 "
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
  );
}
