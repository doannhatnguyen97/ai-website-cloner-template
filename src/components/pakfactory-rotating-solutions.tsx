"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

export function PakfactoryRotatingSolutions({
  items,
}: {
  items: string[];
}) {
  const [index, setIndex] = useState(0);

  const rotate = useEffectEvent((direction: number) => {
    setIndex((current) => {
      const next = current + direction;
      return (next + items.length) % items.length;
    });
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      rotate(1);
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [items.length]);

  const handlePrevious = () => {
    setIndex((current) => (current - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIndex((current) => (current + 1) % items.length);
  };

  return (
    <section className="border-b border-black/5 bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[780px]">
            <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)] sm:text-[32px]">
              We are your best solution for{" "}
              <a
                key={items[index]}
                className="inline-block animate-in fade-in duration-300 text-[var(--pak-green)]"
                href="https://pakfactory.com/contact-us"
              >
                {items[index]}
              </a>
            </h2>
            <p className="mt-5 text-[17px] leading-7 text-[var(--pak-gray)]">
              Never worry about going to multiple sources to get your dream
              packaging.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              aria-label="Previous solution"
              className="flex size-8 items-center justify-center rounded-full border border-[#c6c6c6] text-[var(--pak-charcoal)] transition-colors hover:bg-[#f5f5f5]"
              onClick={handlePrevious}
              type="button"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              aria-label="Next solution"
              className="flex size-8 items-center justify-center rounded-full border border-[#c6c6c6] text-[var(--pak-charcoal)] transition-colors hover:bg-[#f5f5f5]"
              onClick={handleNext}
              type="button"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 md:hidden">
          <button
            aria-label="Previous solution"
            className="flex size-8 items-center justify-center rounded-full border border-[#c6c6c6] text-[var(--pak-charcoal)]"
            onClick={handlePrevious}
            type="button"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            aria-label="Next solution"
            className="flex size-8 items-center justify-center rounded-full border border-[#c6c6c6] text-[var(--pak-charcoal)]"
            onClick={handleNext}
            type="button"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
