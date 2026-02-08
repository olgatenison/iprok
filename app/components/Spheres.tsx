import Image from "next/image";

const collections = [
  {
    name: "Об'єкти зі змішаним функціональним призначенням",
    details: "Перший поверх — комерція, вище — житло або офіси.",
    imageSrc: "/img/01.jpg",
    imageAlt: "Змішане призначення: комерція на 1-му поверсі, житло/офіси вище",
  },
  {
    name: "Житлові об'єкти різного типу",
    details:
      "Приватні будинки, таунхауси, котеджні містечка, малоповерхові ЖК.",
    imageSrc: "/img/02.jpg",
    imageAlt: "Житлові об’єкти різного типу",
  },
  {
    name: "Технологічні проєкти з прогнозованим результатом",
    details:
      "Виробничі та інженерні будівлі: цехи, майстерні, станції сервісу.",
    imageSrc: "/img/03.jpg",
    imageAlt: "Інженерні та виробничі об’єкти з прогнозованим результатом",
  },
];

export default function Spheres() {
  return (
    <section className="relative bg-white">
      {/* Background на всех экранах */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="h-105 w-full bg-[#0f172a] sm:h-130" />
        <div className="h-48 w-full bg-white" />
      </div>

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 text-center sm:pt-24 sm:pb-40 lg:px-8">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Сфери застосування:
        </h2>
        <p className="mt-3 text-lg text-white/80">
          там, де важлива інженерна логіка.
        </p>
        <p className="mt-3 text-lg text-white/70">
          Система не обмежує архітектурні рішення та адаптується під різні
          масштаби.
        </p>
      </div>

      {/* Cards */}
      <div className="relative mx-auto -mt-10 grid max-w-md grid-cols-1 gap-6 px-6 pb-16 sm:-mt-20 sm:max-w-7xl sm:grid-cols-3 lg:gap-8 lg:px-8">
        {collections.map((c) => (
          <article
            key={c.name}
            className="overflow-hidden  bg-white shadow-xl "
          >
            {/* Image */}
            <div className="group relative aspect-4/5 w-full overflow-hidden">
              <Image
                src={c.imageSrc}
                alt={c.imageAlt}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/0 via-black/30 to-black/70" />
              <div className="absolute inset-x-0 top-0 p-6">
                <h3 className="text-2xl font-semibold leading-snug text-white">
                  {c.name}
                </h3>
              </div>
            </div>

            {/* White text block under image */}
            <div className="p-6 ">
              <p className="text-lg leading-6 text-gray-900">{c.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// import Image from "next/image";

// const collections = [
//   {
//     name: "Об'єкти зі змішаним функціональним призначенням",
//     imageSrc: "/img/01.jpg",
//     imageAlt: "Змішане призначення: комерція на 1-му поверсі, житло/офіси вище",
//   },
//   {
//     name: "Житлові об'єкти різного типу",
//     imageSrc: "/img/02.jpg",
//     imageAlt: "Житлові об’єкти різного типу",
//   },
//   {
//     name: "Будь-які проекти, що вимагають технологічності та прогнозованого результату",
//     imageSrc: "/img/03.jpg",
//     imageAlt: "Інженерні та виробничі об’єкти з прогнозованим результатом",
//   },
// ];

// export default function Spheres() {
//   return (
//     <section className="relative bg-white">
//       {/* ✅ Background на ВСЕХ экранах */}
//       <div aria-hidden="true" className="absolute inset-0">
//         <div className="h-105 w-full bg-black sm:h-130" />
//         <div className="h-48 w-full bg-white" />
//       </div>

//       {/* Header */}
//       <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 text-center sm:pt-24 sm:pb-40 lg:px-8">
//         <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
//           Сфери застосування:
//         </h2>
//         <p className="mt-3 text-lg text-white/80">
//           там, де важлива інженерна логіка.
//         </p>
//         <p className="mt-3 text-lg text-white/70">
//           Система не обмежує архітектурні рішення та адаптується під різні
//           масштаби.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="relative mx-auto -mt-10 grid max-w-md grid-cols-1 gap-6 px-6 pb-16 sm:-mt-20 sm:max-w-7xl sm:grid-cols-3 lg:gap-8 lg:px-8">
//         {collections.map((c) => (
//           <article
//             key={c.name}
//             className="group relative overflow-hidden  bg-white shadow-xl ring-1 ring-black/5"
//             aria-label={c.name}
//           >
//             <div className="relative aspect-4/5 w-full">
//               <Image
//                 src={c.imageSrc}
//                 alt={c.imageAlt}
//                 fill
//                 sizes="(min-width: 1024px) 28vw, (min-width: 640px) 33vw, 100vw"
//                 className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//               />
//               <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/10 to-black/70" />
//             </div>

//             <div className="absolute inset-0 flex items-end p-6">
//               <div className="max-w-[95%]">
//                 {/* <p className="text-sm text-white/80">Сфера застосування</p> */}
//                 <h3 className="mt-1 text-lg font-semibold leading-snug text-white">
//                   {c.name}
//                 </h3>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
