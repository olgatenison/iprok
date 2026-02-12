import Image from "next/image";

const features = [
  {
    name: "Мінеральна вата",
    description:
      "Негорюча й стабільна у будь-яку пору року: ефективно приглушує шум і зберігає тепло навіть за перепадів температур.",
    icon: "/img/001.webp",
  },
  {
    name: "Піноізол",
    description:
      "Ідеально для заповнення порожнин: рівномірно розподіляється, прибирає “містки холоду” та підвищує якість утеплення.",
    icon: "/img/002.webp",
  },
  {
    name: "Пінополіуретан",
    description:
      "Максимум енергоефективності: щільне заповнення, висока теплоізоляція та герметичність для найвимогливіших задач.",
    icon: "/img/003.webp",
  },
  {
    name: "Ековата",
    description:
      "Екологічне рішення, яке щільно заповнює порожнини й створює комфортний мікроклімат у будинку.",
    icon: "/img/004.webp",
  },
  {
    name: "Інші сучасні ізоляційні матеріали",
    description:
      "Підлаштовуємось під ТЗ, бюджет і об’єкт: підбираємо утеплення, яке дає потрібний результат саме вам.",
    icon: "/img/005.webp",
  },
];

export default function System() {
  return (
    <section id="system" className="bg-white py-14 sm:pt-20">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-pretty text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Це не просто каркасний будинок.
            <span className="mt-3 block text-[#2c5cf2]">
              Це інженерна екосистема комфорту.
            </span>
          </h2>
        </div>

        {/* Text block */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12">
          <div>
            <h2 className="text-pretty text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              iProk — це продумана система, де каркас, утеплення та обшивка
              працюють як єдиний моноліт.
            </h2>

            <p className="mt-6 text-lg/8 text-gray-600">
              Це не “типовий каркасник”. iProk — комплексне рішення, у якому
              кожен елемент підсилює інший: менше тепловтрат, більше жорсткості,
              тиша та стабільний мікроклімат у будинку.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <Image
                src="/img/eco_safe_icon_512_final.webp"
                alt="Екологічно безпечні матеріали"
                width={64}
                height={64}
              />
              <p className="font-semibold text-[#003fdd]">
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

        {/* Image + list */}
        <div className="mt-16 grid grid-cols-1 place-items-center gap-10 lg:grid-cols-2 lg:gap-x-12 lg:place-items-stretch">
          {/* LEFT: image */}
          <div className="w-full">
            <div className="relative mx-auto flex justify-center overflow-hidden lg:-mt-20">
              <Image
                src="/img/w.webp"
                alt="Зразок системи iProk"
                width={1200}
                height={400}
                className="h-auto w-full max-w-2xl object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT: list (валидный dl) */}
          <div className="mx-auto w-full max-w-4xl lg:mx-0">
            <p className="mb-6 text-center text-3xl font-semibold tracking-tight text-[#2c5cf2] lg:text-left">
              Утеплення під ваше завдання:
            </p>

            <dl className="w-full space-y-5">
              {features.map((feature) => (
                <div key={feature.name} className="w-full">
                  <dt className="flex items-center gap-5">
                    {/* icon */}
                    <span className="flex-none">
                      <span className="relative block h-12 w-12 overflow-hidden bg-gray-100">
                        <Image
                          src={feature.icon}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="48px"
                          aria-hidden="true"
                        />
                      </span>
                    </span>

                    {/* title */}
                    <span className="text-2xl font-semibold tracking-tight text-gray-900">
                      {feature.name}
                    </span>
                  </dt>

                  {/* description aligned under title */}
                  <dd className="mt-2 pl-17 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
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
