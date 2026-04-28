import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: {
    default: "AI Portfolio",
    template: "%s | AI Portfolio"
  },
  description:
    "A recruiter-facing portfolio for an early-career AI builder focused on interactive, product-driven experiences."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${instrumentSerif.variable} font-sans text-paper antialiased`}>
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:52px_52px] opacity-[0.04]" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
