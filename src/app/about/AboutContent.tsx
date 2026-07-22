"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const values = [
  {
    icon: "❤️",
    title: "Compassion",
    description:
      "Every interaction is guided by empathy. We see the person behind the diagnosis.",
  },
  {
    icon: "🔬",
    title: "Innovation",
    description:
      "We stay at the forefront of medical science, integrating the latest research into every treatment.",
  },
  {
    icon: "🏆",
    title: "Excellence",
    description:
      "Our outcomes speak for themselves — we hold ourselves to the highest clinical standards.",
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description:
      "A multidisciplinary team approach ensures holistic care tailored to each patient.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
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
              About Us
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
              Where Science Meets{" "}
              <span className="gradient-text">Compassion</span>
            </h1>
            <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--slate-700)",
                fontWeight: 500,
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              HealYou Partners was founded on a simple belief: that every
              patient deserves access to world-class medical care, delivered
              with genuine compassion and backed by rigorous science.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission split */}
      <section className="section" style={{ paddingTop: "4rem" }}>
        <div
          className="container about-split"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
            padding: "0 1.5rem",
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
                alt="Our compassionate care team"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right">
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                Our Mission
              </h2>
              <div className="gold-line" style={{ marginBottom: "1.75rem" }} />
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--slate-700)",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                We are dedicated to transforming the lives of patients
                suffering from chronic wounds and pain through evidence-based,
                personalized treatment protocols. Our interdisciplinary team of
                physicians, nurses, and therapists collaborates to create
                tailored care plans that address both the physical and
                emotional dimensions of healing.
              </p>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--slate-700)",
                  lineHeight: 1.8,
                }}
              >
                With over two decades of clinical excellence, we continue to
                push boundaries — adopting the latest regenerative technologies,
                participating in cutting-edge research, and maintaining an
                unwavering commitment to patient outcomes.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <style jsx>{`
          @media (min-width: 768px) {
            .about-split {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* Values */}
      <section
        className="section"
        style={{
          background: "#ffffff",
          borderTop: "1px solid var(--slate-200)",
          borderBottom: "1px solid var(--slate-200)",
        }}
      >
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--gold-800)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Our Values
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "var(--slate-900)",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                Principles That Guide Every Decision
              </h2>
              <div className="gold-line" style={{ margin: "0 auto" }} />
            </div>
          </AnimateOnScroll>

          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
          >
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.25rem",
                      marginBottom: "1rem",
                      width: 60,
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "var(--radius-full)",
                      background: "var(--teal-100)",
                      border: "1px solid var(--teal-200)",
                      margin: "0 auto 1.25rem",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--slate-900)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--slate-700)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <style jsx>{`
            @media (min-width: 768px) {
              .values-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
            @media (min-width: 1024px) {
              .values-grid {
                grid-template-columns: repeat(4, 1fr) !important;
              }
            }
          `}</style>
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
                Experience the HealYou Difference
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--slate-700)",
                  marginBottom: "1.75rem",
                  lineHeight: 1.7,
                  maxWidth: 500,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Join thousands of patients who have found healing, hope, and
                renewed quality of life through our care.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
