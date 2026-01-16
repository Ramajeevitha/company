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
    if (location.pathname === "/") {
      setTimeout(() => moveUnderline(active), 50);
    }
  }, [location.pathname, active]);

  const handleMenuClick = (id) => {
    setActive(id);
    setOpen(false); // close menu on mobile

    navigate("/", {
      state: { scrollTo: id },
    });
  };

  return (
    <nav className="navbar">
      <h2 onClick={() => handleMenuClick("home")}>Zentro</h2>

      {/* Hamburger */}
      <div
        className="hamburger"
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
            onClick={() => handleMenuClick(item.id)}
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
