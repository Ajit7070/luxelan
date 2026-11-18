"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGsap";

export default function Stylux() {
  const sectionRef = useRef(null);
  const robotRef = useRef(null);
  const humanRef = useRef(null);
  const contentRef = useRef(null);
  const labelRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const robot = robotRef.current;
      const human = humanRef.current;
      const content = contentRef.current;
      const label = labelRef.current;

      if (!section || !robot || !human || !content || !label) return;

      const mm = gsap.matchMedia();

      // DESKTOP: SCROLL-CONTROLLED HAND ANIMATION
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(robot, { x: "-30vw" });
          gsap.set(human, { x: "30vw" });
          gsap.set(content, { y: 80, autoAlpha: 0 });
          gsap.set(label, { y: 20, autoAlpha: 0 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=130%",
              pin: true,
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          });

          tl.to(
            robot,
            {
              x: "0vw",
              ease: "none",
              duration: 1.5,
            },
            0
          );

          tl.to(
            human,
            {
              x: "0vw",
              ease: "none",
              duration: 1.5,
            },
            0
          );

          tl.to(
            content,
            {
              y: 0,
              autoAlpha: 1,
              ease: "power2.out",
              duration: 0.8,
            },
            0.25
          );

          tl.to(
            label,
            {
              y: 0,
              autoAlpha: 1,
              ease: "power2.out",
              duration: 0.6,
            },
            0.65
          );

          return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
          };
        }
      );

      // MOBILE / REDUCED MOTION: SIMPLE REVEAL

      // MOBILE: SCROLL-CONTROLLED ANIMATIONS
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          const robotWrapper = robot.parentElement;
          const humanWrapper = human.parentElement;

          gsap.set(content, { y: 45, autoAlpha: 0 });
          gsap.set(label, { y: 25, autoAlpha: 0 });
          gsap.set(robot, { x: -70, autoAlpha: 0 });
          gsap.set(human, { x: 70, autoAlpha: 0 });

          gsap.to(content, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(label, {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: label,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(robot, {
            x: 0,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: robotWrapper,
              start: "top 90%",
              end: "top 45%",
              scrub: 1,
            },
          });

          gsap.to(human, {
            x: 0,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: humanWrapper,
              start: "top 95%",
              end: "top 50%",
              scrub: 1,
            },
          });
        }
      );

      // REDUCED MOTION
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([robot, human], { x: 0, autoAlpha: 1 });
        gsap.set([content, label], { y: 0, autoAlpha: 1 });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="stylux-section" id="stylux">
      {/* GRID BACKGROUND */}
      <div className="stylux-grid" />

      {/* SECTION CONTENT */}
      <div ref={contentRef} className="stylux-content">
        <span className="stylux-eyebrow">STYLUX</span>

        <h2>
          Where human creativity meets <span>artificial intelligence</span>, we
          create intelligent experiences that redefine the way the world lives.
        </h2>

        <a
          ref={labelRef}
          className="stylux-label"
          href="#"
          aria-label="Explore Stylux"
        >
          STYLUX
        </a>
      </div>

      {/* AI HAND */}
      <div className="stylux-hand stylux-ai-hand">
        <img
          ref={robotRef}
          src="/assets/images/stylux/robot_hand2.png"
          alt="Artificial intelligence robotic hand"
        />
      </div>

      {/* HUMAN HAND */}
      <div className="stylux-hand stylux-human-hand">
        <img
          ref={humanRef}
          src="/assets/images/stylux/stylux-lg-hand-2-p-2000.webp"
          alt="Human hand reaching forward"
        />
      </div>
    </section>
  );
}
