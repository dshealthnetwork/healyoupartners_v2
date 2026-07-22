"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ── Minimal line icons, drawn for this practice rather than pulled
      from an emoji set. Single stroke, currentColor, no fills. ── */

function BandageIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="9.5" width="17" height="5" rx="2.5" transform="rotate(-25 12 12)" />
      <path d="M9.2 9.2c.8.8.8 2 0 2.8m3.6-6.4c.8.8.8 2 0 2.8m3.6 6.4c-.8-.8-.8-2 0-2.8" strokeWidth="1.1" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 12h4l2-6 3 12 2-9 1.5 3h6.5" />
    </svg>
  );
}

function CellIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VesselIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4c0 5 5 5 5 10s-2 4-2 6" />
      <path d="M20 4c0 5-5 5-5 10s2 4 2 6" />
      <path d="M9 12h6" />
    </svg>
  );
}

const services = [
  {
    Icon: BandageIcon,
    title: "Advanced Wound Care",
    description:
      "Diabetic ulcers, pressure injuries, and post-surgical wounds treated with debridement, advanced dressings, and progress measured at every visit.",
  },
  {
    Icon: PulseIcon,
    title: "Pain Management",
    description:
      "Plans for chronic and acute pain that combine interventional procedures, physical therapy, and medication management under one roof.",
  },
  {
    Icon: CellIcon,
    title: "Regenerative Therapy",
    description:
      "Biologics, growth-factor therapy, and tissue grafts, used selectively when a wound has stalled and needs a different kind of help.",
  },
  {
    Icon: VesselIcon,
    title: "Vascular Assessment",
    description:
      "Doppler studies and vascular workups to find the circulation problems that are quietly keeping a wound from closing.",
  },
];

const stats = [
  { value: "15,000+", label: "Patients treated" },
  { value: "98%", label: "Treatment satisfaction" },
  { value: "25 yrs", label: "Combined experience" },
  { value: "40+", label: "Specialists on staff" },
];

const process = [
  {
    n: "01",
    title: "Assess",
    description:
      "A full workup — wound measurements, vascular studies, pain history — before we propose anything.",
  },
  {
    n: "02",
    title: "Treat",
    description:
      "A plan built around the wound and your life, not a standard protocol. Adjusted as it responds.",
  },
  {
    n: "03",
    title: "Track",
    description:
      "Every visit measured against the last one, so you can see the wound closing rather than just hope it is.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═════════════════════════════════════
          HERO — asymmetric, editorial
          ═════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "8.5rem",
          paddingBottom: "4.5rem",
          background: "var(--paper-dim, var(--slate-50))",
          borderBottom: "1px solid var(--slate-200)",
        }}
      >
        <div
          className="container hero-grid"
          style={{
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Wound Care &amp; Pain Management</span>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.6vw, 3.5rem)",
                lineHeight: 1.12,
                color: "var(--slate-950)",
                marginTop: "1.125rem",
                marginBottom: "1.25rem",
              }}
            >
              Wounds that get <span className="gradient-text">followed</span>,
              not just treated.
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--slate-700)",
                maxWidth: 520,
                marginBottom: "2rem",
                lineHeight: 1.7,
              }}
            >
              HealYou Partners treats chronic wounds and persistent pain with
              a plan you can see — what&rsquo;s changing, what&rsquo;s next,
              and why.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>

            <div className="gold-line" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "5/4",
                border: "1px solid var(--slate-200)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src="/hero-bg.png"
                alt="HealYou Partners clinical care"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Clinical annotation tag — the "chart" motif, not a glass overlay */}
            <div
              style={{
                position: "absolute",
                left: "-1rem",
                bottom: "-1.25rem",
                background: "#ffffff",
                border: "1px solid var(--slate-200)",
                borderRadius: "var(--radius-md)",
                padding: "0.875rem 1.25rem",
                boxShadow: "var(--shadow-lg)",
              }}
              className="hero-tag"
            >
              <div className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", color: "var(--slate-500)", textTransform: "uppercase" }}>
                Avg. closure rate
              </div>
              <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.75rem", color: "var(--teal-800)", lineHeight: 1.2 }}>
                92%<span style={{ fontSize: "0.9375rem", color: "var(--slate-500)" }}> / 12 wks</span>
              </div>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          @media (min-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr 0.9fr !important;
              gap: 4rem !important;
            }
          }
          @media (max-width: 480px) {
            .hero-tag {
              left: 0 !important;
            }
          }
        `}</style>
      </section>

      {/* ═════════════════════════════════════
          STAT RAIL — hairline dividers, mono figures
          ═════════════════════════════════════ */}
      <section style={{ background: "#ffffff", borderBottom: "1px solid var(--slate-200)" }}>
        <div
          className="container stats-row"
          style={{
            padding: "3rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem 1rem",
          }}
        >
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.06}>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 1rem",
                  borderLeft: i % 2 === 1 ? "1px solid var(--slate-200)" : "none",
                }}
                className="stat-cell"
              >
                <div className="mono" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.125rem)", color: "var(--slate-950)", fontWeight: 500 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--slate-600)", marginTop: "0.375rem" }}>
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            .stats-row {
              grid-template-columns: repeat(4, 1fr) !important;
            }
            .stat-cell {
              border-left: 1px solid var(--slate-200) !important;
            }
            .stat-cell:first-child {
              border-left: none !important;
            }
          }
        `}</style>
      </section>

      {/* ═════════════════════════════════════
          SERVICES
          ═════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--paper-dim, var(--slate-50))" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ maxWidth: 560, marginBottom: "3.5rem" }}>
              <span className="eyebrow">What We Treat</span>
              <h2
                style={{
                  fontSize: "clamp(1.875rem, 3.2vw, 2.5rem)",
                  color: "var(--slate-950)",
                  marginTop: "0.625rem",
                  marginBottom: "1rem",
                }}
              >
                Four disciplines, one chart.
              </h2>
              <p style={{ fontSize: "1.0625rem", color: "var(--slate-700)", lineHeight: 1.7, margin: 0 }}>
                Wounds rarely have a single cause. Our team treats the tissue,
                the pain, and the circulation behind it together.
              </p>
            </div>
          </AnimateOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.25rem",
            }}
            className="services-grid"
          >
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.08}>
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--teal-200)",
                      color: "var(--teal-700)",
                      marginBottom: "1.375rem",
                    }}
                  >
                    <service.Icon />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.1875rem",
                      color: "var(--slate-950)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.3}>
            <div style={{ marginTop: "3rem" }}>
              <Link href="/services" className="btn-secondary">
                View All Services →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ═════════════════════════════════════
          PROCESS — a real sequence, so numbering earns its place
          ═════════════════════════════════════ */}
      <section className="section" style={{ background: "#ffffff" }}>
        <div className="container">
          <AnimateOnScroll>
            <div style={{ maxWidth: 560, marginBottom: "3.5rem" }}>
              <span className="eyebrow">How It Works</span>
              <h2
                style={{
                  fontSize: "clamp(1.875rem, 3.2vw, 2.5rem)",
                  color: "var(--slate-950)",
                  marginTop: "0.625rem",
                  marginBottom: "1rem",
                }}
              >
                Every visit against the last one.
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
            {process.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={i * 0.1}>
                <div
                  style={{
                    padding: "1.75rem 0",
                    borderTop: "1px solid var(--slate-200)",
                    borderBottom: i === process.length - 1 ? "1px solid var(--slate-200)" : "none",
                    display: "grid",
                    gridTemplateColumns: "3.5rem 1fr",
                    gap: "1.25rem",
                    alignItems: "baseline",
                  }}
                  className="process-row"
                >
                  <span className="mono" style={{ fontSize: "0.9375rem", color: "var(--gold-600)" }}>
                    {step.n}
                  </span>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", color: "var(--slate-950)", marginBottom: "0.5rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "1rem", color: "var(--slate-700)", lineHeight: 1.7, margin: 0, maxWidth: 620 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════
          ABOUT TEASER
          ═════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--paper-dim, var(--slate-50))", borderTop: "1px solid var(--slate-200)" }}>
        <div
          className="container about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          <AnimateOnScroll direction="left">
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                aspectRatio: "4/3",
                border: "1px solid var(--slate-200)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src="/about-care.png"
                alt="A HealYou Partners clinician with a patient"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2
                style={{
                  fontSize: "clamp(1.875rem, 3.2vw, 2.5rem)",
                  color: "var(--slate-950)",
                  marginTop: "0.625rem",
                  marginBottom: "1.25rem",
                }}
              >
                Judged by outcomes, not appointments.
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--slate-700)",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                }}
              >
                Too many wound and pain patients cycle through visits without
                a clear sense of progress. Every plan here starts with a
                baseline — wound size, pain scores, mobility — and is
                measured against it, visit over visit. Our team works across
                wound care, pain medicine, and vascular health, so nothing
                gets treated in isolation.
              </p>
              <Link href="/about" className="btn-primary">
                Meet the Team
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ═════════════════════════════════════
          CTA — deep sage panel, bookends the footer
          ═════════════════════════════════════ */}
      <section style={{ background: "var(--teal-900)", padding: "5.5rem 1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateOnScroll>
            <div className="gold-line center" style={{ marginBottom: "1.75rem" }} />
            <h2
              style={{
                fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)",
                color: "#ffffff",
                marginBottom: "1rem",
                maxWidth: 640,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Start with an assessment, not a sales pitch.
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--teal-200)",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Bring your history and your prior treatments. We&rsquo;ll tell
              you plainly what we see and what we&rsquo;d do.
            </p>
            <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 1.875rem",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-md)",
                  background: "#ffffff",
                  color: "var(--teal-900)",
                  textDecoration: "none",
                  border: "1px solid #ffffff",
                }}
              >
                Schedule Consultation
              </Link>
              <Link
                href="tel:5550000000"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.875rem 1.875rem",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-md)",
                  background: "transparent",
                  color: "#ffffff",
                  textDecoration: "none",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                }}
              >
                Call (555) 000-0000
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
