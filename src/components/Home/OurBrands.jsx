"use client";

const brands = [
  { name: "Abner", src: "/assets/images/brands/abner.png" },
  { name: "Arte", src: "/assets/images/brands/Arte.png" },
  { name: "Blum", src: "/assets/images/brands/BLUM.png" },
  { name: "CMC", src: "/assets/images/brands/CMC.png" },
  { name: "Decor", src: "/assets/images/brands/Decor.png" },
  { name: "Dulux", src: "/assets/images/brands/Dulux.png" },
  { name: "Greenlam", src: "/assets/images/brands/Greenlam.png" },
  { name: "Häfele", src: "/assets/images/brands/Hafele.png" },
  { name: "Hansgrohe", src: "/assets/images/brands/Hansgrohe.png" },
  { name: "Hybec", src: "/assets/images/brands/Hybec.png" },
  { name: "Jaipur Rugs", src: "/assets/images/brands/Jaipur%20rugs.png" },
  { name: "Kohler", src: "/assets/images/brands/Kohler.png" },
  { name: "Lafit", src: "/assets/images/brands/Lafit.png" },
  { name: "Legrand", src: "/assets/images/brands/legrand.png" },
  { name: "Moto", src: "/assets/images/brands/Moto.png" },
  { name: "Samsung", src: "/assets/images/brands/Samsung.png" },
  { name: "Simpol", src: "/assets/images/brands/Simpol.png" },
  { name: "Stibel", src: "/assets/images/brands/Stibel.png" },
  { name: "Yale", src: "/assets/images/brands/yale.png" },
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
