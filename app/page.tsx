import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="page">
            <div className="hero-content">
              <div className="badge">
                <span className="badge-dot"></span>
                CREATIVE PERSONAL PORTFOLIO
              </div>

              <h1>
                Princess Rose
                <br />
                <span className="gradient">Tancontian</span>
              </h1>

              <p className="hero-description">
                Welcome to the personal portfolio of Princess Rose
                Tancontian — a creative space showcasing artwork,
                projects, ideas, and digital experiences.
              </p>

              <div className="button-row">
                <Link
                  href="/portfolio"
                  className="primary-button"
                >
                  Explore Portfolio
                </Link>

                <Link
                  href="/about"
                  className="secondary-button"
                >
                  About Me
                </Link>
              </div>

              <div className="home-stats">
                <div className="home-stat">
                  <strong>01</strong>
                  <span>Creative Profile</span>
                </div>

                <div className="home-stat">
                  <strong>03+</strong>
                  <span>Featured Works</span>
                </div>

                <div className="home-stat">
                  <strong>∞</strong>
                  <span>Creative Ideas</span>
                </div>

                <div className="home-stat">
                  <strong>01</strong>
                  <span>Personal Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="page">
            <div className="section-label">
              EXPLORE THE WEBSITE
            </div>

            <h2 className="section-title">
              A creative space
              <br />
              made for Princess Rose.
            </h2>

            <p className="section-description">
              Discover her featured portfolio, creative projects,
              artwork, and gallery collection through a clean and
              modern purple-themed interface.
            </p>

            <div className="button-row">
              <Link
                href="/portfolio"
                className="primary-button"
              >
                View Portfolio
              </Link>

              <Link
                href="/gallery"
                className="secondary-button"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page">
            <div className="contact-box">
              <div className="section-label">
                CONNECT
              </div>

              <h2>Follow Princess Rose</h2>

              <p>
                Visit the Facebook profile to learn more and
                connect with Princess Rose Tancontian.
              </p>

              <div className="button-row">
                <a
                  href="https://www.facebook.com/100054831737449/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Facebook Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 Princess Rose Tancontian. All rights reserved.
      </footer>
    </>
  );
}