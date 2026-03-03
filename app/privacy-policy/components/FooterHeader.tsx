"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [{ name: "Повернутись на головну", href: "/" }];

export default function FooterHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-40 bg-white overflow-visible
                 after:content-[''] after:absolute after:left-0 after:right-0
                 after:bottom-0 after:h-px after:bg-gray-300 after:z-10"
    >
      <header className="max-w-7xl mx-auto relative z-20">
        <nav className="flex items-center justify-between py-4 px-10">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-4 p-4 relative z-10 bg-[#2c5cf2] px-3
                         after:content-[''] after:absolute after:left-0 after:right-0
                         after:-bottom-4 after:h-4 after:bg-[#2c5cf2]"
              aria-label="iProk — на головну"
            >
              <Image
                alt="iProk"
                width={300}
                height={32}
                src="/img/logo.webp"
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile burger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              aria-label="Open main menu"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-12 pb-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 hover:text-[#2c5cf2]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          {/* overlay */}
          <div className="fixed inset-0 z-40 bg-black/40" aria-hidden="true" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black/90 backdrop-blur-sm px-6 pt-3 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-3 p-3 relative bg-[#2c5cf2] px-3 py-3
                           after:content-[''] after:absolute after:left-0 after:right-0
                           after:-bottom-4 after:h-4 after:bg-[#2c5cf2]"
                aria-label="iProk — на головну"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  alt="iProk"
                  width={250}
                  height={32}
                  src="/img/logo.jpg"
                  className="h-8 w-auto"
                  priority
                />
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
                aria-label="Close menu"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-12">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
