import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | HealYou Partners",
  description:
    "Learn about HealYou Partners — our mission, values, and commitment to delivering world-class wound care and pain management with compassion and innovation.",
};

export default function AboutPage() {
  return <AboutContent />;
}
