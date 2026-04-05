import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PakfactoryFaq } from "@/components/pakfactory-faq";
import { PakfactoryHeader } from "@/components/pakfactory-header";
import { PakfactoryRotatingSolutions } from "@/components/pakfactory-rotating-solutions";
import { PakfactoryTestimonials } from "@/components/pakfactory-testimonials";
import type {
  FaqItem,
  FeatureCard,
  IndustryCard,
  LinkGroup,
  ProductCard,
  Testimonial,
} from "@/types/pakfactory";

const productCards: ProductCard[] = [
  {
    title: "Product Packaging",
    description:
      "Standard cardstock boxes made from thin, flexible paperboard.",
    href: "https://pakfactory.com/folding-carton-paperboard-boxes.html",
    image: "/images/pakfactory/folding-carton-boxes.webp",
  },
  {
    title: "Corrugated Boxes",
    description: "Durable 3-layer corrugated cardboard boxes.",
    href: "https://pakfactory.com/custom-printed-corrugated-boxes.html",
    image: "/images/pakfactory/corrugated-boxes.webp",
  },
  {
    title: "Rigid Boxes",
    description: "Luxurious packaging made from thick durable chipboard.",
    href: "https://pakfactory.com/custom-rigid-setup-boxes.html",
    image: "/images/pakfactory/rigid-boxes.webp",
  },
  {
    title: "Box Inserts",
    description:
      "Keep your loose products nicely tucked, presented, and protected.",
    href: "https://pakfactory.com/custom-packaging-inserts.html",
    image: "/images/pakfactory/box-packaging-inserts.webp",
  },
  {
    title: "Paper Shopping Bags",
    description: "Luxurious and eco-friendly alternative to shopping bags.",
    href: "https://pakfactory.com/custom-printed-luxury-paper-bags.html",
    image: "/images/pakfactory/paper-shopping-bags.webp",
  },
  {
    title: "Reusable Shopping Bags",
    description: "Reduce, reuse, recycle! Go green with reusable bags.",
    href: "https://pakfactory.com/custom-reusable-shopping-bags.html",
    image: "/images/pakfactory/reusable-bags.webp",
  },
  {
    title: "Mailer Shipping Bags",
    description:
      "Ship and protect small products and clothing with eco-friendly mailers.",
    href: "https://pakfactory.com/custom-mailers.html",
    image: "/images/pakfactory/mailer-bags.webp",
  },
  {
    title: "Flexible Pouches",
    description: "Keep food products fresh and securely packaged with pouches.",
    href: "https://pakfactory.com/custom-pouches.html",
    image: "/images/pakfactory/flexible-pouches.webp",
  },
  {
    title: "Tin Containers",
    description: "Need the added protection and a little bit of uniqueness?",
    href: "https://pakfactory.com/custom-tin-boxes.html",
    image: "/images/pakfactory/tin-containers.webp",
  },
  {
    title: "POP Displays",
    description:
      "Showcase and highlight your products on counters or store floors.",
    href: "https://pakfactory.com/custom-cardboard-displays.html",
    image: "/images/pakfactory/pop-displays.webp",
  },
  {
    title: "Stickers and Labels",
    description:
      "Add additional personality to all your products and packaging.",
    href: "https://pakfactory.com/custom-labels-stickers.html",
    image: "/images/pakfactory/stickers-and-labels.webp",
  },
  {
    title: "Tissue Paper and Liners",
    description:
      "Give your packaging a bit of flair by branding your packing paper.",
    href: "https://pakfactory.com/custom-printed-tissue-paper.html",
    image: "/images/pakfactory/tissue-paper-and-liners.webp",
  },
  {
    title: "Packing Tape",
    description: "Don't stop at the box, add your logo to your packing tape.",
    href: "https://pakfactory.com/printed-tape.html",
    image: "/images/pakfactory/packing-tape.webp",
  },
  {
    title: "Card Inserts",
    description: "Personalize your unboxing experience with a small surprise!",
    href: "https://pakfactory.com/cards.html",
    image: "/images/pakfactory/card-inserts.webp",
  },
];

const rotatingSolutions = [
  "Custom Boxes",
  "Luxury Packaging",
  "Product Packaging",
  "Restaurant Packaging",
  "Cosmetic Packaging",
  "Apparel Packaging",
];

const industryCards: IndustryCard[] = [
  {
    title: "Apparel and Fashion Packaging",
    description:
      "Pair your apparel with one-of-a-kind custom printed clothing boxes.",
    href: "https://pakfactory.com/custom-fashion-apparel-boxes.html",
    image: "/images/pakfactory/apparel-packaging-solution.webp",
  },
  {
    title: "Bakery and Cake Packaging",
    description:
      "Show off your baked goods with personalized cake and bakery boxes tailored to your brand.",
    href: "https://pakfactory.com/custom-bakery-packaging-boxes.html",
    image: "/images/pakfactory/bakery-and-cake-packaging-solution.webp",
  },
  {
    title: "Chocolate Packaging",
    description:
      "Arrange chocolates in custom chocolate boxes for a unified brand experience.",
    href: "https://pakfactory.com/custom-chocolate-packaging.html",
    image: "/images/pakfactory/chocolate-packaging-solution.webp",
  },
  {
    title: "Coffee and Tea Packaging",
    description:
      "Design functional custom coffee bags and tea boxes that reflect your product's natural appeal.",
    href: "https://pakfactory.com/custom-coffee-tea-packaging.html",
    image: "/images/pakfactory/coffee-and-tea-packaging-solution.webp",
  },
  {
    title: "Beverage Packaging",
    description:
      "Get your customers excited for a sip of your drinks with creatively designed custom beverage boxes.",
    href: "https://pakfactory.com/custom-beverage-packaging-boxes.html",
    image: "/images/pakfactory/beverage-packaging-solution.webp",
  },
  {
    title: "Cosmetics Packaging",
    description:
      "Express the beauty of your brand with custom printed cosmetic boxes and packaging.",
    href: "https://pakfactory.com/custom-cosmetic-packaging-boxes.html",
    image: "/images/pakfactory/cosmetic-packaging-solution.webp",
  },
  {
    title: "Restaurant Packaging",
    description:
      "Improve your customer's take out experience with creative custom printed take out packaging.",
    href: "https://pakfactory.com/custom-restaurant-packaging-boxes.html",
    image: "/images/pakfactory/restaurant-packaging-solution.webp",
  },
  {
    title: "Gift Packaging",
    description:
      "Transform your packaging into a luxurious experience with personalized gift boxes.",
    href: "https://pakfactory.com/custom-gift-boxes.html",
    image: "/images/pakfactory/gift-packaging-solution.webp",
  },
];

const sustainabilityCards = [
  {
    eyebrow: "Eco-friendly Packaging",
    title: "Go green with sustainably responsible packaging",
    cta: "Browse products",
    href: "https://pakfactory.com/custom-eco-friendly-packaging.html",
    image: "/images/pakfactory/sustainably-responsible-packaging.webp",
  },
  {
    eyebrow: "Sustainability Efforts",
    title: "PakFactory's mission towards a greener future",
    cta: "Learn how we do it",
    href: "https://pakfactory.com/sustainability",
    image: "/images/pakfactory/sustainability2.webp",
  },
];

const serviceBenefits: FeatureCard[] = [
  {
    title: "Save cost & time",
    description:
      "Benefit from expertly engineered solutions designed to save you as much time and money as possible.",
    icon: "/images/pakfactory/icon-save-cost.svg",
  },
  {
    title: "More reliability",
    description:
      "Get your packaging from certified manufacturers for reliable results every single time.",
    icon: "/images/pakfactory/icon-reliability.svg",
  },
  {
    title: "More brand impact",
    description:
      "Leave your customers with a lasting impression with solutions designed for brand impact and recognition.",
    icon: "/images/pakfactory/icon-brand-impact.svg",
  },
  {
    title: "Become sustainable",
    description:
      "Choose from a large range of eco-packaging options that are certified and sustainably sourced.",
    icon: "/images/pakfactory/icon-sustainable.svg",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is your minimum order quantities (MOQ)?",
    answer:
      "Our minimum order quantity (MOQ) depends on the specific product line and customization requirements. Please reach out to our product specialists for detailed information regarding the MOQ for the product you are interested in. Alternatively you may check our list of MOQs here. We strive to accommodate orders of various sizes to meet our customers diverse needs so don't hesitate to contact us!",
  },
  {
    question: "Can you produce less than your minimum order quantities (MOQ)?",
    answer:
      "We strongly recommend that our esteemed customers adhere to our minimum order quantities to mitigate associated setup costs. However, we do accommodate smaller orders upon request and strive to fulfill our customers' specific needs. If you are interested in placing an order for a sample, we kindly request that you reach out to our dedicated product specialists. They will be delighted to assist you in this regard and provide further guidance.",
  },
  {
    question: "How long is your production time?",
    answer:
      "Our current production times typically range from an estimated average of 10 to 30 business days, contingent upon factors such as packaging type, order size, and the time of the year. It's important to note that greater customization and the inclusion of additional processes in your custom packaging generally result in slightly longer production durations. Please be aware that all dates provided are estimates and not guaranteed.",
  },
  {
    question: "Are all your products recyclable?",
    answer:
      "Absolutely! We take pride in ensuring that all our paper-based packaging solutions are entirely recyclable. If you are seeking more sustainable alternatives for your packaging needs, we encourage you to consult with our knowledgeable product specialists. They will provide expert guidance and assistance in exploring environmentally friendly options that align with your requirements.",
  },
  {
    question:
      "Will I receive a proof before my custom packaging goes to production?",
    answer:
      "Prior to proceeding with production, our proficient pre-press team will provide you with a digital proof of your custom packaging. This comprehensive proof allows you to review and evaluate the final design and make any necessary adjustments or approvals before moving forward with the production phase.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "I used Pakfactory for my jewelry boxes and they turned out lovely! The turnaround was much slower than expected and would have hoped.",
    name: "Lauren Lee",
    company: "Semaine Health",
  },
  {
    quote:
      "Really great experience working with Ken Lo and PakFactory. I spoke to many vendors prior to choosing PakFactory and I'm so grateful I went with them.",
    name: "Kristen Blue",
    company: "Sonhab Chocolate",
  },
  {
    quote:
      "I've worked with PakFactory on the production of several boxes for my soap company. The boxes always turn out better than I could imagine.",
    name: "Shannon Brown",
    company: "Pipit & Finch",
  },
  {
    quote:
      "The value that PakFactory has added to our brand is immeasurable. By making such high quality packaging, we are able to provide our customers with a top shelf experience.",
    name: "Bobby DeMars",
    company: "Blind Spirits",
  },
  {
    quote:
      "PakFactory was superb from start to finish. Our artwork was done exactly as presented and in the highest quality. Really fast shipping too.",
    name: "Billi Kid",
    company: "NBALAB",
  },
];

const customerLogos = [
  "/images/pakfactory/review-customer-logo-1.svg",
  "/images/pakfactory/review-customer-logo-2.svg",
  "/images/pakfactory/review-customer-logo-3.svg",
  "/images/pakfactory/review-customer-logo-4.svg",
  "/images/pakfactory/review-customer-logo-5.svg",
  "/images/pakfactory/review-customer-logo-6.svg",
  "/images/pakfactory/review-customer-logo-7.svg",
  "/images/pakfactory/review-customer-logo-8.svg",
  "/images/pakfactory/review-customer-logo-9.svg",
  "/images/pakfactory/review-customer-logo-10.svg",
  "/images/pakfactory/review-customer-logo-12.svg",
];

const footerGroups: LinkGroup[] = [
  {
    title: "Solutions",
    links: [
      { label: "Products", href: "https://pakfactory.com/boxes.html" },
      {
        label: "Industries",
        href: "https://pakfactory.com/packaging-by-industry.html",
      },
      {
        label: "Option Library",
        href: "https://pakfactory.com/option-library.html",
      },
      {
        label: "Inspiration Library",
        href: "https://pakfactory.com/inspiration.html",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Why PakFactory",
        href: "https://pakfactory.com/why-pakfactory",
      },
      { label: "About Us", href: "https://pakfactory.com/about-us" },
      { label: "Contact Us", href: "https://pakfactory.com/contact" },
      { label: "Request a quote", href: "https://pakfactory.com/contact-us" },
      { label: "Hours & Locations", href: "https://pakfactory.com/contact" },
      { label: "Careers", href: "https://pakfactory.com/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://pakfactory.com/blog" },
      {
        label: "Help Center & FAQ",
        href: "https://support.pakfactory.com/portal/en/home",
      },
      {
        label: "Artwork Guidelines",
        href: "https://pakfactory.com/guide-to-preparing-files-for-print",
      },
      {
        label: "Terms & Conditions",
        href: "https://pakfactory.com/terms-conditions",
      },
      {
        label: "Privacy Policy",
        href: "https://pakfactory.com/privacy-policy",
      },
      { label: "Sitemap", href: "https://pakfactory.com/sitemap" },
    ],
  },
];

const instagramPosts = [
  "/images/pakfactory/instagram-1.jpg",
  "/images/pakfactory/instagram-2.jpg",
  "/images/pakfactory/instagram-3.jpg",
  "/images/pakfactory/instagram-4.jpg",
];

const wrapperClass = "mx-auto w-full max-w-[1280px] px-5 sm:px-6";

function PakButton({
  href,
  children,
  variant = "green",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "green" | "white";
}) {
  const baseClass =
    "inline-flex items-center justify-center rounded-md px-8 py-4 text-base font-semibold shadow-[0_5px_10px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-0.5";
  const variantClass =
    variant === "green"
      ? "bg-[var(--pak-green)] text-white"
      : "border-2 border-[var(--pak-green)] bg-white text-[var(--pak-green)]";

  return (
    <a className={`${baseClass} ${variantClass}`} href={href}>
      {children}
    </a>
  );
}

function IndustryCardItem({ card }: { card: IndustryCard }) {
  return (
    <a
      className="group overflow-hidden rounded-[10px] bg-white shadow-[0_10px_22px_rgba(14,23,40,0.06)] transition-transform duration-200 hover:-translate-y-1"
      href={card.href}
    >
      <div className="relative aspect-[5/3] bg-[#edf2f5]">
        <Image
          alt={card.title}
          src={card.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-sans text-[18px] leading-[22px] font-semibold text-[var(--pak-charcoal)]">
          {card.title}
        </h3>
        <p className="mt-3 text-[15px] leading-6 text-[var(--pak-gray)]">
          {card.description}
        </p>
      </div>
    </a>
  );
}

export function PakfactoryHomepage() {
  return (
    <main className="bg-[var(--pak-muted)] text-[var(--pak-body)]">
      <div className="border-b border-black/5 bg-[#2d3745] lg:border-[rgba(64,193,115,0.25)] lg:bg-[var(--pak-soft-green)]">
        <div
          className={`${wrapperClass} flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-3 text-center text-[13px] font-semibold text-white lg:text-[var(--pak-deep)]`}
        >
          <span>
            We&apos;re actively helping customers reduce the impact of tariffs
          </span>
          <a
            className="inline-flex items-center gap-1 text-white underline-offset-4 hover:underline lg:text-[var(--pak-green-dark)]"
            href="https://pakfactory.com/navigate-tariffs-with-smarter-packaging-supply-chain-solutions"
          >
            explore our approach
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      <PakfactoryHeader />

      <section className="lg:hidden">
        <div className="relative aspect-[396/243] w-full overflow-hidden bg-[#dfe7eb]">
          <Image
            alt="PakFactory hero packaging samples"
            src="/images/pakfactory/hero-banner.jpg"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className={`${wrapperClass} bg-white py-8 text-center`}>
          <h1 className="font-heading text-[32px] leading-[43px] font-bold text-[var(--pak-charcoal)]">
            Create custom boxes &amp; packaging of your dreams
          </h1>
          <p className="mt-5 text-[17px] leading-7 text-[var(--pak-gray)]">
            Order personalized, high-quality custom printed packaging and
            branded boxes your customers will love all-in-one place.
          </p>

          <div className="mt-7 flex flex-col gap-4">
            <PakButton href="https://pakfactory.com/contact-us">
              Request a Quote
            </PakButton>
            <PakButton href="#allproduct-section" variant="white">
              Choose Packaging style
            </PakButton>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[15px] leading-6 font-semibold text-[var(--pak-charcoal)]">
              3,000+ brands big and small love us!
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-[14px] leading-5">
              <Image
                alt="PakFactory review stars"
                src="/images/pakfactory/stars.svg"
                width={108}
                height={22}
              />
              <a
                className="font-semibold text-[var(--pak-green)] underline-offset-4 hover:underline"
                href="https://www.google.com/search?q=pakfactory&oq=pakfactory&aqs=chrome..69i57j46i175i199j69i60l4j69i61l2.11088j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89d4d47879d59303:0xa62eee8150066555,1,,,"
              >
                4.6 Google Reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden lg:block pak-hero">
        <div
          className={`${wrapperClass} grid min-h-[450px] items-center py-12 lg:grid-cols-[minmax(0,540px)_1fr]`}
        >
          <div className="max-w-[540px]">
            <h1 className="font-heading text-[36px] leading-[1.3] font-bold text-white sm:text-[37px] sm:leading-[48px]">
              Create custom boxes &amp; packaging of your dreams
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-7 text-white/92">
              Order personalized, high-quality custom printed packaging and
              branded boxes your customers will love all-in-one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PakButton href="https://pakfactory.com/contact-us">
                Request a Quote
              </PakButton>
              <PakButton href="#allproduct-section" variant="white">
                Choose Packaging style
              </PakButton>
            </div>
          </div>
        </div>
      </section>

      <PakfactoryRotatingSolutions items={rotatingSolutions} />

      <section className="bg-[#f8f9f9] py-16 sm:py-20" id="allproduct-section">
        <div className={wrapperClass}>
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-[720px]">
              <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
                One for all solution, for custom printed packaging
              </h2>
              <p className="mt-4 text-[17px] leading-7 text-[var(--pak-gray)]">
                Get everything custom packaging your business needs all in one
                place.
              </p>
            </div>
            <a
              className="inline-flex items-center rounded-[6px] border border-[#a8adb2] px-8 py-4 text-[15px] font-semibold text-[var(--pak-charcoal)] transition-colors hover:bg-white"
              href="https://pakfactory.com/custom-packaging-products.html"
            >
              Browse full catalog
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {productCards.map((card) => (
              <a
                key={card.title}
                className="group flex min-h-[370px] flex-col overflow-hidden rounded-[10px] bg-white transition-transform duration-200 hover:-translate-y-1"
                href={card.href}
              >
                <div className="relative aspect-[314/260] bg-[#edf2f5]">
                  <Image
                    alt={card.title}
                    src={card.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-contain p-5"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-black/5 px-5 py-5">
                  <h3 className="font-sans text-[18px] leading-[22px] font-semibold text-[var(--pak-charcoal)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-6 text-[var(--pak-gray)]">
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className={wrapperClass}>
          <div className="rounded-[6px] border border-dashed border-[var(--pak-green)]/35 bg-[var(--pak-soft-green)] px-8 py-10 text-center">
            <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
              Looking for something else? We can help.
            </h2>
            <a
              className="mt-6 inline-flex items-center rounded-md bg-[var(--pak-green)] px-6 py-3 text-sm font-semibold text-white"
              href="https://pakfactory.com/contact-us"
            >
              Request a custom quote
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className={wrapperClass}>
          <div className="max-w-[760px]">
            <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
              Shop packaging solutions by industry needs
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-[var(--pak-gray)]">
              Find the perfect packaging solutions tailored to your industry
              niche.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {industryCards.map((card) => (
              <IndustryCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className={wrapperClass}>
          <div className="max-w-[720px]">
            <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
              Let&apos;s create a sustainable future together
            </h2>
            <p className="mt-4 text-[17px] leading-7 text-[var(--pak-gray)]">
              Grow your business with eco-friendly alternatives to packaging.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {sustainabilityCards.map((card) => (
              <a
                key={card.title}
                className="group relative isolate overflow-hidden rounded-[10px]"
                href={card.href}
              >
                <div className="relative aspect-[563/455]">
                  <Image
                    alt={card.title}
                    src={card.image}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.35)_72%)]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/88">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-5 max-w-[360px] font-heading text-[29px] leading-[1.25] font-bold">
                    {card.title}
                  </h3>
                  <span className="mt-8 inline-flex rounded-[6px] border border-white/70 px-7 py-4 text-[15px] font-semibold text-white transition-colors group-hover:bg-white/10">
                    {card.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              alt="PakFactory stamp"
              src="/images/pakfactory/stamp-regular-green.svg"
              width={92}
              height={92}
              className="h-[92px] w-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6] py-16 sm:py-20">
        <div className={wrapperClass}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div>
              <div>
                <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
                  Services that meet your packaging needs
                </h2>
                <p className="mt-4 text-[17px] leading-7 text-[var(--pak-gray)]">
                  Our{" "}
                  <span className="font-semibold">360 PakFactory approach</span>{" "}
                  delivers all the services you need to create the best
                  packaging solutions for your products and business needs in
                  order to achieve total packaging success.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Consultation",
                  "Design",
                  "Prototype",
                  "Production",
                  "Logistic",
                  "Optimize",
                ].map((step) => (
                  <span
                    key={step}
                    className="rounded-full border border-[var(--pak-green)]/25 bg-white px-4 py-2 text-sm font-semibold text-[var(--pak-deep)]"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[6px] bg-white p-4 shadow-[0_20px_50px_rgba(14,23,40,0.08)]">
              <Image
                alt="360 total packaging solution"
                src="/images/pakfactory/total-packaging-success.webp"
                width={720}
                height={430}
                className="h-auto w-full rounded-[6px]"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[6px] border border-black/5 bg-white p-6 shadow-[0_10px_24px_rgba(14,23,40,0.05)]"
              >
                <Image
                  alt={benefit.title}
                  src={benefit.icon}
                  width={52}
                  height={52}
                  className="h-[52px] w-auto"
                />
                <h3 className="mt-5 font-heading text-[22px] leading-7 font-bold text-[var(--pak-deep)]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[15px] leading-6 text-[var(--pak-gray)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div
          className={`${wrapperClass} grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center`}
        >
          <div className="overflow-hidden rounded-[6px] bg-[#f3f3f3] p-6">
            <Image
              alt="Your ultimate packaging manufacturer"
              src="/images/pakfactory/manufacturer.webp"
              width={680}
              height={520}
              className="h-auto w-full rounded-[6px]"
            />
          </div>
          <div>
            <h3 className="font-heading text-[29px] leading-[1.3] font-bold text-[var(--pak-charcoal)]">
              Your ultimate packaging manufacturer
            </h3>
            <p className="mt-4 text-[16px] leading-7 text-[var(--pak-gray)]">
              PakFactory is your go-to destination for everything custom boxes
              and custom packaging by delivering support at every step of the
              packaging journey from concept to reality.
            </p>
            <div className="mt-8 grid gap-5">
              {[
                {
                  title: "Global Supply Chain",
                  text: "Get access to custom packaging, boxes and additional materials using a global packaging supply chain.",
                },
                {
                  title: "50+ Certified Facilities",
                  text: "Benefit from certified custom packaging sourced from over 50 certified facilities worldwide.",
                },
                {
                  title: "Manufacturing Excellence",
                  text: "Add a higher perceived value to your products with reliable custom packaging engineered for quality assurance.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[6px] border border-black/5 bg-[#fafafa] p-5"
                >
                  <h4 className="font-heading text-[20px] leading-7 font-bold text-[var(--pak-deep)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-6 text-[var(--pak-gray)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PakfactoryTestimonials
        logos={customerLogos}
        testimonials={testimonials}
      />

      <PakfactoryFaq items={faqItems} />

      <section className="bg-white py-16">
        <div className={wrapperClass}>
          <h2 className="font-heading text-[31px] leading-[1.32] font-bold text-[var(--pak-charcoal)]">
            Find our works on Instagram or tag us @pakfactory to inspire others.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {instagramPosts.map((image, index) => (
              <a
                key={image}
                className="group overflow-hidden rounded-[6px] bg-[#f3f3f3]"
                href="https://www.instagram.com/pakfactory/"
              >
                <Image
                  alt={`PakFactory Instagram post ${index + 1}`}
                  src={image}
                  width={320}
                  height={400}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pak-footer-cta border-t border-black/5">
        <div
          className={`${wrapperClass} grid min-h-[260px] items-center py-14 lg:grid-cols-[minmax(0,540px)_1fr]`}
        >
          <div className="max-w-[520px]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Start your project
            </p>
            <h2 className="mt-4 font-heading text-[32px] leading-[1.3] font-bold text-white">
              Create custom packaging that feels as polished as your brand.
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PakButton href="https://pakfactory.com/contact-us">
                Request a Quote
              </PakButton>
              <PakButton
                href="https://pakfactory.com/custom-packaging-products.html"
                variant="white"
              >
                Browse catalog
              </PakButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#242424] text-white">
        <div className={`${wrapperClass} py-16`}>
          <div className="grid gap-10 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <h2 className="font-heading text-[32px] leading-[1.25] font-bold">
                We collaborate with people and brands; lets build something
                great together.
              </h2>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                Connnect with us!
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
                <a href="https://www.linkedin.com/company/pakfactory/">
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/pakfactory/?ref=br_rs">
                  Facebook
                </a>
                <a href="https://www.instagram.com/pakfactory/">Instagram</a>
                <a href="https://twitter.com/pakfactory?lang=en">Twitter</a>
                <a href="https://www.pinterest.ca/pakfactory/">Pinterest</a>
              </div>

              <div className="mt-8 rounded-[6px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">
                  Sign up for exclusive offers and updates!
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <input
                    aria-label="Email"
                    className="rounded-md border border-white/10 bg-white px-4 py-3 text-sm text-[var(--pak-deep)] outline-none"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    aria-label="Name"
                    className="rounded-md border border-white/10 bg-white px-4 py-3 text-sm text-[var(--pak-deep)] outline-none"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <button
                  className="mt-3 rounded-md bg-[var(--pak-green)] px-5 py-3 text-sm font-semibold text-white"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-heading text-[20px] font-bold text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/72">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a className="hover:text-white" href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-2">
            <div className="rounded-[6px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Sustainability</p>
              <p className="mt-2 max-w-[420px] text-sm leading-6 text-white/72">
                PakFactory is pushing change for a greener tomorrow. For every
                order, trees are planted through the National Forest Foundation.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  alt="National Forest Foundation"
                  src="/images/pakfactory/icon-one-tree.svg"
                  width={42}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </div>
            </div>
            <div className="rounded-[6px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Compliance</p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                PakFactory is committed to delivering manufacturing excellence.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Image
                  alt="ISO"
                  src="/images/pakfactory/icon-iso.svg"
                  width={48}
                  height={48}
                  className="h-[48px] w-auto"
                />
                <Image
                  alt="FSC"
                  src="/images/pakfactory/icon-fsc.svg"
                  width={48}
                  height={48}
                  className="h-[48px] w-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/55">
            (c) 2024 PakFactory. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
