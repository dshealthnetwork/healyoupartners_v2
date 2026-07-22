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
        background: "#ffffff",
        borderTop: "2px solid var(--slate-200)",
        padding: "4rem 1.5rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: "1rem" }}>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <Image
                src="/logo.jpg"
                alt="HealYou Partners Logo"
                width={260}
                height={80}
                style={{
                  height: "64px",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: "6px",
                }}
              />
            </Link>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--slate-700)",
              lineHeight: 1.7,
              maxWidth: 360,
            }}
          >
            Delivering evidence-based wound care and comprehensive pain
            management with compassion, innovation, and personalized care.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--teal-900)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "var(--slate-700)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--teal-800)")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "var(--slate-700)")
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
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--teal-900)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Contact
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <span style={{ fontSize: "0.9375rem", color: "var(--slate-700)", fontWeight: 500 }}>
              ✉ info@healyoupartners.com
            </span>
            <span style={{ fontSize: "0.9375rem", color: "var(--slate-700)", fontWeight: 500 }}>
              ☎ (555) 000-0000
            </span>
            <span style={{ fontSize: "0.9375rem", color: "var(--slate-700)", fontWeight: 500 }}>
              📍 123 Medical Center Dr, Suite 100
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: "3rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--slate-200)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontSize: "0.875rem", color: "var(--slate-600)", margin: 0, fontWeight: 500 }}>
          © {new Date().getFullYear()} HealYou Partners. All rights reserved.
        </p>
        <p style={{ fontSize: "0.875rem", color: "var(--teal-900)", margin: 0, fontWeight: 600 }}>
          Compassion · Innovation · Excellence
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
