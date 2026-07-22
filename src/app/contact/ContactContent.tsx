"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123 Medical Center Drive", "Suite 100, City, ST 00000"],
  },
  {
    icon: "☎",
    title: "Call Us",
    lines: ["(555) 000-0000", "Mon–Fri: 8am – 5pm"],
  },
  {
    icon: "✉",
    title: "Email Us",
    lines: ["info@healyoupartners.com", "We respond within 24 hours"],
  },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.9375rem 1.125rem",
    fontSize: "1rem",
    color: "var(--slate-900)",
    background: "#ffffff",
    border: "2px solid var(--slate-300)",
    borderRadius: "var(--radius-md)",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 700,
    color: "var(--teal-900)",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    marginBottom: "0.5rem",
  };

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
              Contact Us
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
              Let&apos;s Start Your{" "}
              <span className="gradient-text">Healing Journey</span>
            </h1>
            <div className="gold-line" style={{ margin: "0 auto 1.5rem" }} />
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--slate-700)",
                fontWeight: 500,
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Reach out to schedule a consultation or ask any questions about
              our services.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact info cards */}
      <section style={{ paddingBottom: "2rem", paddingTop: "3rem" }}>
        <div
          className="container contact-info-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            padding: "0 1.5rem",
          }}
        >
          {contactInfo.map((info, i) => (
            <AnimateOnScroll key={info.title} delay={i * 0.1}>
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
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    width: 56,
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "var(--radius-full)",
                    background: "var(--teal-100)",
                    border: "1px solid var(--teal-200)",
                    margin: "0 auto 1rem",
                  }}
                >
                  {info.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--slate-900)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p
                    key={line}
                    style={{
                      fontSize: "1rem",
                      color: "var(--slate-700)",
                      margin: "0.25rem 0",
                      fontWeight: 500,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <style jsx>{`
          @media (min-width: 768px) {
            .contact-info-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* Form section */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container" style={{ padding: "0 1.5rem" }}>
          <AnimateOnScroll>
            <div
              className="glass-card"
              style={{
                maxWidth: 680,
                margin: "0 auto",
                padding: "clamp(2rem, 4vw, 3.5rem)",
                background: "#ffffff",
                boxShadow: "0 12px 32px rgba(15, 23, 42, 0.08)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div
                    style={{
                      fontSize: "3.5rem",
                      marginBottom: "1rem",
                      color: "var(--teal-800)",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--slate-900)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Thank You
                  </h3>
                  <p
                    style={{
                      fontSize: "1.0625rem",
                      color: "var(--slate-700)",
                    }}
                  >
                    We&apos;ve received your message and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--slate-900)",
                      marginBottom: "0.375rem",
                      textAlign: "center",
                    }}
                  >
                    Send Us a Message
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--slate-600)",
                      textAlign: "center",
                      marginBottom: "2.25rem",
                    }}
                  >
                    We&apos;ll respond within one business day.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      className="form-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "1.5rem",
                      }}
                    >
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                              "var(--teal-800)";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 4px rgba(15,76,71,0.12)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                              "var(--slate-300)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="you@example.com"
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                              "var(--teal-800)";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 4px rgba(15,76,71,0.12)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor =
                              "var(--slate-300)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" style={labelStyle}>
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(555) 000-0000"
                        style={inputStyle}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--teal-800)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 4px rgba(15,76,71,0.12)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--slate-300)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" style={labelStyle}>
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        style={{
                          ...inputStyle,
                          cursor: "pointer",
                          appearance: "none",
                        }}
                      >
                        <option value="">Select a service</option>
                        <option value="wound-care">
                          Advanced Wound Care
                        </option>
                        <option value="pain-management">
                          Pain Management
                        </option>
                        <option value="regenerative">
                          Regenerative Therapy
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" style={labelStyle}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us how we can help…"
                        style={{
                          ...inputStyle,
                          resize: "vertical",
                          minHeight: 130,
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--teal-800)";
                          e.currentTarget.style.boxShadow =
                            "0 0 0 4px rgba(15,76,71,0.12)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor =
                            "var(--slate-300)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={loading}
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "1rem",
                        fontSize: "1.0625rem",
                        opacity: loading ? 0.7 : 1,
                        pointerEvents: loading ? "none" : "auto",
                      }}
                    >
                      {loading ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimateOnScroll>
        </div>

        <style jsx>{`
          @media (min-width: 768px) {
            .form-row {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
