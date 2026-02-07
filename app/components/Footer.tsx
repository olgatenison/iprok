import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Privacy policy (internal) */}
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-white hover:text-[#2c5cf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5cf2] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Перейти на сторінку Політика конфіденційності"
          >
            Політика конфіденційності
          </Link>

          {/* Copyright + credits */}
          <p className="text-sm text-gray-400">
            <span>&copy; 2026 iProk. Всі права захищено.</span>{" "}
            <span className="block md:inline">•</span>{" "}
            <a
              href="https://dvi.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-[#2c5cf2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c5cf2] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="Відкрити сайт Dvi (відкриється в новій вкладці)"
            >
              Дизайн і розробка Dvi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
