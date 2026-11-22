"use client";

import { useState } from "react";

const openings = [
  {
    id: "01",
    title: "Purchase Executive",
    location: "Pune",
    experience: "2–3 Years",
  },
  {
    id: "02",
    title: "Sales Manager",
    location: "Pune",
    experience: "2–3 Years",
  },
  {
    id: "03",
    title: "Senior Interior Designer",
    location: "Pune",
    experience: "8+ Years",
  },
  {
    id: "04",
    title: "Junior Interior Designer",
    location: "Pune",
    experience: "1–2 Years",
  },
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleApply = (position) => {
    setSelectedPosition(position);

    document.getElementById("career-application")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      `Career Application - ${data.get("position")}`
    );

    const body = encodeURIComponent(
      `Name: ${data.get("name")}\n` +
        `Email: ${data.get("email")}\n` +
        `Phone: ${data.get("phone")}\n` +
        `Position: ${data.get("position")}\n` +
        `Experience: ${data.get("experience")}\n\n` +
        `Introduction:\n${data.get("message") || "Not provided"}\n\n` +
        `I will attach my resume and portfolio to this email.`
    );

    window.location.href = `mailto:hr@luxelan.in?subject=${subject}&body=${body}`;

    setFormMessage(
      "Your email application is ready. Please attach your resume and portfolio before sending."
    );
  };

  return (
    <main className="career-page">
      {/* HERO BANNER */}
      <section className="career-banner">
        <video
          className="career-banner-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/videos/luxelan-video.mp4" type="video/mp4" />
        </video>

        <div className="career-banner-overlay" />

        <div className="career-banner-content">
          <h1>
            Build Your
            <br />
            <em>Creative Future.</em>
          </h1>

          <a href="#career-openings" className="career-banner-link">
            EXPLORE OPPORTUNITIES
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="career-openings" id="career-openings">
        <div className="career-openings-heading">
          <div className="career-heading-left">
            <span className="career-eyebrow">
              CAREERS · {String(openings.length).padStart(2, "0")} OPENINGS
            </span>

            <h2>
              Build with people
              <br />
              who create <em>timeless spaces.</em>
            </h2>
          </div>

          <p className="career-heading-description">
            Bring your ideas, creativity and passion to a team shaping
            exceptional interior spaces. Explore our opportunities and find
            where you belong.
          </p>
        </div>

        {/* TABLE HEADER */}
        <div className="career-table-header">
          <span>ROLE</span>
          <span>LOCATION</span>
          <span>EXPERIENCE</span>
          <span className="career-apply-heading">ACTION</span>
        </div>

        {/* OPENING ROWS */}
        <div className="career-openings-list">
          {openings.map((opening) => (
            <div className="career-opening-row" key={opening.id}>
              <div className="career-role">
                <span className="career-opening-number">{opening.id}</span>
                <h3>{opening.title}</h3>
              </div>

              <span className="career-opening-location">
                {opening.location}
              </span>

              <span className="career-opening-experience">
                {opening.experience}
              </span>

              <button
                type="button"
                className="career-apply-link"
                onClick={() => handleApply(opening.title)}
              >
                Apply <span>↗</span>
              </button>
            </div>
          ))}
        </div>

        <div className="career-openings-footer">
          <span>DON'T SEE THE RIGHT ROLE?</span>
          <a href="mailto:hr@luxelan.in">SEND US YOUR PROFILE ↗</a>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="career-application" id="career-application">
        <div className="career-application-inner">
          {/* FORM INTRO */}
          <div className="career-application-intro">
            <span className="career-eyebrow">CAREERS · YOUR NEXT CHAPTER</span>

            <h2>
              Let's create
              <br />
              something <em>timeless.</em>
            </h2>

            <p>
              Interested in joining Luxélan? Share your details, tell us about
              your experience and let us know how you can contribute to our
              creative journey.
            </p>

            <div className="career-contact-note">
              <span>HAVE A QUESTION?</span>
              <a href="mailto:hr@luxelan.in">hr@luxelan.in</a>
            </div>
          </div>

          {/* APPLICATION FORM */}
          <div className="career-form-wrapper">
            <form className="career-application-form" onSubmit={handleSubmit}>
              <div className="career-form-grid">
                <div className="career-form-field">
                  <label htmlFor="career-name">01 — FULL NAME *</label>
                  <input
                    type="text"
                    id="career-name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="career-form-field">
                  <label htmlFor="career-email">02 — EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="career-email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="career-form-field">
                  <label htmlFor="career-phone">03 — PHONE NUMBER *</label>
                  <input
                    type="tel"
                    id="career-phone"
                    name="phone"
                    placeholder="Your contact number"
                    pattern="[0-9+\-\s()]{7,20}"
                    required
                  />
                </div>

                <div className="career-form-field">
                  <label htmlFor="career-position">04 — POSITION *</label>
                  <select
                    id="career-position"
                    name="position"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    required
                  >
                    <option value="">Select a position</option>

                    {openings.map((opening) => (
                      <option key={opening.id} value={opening.title}>
                        {opening.title}
                      </option>
                    ))}

                    <option value="Other / General Application">
                      Other / General Application
                    </option>
                  </select>
                </div>

                <div className="career-form-field">
                  <label htmlFor="career-experience">
                    05 — YEARS OF EXPERIENCE *
                  </label>
                  <select
                    id="career-experience"
                    name="experience"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    <option value="Fresher">Fresher</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1–2 Years">1–2 Years</option>
                    <option value="2–5 Years">2–5 Years</option>
                    <option value="5–8 Years">5–8 Years</option>
                    <option value="8+ Years">8+ Years</option>
                  </select>
                </div>

                <div className="career-form-field career-form-full">
                  <label htmlFor="career-message">
                    06 — TELL US ABOUT YOURSELF
                  </label>
                  <textarea
                    id="career-message"
                    name="message"
                    rows="4"
                    placeholder="A little about your background, experience and interests..."
                  />
                </div>

                <div className="career-form-field career-form-full">
                  <label htmlFor="career-resume">07 — UPLOAD RESUME *</label>
                  <input
                    type="file"
                    id="career-resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <span className="career-file-note">PDF, DOC or DOCX</span>
                </div>

                <div className="career-form-field career-form-full">
                  <label htmlFor="career-portfolio">
                    08 — UPLOAD PORTFOLIO
                  </label>
                  <input
                    type="file"
                    id="career-portfolio"
                    name="portfolio"
                    accept=".pdf,.doc,.docx,.zip"
                  />
                  <span className="career-file-note">
                    PDF, DOC, DOCX or ZIP
                  </span>
                </div>
              </div>

              <div className="career-form-submit">
                <p>
                  By submitting, you agree to be contacted by our recruitment
                  team.
                </p>

                <button type="submit">
                  SUBMIT APPLICATION <span>↗</span>
                </button>
              </div>

              {formMessage && (
                <p className="career-form-message" role="status">
                  {formMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
