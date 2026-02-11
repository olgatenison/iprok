export default function Philosophy() {
  return (
    <div className="bg-[#2c5cf2]">
      <div className="px-6 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-center text-base/7 font-semibold text-white">
            Філософія бренду
          </h3>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl my-10">
            Чесна інженерія без маркетингових ілюзій
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-indigo-200">
            iProk - це інженерний, технологічний та прагматичний продукт. <br />{" "}
            Ми не даємо абстрактних обіцянок. Ми пропонуємо технологію, яка
            реально працює. Без спрощень, що знецінюють суть.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contacts"
              className="
    relative z-10 block w-fit mx-auto 
    bg-white px-8 py-3 text-center
    text-[#2c5cf2] shadow-sm
    text-xl tracking-tight
    transition duration-200
    hover:bg-[#244fe0]/50 
 border border-white hover:text-white focus:text-white
  "
            >
              Отримати консультацію
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
