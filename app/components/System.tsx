import Image from "next/image";

const features = [
  {
    name: "Мінеральна вата",
    description:
      "Негорюча й стабільна у будь-яку пору року: ефективно приглушує шум і зберігає тепло навіть за перепадів температур.",
    icon: "/img/001.png",
  },
  {
    name: "Піноізол",
    description:
      "Ідеально для заповнення порожнин: рівномірно розподіляється, прибирає “містки холоду” та підвищує якість утеплення.",
    icon: "/img/002.png",
  },
  {
    name: "Пінополіуретан",
    description:
      "Максимум енергоефективності: щільне заповнення, висока теплоізоляція та герметичність для найвимогливіших задач.",
    icon: "/img/003.png",
  },
  {
    name: "Ековата",
    description:
      "Екологічне рішення, яке щільно заповнює порожнини й створює комфортний мікроклімат у будинку.",
    icon: "/img/004.png",
  },
  {
    name: "Інші сучасні ізоляційні матеріали",
    description:
      "Підлаштовуємось під ТЗ, бюджет і об’єкт: підбираємо утеплення, яке дає потрібний результат саме вам.",
    icon: "/img/005.png",
  },
];

export default function System() {
  return (
    <section id="system" className="bg-white py-14 sm:pt-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title + subtitle */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Це не просто каркасний будинок.
            <span className="text-[#2c5cf2] block mt-3">
              Це інженерна екосистема комфорту.
            </span>
          </h2>
        </div>

        {/* Text block */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12">
          <div>
            <h2 className="text-pretty text-2xl font-bold tracking-tight text-gray-900 sm:text-3хl">
              iProk — це продумана система, де каркас, утеплення та обшивка
              працюють як єдиний моноліт.
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Це не “типовий каркасник”. iProk — комплексне рішення, у якому
              кожен елемент підсилює інший: менше тепловтрат, більше жорсткості,
              тиша та стабільний мікроклімат у будинку.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src="/img/eco_safe_icon_512_final.png"
                alt="Екологічно безпечні матеріали"
                width={64}
                height={64}
              />
              <p className="text-[#003fdd] font-semibold">
                Екологічно безпечний склад
                <br />
                профілю та утеплювача.
              </p>
            </div>
          </div>

          <div>
            <p className="text-lg/8 text-gray-600">
              <b>Конструктивна основа.</b> Несуча частина iProk — міцний
              металопластиковий каркас. Він виготовляється модульно у
              контрольованих виробничих умовах, тому якість — прогнозована, а
              монтаж — швидкий і точний.
            </p>

            <p className="mt-6 text-lg/8 text-gray-600">
              <b>Гнучкість у виборі утеплення.</b> Система не прив’язана до
              одного матеріалу: після монтажу каркасу ми підбираємо утеплювач
              під ваше технічне завдання — енергоефективність, акустика, бюджет,
              сезонність.
            </p>

            <p className="mt-6 text-lg/8 text-gray-600">
              <b>Фінальна обшивка — під стиль проєкту.</b> Модулі з’єднуються
              листовими матеріалами, формуючи жорстку, стабільну конструкцію з
              прогнозованими властивостями. А зовнішнє та внутрішнє оздоблення
              може бути будь-яким: фасадні системи, панелі, штукатурка та інші
              рішення — залежно від ваших потреб.
            </p>
          </div>
        </div>

        {/* Main layout */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden  -mt-20">
              <Image
                src="/img/w.png"
                alt="Зразок системи iProk"
                width={1200}
                height={400}
                className="h-auto w-120 object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: list */}
          <div className="lg:col-span-6">
            <p className="mb-6 text-3xl font-semibold tracking-tight text-[#2c5cf2]">
              Утеплення під ваше завдання:
            </p>

            <dl className="space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex gap-5 items-center max-w-lg"
                >
                  {/* icon */}
                  <div className="flex-none">
                    <div className="relative h-12 w-12 overflow-hidden bg-gray-100">
                      <Image
                        src={feature.icon}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="48px"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div className="max-w-xl">
                    <dt className="text-2xl font-semibold tracking-tight text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-gray-900" />
      </div>
    </section>
  );
}
