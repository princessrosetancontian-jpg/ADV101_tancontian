const artwork =
  "https://uploads.onecompiler.io/454a46uw9/1790511928483/Screenshot%202026-09-27%20202516.png";

const events =
  "https://uploads.onecompiler.io/454a46uw9/1790511936184/Screenshot%202026-09-27%20202421.png";

const nature =
  "https://uploads.onecompiler.io/454a46uw9/1790503733223/Sumaoang,Aguinaldo%20Lawrence%20IPTS.png";

export default function Portfolio() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="section-label">
          PRINCESS ROSE'S PORTFOLIO
        </div>

        <h1>
          Featured
          <br />
          <span className="gradient">creative work.</span>
        </h1>

        <p>
          A collection of selected visual works, digital
          interfaces, creative concepts, and projects.
        </p>
      </section>

      <section className="section">
        <div className="portfolio-grid">
          <article className="portfolio-card featured">
            <div className="portfolio-image">
              <img
                src={artwork}
                alt="Featured artwork collection"
              />
            </div>

            <div className="portfolio-info">
              <h3>
                Featured Weekly Artworks
              </h3>

              <p>
                A visually rich artwork collection presented
                through a modern gallery interface.
              </p>

              <div className="tags">
                <span className="tag">Artwork</span>
                <span className="tag">Creative</span>
                <span className="tag">Gallery</span>
              </div>
            </div>
          </article>

          <article className="portfolio-card">
            <div className="portfolio-image">
              <img
                src={events}
                alt="Events and workshops interface"
              />
            </div>

            <div className="portfolio-info">
              <h3>
                Events & Workshops
              </h3>

              <p>
                A creative event interface highlighting
                upcoming activities and workshops.
              </p>

              <div className="tags">
                <span className="tag">Events</span>
                <span className="tag">UI Design</span>
              </div>
            </div>
          </article>

          <article className="portfolio-card">
            <div className="portfolio-image">
              <img
                src={nature}
                alt="Nature Spring project"
              />
            </div>

            <div className="portfolio-info">
              <h3>
                Nature Spring
              </h3>

              <p>
                A nature and community-focused digital project
                combining ecological ideas with creative
                interface design.
              </p>

              <div className="tags">
                <span className="tag">Nature</span>
                <span className="tag">Mobile</span>
                <span className="tag">Project</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}