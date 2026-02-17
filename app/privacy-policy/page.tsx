import FooterHeader from "../components/FooterHeader";

const Dot = () => (
  <span
    className="mt-3 inline-block size-1.5 shrink-0 rounded-full bg-black"
    aria-hidden="true"
  />
);

export default function PrivacyPolicy() {
  return (
    <>
      <FooterHeader />

      <section className="bg-white px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          <p className="text-base font-semibold text-[#2c5cf2]">
            Юридична інформація
          </p>

          <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Політика щодо обробки персональних даних
          </h1>

          <p className="mt-6 text-xl/8">
            Цю Політику складено відповідно до статті 8 Закону України «Про
            захист персональних даних» і вона визначає порядок обробки
            персональних даних та заходи із забезпечення їх безпеки, які
            застосовує <b>iProk</b>.
          </p>

          <p className="mt-4">
            Політика застосовується до всієї інформації, яку ми можемо отримати
            про відвідувачів вебсайту <b>iprok.com.ua</b> (далі — «Вебсайт»). Ми
            виступаємо володільцем (контролером) персональних даних і
            забезпечуємо їхню обробку відповідно до чинного законодавства.
          </p>

          {/* 1 */}
          <h2 className="mt-14 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            1. Загальні положення
          </h2>
          <p className="mt-4 text-gray-600">
            Ця Політика описує, які дані ми збираємо, навіщо їх обробляємо, як
            захищаємо, кому можемо передавати та які права має користувач.
          </p>

          {/* 2 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            2. Терміни
          </h2>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              <b className="text-gray-900">Персональні дані</b> — будь-яка
              інформація про фізичну особу, яку ідентифіковано або можна
              ідентифікувати.
            </p>
            <p>
              <b className="text-gray-900">Обробка персональних даних</b> —
              будь-яка дія або сукупність дій із персональними даними (збирання,
              зберігання, використання, передача, видалення тощо).
            </p>
            <p>
              <b className="text-gray-900">Надання / поширення</b> — дії з
              розкриття даних певній або невизначеній кількості осіб.
            </p>
            <p>
              <b className="text-gray-900">Знеособлення / знищення</b> — дії, що
              унеможливлюють ідентифікацію особи / безповоротно видаляють дані.
            </p>
            <p>
              <b className="text-gray-900">Користувач</b> — будь-який відвідувач
              Вебсайту.
            </p>
            <p>
              <b className="text-gray-900">Обробник</b> — постачальник послуг,
              який обробляє персональні дані від нашого імені на підставі
              договору.
            </p>
          </div>

          {/* 3 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            3. Які дані ми обробляємо
          </h2>

          <p className="mt-4 text-gray-600">
            <b className="text-gray-900">Дані із форм зв’язку:</b> ім’я,
            прізвище, адреса електронної пошти, номер телефону, текст
            повідомлення, а також інша інформація, яку ви добровільно зазначаєте
            у зверненні.
          </p>

          <ul role="list" className="mt-6 space-y-3 text-gray-600">
            {[
              "ім’я, прізвище;",
              "адреса електронної пошти;",
              "номер телефону;",
              "текст повідомлення (зміст звернення);",
              "інша інформація, яку ви добровільно зазначаєте у зверненні.",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-gray-600">
            <b className="text-gray-900">
              Технічні файли cookie, необхідні для роботи Вебсайту:
            </b>
          </p>

          <ul role="list" className="mt-6 space-y-3 text-gray-600">
            {[
              "cookie зберігання вибраної мови інтерфейсу;",
              "cookie для коректної роботи форм;",
              "cookie для показу/приховування банера згоди на cookie.",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* 4 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            4. Цілі обробки
          </h2>
          <ul role="list" className="mt-6 space-y-3 text-gray-600">
            {[
              "Відповідь на ваші звернення та подальша комунікація.",
              "Забезпечення роботи і безпеки Вебсайту (відображення мови, стабільність форм, банер згоди на cookie).",
              "Виконання вимог законодавства та обов’язків щодо звітності й архівування (за наявності таких вимог).",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* 5 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            5. Правові підстави
          </h2>
          <ul role="list" className="mt-6 space-y-3 text-gray-600">
            {[
              "Згода — коли ви добровільно надсилаєте дані через форми.",
              "Законний інтерес — опрацювання звернень, підтримка функціонування й безпеки Вебсайту, запобігання зловживанням.",
              "Виконання договірних зобов’язань — якщо взаємодія передбачає укладання/виконання договору (оферти).",
              "Виконання юридичного обов’язку — коли цього прямо вимагає закон.",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* 6 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            6. Збирання, зберігання, передача
          </h2>
          <p className="mt-4 text-gray-600">
            Ми застосовуємо правові, організаційні та технічні заходи захисту
            персональних даних від несанкціонованого доступу, зміни, втрати або
            знищення.
          </p>

          <p className="mt-6 text-gray-600">
            Персональні дані можуть передаватися обробникам (лише в обсязі,
            необхідному для надання послуг Вебсайту/комунікацій) за договорами
            обробки даних. Категорії обробників:
          </p>

          <ul role="list" className="mt-6 space-y-3 text-gray-600">
            {[
              "хостинг/хмарні та інфраструктурні сервіси (провайдери розміщення/CDN);",
              "поштові провайдери (служби доставки електронних листів);",
              "системи керування контентом/бази даних (CMS).",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600">
            Третім особам для їхніх власних цілей дані не передаємо, окрім
            випадків, прямо передбачених законом.
          </p>

          <p className="mt-8 font-semibold text-gray-900">Строки зберігання:</p>
          <ul role="list" className="mt-4 space-y-3 text-gray-600">
            {[
              "звернення з форм — до 12 місяців з дати останньої взаємодії (або довше, якщо потрібно для захисту прав/виконання обов’язків);",
              "cookie згоди — до 180 днів;",
              "cookie мови — як правило, 6–12 місяців або до видалення у вашому браузері.",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-gray-600">
            Ви можете видалити cookie в налаштуваннях браузера. Вимкнення
            технічних cookie може вплинути на роботу форм і збереження вибору
            мови.
          </p>

          {/* 7 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            7. Транскордонна передача
          </h2>
          <p className="mt-4 text-gray-600">
            Дані можуть оброблятися обробниками, розміщеними за межами
            України/ЄС/ЄЕЗ, що може передбачати транскордонну передачу.
          </p>
          <p className="mt-6 text-gray-600">
            У таких випадках ми забезпечуємо належні гарантії захисту (зокрема,
            стандартні договірні положення ЄС — SCCs) і передаємо дані лише
            постачальникам, які надають достатній рівень безпеки та
            конфіденційності.
          </p>

          {/* 8 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            8. Ваші права
          </h2>
          <ul role="list" className="mt-6 space-y-3 text-gray-600">
            {[
              "отримати підтвердження факту обробки та доступ до своїх персональних даних;",
              "вимагати виправлення неточних або застарілих даних;",
              "вимагати видалення даних у випадках, передбачених законом («право на забуття»);",
              "обмежити обробку;",
              "заперечити проти обробки, якщо вона здійснюється на підставі законного інтересу;",
              "відкликати згоду (це не впливає на законність обробки до відкликання);",
              "подати скаргу до уповноваженого органу з питань захисту персональних даних.",
            ].map((t) => (
              <li key={t} className="flex gap-x-3">
                <Dot />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <figure className="mt-10 border-l-2 border-[#2c5cf2] pl-6">
            <blockquote className="font-semibold text-gray-900">
              <p>
                Для реалізації прав звертайтеся:{" "}
                <span className="font-bold">iprok.ua2026@gmail.com</span>.
              </p>
            </blockquote>
          </figure>

          {/* 9 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            9. Контакти
          </h2>
          <div className="mt-4 space-y-2 text-gray-600">
            <p>
              Організація: <b className="text-gray-900">iProk</b>
            </p>
            <p>
              Електронна пошта:{" "}
              <b className="text-gray-900"> iprok.ua2026@gmail.com</b>
            </p>
            <p>
              Вебсайт: <b className="text-gray-900">iprok.com.ua</b>
            </p>
          </div>

          {/* 10 */}
          <h2 className="mt-12 text-pretty text-2xl font-semibold tracking-tight text-gray-900">
            10. Оновлення Політики
          </h2>
          <p className="mt-4 text-gray-600">
            Ми можемо періодично оновлювати цю Політику. Нова редакція набирає
            чинності з моменту публікації на сторінці:{" "}
            <b className="text-gray-900">iprok.com.ua/privacy-policy</b>. Чинна
            версія доступна за вказаною адресою постійно.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Дата оновлення: <b>Лютий 2026</b>
          </p>
        </div>
      </section>
    </>
  );
}
