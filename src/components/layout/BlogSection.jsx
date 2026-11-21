"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogData = {
  left: [
    {
      category: "DESIGN & LIVING",
      title: "Reviving Vintage Elegance: Timeless Interior Inspirations",
      date: "November 12, 2026",
      slug: "reviving-vintage-elegance",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    },
    {
      category: "INTERIOR STYLING",
      title: "Nature's Palette: Bringing Biophilic Design Indoors",
      date: "November 08, 2026",
      slug: "natures-palette",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    },
    {
      category: "INTERIOR DESIGN",
      title: "Industrial Chic: Balancing Raw and Refined",
      date: "October 26, 2026",
      slug: "industrial-chic",
    },
  ],

  featured: {
    category: "DESIGN & LIVING",
    title: "The Art of Minimalist Living: Finding Beauty in Simplicity",
    description:
      "Explore the beauty of intentional spaces, thoughtful details and timeless materials. Discover how simplicity can transform the way we experience our homes.",
    date: "November 15, 2026",
    slug: "the-art-of-minimalist-living",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90",
  },

  right: [
    {
      category: "ARCHITECTURE",
      title: "Innovative Home Transformations",
      date: "November 05, 2026",
      slug: "innovative-home-transformations",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    },
    {
      category: "DESIGN & LIVING",
      title: "Coastal Tranquility: A Study in Natural Elegance",
      date: "October 29, 2026",
      slug: "coastal-tranquility",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
    },
    {
      category: "INSPIRATION",
      title: "Contemporary Comfort: Where Warmth Meets Modern Design",
      date: "October 21, 2026",
      slug: "contemporary-comfort",
    },
  ],
};

// REUSABLE ARTICLE CARD
function ArticleCard({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="blog-side-card">
      {article.image && (
        <div className="blog-side-image">
          <img src={article.image} alt={article.title} loading="lazy" />
        </div>
      )}

      <div className="blog-side-content">
        <h3>{article.title}</h3>
        <span className="blog-date">{article.date}</span>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION HEADING ANIMATION
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

      // SIDE ARTICLES ANIMATION
      gsap.from(".blog-side-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".blog-editorial-grid",
          start: "top 80%",
          once: true,
        },
      });

      // FEATURED IMAGE REVEAL
      gsap.from(".blog-featured-image img", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.08,
        duration: 1.4,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".blog-featured",
          start: "top 80%",
          once: true,
        },
      });

      // FEATURED CONTENT ANIMATION
      gsap.from(".blog-featured-content > *", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
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

  const featured = blogData.featured;

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

          <Link href="/blog" className="blog-view-all">
            EXPLORE ALL STORIES <span>↗</span>
          </Link>
        </div>

        {/* EDITORIAL GRID */}
        <div className="blog-editorial-grid">
          {/* LEFT ARTICLES */}
          <div className="blog-side-column blog-left-column">
            {blogData.left.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* FEATURED ARTICLE */}
          <article className="blog-featured">
            <Link
              href={`/blog/${featured.slug}`}
              className="blog-featured-image"
            >
              <img src={featured.image} alt={featured.title} />

              <span className="blog-image-label">FEATURED STORY</span>
            </Link>

            <div className="blog-featured-content">
              <span className="blog-category">{featured.category}</span>

              <Link href={`/blog/${featured.slug}`}>
                <h2>{featured.title}</h2>
              </Link>

              <p>{featured.description}</p>

              <div className="blog-featured-bottom">
                <span className="blog-date">{featured.date}</span>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="blog-read-link"
                >
                  READ STORY <span>↗</span>
                </Link>
              </div>
            </div>
          </article>

          {/* RIGHT ARTICLES */}
          <div className="blog-side-column blog-right-column">
            {blogData.right.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
