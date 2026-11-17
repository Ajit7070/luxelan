"use client";

import { useState } from "react";
// import DotGrid from "@/components/DotGrid/DotGrid";

export default function WorkWithUs() {
  const [interest, setInterest] = useState("Architecture");

  const interests = ["Architecture", "Interior Design", "Styling", "Other"];

  return (
    <section className="work-section" id="work-with-us">
      {/* DOT GRID BACKGROUND */}
      {/* <div className="work-dot-grid">
        <DotGrid
          dotSize={4}
          gap={22}
          baseColor="#66513e"
          activeColor="#d1864c"
          proximity={130}
          strength={0.8}
          bounce={0.5}
          tension={0.3}
          returnDuration={0.8}
          shockRadius={280}
          shockStrength={3}
          swell={0.5}
          stretch={0.3}
          glow={0.3}
          shape="circle"
          fade={0.5}
          opacity={0.65}
          intro={true}
          mouseInteraction={true}
          clickShock={true}
        />
      </div> */}
      <div className="work-inner">
        <div className="work-left">
          <span className="work-eyebrow">LET'S COLLABORATE</span>

          <h2>
            Have a vision?
            <br />
            <span>Let's bring it</span>
            <br />
            to life.
          </h2>

          <p>
            Every remarkable space begins with an idea. Tell us yours, and let's
            create something extraordinary together.
          </p>

          <div className="work-note">
            <span>01 / 01</span>
            <span>YOUR NEXT CHAPTER STARTS HERE</span>
          </div>
        </div>

        <div className="work-right">
          <div className="work-form-heading">
            <span>START A CONVERSATION</span>
            <span className="work-star">✳</span>
          </div>

          <form className="work-form" action="/api/work-with-us" method="POST">
            <div className="work-field">
              <label htmlFor="work-name">01 — YOUR NAME</label>
              <input
                id="work-name"
                name="name"
                type="text"
                placeholder="What should we call you?"
                required
              />
            </div>

            <div className="work-field">
              <label htmlFor="work-email">02 — EMAIL ADDRESS</label>
              <input
                id="work-email"
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="work-field">
              <label htmlFor="work-phone">03 — PHONE NUMBER</label>
              <input
                id="work-phone"
                name="phone"
                type="tel"
                placeholder="Your contact number"
              />
            </div>

            <div className="work-interest">
              <label>04 — I'M INTERESTED IN</label>

              <div className="work-options">
                {interests.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={interest === item ? "active" : ""}
                    onClick={() => setInterest(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <input type="hidden" name="interest" value={interest} />
            </div>

            <div className="work-field">
              <label htmlFor="work-message">05 — TELL US ABOUT YOUR IDEA</label>
              <textarea
                id="work-message"
                name="message"
                placeholder="A little about what you have in mind..."
                rows="2"
              />
            </div>

            <button className="work-submit" type="submit">
              <span>LET'S TALK</span>
              <span className="work-submit-arrow">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
