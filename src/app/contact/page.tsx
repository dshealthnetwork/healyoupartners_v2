import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | HealYou Partners",
  description:
    "Get in touch with HealYou Partners. Schedule a consultation, ask questions, or learn more about our advanced wound care and pain management services.",
};

export default function ContactPage() {
  return <ContactContent />;
}
