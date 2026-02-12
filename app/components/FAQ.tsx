const faqs = [
  {
    id: 1,
    question: "Чим iProk відрізняється від каркасного будинку?",
    answer:
      "iProk — це інженерна система: каркас, утеплення й обшивка працюють як єдиний моноліт, а більшість критичних процесів перенесено у контрольовані умови виробництва.",
  },
  {
    id: 2,
    question: "Які є варіанти утеплення?",
    answer:
      "Мінеральна вата, ППУ, ековата, піноізол та інші сучасні матеріали — під технічне завдання, бюджет і вимоги об’єкта.",
  },
  {
    id: 3,
    question: "Що відбувається на майданчику?",
    answer:
      "На об’єкті — переважно точний монтаж готових елементів: мінімум “мокрих” процесів, менше залежності від погоди та менше переробок.",
  },
  {
    id: 4,
    question: "Для яких об’єктів підходить?",
    answer:
      "Для житлових, комерційних і змішаних об’єктів — всюди, де важливі технологічність, швидкість і прогнозований результат.",
  },
  {
    id: 5,
    question: "Який перший крок?",
    answer:
      "Коротко опишіть об’єкт (локація, площа, поверховість, вимоги) — ми проведемо технічну консультацію та дамо попередню оцінку реалізації.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white ">
      <div className="mx-auto max-w-2xl lg:max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <h2 className=" text-pretty text-4xl font-bold tracking-tight text-[#2c5cf2] sm:text-5xl ">
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
    </section>
  );
}
