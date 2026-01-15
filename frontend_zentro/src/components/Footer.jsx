import "./Footer.css";
import zentroLogo from "../assets/zentro.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-pattern"></div>

      <div className="footer-container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img src={zentroLogo} alt="Zentro" className="footer-logo" />
            <p>
              Zentro is a modern technology company delivering scalable,
              secure, and innovative digital solutions for businesses.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("services")}>Services</li>
              <li onClick={() => scrollToSection("about")}>About</li>
              <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <a href="mailto:zentrooffice@gmail.com">
                  zentrooffice@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zentro-tech-55b7743a3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Zentro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
