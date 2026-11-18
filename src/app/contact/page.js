import "./contact.css";

export const metadata = {
  title: "Contact Us | Luxelan",
  description:
    "Connect with Luxelan to discuss your architecture and interior design project.",
};

export default function ContactPage() {
  return (
    <main className="lux-contact">
      {/* CONTACT / ENQUIRY SECTION */}
      <section className="contact-main">
        <div className="contact-main-inner">
          {/* LEFT: INTRODUCTION */}
          <div className="contact-intro">
            <div className="contact-intro-content">
              <span className="contact-section-label">
                LET'S CREATE SOMETHING MEANINGFUL
              </span>

              <h1>
                A space worth
                <em>dreaming of.</em>
                Starts here.
              </h1>

              <p>
                Tell us what you envision. Together, we'll transform your ideas
                into spaces that feel extraordinary.
              </p>

              <div className="contact-intro-cta">
                <span></span>
                <small>START A CONVERSATION</small>
              </div>
            </div>

            <div className="contact-intro-image">
              <img
                src="/assets/images/projects/project-01.jpg"
                alt="Luxelan interior design project"
              />
            </div>

            <div className="contact-intro-bottom">
              <span>THOUGHTFUL DESIGN. TIMELESS SPACES.</span>
              <span className="contact-arrow">↗</span>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="contact-form-wrap">
            <div className="contact-form-heading">
              <span className="contact-eyebrow">YOUR PROJECT, OUR PASSION</span>

              <h2>
                Tell us about
                <br />
                your project.
              </h2>

              <p>
                Share a few details with us. Our team will get in touch to
                understand your vision.
              </p>
            </div>

            <form
              className="contact-form"
              action="/api/work-with-us"
              method="POST"
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">YOUR NAME *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-phone">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-interest">
                    SERVICE INTERESTED IN
                  </label>
                  <select id="contact-interest" name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Architecture">Architecture</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Styling">Styling</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-field contact-message-field">
                <label htmlFor="contact-message">
                  TELL US ABOUT YOUR PROJECT *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="A little about your vision, space or requirements..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                <span>Send Enquiry</span>
                <span className="contact-submit-arrow">↗</span>
              </button>

              <p className="contact-form-note">
                Your details will only be used to get in touch regarding your
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* STUDIO INFORMATION SECTION */}
    </main>
  );
}
