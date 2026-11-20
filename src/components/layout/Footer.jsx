"use client";
import { FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "The Luxelan Life", href: "/luxelan-life" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="lux-footer">
      {/* TOP CONTACT STRIP */}
      <section className="footer-cta-section">
        <div className="footer-cta-content">
          <span className="footer-eyebrow">HAVE SOMETHING IN MIND?</span>

          <h2>
            Let's create something
            <br />
            <em>extraordinary.</em>
          </h2>
        </div>

        <a href="/contact" className="footer-main-button">
          <span>START YOUR PROJECT</span>
          <span className="footer-main-button-arrow">↗</span>
        </a>

        <div className="footer-cta-decoration">L</div>
      </section>

      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand-section">
          <a href="/" className="footer-brand-link">
            <img
              src="/assets/images/logo/Luxelanfinallogo.png"
              alt="Luxelan - The Art of Living"
              className="footer-logo"
            />
          </a>

          <p className="footer-brand-description">
            Creating thoughtfully designed spaces
            <br />
            that reflect your lifestyle, personality
            <br />
            and aspirations.
          </p>

          <span className="footer-brand-caption">THE ART OF LIVING</span>
        </div>

        {/* EXPLORE */}
        <div className="footer-navigation">
          <span className="footer-label">EXPLORE</span>

          <nav>
            {quickLinks.map((link, index) => (
              <a href={link.href} key={link.label}>
                <span className="footer-link-index">0{index + 1}</span>

                <span className="footer-link-name">{link.label}</span>

                <span className="footer-link-arrow">↗</span>
              </a>
            ))}
          </nav>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <span className="footer-label">GET IN TOUCH</span>

          <p className="footer-contact-heading">
            We'd love to hear
            <br />
            about your next project.
          </p>

          <a href="mailto:hello@luxelan.in" className="footer-email">
            hello@luxelan.in
            <span>↗</span>
          </a>

          <div className="footer-social-area">
            <span className="footer-label">FOLLOW OUR JOURNEY</span>

            <div className="footer-socials">
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                target="_blank"
                rel="noreferrer"
              >
                <FaPinterestP />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span className="footer-bottom-copy">
          © 2026 LUXELAN. ALL RIGHTS RESERVED.
        </span>

        <span className="footer-bottom-credit">CRAFTED WITH INTENTION.</span>

        <a href="#" className="footer-back-top">
          BACK TO TOP
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
