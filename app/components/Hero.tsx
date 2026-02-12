import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black py-12 sm:py-20">
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
          <p className="md:mt-8 text-pretty text-xl font-base text-[#dfb88e]  md:max-w-xl max-w-60">
            Інноваційна інженерна <br />
            система збірного будівництва
          </p>
          <h1 className=" text-pretty text-8xl lg:text-[200px] font-bold tracking-tight text-blue-600 ">
            iProk
          </h1>

          <p className="mt-8 text-pretty text-lg font-base text-gray-500 max-w-50 lg:max-w-xl">
            <span className="text-white block font-semibold">
              Технологія, яка спрощує будівництво:
            </span>{" "}
            Від хаосу на майданчику — до заводської точності. <br />
            90% робіт переносимо в цех — на об’єкті залишається монтаж.
          </p>
          <a
            href="#contacts"
            className="block w-fit mt-12 bg-transparent border-white border md:px-8 px-5 py-3 text-center  text-white shadow-sm hover:bg-[#2c5cf2] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#2c5cf2] text-base md:text-xl tracking-tight "
          >
            Отримати консультацію
          </a>
        </div>
      </div>
    </div>
  );
}
