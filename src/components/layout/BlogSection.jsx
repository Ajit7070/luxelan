"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = {
  category: "DESIGN & LIVING",
  title: "The Art of Minimalist Living: Finding Beauty in Simplicity",
  description:
    "Explore the beauty of intentional spaces, thoughtful details and timeless materials. Discover how simplicity can transform the way we experience our homes.",
  date: "November 15, 2026",
  slug: "the-art-of-minimalist-living",
  image:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
};

export default function BlogSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-section-heading > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-section-heading",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".blog-featured-image", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.04,
        duration: 1.3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".blog-featured-layout",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".blog-featured-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-featured-content",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="lux-blog-section" ref={sectionRef}>
      <div className="lux-blog-container">
        {/* SECTION HEADING */}
        <div className="blog-section-heading">
          <div className="blog-heading-left">
            <span className="blog-eyebrow">THE LUXELAN JOURNAL</span>

            <h2>
              Stories that inspire <em>living.</em>
            </h2>
          </div>

          <Link href="/blogs" className="blog-view-all">
            EXPLORE ALL STORIES <span>↗</span>
          </Link>
        </div>

        {/* SINGLE FEATURED STORY */}
        <article className="blog-featured-layout">
          {/* FEATURED IMAGE */}
          <Link
            href={`/blogs/${featured.slug}`}
            className="blog-featured-image"
            aria-label={`Read ${featured.title}`}
          >
            <img src={featured.image} alt={featured.title} loading="lazy" />

            <span className="blog-image-label">FEATURED STORY</span>

            <span className="blog-image-arrow">↗</span>
          </Link>

          {/* FEATURED CONTENT */}
          <div className="blog-featured-content">
            <div className="blog-featured-meta">
              <span className="blog-category">{featured.category}</span>

              <span className="blog-meta-divider">·</span>

              <span className="blog-date">{featured.date}</span>
            </div>

            <span className="blog-featured-number">01 / EDITOR'S PICK</span>

            <h3>{featured.title}</h3>

            <p>{featured.description}</p>

            <Link href={`/blogs/${featured.slug}`} className="blog-read-link">
              READ STORY <span>↗</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
