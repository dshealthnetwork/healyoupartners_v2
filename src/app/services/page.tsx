import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | HealYou Partners",
  description:
    "Explore our comprehensive wound care and pain management services. From advanced wound treatments to regenerative therapy, we offer evidence-based solutions for every patient.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
