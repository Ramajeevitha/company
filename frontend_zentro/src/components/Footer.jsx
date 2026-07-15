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
          {/* Company */}
          <div className="footer-brand">
            <img
              src="/assets/uyaron_logo.png"
              alt="Uyaron Logo"
              className="footer-logo"
            />

            <p>
              Uyaron delivers innovative software solutions, reliable hardware
              services, and industry-focused training that empowers businesses
              and individuals to grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>

            <ul className="footer-links">
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("services")}>Services</li>
              <li onClick={() => scrollToSection("about")}>About</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact</h4>

            <ul className="footer-contact">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=uyaronoffice@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Us
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
