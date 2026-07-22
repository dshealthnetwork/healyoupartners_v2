"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

const woundCareServices = [
  {
    icon: "🩹",
    title: "Chronic Wound Management",
    description:
      "Specialized treatment protocols for non-healing wounds including diabetic ulcers, pressure injuries, and venous stasis wounds.",
  },
  {
    icon: "🔬",
    title: "Cellular & Tissue-Based Products",
    description:
      "State-of-the-art skin substitutes and biologics to accelerate healing and promote tissue regeneration.",
  },
  {
    icon: "💉",
    title: "Negative Pressure Wound Therapy",
    description:
      "Advanced vacuum-assisted closure techniques for complex and surgical wounds.",
  },
  {
    icon: "🧬",
    title: "Hyperbaric Oxygen Therapy",
    description:
      "High-pressure oxygen treatment to boost healing in recalcitrant wounds and compromised tissue.",
  },
];

const painServices = [
  {
    icon: "💊",
    title: "Interventional Pain Procedures",
    description:
      "Minimally invasive nerve blocks, epidural injections, and radiofrequency ablation for targeted pain relief.",
  },
  {
    icon: "🧠",
    title: "Multimodal Pain Programs",
    description:
      "Comprehensive treatment plans combining physical therapy, medication management, and behavioral health.",
  },
  {
    icon: "⚡",
    title: "Neuromodulation",
    description:
      "Spinal cord stimulators and peripheral nerve stimulation for chronic, refractory pain conditions.",
  },
  {
    icon: "🧘",
    title: "Integrative Therapies",
    description:
      "Evidence-based complementary approaches including acupuncture, biofeedback, and mindfulness techniques.",
  },
];

export default function ServicesContent() {
  return (
    <>
      {/* Hero banner */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "4rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: "var(--teal-50)",
          borderBottom: "1px solid var(--slate-200)",
        }}
        className="bg-grid"
      >
        <div
          className="bg-radial"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />
        <div className="container" style={{ position: "relative", padding: "0 1.5rem" }}>
          <AnimateOnScroll>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--gold-800)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Our Expertise
            </span>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                color: "var(--slate-900)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Comprehensive{" "}
              <span className="gradient-text">Medical Services</span>
            </h1>
            <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--slate-700)",
                fontWeight: 500,
                maxWidth: 620,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Specialized wound care and pain management services delivered by
              board-certified physicians and advanced practitioners.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Wound Care section */}
      <section className="section" style={{ paddingTop: "4rem" }}>
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <AnimateOnScroll>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--teal-900)",
                marginBottom: "0.5rem",
              }}
            >
              Advanced Wound Care
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--slate-700)",
                marginBottom: "2.5rem",
                maxWidth: 600,
              }}
            >
              Cutting-edge treatments to promote healing and restore quality of
              life.
            </p>
          </AnimateOnScroll>

          <div
            className="services-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
            {woundCareServices.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.08}>
                <div
                  className="glass-card"
                  style={{ padding: "2rem", height: "100%" }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-md)",
                      background: "var(--teal-100)",
                      border: "1px solid var(--teal-200)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Management section */}
      <section className="section" style={{ background: "#ffffff", borderTop: "1px solid var(--slate-200)", borderBottom: "1px solid var(--slate-200)" }}>
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <AnimateOnScroll>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--gold-800)",
                marginBottom: "0.5rem",
              }}
            >
              Pain Management
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--slate-700)",
                marginBottom: "2.5rem",
                maxWidth: 600,
              }}
            >
              Multidisciplinary approaches to reduce pain and restore function.
            </p>
          </AnimateOnScroll>

          <div
            className="services-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
            {painServices.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.08}>
                <div
                  className="glass-card"
                  style={{ padding: "2rem", height: "100%" }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-md)",
                      background: "var(--gold-100)",
                      border: "1px solid var(--gold-200)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <AnimateOnScroll>
            <div
              className="glass-card"
              style={{
                textAlign: "center",
                padding: "clamp(2.5rem, 5vw, 4rem)",
                maxWidth: 700,
                margin: "0 auto",
                background: "#ffffff",
              }}
            >
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  marginBottom: "0.875rem",
                }}
              >
                Not Sure Which Service Is Right for You?
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--slate-700)",
                  marginBottom: "1.75rem",
                  maxWidth: 500,
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.7,
                }}
              >
                Our specialists will evaluate your condition and recommend a
                personalized treatment plan.
              </p>
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <style jsx>{`
        @media (min-width: 768px) {
          .services-detail-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}
