import "../process/process.css";
import "./projects.css";
import PortfolioGallery from "@/components/Projects/PortfolioGallery";
import LetsTalk from "@/components/layout/LetsTalk";

export default function ProjectsPage() {
  return (
    <main className="lux-projects-page">
      {/* HERO BANNER */}
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
            Spaces.
            <em>Stories.</em>
            <br />
            Experiences.
          </h1>

          <a href="#portfolio-gallery" className="process-banner-link">
            EXPLORE OUR COLLECTION <span>↓</span>
          </a>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <PortfolioGallery />

      {/* FINAL CTA */}

      <LetsTalk />
    </main>
  );
}
