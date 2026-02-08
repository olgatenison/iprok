export default function Contact() {
  return (
    <div className=" bg-white px-6 py-0 md:py-20 lg:px-8 max-w-7xl mx-auto -mb-6">
      <div className="flex lg:flex-row flex-col items-start gap-12">
        {/* title block left than center*/}
        <div className="mx-auto max-w-2xl ">
          <div className="lg:text-left text-center mx-auto">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Реалізуйте ваш{" "}
              <span className="block font-bold tracking-tight text-[#2c5cf2]">
                {" "}
                проєкт з iProk{" "}
              </span>
            </h2>
            <p className="mt-7 text-lg/8 text-gray-600 text-balance">
              Розкажіть про ваш проєкт — ми швидко оцінимо доцільність рішення
              та підкажемо оптимальну конфігурацію.
            </p>
          </div>
          <div className="bg-[#eceffa] p-8 max-w-80 lg:mt-40 lg:block hidden">
            <h3 className="text-lg font-semibold text-gray-900">Контакти:</h3>

            <dl className="mt-3 space-y-3 text-lg text-gray-900">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:info@iprok.com.ua"
                    className=" hover:text-[#2c5cf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5cf2]"
                    aria-label="Написати на email info@iprok.com.ua"
                  >
                    info@iprok.com.ua
                  </a>
                </dd>
              </div>

              <div>
                <dt className="sr-only">Номер телефону</dt>
                <dd>
                  <a
                    href="tel:+380000000000"
                    className=" hover:text-[#2c5cf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5cf2]"
                    aria-label="Зателефонувати за номером +380 00 000 0000"
                  >
                    +380 00 000 0000
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* form */}
        <form
          action="#"
          method="POST"
          className="mx-auto mt-3 max-w-xl lg:mt-0"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Ім&apos;я
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Прізвище
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Номер телефону
              </label>
              <div className="mt-2.5">
                <div className="flex  bg-white outline -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#2c5cf2]">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative"></div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="+380 00 000 0000"
                    className="block min-w-0 grow py-1.5 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Повідомлення
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px outline-offset-2 outline-[#2c5cf2] ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-checked:bg-[#2c5cf2] has-focus-visible:outline">
                  <span className="size-4 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 size-full appearance-none focus:outline-none"
                  />
                </div>
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm/6 text-gray-600"
              >
                Відправляючи цю форму, ви погоджуєтесь з нашою{" "}
                <a
                  href="#"
                  className="whitespace-nowrap font-semibold text-[#2c5cf2]"
                >
                  політикою конфіденційності
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="block w-full  bg-[#2c5cf2] px-4 py-3 text-center  font-semibold text-white shadow-sm hover:bg-[#2c5cf2] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#2c5cf2] text-2xl tracking-tight "
            >
              Отримати консультацію
            </button>
          </div>
        </form>

        {/* contacts block for mobile */}
        <div className="bg-[#eceffa] p-8 md:w-xl w-full mx-auto block lg:hidden">
          <h3 className="text-lg font-semibold text-gray-900">Контакти:</h3>

          <dl className="mt-2 space-y-2 text-lg text-gray-900">
            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <a
                  href="mailto:info@iprok.com.ua"
                  className=" hover:text-[#2c5cf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5cf2]"
                  aria-label="Написати на email info@iprok.com.ua"
                >
                  info@iprok.com.ua
                </a>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Номер телефону</dt>
              <dd>
                <a
                  href="tel:+380000000000"
                  className=" hover:text-[#2c5cf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5cf2]"
                  aria-label="Зателефонувати за номером +380 00 000 0000"
                >
                  +380 00 000 0000
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
