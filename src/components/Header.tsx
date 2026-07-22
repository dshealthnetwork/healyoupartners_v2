"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        background: scrolled
          ? "rgba(255, 255, 255, 0.96)"
          : "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(16px) saturate(1.5)",
        WebkitBackdropFilter: "blur(16px) saturate(1.5)",
        borderBottom: "1px solid rgba(203, 213, 225, 0.6)",
        boxShadow: scrolled ? "0 4px 20px rgba(15, 23, 42, 0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 76 : 96,
          transition: "height 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.jpg"
            alt="HealYou Partners Logo"
            width={260}
            height={80}
            style={{
              height: scrolled ? "54px" : "70px",
              width: "auto",
              objectFit: "contain",
              borderRadius: "6px",
              transition: "height 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.25rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--slate-800)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--teal-800)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--slate-800)")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: "0.625rem 1.5rem", fontSize: "0.9375rem" }}
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <div
            style={{
              width: 26,
              height: 3,
              background: "var(--slate-800)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              transform: mobileOpen ? "rotate(45deg) translateY(9px)" : "none",
            }}
          />
          <div
            style={{
              width: 26,
              height: 3,
              background: "var(--slate-800)",
              borderRadius: 2,
              marginTop: 6,
              transition: "all 0.3s ease",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: 26,
              height: 3,
              background: "var(--slate-800)",
              borderRadius: 2,
              marginTop: 6,
              transition: "all 0.3s ease",
              transform: mobileOpen ? "rotate(-45deg) translateY(-9px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#ffffff",
              borderBottom: "2px solid var(--teal-800)",
              padding: "1.5rem",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--slate-900)",
                  textDecoration: "none",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--slate-200)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary"
              onClick={() => setMobileOpen(false)}
              style={{
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
