"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie_consent"; // "accepted" | "rejected"
const EVENT_NAME = "cookie-consent-changed";

function subscribe(callback: () => void) {
  // storage — срабатывает между вкладками
  const onStorage = () => callback();
  const onCustom = () => callback();

  window.addEventListener("storage", onStorage);
  window.addEventListener(EVENT_NAME, onCustom);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(EVENT_NAME, onCustom);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY); // string | null
  } catch {
    return null;
  }
}

function getServerSnapshot() {
  // На сервере localStorage нет — возвращаем null.
  return null;
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const visible = !consent; // если нет выбора — показываем

  // ✅ Чтобы баннер не перекрывал контент снизу (без setState)
  useEffect(() => {
    if (!visible) return;

    document.body.classList.add("pb-[110px]", "sm:pb-[90px]");
    return () => {
      document.body.classList.remove("pb-[110px]", "sm:pb-[90px]");
    };
  }, [visible]);

  const setConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    // В этой же вкладке storage event не сработает — дергаем свой
    window.dispatchEvent(new Event(EVENT_NAME));
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-900/10 bg-white shadow-lg"
      role="dialog"
      aria-live="polite"
      aria-label="Повідомлення про cookie"
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-x-8 gap-y-4 p-6 md:flex-row md:items-center lg:px-8">
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
            onClick={() => setConsent("accepted")}
            className=" bg-[#2c5cf2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90
                       focus-visible:ring-2 focus-visible:ring-[#2c5cf2] focus-visible:ring-offset-2"
          >
            Прийняти
          </button>

          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700
                       focus-visible:ring-2 focus-visible:ring-[#2c5cf2] focus-visible:ring-offset-2 rounded"
          >
            Відхилити
          </button>
        </div>
      </div>
    </div>
  );
}
