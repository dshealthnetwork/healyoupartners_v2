"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    icon: "🩹",
    title: "Advanced Wound Care",
    description:
      "Evidence-based wound management using state-of-the-art techniques for optimal healing.",
  },
  {
    icon: "💊",
    title: "Pain Management",
    description:
      "Comprehensive, multidisciplinary approaches to chronic and acute pain relief.",
  },
  {
    icon: "🔬",
    title: "Regenerative Therapy",
    description:
      "Innovative biologics and regenerative treatments to accelerate tissue repair.",
  },
  {
    icon: "🫀",
    title: "Vascular Assessment",
    description:
      "Advanced diagnostic evaluations to identify and address underlying vascular conditions.",
  },
];

const stats = [
  { value: "15K+", label: "Patients Treated" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "25+", label: "Years Experience" },
  { value: "40+", label: "Specialists" },
];

export default function HomePage() {
  return (
    <>
      {/* ═════════════════════════════════════
          HERO SECTION (Visible Hero BG + High-Contrast Content)
          ═════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "7rem",
          paddingBottom: "4rem",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image
            src="/hero-bg.png"
            alt="Modern luxury hospital interior"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          {/* Subtle light overlay to reveal full hero background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(240,247,246,0.45) 60%, rgba(248,250,252,0.95) 100%)",
            }}
          />
        </div>

        {/* Decorative soft teal glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse, rgba(36,153,142,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Content Box with Frosted Glass for Maximum Contrast & Full BG Visibility */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: 900,
            width: "100%",
            margin: "0 1.5rem",
            padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)",
            background: "rgba(255, 255, 255, 0.88)",
            backdropFilter: "blur(16px) saturate(1.4)",
            WebkitBackdropFilter: "blur(16px) saturate(1.4)",
            borderRadius: "var(--radius-2xl)",
            border: "2px solid rgba(255, 255, 255, 0.95)",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--teal-900)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                padding: "0.5rem 1.25rem",
                border: "1.5px solid var(--teal-700)",
                borderRadius: "var(--radius-full)",
                background: "#ffffff",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
              }}
            >
              Excellence in Medical Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--slate-900)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Advanced Wound Care &{" "}
            <span className="gradient-text">Comprehensive Pain Management</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(1.0625rem, 1.8vw, 1.25rem)",
              color: "var(--slate-800)",
              fontWeight: 500,
              maxWidth: 680,
              margin: "0 auto 2.25rem",
              lineHeight: 1.7,
            }}
          >
            Delivering evidence-based treatment with compassion, innovation, and
            personalized care — because every patient deserves healing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═════════════════════════════════════
          STATS BAR
          ═════════════════════════════════════ */}
      <section
        style={{
          background: "#ffffff",
          borderTop: "2px solid var(--slate-200)",
          borderBottom: "2px solid var(--slate-200)",
          boxShadow: "0 4px 12px rgba(15, 23, 42, 0.03)",
        }}
      >
        <div
          className="container"
          style={{
            padding: "3rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
        >
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 800,
                    color: "var(--teal-900)",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "var(--slate-700)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "0.375rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            div {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ═════════════════════════════════════
          SERVICES PREVIEW
          ═════════════════════════════════════ */}
      <section className="section bg-grid">
        <div className="bg-radial" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--gold-800)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                What We Offer
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Our Core Services
              </h2>
              <div className="gold-line" style={{ margin: "0 auto" }} />
            </div>
          </AnimateOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.75rem",
            }}
            className="services-grid"
          >
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.1}>
                <div
                  className="glass-card"
                  style={{
                    padding: "2.25rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.25rem",
                      marginBottom: "1.25rem",
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-md)",
                      background: "var(--teal-100)",
                      border: "1px solid var(--teal-200)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                      marginBottom: "0.625rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
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

          <AnimateOnScroll delay={0.4}>
            <div
              style={{
                textAlign: "center",
                marginTop: "3.5rem",
              }}
            >
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
          ABOUT TEASER
          ═════════════════════════════════════ */}
      <section className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--slate-200)", borderBottom: "1px solid var(--slate-200)" }}>
        <div
          className="container"
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
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                aspectRatio: "4/3",
                boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
                border: "2px solid var(--slate-200)",
              }}
            >
              <Image
                src="/about-care.png"
                alt="Compassionate medical professional holding patient hand"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--gold-800)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Our Promise
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                Healing Through Compassion & Innovation
              </h2>
              <div className="gold-line" style={{ marginBottom: "1.75rem" }} />
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--slate-700)",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                }}
              >
                At HealYou Partners, we believe every patient deserves
                world-class care delivered with empathy. Our multidisciplinary
                team combines the latest medical advancements with a
                patient-first philosophy to deliver outcomes that transform
                lives.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
        <style jsx>{`
          @media (min-width: 768px) {
            .container {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ═════════════════════════════════════
          CTA SECTION
          ═════════════════════════════════════ */}
      <section
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--teal-50)",
        }}
      >
        <div className="container" style={{ position: "relative" }}>
          <AnimateOnScroll>
            <div
              className="glass-card"
              style={{
                textAlign: "center",
                padding: "clamp(2.5rem, 5vw, 4rem)",
                maxWidth: 760,
                margin: "0 auto",
                background: "#ffffff",
                border: "2px solid var(--teal-200)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Ready to Begin Your Healing Journey?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--slate-700)",
                  lineHeight: 1.7,
                  marginBottom: "2.25rem",
                  maxWidth: 520,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Our team is ready to create a personalized treatment plan
                designed for your unique needs.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/contact" className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link
                  href="tel:5550000000"
                  className="btn-secondary"
                >
                  Call (555) 000-0000
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
