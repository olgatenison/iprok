"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent"; // "accepted" | "rejected"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // показываем баннер только если ещё нет решения
    const consent =
      typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    // сюда можно добавить включение аналитики/пикселей, если нужно
  };

  const rejectAll = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
    // сюда можно добавить отключение/неинициализацию аналитики
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-900/10 bg-white shadow-lg  ">
      <div className="max-w-7xl flex flex-col justify-between gap-x-8 gap-y-4  mx-auto md:flex-row md:items-center lg:px-8 p-6 ">
        <p className="max-w-4xl text-sm/6 text-gray-900">
          Ми використовуємо файли cookie, щоб забезпечити коректну роботу сайту
          та покращити ваш користувацький досвід. Ви можете прийняти або
          відхилити використання cookie. Детальніше — у{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-[#2c5cf2] hover:opacity-80"
          >
            Політиці конфіденційності
          </Link>
          .
        </p>

        <div className="flex flex-none items-center gap-x-5">
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-md bg-[#2c5cf2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c5cf2]"
          >
            Прийняти
          </button>

          <button
            type="button"
            onClick={rejectAll}
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
          >
            Відхилити
          </button>
        </div>
      </div>
    </div>
  );
}
