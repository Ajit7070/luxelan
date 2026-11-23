"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP, gsap } from "@/hooks/useGsap";
import blogPosts from "@/lib/blogPosts";

// const blogPosts = [
//   {
//     id: 1,
//     category: "INTERIORS",
//     date: "March 2026",
//     title: "The Art of Restraint: Why Less Truly Becomes More",
//     description:
//       "Exploring how deliberate emptiness in a room can create a sense of profound calm and unexpected richness.",
//     slug: "the-art-of-restraint",
//     image:
//       "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=90",
//   },
//   {
//     id: 2,
//     category: "MATERIALS",
//     date: "February 2026",
//     title: "Natural Stone: A Love Letter to Imperfection",
//     description:
//       "Why we choose materials that carry the marks of time, and how natural variation becomes a design feature.",
//     slug: "natural-stone",
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=90",
//   },
//   {
//     id: 3,
//     category: "ARCHITECTURE",
//     date: "January 2026",
//     title: "Light as Material: Designing with What You Cannot Touch",
//     description:
//       "How the interplay of natural light and shadow transforms static architecture into living, breathing space.",
//     slug: "light-as-material",
//     image:
//       "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=90",
//   },
//   {
//     id: 4,
//     category: "INTERIORS",
//     date: "December 2025",
//     title: "The Beauty of Thoughtful Living Spaces",
//     description:
//       "Discover how carefully considered details create spaces that feel personal, meaningful and timeless.",
//     slug: "thoughtful-living-spaces",
//     image:
//       "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=90",
//   },
//   {
//     id: 5,
//     category: "MATERIALS",
//     date: "November 2025",
//     title: "Textures That Bring a Space to Life",
//     description:
//       "From natural wood to tactile fabrics, explore the textures that add depth and character to interiors.",
//     slug: "textures-that-bring-life",
//     image:
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=90",
//   },
//   {
//     id: 6,
//     category: "ARCHITECTURE",
//     date: "October 2025",
//     title: "A Quiet Connection Between Nature and Design",
//     description:
//       "Finding harmony between organic forms, natural materials and contemporary architecture.",
//     slug: "nature-and-design",
//     image:
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=90",
//   },
// ];

const categories = ["ALL STORIES", "INTERIORS", "MATERIALS", "ARCHITECTURE"];

export default function Blog() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("ALL STORIES");

  const filteredPosts =
    activeCategory === "ALL STORIES"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  useGSAP(
    () => {
      gsap.from(".journal-heading > *", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".journal-card", {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".journal-grid",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <main className="lux-journal-page" ref={sectionRef}>
      <section className="lux-journal-section">
        {/* JOURNAL HEADING */}
        <div className="journal-heading">
          <div className="journal-heading-left">
            <span className="journal-eyebrow">FROM THE JOURNAL</span>

            <h1>Design Stories</h1>
          </div>

          <p className="journal-intro">
            Thoughts on architecture, interiors, and the quiet art of creating
            spaces that resonate.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="journal-filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="journal-grid" key={activeCategory}>
          {filteredPosts.map((post) => (
            <article className="journal-card" key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="journal-image"
                aria-label={`Read ${post.title}`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading={post.id > 3 ? "lazy" : "eager"}
                />

                <span className="journal-image-arrow">↗</span>
              </Link>

              <div className="journal-meta">
                <span>{post.category}</span>
                <span className="journal-meta-divider">·</span>
                <span>{post.date}</span>
              </div>

              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="journal-description">{post.description}</p>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="journal-empty">No stories found.</p>
        )}
      </section>
    </main>
  );
}
