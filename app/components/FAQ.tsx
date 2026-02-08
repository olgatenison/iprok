const faqs = [
  {
    id: 1,
    question: "Чим iProk відрізняється від каркасного будинку?",
    answer:
      "Це система, де каркас, утеплення й обшивка працюють як єдиний механізм, а виробництво максимально перенесене в цех.",
  },
  {
    id: 2,
    question: "Які є варіанти утеплення?",
    answer:
      "Мінеральна вата, ППУ, ековата, піноізол та інші сучасні матеріали — під вимоги проєкту.",
  },
  {
    id: 3,
    question: "Що відбувається на майданчику?",
    answer:
      "Монтаж готових елементів і мінімум “мокрих” процесів/складних операцій.",
  },
  {
    id: 4,
    question: "Для яких об’єктів підходить?",
    answer:
      "Житлові, комерційні та змішані — там, де важлива технологічність і прогнозованість.",
  },
  {
    id: 5,
    question: "Який перший крок?",
    answer:
      "Коротко описати об’єкт — ми даємо технічну консультацію й оцінку реалізації.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <h2 className=" text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl">
          Поширені запитання
        </h2>
        <dl className="mt-20 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="py-6 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-4"
            >
              <dt className="text-xl font-semibold text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
