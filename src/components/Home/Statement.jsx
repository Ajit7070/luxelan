"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";

export default function Statement() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".statement-heading",
        {
          y: 55,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section className="statement-section" ref={sectionRef}>
      <div className="statement-inner">
        <h2 className="statement-heading">
          <span>Thoughtfully</span> DESIGNING THE
          <br className="statement-break" />
          WORLD’S FINEST INTERIORS.
        </h2>
      </div>
    </section>
  );
}
