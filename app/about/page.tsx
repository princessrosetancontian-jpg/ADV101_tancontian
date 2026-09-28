export default function About() {
  const skills = [
    "Creative Design",
    "Digital Art",
    "Visual Presentation",
    "Creative Projects",
    "Photography",
    "Social Media",
    "Communication",
    "Organization",
    "Content Creation",
    "Digital Creativity",
  ];

  return (
    <div className="page">
      <section className="page-hero">
        <div className="section-label">
          ABOUT PRINCESS ROSE
        </div>

        <h1>
          Get to know
          <br />
          <span className="gradient">
            Princess Rose.
          </span>
        </h1>

        <p>
          This section introduces Princess Rose Tancontian and
          provides a closer look at her creative interests,
          personality, skills, and projects.
        </p>
      </section>

      <section className="section">
        <div className="about-grid">
          <div className="about-card">
            <h2>About Her</h2>

            <p>
              Princess Rose Tancontian is presented through this
              portfolio as a creative individual with an interest
              in visual work, digital projects, and creative
              expression.
            </p>

            <p>
              This website brings together selected artwork,
              project concepts, gallery pieces, and other creative
              work in one organized digital space.
            </p>

            <p>
              The portfolio is designed to reflect a modern,
              elegant, and creative visual identity using purple
              as its main color.
            </p>
          </div>

          <div className="about-card">
            <h2>Creative Skills</h2>

            <div className="skills">
              {skills.map((skill) => (
                <span
                  className="skill"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}