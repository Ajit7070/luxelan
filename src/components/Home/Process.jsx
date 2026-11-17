"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";

export default function Process() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".process-heading",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        }
      ).fromTo(
        ".process-cta",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-inner">
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
