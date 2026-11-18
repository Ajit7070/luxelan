"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";

export default function Process() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const image = imageRef.current;

      if (!section || !image) return;

      const mm = gsap.matchMedia();

      // DESKTOP: CINEMATIC BACKGROUND ZOOM
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          image,
          { scale: 1.15, yPercent: -3 },
          {
            scale: 1,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });

      // MOBILE: LIGHTWEIGHT BACKGROUND ZOOM
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          image,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // CONTENT REVEAL
      const content = section.querySelector(".process-inner");

      gsap.fromTo(
        content,
        { y: 45, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section className="process-section" ref={sectionRef}>
      {/* BACKGROUND IMAGE */}
      <div className="process-background">
        <img
          ref={imageRef}
          src="/assets/images/projects/project-01.jpg"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="process-overlay"></div>

      {/* CONTENT */}
      <div className="process-inner">
        <span className="process-eyebrow">THE LUXELAN APPROACH</span>

        <h2 className="process-heading">
          Every great space begins with a <span>thoughtful process.</span>
        </h2>

        <a href="/process" className="process-cta">
          EXPLORE OUR PROCESS
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
