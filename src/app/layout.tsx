import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "HealYou Partners | Wound Care & Pain Management",
  description:
    "A wound care and pain management practice built around one measure: how you're healing. Evidence-based treatment, tracked closely and explained plainly.",
  keywords: [
    "wound care",
    "pain management",
    "diabetic ulcer treatment",
    "chronic pain clinic",
    "regenerative therapy",
    "vascular assessment",
  ],
  openGraph: {
    title: "HealYou Partners | Wound Care & Pain Management",
    description:
      "A wound care and pain management practice built around one measure: how you're healing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${plexMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
