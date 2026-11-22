"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// =====================================
// ABOUT IMAGES
// =====================================

const aboutImages = [
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
    alt: "Interior design and craftsmanship",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
    alt: "Luxury interior innovation",
  },
];

// =====================================
// OUR VALUES
// =====================================

const values = [
  {
    title: "CUSTOMER FIRST",
    description:
      "Understanding your needs is at the heart of every space we create.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
  },
  {
    title: "INTEGRITY",
    description: "Transparent and honest in every decision and detail.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
  },
  {
    title: "PASSION",
    description: "A genuine passion for creating exceptional interiors.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
  },
  {
    title: "SEAMLESS",
    description:
      "Transparent and detail oriented, delivering a hassle-free journey.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
  },
  {
    title: "BESPOKE",
    description:
      "A tailor-made experience of crafting a space that is exclusive and of exceptional quality.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=85",
  },
];

// =====================================
// OUR FOUNDERS
// =====================================

const founders = [
  {
    number: "01",
    name: "Mr Ajinkya Dhumal",
    designation: "FOUNDER",
    description:
      "Mr Ajinkya Dhumal is an eminent figure in the realm of interior design and home solutions, boasting a highly distinguished portfolio that has consistently set new standards in the field. His exquisite taste in rare textures, coupled with a comprehensive mastery of materials, and a steadfast dedication to the minutest details, sets him apart from his peers. With a thriving business that has been built on a solid foundation of over two decades of diverse industry expertise and an unwavering passion for design excellence, Mr Dhumal is widely regarded as one of the foremost interior designers in the nation.",
    image: "/assets/images/founders/ajinkya.png",
  },
  {
    number: "02",
    name: "Mr Rahul Mutha",
    designation: "CO-FOUNDER",
    description:
      "Mr Rahul Mutha is a luminary figure in the realm of interior design, distinguished by his unwavering commitment to his values and a deep-seated passion for perfection. With an impressive 28-year tenure in space planning and design, he possesses an exceptional blend of technical prowess, innovative use of modern materials, and a remarkable flair for creativity that is evident in all his endeavours. In 1995, he established his interior design firm, which has since thrived under his expert leadership.",
    image: "/assets/images/founders/rahul.png",
  },
  {
    number: "03",
    name: "Mr Sagar Agarwal",
    designation: "CO-FOUNDER",
    description:
      "Mr Sagar Agarwal, a man of visionary ambition and action, is a qualified civil engineer whose proclivity for adventure leads him to favour the uncharted path rather than the conventional one. With over a decade of experience in the field, he possesses a dynamic personality that thrives on project management and a methodical approach to his craft. A serial entrepreneur of multiple disciplines, he possesses a fervent passion for various industries including real estate, elevators, and modular furniture, among others, in which he has demonstrated remarkable success.",
    image: "/assets/images/founders/sagar.png",
  },
];

export default function About() {
  const pageRef = useRef(null);
  const aboutIntroRef = useRef(null);
  const foundersRef = useRef(null);

  const [activeValue, setActiveValue] = useState(0);

  // =====================================
  // GENERAL PAGE ANIMATIONS
  // =====================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".about-hero-content", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });

      // Values heading
      gsap.from(".about-values-heading > *", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-values",
          start: "top 75%",
          once: true,
        },
      });

      // Values list
      gsap.from(".about-value-item", {
        x: -15,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-values-list",
          start: "top 82%",
          once: true,
        },
      });

      // Values image
      gsap.from(".about-values-visual", {
        opacity: 0,
        scale: 0.985,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-values-layout",
          start: "top 80%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  // =====================================
  // ABOUT INTRO - SUBTLE SCROLL INTERACTION
  // =====================================

  useEffect(() => {
    const section = aboutIntroRef.current;

    if (!section) return;

    const heading = section.querySelector(".about-intro-content");
    const leftImage = section.querySelector(".about-intro-image-left");
    const rightImage = section.querySelector(".about-intro-image-right");

    if (!heading || !leftImage || !rightImage) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.set(heading, { y: 18, autoAlpha: 0 });

      gsap.set([leftImage, rightImage], {
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(rightImage, { y: 35 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=850",
          pin: true,
          pinSpacing: true,
          scrub: 0.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(heading, {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power2.out",
      });

      timeline.to(
        leftImage,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.9,
          ease: "power2.out",
        },
        "-=0.25"
      );

      timeline.to(
        rightImage,
        {
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.55"
      );

      timeline.to(
        [leftImage.querySelector("img"), rightImage.querySelector("img")],
        {
          scale: 1,
          duration: 1,
          ease: "none",
        },
        "<"
      );

      const refresh = () => ScrollTrigger.refresh();
      const images = section.querySelectorAll("img");

      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", refresh);
          img.addEventListener("error", refresh);
        }
      });

      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(refresh);
      });

      return () => {
        cancelAnimationFrame(frame);

        images.forEach((img) => {
          img.removeEventListener("load", refresh);
          img.removeEventListener("error", refresh);
        });

        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // =====================================
  // VALUES IMAGE SWITCHING
  // =====================================

  useEffect(() => {
    const images = gsap.utils.toArray(".about-values-image");

    images.forEach((image, index) => {
      gsap.to(image, {
        autoAlpha: index === activeValue ? 1 : 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.to(image.querySelector("img"), {
        scale: index === activeValue ? 1 : 1.025,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, [activeValue]);

  // =====================================
  // FOUNDERS - SLOW HORIZONTAL SCROLL
  // =====================================

  useEffect(() => {
    const section = foundersRef.current;
    const track = section?.querySelector(".about-founders-track");

    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - section.clientWidth);

      const getBuffer = () => window.innerHeight * 0.25;

      const getScrollDistance = () => getDistance() * 2 + getBuffer() * 2;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
        },
      });

      const buffer = getBuffer();

      // Initial settling
      timeline.to(track, {
        x: 0,
        duration: buffer,
        ease: "none",
      });

      // Horizontal founder movement
      timeline.to(track, {
        x: () => -getDistance(),
        duration: getDistance() * 2,
        ease: "none",
      });

      // Final settling
      timeline.to(track, {
        x: () => -getDistance(),
        duration: buffer,
        ease: "none",
      });

      const refresh = () => ScrollTrigger.refresh();
      const images = track.querySelectorAll("img");

      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", refresh);
          img.addEventListener("error", refresh);
        }
      });

      let resizeObserver;

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(refresh);
        resizeObserver.observe(section);
        resizeObserver.observe(track);
      }

      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(refresh);
      });

      return () => {
        cancelAnimationFrame(frame);
        resizeObserver?.disconnect();

        images.forEach((img) => {
          img.removeEventListener("load", refresh);
          img.removeEventListener("error", refresh);
        });

        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // =====================================
  // PAGE JSX
  // =====================================

  return (
    <main className="about-page" ref={pageRef}>
      {/* =================================
                HERO SECTION
            ================================= */}

      {/* =================================
    ABOUT HERO - SAME AS PROJECTS BANNER
================================= */}

      {/* ABOUT HERO - MATCH PROJECTS BANNER */}

      <section className="about-hero process-banner process-banner-video">
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

        <div className="process-banner-content about-hero-content">
          <h1>
            ABOUT <em>US.</em>
          </h1>

          <a href="#about-intro" className="process-banner-link">
            DISCOVER OUR STORY <span>↓</span>
          </a>
        </div>
      </section>

      {/* =================================
                ABOUT INTRO - TWO IMAGE SCROLL
            ================================= */}

      <section className="about-intro" ref={aboutIntroRef}>
        <div className="about-intro-grid" />

        <div className="about-intro-content">
          <span className="about-eyebrow">THE LUXÉLAN APPROACH</span>

          <h2 className="about-section-title">We are the synthesis between</h2>

          <p>
            At Luxélan, we promise to impress you with extraordinary experiences
            in decorating and living spaces. Our creations are all about luxury,
            uniqueness, and coziness, setting us apart from others.
          </p>
          <p>
            We strive to craft and deliver spaces that nurture your mind, body,
            and soul, making each day elegant and enriching. Our sole purpose is
            to design homes that perfectly reflect your personality, showcasing
            your impeccable taste and style with our digital integration and
            carefully examined design process. When Luxélan appears, it leaves
            an unforgettable mark of sophistication and class.
          </p>
          <p>
            With us, you can trust a hassle-free journey to create an ambiance
            that wows everyone. Our commitment is to provide the best
            experience, ensuring you feel valued at every step of the way.
            Luxélan is not just a messenger; it's an essence that speaks of
            elegance and the joy of living in style.
          </p>
        </div>

        <div className="about-intro-gallery">
          <div className="about-intro-image about-intro-image-left">
            <img src={aboutImages[0].image} alt={aboutImages[0].alt} />
          </div>

          <div className="about-intro-image about-intro-image-right">
            <img src={aboutImages[1].image} alt={aboutImages[1].alt} />
          </div>
        </div>
      </section>

      {/* =================================
                OUR FOUNDERS
            ================================= */}

      <section className="about-founders" ref={foundersRef}>
        <div className="about-founders-grid" />

        <div className="about-founders-heading">
          <span>THE PEOPLE BEHIND LUXÉLAN</span>

          <h2 className="about-section-title">
            OUR <em>FOUNDERS</em>
          </h2>
        </div>

        <div className="about-founders-track">
          {founders.map((founder) => (
            <article className="about-founder-slide" key={founder.number}>
              <div className="about-founder-image">
                <img src={founder.image} alt={founder.name} />
              </div>

              <div className="about-founder-content">
                <span className="about-founder-designation">
                  {founder.designation}
                </span>

                <h3>{founder.name}</h3>

                <span className="about-founder-line" />

                <p>{founder.description}</p>

                <div className="about-founder-number">
                  <span>{founder.number}</span>

                  <span className="about-founder-number-line" />

                  <span>03</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="about-founders-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span>→</span>
        </div>
      </section>

      {/* =================================
                OUR VALUES
            ================================= */}

      <section className="about-values">
        <div className="about-values-heading">
          <span className="about-eyebrow">WHAT DEFINES US</span>

          <h2 className="about-section-title">
            OUR <em>VALUES</em>
          </h2>

          <p>
            The principles that guide every idea, every detail and every space
            we create.
          </p>
        </div>

        <div className="about-values-layout">
          <div className="about-values-list">
            {values.map((value, index) => (
              <button
                type="button"
                className={`about-value-item ${
                  activeValue === index ? "active" : ""
                }`}
                key={value.title}
                onMouseEnter={() => setActiveValue(index)}
                onFocus={() => setActiveValue(index)}
                onClick={() => setActiveValue(index)}
              >
                <span className="about-value-title">{value.title}</span>

                <span className="about-value-description">
                  {value.description}
                </span>

                <span className="about-value-arrow">↗</span>
              </button>
            ))}
          </div>

          <div className="about-values-visual">
            {values.map((value, index) => (
              <div
                className={`about-values-image ${
                  activeValue === index ? "active" : ""
                }`}
                key={value.title}
              >
                <img src={value.image} alt={value.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
