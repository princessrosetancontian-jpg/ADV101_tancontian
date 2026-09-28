import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="page">
          <div className="hero-content">

            <div className="badge">
              <span className="badge-dot"></span>
              PRINCESS ROSE TANCONTIAN
            </div>

            <h1>
              Princess Rose
              <br />
              <span className="gradient">Tancontian</span>
            </h1>

            <p className="hero-description">
              Welcome to the personal portfolio of Princess Rose Tancontian.
              Explore her creative work, projects, artwork, and digital
              experiences in one modern portfolio.
            </p>

            <div className="button-row">
              <Link href="/portfolio" className="primary-button">
                View Portfolio
              </Link>

              <Link href="/about" className="secondary-button">
                About Me
              </Link>
            </div>

            <div className="home-stats">
              <div className="home-stat">
                <strong>01</strong>
                <span>Personal Portfolio</span>
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
                <strong>2026</strong>
                <span>Creative Collection</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="page">

          <div className="section-label">
            EXPLORE
          </div>

          <h2 className="section-title">
            Welcome to
            <br />
            <span className="gradient">
              Princess Rose's world.
            </span>
          </h2>

          <p className="section-description">
            Discover a collection of creative works, projects,
            visual designs, and personal interests presented
            through a clean purple-themed portfolio.
          </p>

          <div className="explore-grid">

            <Link href="/about" className="explore-card">
              <span>01</span>
              <h3>About Me</h3>
              <p>
                Learn more about Princess Rose and her creative
                interests.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/portfolio" className="explore-card">
              <span>02</span>
              <h3>Portfolio</h3>
              <p>
                View featured creative works and visual projects.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/projects" className="explore-card">
              <span>03</span>
              <h3>Projects</h3>
              <p>
                Discover different project concepts and ideas.
              </p>
              <strong>Explore →</strong>
            </Link>

            <Link href="/gallery" className="explore-card">
              <span>04</span>
              <h3>Gallery</h3>
              <p>
                Browse the visual collection and featured images.
              </p>
              <strong>Explore →</strong>
            </Link>

          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="page">
          <div className="contact-box">

            <div className="section-label">
              CONNECT
            </div>

            <h2>
              Connect with
              <br />
              Princess Rose
            </h2>

            <p>
              Visit Princess Rose Tancontian's Facebook profile
              to connect and learn more.
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

      <footer className="footer">
        © 2026 Princess Rose Tancontian
      </footer>
    </main>
  );
}