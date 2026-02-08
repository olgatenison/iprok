// import Image from "next/image";

// const features = [
//   {
//     name: "Мінеральна вата",
//     description:
//       "Негорюча, добре гасить звук і стабільно працює в широкому діапазоні температур.",
//     icon: "/img/001.png",
//   },
//   {
//     name: "Піноізол",
//     description:
//       "Легкий матеріал для заповнення порожнин: мінімізує пустоти й підвищує рівномірність утеплення.",
//     icon: "/img/002.png",
//   },
//   {
//     name: "Пінополіуретан",
//     description:
//       "Щільне заповнення та висока теплоізоляція — для задач, де важливий максимум енергоефективності.",
//     icon: "/img/003.png",
//   },
//   {
//     name: "Ековата",
//     description:
//       "Целюлозний утеплювач, який добре заповнює порожнини й підходить для “теплих” рішень.",
//     icon: "/img/004.png",
//   },
//   {
//     name: "Інші сучасні ізоляційні матеріали",
//     description:
//       "Система адаптується під ТЗ: підбираємо утеплення під вимоги об’єкта та бюджету.",
//     icon: "/img/005.png",
//   },
// ];

// export default function System() {
//   return (
//     <section className="bg-white py-20 sm:py-28">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* TOP TITLE */}
//         <div className="mx-auto max-w-3xl text-center">
//           <h2 className="text-pretty text-4xl font-bold tracking-tight text-black sm:text-6xl">
//             Це не каркасний будинок.
//             <span className="text-[#2c5cf2] block mt-3">
//               Це інженерна екосистема.
//             </span>
//           </h2>
//           <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-gray-900">
//             iProk — це цілісна система, де каркас, утеплення та обшивка працюють
//             як єдиний моноліт.
//           </p>
//         </div>

//         {/* MAIN */}
//         <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
//           {/* LEFT: IMAGE */}
//           <div className="lg:col-span-6">
//             <div className="relative overflow-hidden bg-gray-50">
//               <Image
//                 src="/img/4.jpg"
//                 alt="Зразок системи iProk"
//                 width={1400}
//                 height={1000}
//                 className="h-auto w-full object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* RIGHT: TEXT + LIST */}
//           <div className="lg:col-span-6">
//             {/* NEW TEXTS (как в референсе) */}
//             <div className="mb-10">
//               <h3 className="text-pretty text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                 Адаптивність теплоізоляції під вимоги{" "}
//                 <span className="block">конкретного проєкту.</span>
//               </h3>

//               <p className="mt-4 text-base leading-7 text-gray-600">
//                 Система не обмежена одним типом утеплювача. Після монтажу
//                 каркасу конструкція адаптується під технічне завдання.
//               </p>
//             </div>

//             <p className="mb-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#2c5cf2] uppercase">
//               <span className="h-px w-8 bg-[#2c5cf2]/70" aria-hidden="true" />
//               Варіанти утеплювача
//             </p>

//             {/* FEATURES */}
//             <dl className="space-y-8">
//               {features.map((feature) => (
//                 <div key={feature.name} className="flex gap-5">
//                   {/* icon */}
//                   <div className="flex-none">
//                     <div className="relative h-12 w-12 overflow-hidden bg-gray-100">
//                       <Image
//                         src={feature.icon}
//                         alt=""
//                         fill
//                         sizes="48px"
//                         className="object-cover"
//                         aria-hidden="true"
//                       />
//                     </div>
//                   </div>

//                   {/* text */}
//                   <div>
//                     <dt className="font-semibold text-gray-900">
//                       {feature.name}
//                     </dt>
//                     <dd className="mt-2 text-base leading-7 text-gray-600">
//                       {feature.description}
//                     </dd>
//                   </div>
//                 </div>
//               ))}
//             </dl>

//             {/* BOTTOM NOTE + BADGE */}
//             <div className="mt-10 space-y-4">
//               <p className="text-base leading-7 text-gray-600">
//                 Модулі з&apos;єднуються листовими матеріалами, формуючи жорстку
//                 та стабільну конструкцію з прогнозованими властивостями.
//               </p>

//               <div className="inline-flex items-center gap-3 border border-[#2c5cf2]/40 bg-[#2c5cf2]/5 px-4 py-3">
//                 <span
//                   className="inline-flex h-9 w-9 items-center justify-center bg-white ring-1 ring-[#2c5cf2]/20"
//                   aria-hidden="true"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M12 2l3 6 6 .9-4.5 4.4 1.1 6.2L12 16.9 6.4 19.5l1.1-6.2L3 8.9 9 8l3-6z"
//                       stroke="#2c5cf2"
//                       strokeWidth="1.6"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>

//                 <p className="text-sm font-medium text-gray-800">
//                   Екологічно безпечний склад профілю та утеплювача.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const features = [
  {
    name: "Мінеральна вата",
    description:
      "Негорюча, добре гасить звук і стабільно працює в широкому діапазоні температур.",
    icon: "/img/001.png",
  },
  {
    name: "Піноізол",
    description:
      "Легкий матеріал для заповнення порожнин: мінімізує пустоти й підвищує рівномірність утеплення.",
    icon: "/img/002.png",
  },
  {
    name: "Пінополіуретан",
    description:
      "Щільне заповнення та висока теплоізоляція — для задач, де важливий максимум енергоефективності.",
    icon: "/img/003.png",
  },
  {
    name: "Ековата",
    description:
      "Целюлозний утеплювач, який добре заповнює порожнини й підходить для “теплих” рішень.",
    icon: "/img/004.png",
  },
  {
    name: "Інші сучасні ізоляційні матеріали",
    description:
      "Система адаптується під ТЗ: підбираємо утеплення під вимоги об’єкта та бюджету.",
    icon: "/img/005.png",
  },
];

export default function System() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title + subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Це не каркасний будинок.
            <span className="text-[#2c5cf2] block mt-3">
              Це інженерна екосистема.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-gray-900">
            iProk — це цілісна система, де каркас, утеплення та обшивка працюють
            як єдиний моноліт.
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-gray-50">
              <Image
                src="/img/4.jpg" // ✅ public/img/4.jpg
                alt="Зразок системи iProk"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: list */}
          <div className="lg:col-span-6">
            <dl className="space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex gap-5">
                  {/* icon */}
                  <div className="flex-none">
                    <div className="relative h-12 w-12 overflow-hidden bg-gray-100">
                      <Image
                        src={feature.icon}
                        alt="" // декоративно, название рядом
                        fill
                        className="object-cover"
                        sizes="48px"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div>
                    <dt className="font-semibold text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
