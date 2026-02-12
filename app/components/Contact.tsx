"use client";

import React, { useMemo, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// тільки літери: укр + лат (без пробілів/дефісів/цифр)
const NAME_RE = /^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validate = (values: FormState): FormErrors => {
    const e: FormErrors = {};

    const first = values.firstName.trim();
    const last = values.lastName.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const message = values.message.trim();

    // Ім'я
    if (!first) e.firstName = "Будь ласка, вкажіть ім’я.";
    else if (first.length < 2)
      e.firstName = "Ім’я має містити щонайменше 2 літери.";
    else if (!NAME_RE.test(first))
      e.firstName = "Ім’я може містити лише літери.";

    // Прізвище
    if (!last) e.lastName = "Будь ласка, вкажіть прізвище.";
    else if (last.length < 2)
      e.lastName = "Прізвище має містити щонайменше 2 літери.";
    else if (!NAME_RE.test(last))
      e.lastName = "Прізвище може містити лише літери.";

    // Email
    if (!email) e.email = "Будь ласка, вкажіть email.";
    else if (!EMAIL_RE.test(email))
      e.email = "Будь ласка, введіть коректний email.";

    // Телефон
    if (!phone) e.phone = "Будь ласка, вкажіть номер телефону.";
    else {
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 7)
        e.phone = "Будь ласка, введіть коректний номер телефону.";
    }

    // Повідомлення
    if (!message) e.message = "Будь ласка, напишіть повідомлення.";
    else if (message.length < 10)
      e.message = "Повідомлення має містити щонайменше 10 символів.";

    // Згода
    if (!values.agree)
      e.agree = "Потрібно погодитися з політикою конфіденційності.";

    return e;
  };

  // оставляем (можно удалить, но пусть будет)
  useMemo(() => validate(form), [form]);

  const markTouched = (key: keyof FormState) =>
    setTouched((t) => ({ ...t, [key]: true }));

  const onBlur = (key: keyof FormState) => () => {
    markTouched(key);
    setErrors(validate(form));
  };

  const onChangeText =
    (key: Exclude<keyof FormState, "agree">) =>
    (
      ev:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const value = ev.target.value;
      const next = { ...form, [key]: value };
      setForm(next);
      setSubmitState("idle");

      if (touched[key]) {
        setErrors(validate(next));
      }
    };

  const onToggleAgree = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const next = { ...form, agree: ev.target.checked };
    setForm(next);
    setSubmitState("idle");

    if (touched.agree) {
      setErrors(validate(next));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // показываем все ошибки при клике
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
      agree: true,
    });

    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length > 0) return;

    try {
      setIsSubmitting(true);
      setSubmitState("idle");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          agree: form.agree,
        }),
      });

      if (!res.ok) {
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agree: false,
      });
      setTouched({});
      setErrors({});
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Розкажіть про ваш проєкт — ми швидко оцінимо доцільність рішення та
              підкажемо оптимальну конфігурацію.
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
          onSubmit={handleSubmit}
          noValidate
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
                  value={form.firstName}
                  onChange={onChangeText("firstName")}
                  onBlur={onBlur("firstName")}
                  aria-invalid={Boolean(touched.firstName && errors.firstName)}
                  aria-describedby={
                    touched.firstName && errors.firstName
                      ? "first-name-error"
                      : undefined
                  }
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
                {touched.firstName && errors.firstName && (
                  <p id="first-name-error" className="mt-1 text-sm text-red-600">
                    {errors.firstName}
                  </p>
                )}
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
                  value={form.lastName}
                  onChange={onChangeText("lastName")}
                  onBlur={onBlur("lastName")}
                  aria-invalid={Boolean(touched.lastName && errors.lastName)}
                  aria-describedby={
                    touched.lastName && errors.lastName
                      ? "last-name-error"
                      : undefined
                  }
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
                {touched.lastName && errors.lastName && (
                  <p id="last-name-error" className="mt-1 text-sm text-red-600">
                    {errors.lastName}
                  </p>
                )}
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
                  value={form.email}
                  onChange={onChangeText("email")}
                  onBlur={onBlur("email")}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={
                    touched.email && errors.email ? "email-error" : undefined
                  }
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
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
                    value={form.phone}
                    onChange={onChangeText("phone")}
                    onBlur={onBlur("phone")}
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    aria-describedby={
                      touched.phone && errors.phone ? "phone-error" : undefined
                    }
                    className="block min-w-0 grow py-1.5 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline sm:text-sm/6"
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
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
                  value={form.message}
                  onChange={onChangeText("message")}
                  onBlur={onBlur("message")}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby={
                    touched.message && errors.message
                      ? "message-error"
                      : undefined
                  }
                  className="block w-full  bg-white px-3.5 py-2 text-base text-gray-900 outline  -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline  focus:-outline-offset-2 focus:outline-[#2c5cf2]"
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
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
                    checked={form.agree}
                    onChange={onToggleAgree}
                    onBlur={onBlur("agree")}
                    aria-invalid={Boolean(touched.agree && errors.agree)}
                    aria-describedby={
                      touched.agree && errors.agree ? "agree-error" : undefined
                    }
                    className="absolute inset-0 size-full appearance-none focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
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
                {touched.agree && errors.agree && (
                  <p id="agree-error" className="mt-1 text-sm text-red-600">
                    {errors.agree}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="block w-full  bg-[#2c5cf2] px-4 py-3 text-center  font-semibold text-white shadow-sm hover:bg-[#2c5cf2] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#2c5cf2] text-2xl tracking-tight "
            >
              {isSubmitting ? "Відправляємо..." : "Отримати консультацію"}
            </button>

            {submitState === "success" && (
              <p className="mt-3 text-sm text-green-600">
                Дякуємо! Ваше повідомлення відправлено.
              </p>
            )}

            {submitState === "error" && (
              <p className="mt-3 text-sm text-red-600">
                Помилка відправки. Спробуйте ще раз пізніше.
              </p>
            )}
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
