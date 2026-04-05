"use client";

import Image from "next/image";
import {
  CircleDollarSign,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useState } from "react";

const topLinks = [
  { label: "BLOG", href: "https://pakfactory.com/blog/" },
  { label: "CONTACT US", href: "https://pakfactory.com/contact" },
  {
    label: "SIGN IN",
    href: "https://pakfactory.com/customer/account/login/referer/aHR0cHM6Ly9wYWtmYWN0b3J5LmNvbS8%2C/",
  },
  {
    label: "CREATE AN ACCOUNT",
    href: "https://pakfactory.com/customer/account/create/",
  },
];

const primaryLinks = [
  {
    label: "Products",
    href: "https://pakfactory.com/custom-packaging-products.html",
  },
  {
    label: "Industries",
    href: "https://pakfactory.com/packaging-by-industry.html",
  },
  {
    label: "Services",
    href: "https://pakfactory.com/packaging-services.html",
  },
  { label: "Why PakFactory", href: "https://pakfactory.com/why-pakfactory" },
  { label: "Request a Quote", href: "https://pakfactory.com/contact-us" },
];

export function PakfactoryHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="border-b border-black/5 bg-white">
      <div className="border-b border-black/5">
        <div className="mx-auto hidden w-full max-w-[1280px] items-center justify-between px-5 py-3 text-[12px] font-semibold text-[#606669] lg:flex">
          <div className="flex items-center gap-5">
            {topLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span>Call us toll free:</span>
            <a className="text-[var(--pak-deep)]" href="tel:1-888-622-2819">
              1-888-622-2819
            </a>
            <span>Speak to our experts in 1 min</span>
            <span>9:30am - 6:30pm EST</span>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-[1280px] items-center justify-between gap-6 px-5 py-5 lg:flex">
        <a href="https://pakfactory.com/" aria-label="PakFactory">
          <span className="relative block h-[41px] w-[171px]">
            <Image
              alt="PakFactory logo"
              src="/images/pakfactory/logo.jpg"
              fill
              sizes="171px"
              className="object-contain"
              priority
            />
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end gap-4">
          <a
            className="inline-flex items-center gap-2 rounded-md border border-[#dfe1e6] px-4 py-2 text-[13px] font-semibold text-[var(--pak-charcoal)]"
            href="https://pakfactory.com/quotation/quote/"
          >
            <ShoppingBag className="size-4" />
            <span>My Quote</span>
            <span className="text-[var(--pak-green)]">0</span>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md border border-[#dfe1e6] px-4 py-2 text-[13px] font-semibold text-[var(--pak-charcoal)]"
            href="https://pakfactory.com/checkout/cart/"
          >
            <CircleDollarSign className="size-4" />
            <span>Cart</span>
            <span className="text-[var(--pak-green)]">0</span>
          </a>
          <div className="flex h-10 w-full max-w-[280px] items-center rounded-md border border-[#dfe1e6] px-3">
            <Search className="size-4 text-[var(--pak-gray)]" />
            <input
              aria-label="Search"
              className="ml-2 w-full border-0 bg-transparent text-sm text-[var(--pak-charcoal)] outline-none placeholder:text-[#8a9095]"
              placeholder="Search"
              type="search"
            />
          </div>
          <a
            className="inline-flex rounded-md bg-[var(--pak-green)] px-5 py-2.5 text-sm font-semibold text-white"
            href="https://pakfactory.com/contact-us"
          >
            Request a Quote
          </a>
        </div>
      </div>

      <div className="border-t border-black/5">
        <nav className="mx-auto hidden w-full max-w-[1280px] items-center gap-8 px-5 py-4 text-[15px] font-semibold text-[var(--pak-deep)] lg:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.label}
              className="transition-colors hover:text-[var(--pak-green)]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="lg:hidden">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-5">
          <a href="https://pakfactory.com/" aria-label="PakFactory">
            <span className="relative block h-[36px] w-[150px]">
              <Image
                alt="PakFactory logo"
                src="/images/pakfactory/logo.jpg"
                fill
                sizes="150px"
                className="object-contain"
                priority
              />
            </span>
          </a>

          <div className="flex items-center gap-4 text-[var(--pak-charcoal)]">
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-md border border-[#202020] text-[var(--pak-charcoal)]"
              onClick={() => {
                setMenuOpen((current) => !current);
              }}
              type="button"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
            <a
              aria-label="My Quote"
              className="relative inline-flex"
              href="https://pakfactory.com/quotation/quote/"
            >
              <ShoppingBag className="size-6" />
              <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-[var(--pak-green)] text-[10px] font-semibold text-white">
                0
              </span>
            </a>
            <a
              aria-label="Cart"
              className="relative inline-flex"
              href="https://pakfactory.com/checkout/cart/"
            >
              <CircleDollarSign className="size-6" />
              <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-[var(--pak-green)] text-[10px] font-semibold text-white">
                0
              </span>
            </a>
            <button
              aria-expanded={searchOpen}
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="inline-flex"
              onClick={() => {
                setSearchOpen((current) => !current);
              }}
              type="button"
            >
              <Search className="size-6" />
            </button>
          </div>
        </div>

        {searchOpen ? (
          <div className="border-t border-black/5 px-5 pb-4">
            <div className="flex h-11 items-center rounded-md border border-[#dfe1e6] px-3">
              <Search className="size-4 text-[var(--pak-gray)]" />
              <input
                aria-label="Search entire store here"
                className="ml-2 w-full border-0 bg-transparent text-sm text-[var(--pak-charcoal)] outline-none placeholder:text-[#8a9095]"
                placeholder="Search entire store here..."
                type="search"
              />
            </div>
          </div>
        ) : null}

        {menuOpen ? (
          <div className="border-t border-black/5 bg-white px-5 pb-5">
            <nav className="space-y-1 py-4">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  className="block rounded-md px-3 py-3 text-[16px] font-semibold text-[var(--pak-charcoal)] hover:bg-[#f7f8fa]"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              className="mt-2 inline-flex w-full justify-center rounded-md bg-[var(--pak-green)] px-5 py-3 text-[16px] font-semibold text-white"
              href="https://pakfactory.com/contact-us"
            >
              Request a Quote
            </a>

            <div className="mt-5 rounded-[6px] bg-[#f7f8fa] p-4 text-[13px] text-[var(--pak-gray)]">
              <p className="font-semibold uppercase tracking-[0.12em] text-[var(--pak-charcoal)]">
                Call us toll free
              </p>
              <a
                className="mt-2 block text-[24px] font-bold text-[var(--pak-green)]"
                href="tel:1-888-622-2819"
              >
                1-888-622-2819
              </a>
              <p className="mt-2">Speak to our experts in 1 min</p>
              <p>9:30am - 6:30pm EST</p>
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-black/5 pt-5 text-sm font-semibold text-[var(--pak-charcoal)]">
              {topLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

