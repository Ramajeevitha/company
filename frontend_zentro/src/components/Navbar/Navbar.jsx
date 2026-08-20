/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const underlineRef = useRef(null);
  const menuRef = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", id: "home", isPage: false },
    { name: "Services", id: "services", isPage: true, path: "/services" },
    { name: "Courses", id: "courses", isPage: true, path: "/courses" },
    { name: "Careers", id: "careers", isPage: true, path: "/careers" },
    { name: "Products", id: "products", isPage: true, path: "/products" },
    { name: "About", id: "about", isPage: false },
    { name: "Contact", id: "footer", isPage: false },
  ];

  const moveUnderline = (id) => {
    if (window.innerWidth <= 768) return;

    const el = menuRef.current[id];
    const underline = underlineRef.current;

    if (el && underline) {
      underline.style.width = `${el.offsetWidth}px`;
      underline.style.left = `${el.offsetLeft}px`;
      underline.style.opacity = "1";
    }
  };

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setActive("services");
      setTimeout(() => moveUnderline("services"), 80);
      return;
    }
    if (location.pathname.startsWith("/courses")) {
      setActive("courses");
      setTimeout(() => moveUnderline("courses"), 80);
      return;
    }
    if (location.pathname.startsWith("/careers")) {
      setActive("careers");
      setTimeout(() => moveUnderline("careers"), 80);
      return;
    }
    if (location.pathname.startsWith("/products")) {
      setActive("products");
      setTimeout(() => moveUnderline("products"), 80);
      return;
    }

    if (location.pathname === "/") {
      const target = location.state?.scrollTo || "home";
      setActive(target);

      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        moveUnderline(target);
      }, 120);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = [
      { id: "home", el: document.getElementById("home") },
      { id: "services", el: document.getElementById("services") },
      { id: "about", el: document.getElementById("about") },
      { id: "footer", el: document.getElementById("footer") },
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      let current = "home";

      for (const section of sections) {
        if (!section.el) continue;

        const top = section.el.offsetTop;
        const height = section.el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          current = section.id;
        }
      }

      setActive((prev) => {
        if (prev !== current) {
          moveUnderline(current);
          return current;
        }
        return prev;
      });
    };

    const handleResize = () => moveUnderline(active);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleScroll();
      moveUnderline(active);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname, active]);

  const handleMenuClick = (item) => {
    setActive(item.id);
    setOpen(false);

    if (item.isPage) {
      navigate(item.path);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: item.id },
      });
      return;
    }

    const el = document.getElementById(item.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setTimeout(() => moveUnderline(item.id), 120);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleMenuClick(menuItems[0])}>
        <img src="/assets/uyaron_logo.png" alt="Uyaron" className="logo-img" />

        <span>Uyaron</span>
      </div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`menu ${open ? "active" : ""}`}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            ref={(el) => (menuRef.current[item.id] = el)}
            className={active === item.id ? "active" : ""}
            onClick={() => handleMenuClick(item)}
          >
            {item.name}
          </li>
        ))}
        <span ref={underlineRef} className="menu-underline" />
      </ul>
    </nav>
  );
};

export default Navbar;
