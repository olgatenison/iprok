export default function ValueSection() {
  const items = [
    {
      n: "01.",
      title: "Швидкість реалізації:",
      text: "Прискорення процесу в рази завдяки модульності.",
    },
    {
      n: "02.",
      title: "Надійність:",
      text: "Конструктив розрахований на довготривалу експлуатацію.",
    },
    {
      n: "03.",
      title: "Економічна доцільність:",
      text: "Економія за рахунок швидкості та відсутності переробок.",
    },
    {
      n: "04.",
      title: "Практичність:",
      text: "Мінімум сміття та техніки на ділянці.",
    },
  ];

  return (
    <section id="advantages" className="bg-white pt-14 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-balance text-4xl font-bold tracking-tight text-black sm:text-5xl my-10">
          Ми вибудовали для вас систему, що забезпечує повну передбачуваність
          результату
        </h2>

        {/* 4 columns */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.n} className="relative">
              <div className="flex items-start gap-3">
                {/* dot */}
                <span className="mt-2 inline-block h-3 w-3 rounded-full bg-[#2c5cf2] shrink-0" />
                <div>
                  <p className="text-xl font-semibold text-black">
                    <span className="mr-2 text-[#2c5cf2] font-bold">
                      {it.n}
                    </span>
                    {it.title}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-700">
                    {it.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-18">
          <div className="relative">
            {/* line */}
            <div className="h-2 w-full rounded-full bg-linear-to-r from-[#2c5cf2]/35 to-[#2c5cf2] " />
            {/* arrow head */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2">
              <div className="h-0 w-0 border-y-18 border-y-transparent border-l-26 border-l-[#2c5cf2] " />
            </div>
          </div>

          <div className="mt-4 flex justify-between text-base font-semibold text-[#2c5cf2] ">
            <span>start</span>
            <span>finish</span>
          </div>
        </div>
      </div>
    </section>
  );
}
