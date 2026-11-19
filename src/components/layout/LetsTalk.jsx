"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LetsTalk() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftText = sectionRef.current.querySelector(".lets-talk-left");
      const rightText = sectionRef.current.querySelector(".lets-talk-right");
      const content = sectionRef.current.querySelector(".lets-talk-content");

      gsap.set(content, {
        y: 120,
        opacity: 0,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=650",
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
        .to(
          leftText,
          {
            x: "-75vw",
            ease: "none",
          },
          0
        )
        .to(
          rightText,
          {
            x: "75vw",
            ease: "none",
          },
          0
        )
        .to(
          content,
          {
            y: 0,
            opacity: 1,
            ease: "none",
          },
          0.2
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="lets-talk-section" ref={sectionRef}>
      <div className="lets-talk-words">
        <span className="lets-talk-word lets-talk-left">LET&apos;S</span>

        <span className="lets-talk-word lets-talk-right">TALK</span>
      </div>

      <div className="lets-talk-content">
        <p className="lets-talk-eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>
          Ready to start your <span>project?</span>
        </h2>

        <p className="lets-talk-description">
          Let&apos;s bring your vision to life.
          <br />
          From the first sketch to the final detail.
        </p>

        <a href="/contact" className="lets-talk-button">
          <span>LET&apos;S CONNECT</span>
          <span className="lets-talk-arrow">↗</span>
        </a>
      </div>
    </section>
  );
}
