"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";

export default function Hero() {
  const mainRef = useRef(null);

  // HERO INTRO ANIMATION
  useGSAP(
    () => {
      const intro = gsap.timeline();

      intro.from(".hero-copy", {
        y: 45,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="lux-home">
      {/* HERO VIDEO SECTION */}

      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/videos/banner-vdo.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        {/* HERO CONTENT */}

        <div className="hero-content">
          <div className="hero-copy">
            <span className="hero-eyebrow">THE WORLD OF LUXELAN</span>

            <h1>THE ART OF LIVING</h1>

            <p>Spaces. Stories. Experiences.</p>
          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
