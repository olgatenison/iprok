"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "cookie_consent";
const EVENT_NAME = "cookie-consent-changed";

function subscribe(callback: () => void) {
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
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot() {
  return null;
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const visible = !consent;

  const setConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(EVENT_NAME));
  };

  if (!visible) return null;

  return (
    <>
      <div aria-hidden="true" className="h-[110px] sm:h-[90px]" />

      <div
        className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-900/10 bg-white shadow-lg"
        role="dialog"
        aria-label="Повідомлення про cookie"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-x-8 gap-y-4 p-6 md:flex-row md:items-center lg:px-8">
          <p className="max-w-4xl text-sm/6 text-gray-900">
            Ми використовуємо файли cookie, щоб забезпечити коректну роботу
            сайту та покращити ваш користувацький досвід. Ви можете прийняти або
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
              className="bg-[#2c5cf2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#2c5cf2] focus-visible:ring-offset-2"
            >
              Прийняти
            </button>

            <button
              type="button"
              onClick={() => setConsent("rejected")}
              className="rounded text-sm/6 font-semibold text-gray-900 hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-[#2c5cf2] focus-visible:ring-offset-2"
            >
              Відхилити
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
