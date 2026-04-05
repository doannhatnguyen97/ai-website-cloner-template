export interface ProductCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

export interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface IndustryCard {
  title: string;
  description: string;
  href: string;
  image: string;
}
