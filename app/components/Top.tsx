import Image from "next/image";

export default function Top() {
  return (
    <div className="  pt-8 pb-12 sm:pb-20">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-[#2c5cf2]">
          Швидкість{" "}
          <span className="mx-2 inline-block text-[1.3em] leading-none align-middle">
            &middot;
          </span>
          Надійність{" "}
          <span className="mx-2 inline-block text-[1.3em] leading-none align-middle">
            &middot;
          </span>
          Передбачуваність
        </h2>
        <p className="mx-auto my-5 text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Зміна логіки будівництва: <br />
          <span className="font-bold tracking-tight text-[#2c5cf2]">
            Від невідомості до контролю
          </span>
        </p>
        <div>
          <Image
            alt=""
            width={570}
            height={170}
            src="/img/three-2.png"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
