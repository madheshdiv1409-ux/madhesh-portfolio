import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Madhesh</h2>

        <p>
          Full Stack Developer • React • Django • Python
        </p>

        <div className="footer-links">

          <a
            href="mailto:madheshdiv.1409@gmail.com"
          >
            Email
          </a>

          <a
            href="https://github.com/madheshdiv1409-ux"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/madhesh-waran14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

        <span>

          © 2026 Madhesh. All Rights Reserved.

        </span>

      </div>

    </footer>
  );
};

export default Footer;