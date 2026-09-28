import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-container">

        <Link href="/" className="brand">
          <div className="brand-logo">
            PR
          </div>

          <div className="brand-name">
            <strong>PRINCESS ROSE</strong>
            <span>TANCONTIAN</span>
          </div>
        </Link>

        <nav className="navigation">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/about" className="nav-link">
            About Me
          </Link>

          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>

          <Link href="/projects" className="nav-link">
            Projects
          </Link>

          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>

        </nav>

        <a
          href="https://www.facebook.com/100054831737449/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-nav"
        >
          Connect
        </a>

      </div>
    </header>
  );
}