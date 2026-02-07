import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black py-12 sm:py-30">
      <Image
        alt=""
        width={1200}
        height={800}
        src="/img/hero2.webp"
        className="absolute inset-0 -z-10 size-full object-cover lg:object-contain
        object-bottom"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="md:mt-8 text-pretty text-xl font-base text-[#dfb88e]  max-w-xl">
            Інноваційна інженерна <br />
            система збірного будівництва
          </p>
          <h1 className=" text-pretty text-8xl lg:text-[200px] font-bold tracking-tight text-blue-600  ">
            iProk
          </h1>
          <p className="mt-8 text-pretty text-lg font-base text-gray-500 max-w-50 lg:max-w-xl">
            <span className="text-white block font-semibold">
              Технологія, яка спрощує будівництво:
            </span>{" "}
            Від хаосу на майданчику — до заводської точності. <br />
            90% робіт переносимо в цех — на об’єкті залишається монтаж.
          </p>
        </div>
      </div>
    </div>

    // <section className="relative bg-white min-h-screen overflow-hidden">
    //   <div className="mx-auto max-w-7xl lg:grid lg:h-screen lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    //     {/* LEFT */}
    //     <div className="px-6 py-12 sm:py-16 lg:col-span-7 lg:px-0 lg:py-0 lg:flex lg:items-center xl:col-span-6">
    //       <div className="mx-auto max-w-lg lg:mx-0">
    //         {/* <Image
    //           width={30}
    //           height={30}
    //           alt="Your Company"
    //           src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
    //           className="h-11 w-auto"
    //         /> */}

    //         <h1 className="mt-10 text-pretty text-[150px] font-bold tracking-tight text-blue-600 text-right">
    //           iProk
    //         </h1>

    //         <p className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
    //           інженерна екосистема збірного будівництва
    //         </p>
    //         <p className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8">
    //           Технологія, яка спрощує будівництво: від хаосу на майданчику — до
    //           заводської точності.
    //         </p>
    //         <div className="mt-8 flex items-center gap-x-6">
    //           <a
    //             href="#"
    //             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Get started
    //           </a>
    //           <a href="#" className="text-sm/6 font-semibold text-gray-900">
    //             Learn more <span aria-hidden="true">→</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* RIGHT IMAGE */}
    //     <div className="relative lg:col-span-5 lg:h-full lg:-mr-8 xl:absolute xl:inset-0 xl:left-2/3 xl:mr-0">
    //       <div className="relative h-64 sm:h-80 lg:h-full w-full">
    //         <Image
    //           alt=""
    //           src="/img/hero.png"
    //           fill
    //           priority
    //           className="object-cover"
    //           sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 40vw, 100vw"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
