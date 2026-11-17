"use client";

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
      <div className="footer-main">
        {/* ENQUIRY SECTION */}
        <div className="footer-enquiry">
          <span className="footer-eyebrow">
            LET'S CREATE SOMETHING BEAUTIFUL
          </span>

          <h2>
            Let's make
            <br />
            something <span>timeless.</span>
          </h2>

          <p>
            Have a vision for your space?
            <br />
            Let's bring it to life together.
          </p>

          <a href="/contact" className="footer-cta">
            START A CONVERSATION <span>↗</span>
          </a>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-contact">
          <div className="footer-contact-block">
            <span className="footer-label">GET IN TOUCH</span>
            <a href="mailto:hello@luxelan.in" className="footer-email">
              hello@luxelan.in
            </a>
            <span className="footer-note">
              We'd love to hear about your next project.
            </span>
          </div>

          <div className="footer-contact-block">
            <span className="footer-label">FOLLOW OUR JOURNEY</span>

            <div className="footer-socials">
              <a href="#" target="_blank" rel="noreferrer">
                Instagram ↗
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Pinterest ↗
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-navigation">
          <span className="footer-label">EXPLORE LUXELAN</span>

          <nav>
            {quickLinks.map((link, index) => (
              <a href={link.href} key={link.label}>
                <span className="footer-link-index">0{index + 1}</span>
                <span>{link.label}</span>
                <span className="footer-link-arrow">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-brand">
          <img
            src="/assets/images/logo/Luxelanfinallogo.png"
            alt="Luxelan - The Art of Living"
            className="footer-logo"
          />
          <small>THE ART OF LIVING</small>
        </div>

        <div className="footer-copyright">
          <span>© 2026 LUXELAN.</span>
          <span>CRAFTED WITH INTENTION.</span>
        </div>

        <a href="#" className="footer-back-top">
          BACK TO TOP <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
