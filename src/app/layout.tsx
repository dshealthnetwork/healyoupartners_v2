import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HealYou Partners | Advanced Wound Care & Pain Management",
  description:
    "Delivering evidence-based wound care and comprehensive pain management with compassion, innovation, and personalized treatment plans. World-class medical expertise for every patient.",
  keywords: [
    "wound care",
    "pain management",
    "advanced wound care",
    "chronic pain",
    "evidence-based treatment",
    "personalized care",
  ],
  openGraph: {
    title: "HealYou Partners | Advanced Wound Care & Pain Management",
    description:
      "Delivering evidence-based wound care and comprehensive pain management with compassion, innovation, and personalized treatment plans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
