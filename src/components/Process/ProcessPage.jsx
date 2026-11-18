"use client";

import { useEffect, useRef, useState } from "react";

const processStages = [
  {
    number: "01",
    title: "Meet the Designer for Consultation",
    subtitle: "Understanding your vision.",
    description:
      "Every great home begins with understanding the people who will live in it. We get to know your needs, preferences and expectations before beginning your design journey.",
    image: "https://www.luxelan.in/img/how_it_w001.jpg",
    imageAlt: "Client meeting with an interior designer",
    steps: [
      {
        title: "Fill out a need analysis form.",
        description:
          "Share your requirements and design preferences so we can understand your lifestyle.",
      },
      {
        title: "Receive a call.",
        description:
          "A Luxelan representative will contact you to schedule a meeting with the designer.",
      },
      {
        title: "Share your floor plan.",
        description:
          "Your home layout helps us understand the space and plan your requirements.",
      },
      {
        title: "Talk to your dedicated designer.",
        description:
          "An experienced designer will connect with you to discuss your design needs.",
      },
    ],
  },
  {
    number: "02",
    title: "Say Yes to Luxélan Life",
    subtitle: "Turning ideas into a design proposal.",
    description:
      "Once we understand your requirements, our team presents a design proposal along with the project cost. Review the proposed design, discuss your preferences and take the next step.",
    image: "https://www.luxelan.in/img/how_it_w002.jpg",
    imageAlt: "Interior design proposal presentation",
    steps: [
      {
        title: "Get a design proposal with cost.",
        description:
          "Receive a design presentation from your designer along with the project cost.",
      },
      {
        title: "Finalize your design.",
        description:
          "Review the proposal and finalize your design and floor plan.",
      },
      {
        title: "Book your order.",
        description: "Pay 10% of the project cost to book your order.",
      },
    ],
  },
  {
    number: "03",
    title: "Customise Your Home Design",
    subtitle: "Making your home truly yours.",
    description:
      "Choose the materials, finishes and details that express your style. Our designers refine your home design and help you understand the final look and project cost.",
    image: "https://www.luxelan.in/img/how_it_w003.jpeg",
    imageAlt: "Interior material and finish selection",
    steps: [
      {
        title: "Material selection.",
        description:
          "Explore and select the materials, finishes and design elements for your home.",
      },
      {
        title: "Get your 3D design and final project cost.",
        description:
          "Review the 3D design and understand the final project cost.",
      },
      {
        title: "Confirm your order.",
        description: "Approve the finalized design and confirm your order.",
      },
    ],
  },
  {
    number: "04",
    title: "Factory Production Begins Alongside On-site Work",
    subtitle: "Where planning meets craftsmanship.",
    description:
      "With the design finalized, factory production and on-site activities move forward together. Your project manager coordinates the work and keeps the process moving.",
    image: "https://www.luxelan.in/img/how_it_w004.jpeg",
    imageAlt: "Furniture production and on-site interior work",
    steps: [
      {
        title: "Get introduced to your Project Manager.",
        description:
          "Meet your dedicated project manager, who coordinates your project.",
      },
      {
        title: "Start onsite activities.",
        description: "The on-site work begins according to the project plan.",
      },
      {
        title: "Onsite final measurement for fixed furniture.",
        description: "Final measurements are taken for fixed furniture.",
      },
      {
        title: "Site prepared for delivery.",
        description:
          "The site is prepared for the delivery and installation process.",
      },
      {
        title: "Furniture and fittings installation.",
        description: "Furniture and fittings are installed in your home.",
      },
    ],
  },
  {
    number: "05",
    title: "Move into Your Luxe Home",
    subtitle: "Your dream home, ready to experience.",
    description:
      "The journey comes together in a space designed around you. Move into your dream home and experience the warmth and grace of The Luxelan Life.",
    image: "https://www.luxelan.in/img/how_it_w05.jpg",
    imageAlt: "Completed luxury home interior by Luxelan",
    steps: [
      {
        title: "Step into your dream home.",
        description:
          "Enjoy your completed home and experience the Luxelan lifestyle.",
      },
    ],
  },
];

export default function ProcessPage() {
  const timelineRef = useRef(null);
  const stageRefs = useRef([]);
  const markerRefs = useRef([]);
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  const [activeStage, setActiveStage] = useState(0);
  const [visibleStages, setVisibleStages] = useState([0]);

  // -------------------------------------
  // SCROLL TO STAGE
  // -------------------------------------

  const goToStage = (index) => {
    const target = stageRefs.current[index];

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // -------------------------------------
  // RESET PAGE TO STAGE 01
  // -------------------------------------

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    setActiveStage(0);
    setVisibleStages([0]);
  }, []);

  // -------------------------------------
  // OBSERVE STAGES AND REVEAL CONTENT
  // -------------------------------------

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.stage);

          if (Number.isNaN(index)) return;

          setVisibleStages((previous) => {
            if (previous.includes(index)) return previous;
            return [...previous, index];
          });

          setActiveStage(index);
        });
      },
      {
        root: null,
        rootMargin: "-18% 0px -25% 0px",
        threshold: 0.05,
      }
    );

    stageRefs.current.forEach((stage) => {
      if (stage) observer.observe(stage);
    });

    return () => observer.disconnect();
  }, []);

  // -------------------------------------
  // CENTRAL LINE POSITION AND SCROLL FILL
  // -------------------------------------

  useEffect(() => {
    const timeline = timelineRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;

    if (!timeline || !track || !fill) return;

    let animationFrame = null;

    const updateTimeline = () => {
      const firstMarker = markerRefs.current[0];
      const lastMarker = markerRefs.current[processStages.length - 1];

      if (!firstMarker || !lastMarker) return;

      const timelineRect = timeline.getBoundingClientRect();
      const firstRect = firstMarker.getBoundingClientRect();
      const lastRect = lastMarker.getBoundingClientRect();

      const firstCenter =
        firstRect.top + firstRect.height / 2 - timelineRect.top;

      const lastCenter = lastRect.top + lastRect.height / 2 - timelineRect.top;

      const lineHeight = Math.max(0, lastCenter - firstCenter);

      track.style.top = `${firstCenter}px`;
      track.style.height = `${lineHeight}px`;

      const viewportProgress =
        (window.innerHeight * 0.52 - firstRect.top) /
        Math.max(1, lastRect.top - firstRect.top);

      const progress = Math.max(0, Math.min(1, viewportProgress));

      fill.style.height = `${progress * 100}%`;

      // Reveal a number only when the scrolling line reaches it.
      markerRefs.current.forEach((marker, index) => {
        if (!marker) return;

        const markerRect = marker.getBoundingClientRect();
        const markerPosition = markerRect.top + markerRect.height / 2;

        const reached =
          index === 0 || markerPosition <= window.innerHeight * 0.65;

        marker.classList.toggle(
          "is-reached",
          reached || visibleStages.includes(index)
        );
      });
    };

    const requestUpdate = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(updateTimeline);
    };

    updateTimeline();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(timeline);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      resizeObserver.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [visibleStages]);

  // -------------------------------------
  // RENDER
  // -------------------------------------

  return (
    <main className="lux-process">
      {/* TOP INFORMATION */}
      <div className="process-topline">
        <span>01 — 05</span>

        <span className="process-topline-center">THE JOURNEY OF DESIGN</span>

        <span className="process-topline-right">LUXÉLAN</span>
      </div>

      {/* HERO */}
      <section className="process-heading">
        <span className="process-eyebrow">FROM VISION TO REALITY</span>

        <h1>
          A Journey
          <br />
          Designed
          <br />
          <em>Around You.</em>
        </h1>

        <p>
          Discover how we transform your vision into a thoughtfully designed
          living experience.
        </p>

        <div className="process-heading-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="process-heading-line" />
          <span>01 / 05</span>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="process-timeline" ref={timelineRef}>
        {/* CENTRAL LINE */}
        <div className="process-track" ref={trackRef}>
          <div className="process-track-fill" ref={fillRef} />
        </div>

        {/* STAGES */}
        <div className="process-stages">
          {processStages.map((stage, index) => {
            const isReverse = index % 2 === 1;
            const isVisible = visibleStages.includes(index);

            const imageBlock = (
              <div className="process-stage-image" key="image">
                <div className="process-image-frame">
                  <img
                    src={stage.image}
                    alt={stage.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <span className="process-image-number">
                  {stage.number} / 05
                </span>
              </div>
            );

            const contentBlock = (
              <div className="process-stage-content" key="content">
                <span className="process-stage-label">
                  STAGE {stage.number}
                </span>

                <h2>{stage.title}</h2>

                <h3>{stage.subtitle}</h3>

                <p className="process-description">{stage.description}</p>

                <div className="process-deliverables">
                  <span className="process-deliverables-label">
                    {index === 4 ? "THE EXPERIENCE" : "THE PROCESS"}
                  </span>

                  <div className="process-deliverables-list">
                    {stage.steps.map((step, stepIndex) => (
                      <div className="process-deliverable" key={step.title}>
                        <span className="deliverable-number">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </span>

                        <div className="deliverable-content">
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className="process-next"
                  onClick={() => {
                    if (index < processStages.length - 1) {
                      goToStage(index + 1);
                    } else {
                      document.querySelector(".process-final")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  {index === 4 ? "COMPLETE YOUR JOURNEY" : "NEXT STAGE"}
                  <span>↗</span>
                </button>
              </div>
            );

            return (
              <article
                key={stage.number}
                ref={(element) => {
                  stageRefs.current[index] = element;
                }}
                data-stage={index}
                className={`process-stage ${isReverse ? "reverse" : ""} ${
                  isVisible ? "is-visible" : ""
                }`}
              >
                <div className="process-stage-left">
                  {isReverse ? contentBlock : imageBlock}
                </div>

                <div className="process-stage-marker">
                  <button
                    ref={(element) => {
                      markerRefs.current[index] = element;
                    }}
                    type="button"
                    className={`process-marker ${
                      activeStage === index ? "active" : ""
                    } ${index === 0 ? "is-reached" : ""}`}
                    onClick={() => goToStage(index)}
                    aria-label={`Go to stage ${stage.number}: ${stage.title}`}
                    aria-current={activeStage === index ? "step" : undefined}
                    tabIndex={
                      index === 0 || visibleStages.includes(index) ? 0 : -1
                    }
                  >
                    {index + 1}
                  </button>
                </div>

                <div className="process-stage-right">
                  {isReverse ? imageBlock : contentBlock}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="process-final">
        <span>THE LUXÉLAN EXPERIENCE</span>

        <h2>
          Your dream home.
          <br />
          <em>Our passion.</em>
        </h2>

        <p>Every detail, thoughtfully designed around you.</p>

        <a href="/contact" className="process-final-link">
          <span>START YOUR JOURNEY</span>
          <span>↗</span>
        </a>
      </section>
    </main>
  );
}
