"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export type NavItem = { name: string; href: string };

export default function MobileMenu({
  navigation,
  logoAlt = "iProk",
}: {
  navigation: NavItem[];
  logoAlt?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
        aria-label="Open main menu"
      >
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

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
              className="-m-3 p-3 relative bg-[#2c5cf2] px-3 py-3
                         after:content-[''] after:absolute after:left-0 after:right-0
                         after:-bottom-4 after:h-4 after:bg-[#2c5cf2]"
            >
              <span className="sr-only">{logoAlt}</span>
              <Image
                alt={logoAlt}
                width={250}
                height={32}
                src="/img/logo.webp"
                className="h-8 w-auto"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              aria-label="Close menu"
            >
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
    </div>
  );
}
