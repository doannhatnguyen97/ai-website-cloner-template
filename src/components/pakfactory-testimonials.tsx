"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

import type { Testimonial } from "@/types/pakfactory";

export function PakfactoryTestimonials({
  logos,
  testimonials,
}: {
  logos: string[];
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);

  const rotate = useEffectEvent((direction: number) => {
    setIndex((current) => {
      const next = current + direction;
      return (next + testimonials.length) % testimonials.length;
    });
  });

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      rotate(1);
    }, 4800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [testimonials.length]);

  const active = testimonials[index];
  const handlePrevious = () => {
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="bg-white pt-16 pb-8 sm:pt-20 sm:pb-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-6">
        <div className="max-w-[640px]">
          <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
            See what our customers say
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[var(--pak-gray)]">
            Don&apos;t let what we say influence you, take it from our
            customers!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
          {logos.map((logo, logoIndex) => (
            <div
              key={logo}
              className="flex min-h-[88px] items-center justify-center rounded-[6px] border border-[#e6e8eb] bg-white p-4"
            >
              <Image
                alt={`Customer logo ${logoIndex + 1}`}
                src={logo}
                width={68}
                height={71}
                className="h-[52px] w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[6px] border border-[#dfe1e6] bg-[#f8f9f9] p-8 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <blockquote className="max-w-[860px]">
              <p
                key={active.quote}
                className="animate-in fade-in text-[18px] leading-8 text-[var(--pak-body)] duration-300 sm:text-[20px]"
              >
                &quot;{active.quote}&quot;
              </p>
              <footer className="mt-6">
                <p className="font-heading text-[20px] leading-7 font-bold text-[var(--pak-deep)]">
                  {active.name}
                </p>
                <p className="mt-1 text-sm font-semibold tracking-[0.08em] text-[var(--pak-green)] uppercase">
                  {active.company}
                </p>
              </footer>
            </blockquote>

            <div className="hidden items-center gap-3 md:flex">
              <button
                aria-label="Previous testimonial"
                className="flex size-10 items-center justify-center rounded-full border border-[#c6c6c6] bg-white text-[var(--pak-charcoal)] transition-colors hover:bg-[#f5f5f5]"
                onClick={handlePrevious}
                type="button"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                aria-label="Next testimonial"
                className="flex size-10 items-center justify-center rounded-full border border-[#c6c6c6] bg-white text-[var(--pak-charcoal)] transition-colors hover:bg-[#f5f5f5]"
                onClick={handleNext}
                type="button"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 md:hidden">
            <button
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-[#c6c6c6] bg-white text-[var(--pak-charcoal)]"
              onClick={handlePrevious}
              type="button"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-[#c6c6c6] bg-white text-[var(--pak-charcoal)]"
              onClick={handleNext}
              type="button"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
