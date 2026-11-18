"use client";

const brands = [
  { name: "ARRIVAE", src: "/assets/images/brands/arr_logo.png" },
  { name: "Kajaria", src: "/assets/images/brands/logo01.png" },
  { name: "Häfele", src: "/assets/images/brands/logo04.png" },
  { name: "LG", src: "/assets/images/brands/logo06.jpg" },
  { name: "Samsung", src: "/assets/images/brands/logo08.png" },
  { name: "Nutrise", src: "/assets/images/brands/logo14.png" },
  { name: "Hitachi", src: "/assets/images/brands/logo17.png" },
  { name: "Legrand", src: "/assets/images/brands/logo18.png" },
  { name: "Asian Paints", src: "/assets/images/brands/loho10.png" },
];

export default function OurBrands() {
  return (
    <section className="brands-section" id="our-brands">
      <div className="brands-grid" />

      <div className="brands-heading">
        <span>OUR BRAND PARTNERS</span>
        <h2>
          Brands that define <em>excellence.</em>
        </h2>
      </div>

      <div className="brands-marquee">
        <div className="brands-track">
          {[...brands, ...brands].map((brand, index) => (
            <div
              className="brand-item"
              key={`${brand.name}-${index}`}
              aria-hidden={index >= brands.length}
            >
              <img
                src={brand.src}
                alt={index < brands.length ? brand.name : ""}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="brands-caption">
        A curated collection of brands we trust and work with.
      </p>
    </section>
  );
}
