import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const underlineRef = useRef(null);
  const menuRef = useRef({});

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];


  const moveUnderline = (id) => {
    const el = menuRef.current[id];
    if (el && underlineRef.current) {
      underlineRef.current.style.width = `${el.offsetWidth}px`;
      underlineRef.current.style.left = `${el.offsetLeft}px`;
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(item.id);
          moveUnderline(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToSection = (id) => {
    setActive(id);
    moveUnderline(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  useEffect(() => {
    moveUnderline(active);
  }, []);

  return (
    <nav className="navbar">
      <h2 onClick={() => scrollToSection("home")}>Zentro</h2>

      <ul className="menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            ref={(el) => (menuRef.current[item.id] = el)}
            className={active === item.id ? "active" : ""}
            onClick={() => scrollToSection(item.id)}
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
