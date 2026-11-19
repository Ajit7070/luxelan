"use client";

const images = {
  living:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
  kitchen:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=85",
  bathroom:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=85",
  dining:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=85",
  detail:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=85",
  interior:
    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=900&q=85",
  architecture:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900&q=85",
};

const galleryItems = [
  {
    type: "image",
    image: images.living,
    title: "The Art of Living",
    category: "RESIDENTIAL INTERIORS",
    size: "tall",
  },
  {
    type: "image",
    image: images.kitchen,
    title: "Modern Elegance",
    category: "KITCHEN DESIGN",
    size: "medium",
  },
  {
    type: "text",
    eyebrow: "OUR PHILOSOPHY",
    title: "Spaces that tell your story.",
    description:
      "We believe beautiful spaces go beyond aesthetics. They reflect the people, moments and experiences that make a house a home.",
    size: "small",
  },
  {
    type: "image",
    image: images.bedroom,
    title: "A Quiet Retreat",
    category: "BEDROOM INTERIORS",
    size: "tall",
  },
  {
    type: "image",
    image: images.bathroom,
    title: "Beyond Ordinary",
    category: "BATHROOM DESIGN",
    size: "medium",
  },
  {
    type: "image",
    image: images.dining,
    title: "Timeless Together",
    category: "DINING SPACES",
    size: "tall",
  },
  {
    type: "text",
    eyebrow: "THE LUXELAN APPROACH",
    title: "Thoughtfully imagined. Beautifully lived.",
    description:
      "From the first sketch to the final detail, every element is considered to create a space that feels uniquely yours.",
    size: "medium",
  },
  {
    type: "image",
    image: images.detail,
    title: "Details That Matter",
    category: "INTERIOR DETAILS",
    size: "medium",
  },
  {
    type: "image",
    image: images.interior,
    title: "A Sense of Harmony",
    category: "CONTEMPORARY LIVING",
    size: "tall",
  },
  {
    type: "image",
    image: images.architecture,
    title: "Form & Function",
    category: "ARCHITECTURAL DETAILS",
    size: "medium",
  },
];

export default function PortfolioGallery() {
  return (
    <section className="lux-portfolio" id="portfolio-gallery">
      {/* SECTION INTRO */}
      <div className="lux-portfolio-heading">
        <div>
          <span className="lux-portfolio-eyebrow">A CURATED COLLECTION</span>

          <h2>
            Selected <em>Spaces.</em>
          </h2>
        </div>

        <p>
          An exploration of thoughtful interiors, beautiful details and spaces
          designed around the art of living.
        </p>
      </div>

      {/* MASONRY GRID */}
      <div className="lux-masonry">
        {galleryItems.map((item, index) => (
          <article
            className={`lux-masonry-item ${
              item.type === "text"
                ? `lux-masonry-text ${item.size}`
                : `lux-masonry-image ${item.size}`
            }`}
            key={index}
          >
            {item.type === "image" ? (
              <div className="lux-gallery-card">
                <img src={item.image} alt={item.title} loading="lazy" />

                <div className="lux-gallery-overlay">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <span className="lux-gallery-arrow">↗</span>
                </div>
              </div>
            ) : (
              <div className="lux-editorial-card">
                <span className="lux-editorial-eyebrow">{item.eyebrow}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="lux-editorial-line" />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
