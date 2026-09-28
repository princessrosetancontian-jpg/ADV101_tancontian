const artwork =
  "https://uploads.onecompiler.io/454a46uw9/1790511928483/Screenshot%202026-09-27%20202516.png";

const events =
  "https://uploads.onecompiler.io/454a46uw9/1790511936184/Screenshot%202026-09-27%20202421.png";

const nature =
  "https://uploads.onecompiler.io/454a46uw9/1790503733223/Sumaoang,Aguinaldo%20Lawrence%20IPTS.png";

export default function Gallery() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="section-label">
          VISUAL GALLERY
        </div>

        <h1>
          Princess Rose's
          <br />
          <span className="gradient">
            creative world.
          </span>
        </h1>

        <p>
          Explore a visual collection of artwork, interfaces,
          events, and project concepts.
        </p>
      </section>

      <section className="section">
        <div className="gallery-grid">
          <article className="gallery-item">
            <div className="gallery-image">
              <img
                src={artwork}
                alt="Featured artwork gallery"
              />
            </div>

            <div className="gallery-caption">
              <h3>
                Featured Artworks
              </h3>

              <p>
                A collection of creative visual works.
              </p>
            </div>
          </article>

          <article className="gallery-item">
            <div className="gallery-image">
              <img
                src={events}
                alt="Events and workshops"
              />
            </div>

            <div className="gallery-caption">
              <h3>
                Events & Workshops
              </h3>

              <p>
                Creative events and activities.
              </p>
            </div>
          </article>

          <article className="gallery-item">
            <div className="gallery-image">
              <img
                src={nature}
                alt="Nature Spring project"
              />
            </div>

            <div className="gallery-caption">
              <h3>
                Nature Spring
              </h3>

              <p>
                Nature, community, and creativity.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}