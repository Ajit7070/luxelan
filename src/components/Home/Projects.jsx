"use client";

import { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import DotGrid from "@/components/DotGrid/DotGrid";

const projects = [
  {
    number: "01",
    title: "Residential Elegance",
    category: "BEDROOM INTERIORS",
    image: "/assets/images/projects/project-01.jpg",
  },
  {
    number: "02",
    title: "Contemporary Living",
    category: "LUXURY RESIDENCE",
    image: "/assets/images/projects/project-02.jpg",
  },
  {
    number: "03",
    title: "Minimal Serenity",
    category: "BEDROOM INTERIORS",
    image: "/assets/images/projects/project-03.jpg",
  },
  {
    number: "04",
    title: "Timeless Spaces",
    category: "LUXURY RESIDENCE",
    image: "/assets/images/projects/project-04.jpg",
  },
  {
    number: "05",
    title: "Modern Sophistication",
    category: "CONTEMPORARY INTERIORS",
    image: "/assets/images/projects/project-05.jpg",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const cards = gsap.utils.toArray(".project-card", section);

      const mm = gsap.matchMedia();

      // DESKTOP: PINNED HORIZONTAL DEPTH SCROLL
      mm.add(
        // "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        "(min-width: 320px) and (prefers-reduced-motion: no-preference)",
        () => {
          const updateDepth = () => {
            // const focusPoint = window.innerWidth * 0.36;
            const viewportWidth = section.clientWidth;
            const focusPoint =
              viewportWidth < 768 ? viewportWidth * 0.5 : viewportWidth * 0.36;

            cards.forEach((card) => {
              const rect = card.getBoundingClientRect();
              const center = rect.left + rect.width / 2;

              const distance = Math.min(
                Math.abs(center - focusPoint) / (window.innerWidth * 0.85),
                1
              );

              const focus = 1 - distance;

              gsap.set(card, {
                scale: 0.76 + focus * 0.24,
                y: (1 - focus) * 65,
                autoAlpha: 0.48 + focus * 0.52,
              });
            });
          };

          const horizontalTween = gsap.to(track, {
            // x: () => -(track.scrollWidth - window.innerWidth),
            x: () => -(track.scrollWidth - section.clientWidth),
            ease: "none",

            onUpdate: updateDepth,

            scrollTrigger: {
              trigger: section,
              start: "top top",
              // end: () => `+=${track.scrollWidth - window.innerWidth}`,
              end: () => `+=${track.scrollWidth - section.clientWidth}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onRefresh: updateDepth,
            },
          });

          return () => horizontalTween.scrollTrigger?.kill();
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      {/* DOT GRID BACKGROUND */}
      <div className="projects-dot-grid">
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
      </div>

      <div className="projects-heading">
        <h2>OUR PROJECTS</h2>
      </div>

      <div className="projects-stage">
        <div ref={trackRef} className="projects-track">
          {projects.map((project) => (
            <a href="#contact" className="project-card" key={project.number}>
              <img src={project.image} alt={project.title} loading="lazy" />

              <div className="project-card-overlay" />

              <div className="project-info">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <span className="project-number">{project.number}</span>

                <span className="project-arrow">↗</span>
              </div>
            </a>
          ))}

          {/* FINAL CTA CARD */}

          <div className="projects-cta">
            <span className="cta-eyebrow">BEYOND THE ORDINARY</span>

            <h2>
              More
              <br />
              Projects.
            </h2>

            <a href="#contact" className="projects-cta-link">
              DIVE IN <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="projects-footer">
        <span>01 — 05</span>
        <span>SCROLL TO EXPLORE</span>
        <span>LUXELAN / SELECTED WORKS</span>
      </div> */}
    </section>
  );
}
