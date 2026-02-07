"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Система", href: "#" },
  { name: "Як працює", href: "#" },
  { name: "Переваги", href: "#" },
  { name: "Застосування", href: "#" },
  { name: "Порівняння", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Контакти", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-40 bg-white overflow-visible
                 after:content-[''] after:absolute after:left-0 after:right-0
                 after:bottom-0 after:h-px after:bg-gray-300 after:z-10"
    >
      <header className="max-w-7xl mx-auto relative z-20">
        <nav className="flex items-center justify-between py-4 px-10 ">
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="-m-4 p-4 relative z-10
                         bg-[#2c5cf2] px-3 
                         after:content-[''] after:absolute after:left-0 after:right-0
                         after:-bottom-4 after:h-4 after:bg-[#2c5cf2]
                         "
            >
              <span className="sr-only">iProk</span>
              <Image
                alt="iProk"
                width={300}
                height={32}
                src="/img/logo.jpg"
                className="h-8 w-auto"
                priority
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

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

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-sm px-6 pt-3 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="-m-3 p-3 relative
                           bg-[#2c5cf2] px-3 py-3
                           after:content-[''] after:absolute after:left-0 after:right-0
                           after:-bottom-4 after:h-4 after:bg-[#2c5cf2]
                          "
              >
                <span className="sr-only">iProk</span>
                <Image
                  alt="iProk"
                  width={250}
                  height={32}
                  src="/img/logo.jpg"
                  className="h-8 w-auto"
                  priority
                />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-12 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
