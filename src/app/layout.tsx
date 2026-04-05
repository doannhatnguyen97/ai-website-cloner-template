import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PakFactory® | Your Trusted Custom Packaging Solutions Partner",
  description:
    "Your top choice for custom printed packaging in US & Canada. PakFactory tailors packaging solutions for you from consultation to delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
