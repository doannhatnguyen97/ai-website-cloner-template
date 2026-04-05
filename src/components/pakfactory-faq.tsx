"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/types/pakfactory";

export function PakfactoryFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-2">
          {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={item.question}
                className="rounded-[4px] border border-[#dfe1e6] bg-white"
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-8 py-8 text-left sm:px-10 sm:py-10"
                  onClick={() => {
                    setOpenIndex((current) => (current === index ? -1 : index));
                  }}
                  type="button"
                >
                  <span className="text-[18px] leading-8 font-semibold text-[var(--pak-charcoal)]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-[var(--pak-charcoal)]" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-[var(--pak-charcoal)]" />
                  )}
                </button>

                {isOpen ? (
                  <div className="px-8 pb-8 sm:px-10 sm:pb-10">
                    <p className="text-[16px] leading-[26px] text-[var(--pak-body)]">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-[var(--pak-gray)]">
          Have other questions for us?{" "}
          <a
            className="font-semibold text-[var(--pak-green)]"
            href="https://pakfactory.com/contact-us"
          >
            Ask our experts directly!
          </a>
        </p>
      </div>
    </section>
  );
}
