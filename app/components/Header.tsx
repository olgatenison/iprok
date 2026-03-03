import Image from "next/image";
import MobileMenu, { type NavItem } from "./MobileMenu";

const navigation: NavItem[] = [
  { name: "Система", href: "#system" },
  { name: "Виробництво", href: "#production" },
  { name: "Конструктив", href: "#constructive" },
  { name: "Застосування", href: "#use-cases" },
  { name: "Переваги", href: "#advantages" },
  { name: "FAQ", href: "#faq" },
  { name: "Контакти", href: "#contacts" },
];

export default function Header() {
  return (
    <div
      className="sticky top-0 z-40 bg-white overflow-visible
                 after:content-[''] after:absolute after:left-0 after:right-0
                 after:bottom-0 after:h-px after:bg-gray-300 after:z-10"
    >
      <header className="max-w-7xl mx-auto relative z-20">
        <nav className="flex items-center justify-between py-4 px-10">
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="-m-4 p-4 relative z-10 bg-[#2c5cf2] px-3
                         after:content-[''] after:absolute after:left-0 after:right-0
                         after:-bottom-4 after:h-4 after:bg-[#2c5cf2]"
            >
              <span className="sr-only">iProk</span>
              <Image
                alt="iProk"
                width={300}
                height={32}
                src="/img/logo.webp"
                className="h-8 w-auto"
                sizes="300px"
                priority
              />
            </a>
          </div>

          {/* Только мобильное меню — client */}
          <MobileMenu navigation={navigation} />

          <div className="hidden lg:flex lg:gap-x-12 pb-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 hover:text-[#2c5cf2]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
