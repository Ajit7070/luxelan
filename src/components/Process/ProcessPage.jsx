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
    image: "https://www.luxelan.in/img/how_it_w02.jpg",
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

  const goToStage = (index) => {
    stageRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  // Always start at the top of the page.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Reversible stage reveal:
  // add is-visible on entry, remove it on exit.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.stage);

          entry.target.classList.toggle("is-visible", entry.isIntersecting);

          if (entry.isIntersecting) {
            setActiveStage(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-15% 0px -20% 0px",
        threshold: 0,
      }
    );

    stageRefs.current.forEach((stage) => {
      if (stage) observer.observe(stage);
    });

    return () => observer.disconnect();
  }, []);

  // Central line and marker visibility follow scroll in both directions.
  useEffect(() => {
    const timeline = timelineRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;

    if (!timeline || !track || !fill) return;

    let frame = null;

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

      const firstViewportCenter = firstRect.top + firstRect.height / 2;

      const lastViewportCenter = lastRect.top + lastRect.height / 2;

      const progress =
        (window.innerHeight * 0.52 - firstViewportCenter) /
        Math.max(1, lastViewportCenter - firstViewportCenter);

      fill.style.height = `${Math.max(0, Math.min(1, progress)) * 100}%`;

      // Markers appear as the line reaches them and disappear
      // again when the user scrolls back above them.
      markerRefs.current.forEach((marker, index) => {
        if (!marker) return;

        if (index === 0) {
          marker.classList.add("is-reached");
          return;
        }

        const rect = marker.getBoundingClientRect();
        const center = rect.top + rect.height / 2;

        marker.classList.toggle(
          "is-reached",
          center <= window.innerHeight * 0.65
        );
      });
    };

    const requestUpdate = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateTimeline);
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
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="lux-process">
      {/* TOP LINE */}

      {/* TOP BANNER */}

      {/* TOP VIDEO BANNER */}
      <section className="process-banner process-banner-video">
        <video
          className="process-banner-video-element"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/videos/luxelan-video.mp4" type="video/mp4" />
        </video>

        <div className="process-banner-white-overlay" />

        <div className="process-banner-content">
          <h1>
            The Art of
            <br />
            <em>The Journey.</em>
          </h1>

          <a href="#process-journey" className="process-banner-link">
            EXPLORE OUR PROCESS
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="process-heading" id="process-journey">
        <span className="process-eyebrow">FROM VISION TO REALITY</span>

        <h2>
          A Journey
          <br />
          Designed
          <br />
          <em>Around You.</em>
        </h2>

        <p>
          Discover how we transform your vision into a thoughtfully designed
          living experience.
        </p>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="process-timeline" ref={timelineRef}>
        <div className="process-track" ref={trackRef}>
          <div className="process-track-fill" ref={fillRef} />
        </div>

        <div className="process-stages">
          {processStages.map((stage, index) => {
            const isReverse = index % 2 === 1;

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
                  onClick={() =>
                    index < processStages.length - 1
                      ? goToStage(index + 1)
                      : document
                          .querySelector(".process-final")
                          ?.scrollIntoView({ behavior: "smooth" })
                  }
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
                className={`process-stage ${isReverse ? "reverse" : ""}`}
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
                    aria-label={`Go to stage ${stage.number}`}
                    aria-current={activeStage === index ? "step" : undefined}
                    tabIndex={index === 0 ? 0 : -1}
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

      {/* NEW CLOSING SECTION */}
    </main>
  );
}
