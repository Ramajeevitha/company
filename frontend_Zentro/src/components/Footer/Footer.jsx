import "./Footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
      
          <div className="footer-brand">
            <div className="footer-logo-container">
              <img
                src="/assets/uyaron_logo.png"
                alt="Uyaron Logo"
                className="footer-logo"
                loading="lazy"
                decoding="async"
              />
              <span className="footer-brand-name">Uyaron Technology</span>
            </div>

            <p>
              Uyaron delivers innovative software solutions, reliable hardware
              services, and industry-focused training that empowers businesses
              and individuals to grow.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>

            <ul className="footer-links">
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("services")}>Services</li>
              <li onClick={() => scrollToSection("about")}>About</li>
            </ul>
          </div>

    
          <div>
            <h4 className="footer-heading">Contact</h4>

            <ul className="footer-contact">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=uyaronoffice@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uyaronoffice@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/_uyaron_?igsh=YzdrbG5zMjFldmQ5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Uyaron. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
