"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--teal-950)",
        padding: "4.5rem 1.5rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.75rem",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "1.25rem" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <Image
                src="/logo.jpg"
                alt="HealYou Partners Logo"
                width={260}
                height={80}
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: "4px",
                }}
              />
            </Link>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--teal-200)",
              lineHeight: 1.7,
              maxWidth: 360,
            }}
          >
            Wound care and pain management, tracked closely and explained
            plainly — from first visit to closed wound.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--gold-400)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "1.125rem",
            }}
          >
            Site
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--teal-100)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--gold-400)")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--teal-100)")
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--gold-400)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "1.125rem",
            }}
          >
            Contact
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <span style={{ fontSize: "0.9375rem", color: "var(--teal-100)" }}>
              info@healyoupartners.com
            </span>
            <span style={{ fontSize: "0.9375rem", color: "var(--teal-100)" }}>
              (555) 000-0000
            </span>
            <span style={{ fontSize: "0.9375rem", color: "var(--teal-100)" }}>
              123 Medical Center Dr, Suite 100
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "3.25rem auto 0",
          paddingTop: "1.75rem",
          borderTop: "1px solid rgba(226, 233, 225, 0.14)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <p style={{ fontSize: "0.8125rem", color: "var(--teal-400)", margin: 0 }}>
          © {new Date().getFullYear()} HealYou Partners. All rights reserved.
        </p>
        <p
          className="mono"
          style={{ fontSize: "0.75rem", color: "var(--teal-400)", margin: 0, letterSpacing: "0.08em" }}
        >
          EVIDENCE-BASED · PATIENT-LED
        </p>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
