import {
  BrowserRouter as Router,
  Routes,
 Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* Pages */
import MernService from "./pages/MernService";
import PernService from "./pages/PernService";
import FrontendService from "./pages/FrontendService";
import BackendService from "./pages/BackendService";
import DjangoService from "./pages/DjangoService";
import UiUxService from "./pages/UiUxService";
import SqlService from "./pages/SqlService";
import Dsa from "./pages/Dsa";
import TechnicalSupport from "./pages/TechnicalSupport";
import DesktopSupport from "./pages/DesktopSupport";
import PCBService from "./pages/PCBService";
import IoTService from "./pages/IoTService";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;

      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // clear state
        window.history.replaceState({}, document.title, window.location.pathname);
      }, 120);
    }
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const loader = document.getElementById("page-loader");
      if (loader) loader.style.display = "none";
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return null;

  return (
    <Router>
      <ScrollHandler />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Hero />
              </div>

              <div id="services">
                <Services />
              </div>

              <div id="about">
                <About />
              </div>

              <div id="contact">
                <Contact />
              </div>

              <Footer />
            </>
          }
        />

        {/* Software Services */}
        <Route path="/services/mern-stack" element={<MernService />} />
        <Route path="/services/pern-stack" element={<PernService />} />
        <Route path="/services/frontend" element={<FrontendService />} />
        <Route path="/services/backend" element={<BackendService />} />
        <Route path="/services/django" element={<DjangoService />} />
        <Route path="/services/uiux" element={<UiUxService />} />
        <Route path="/services/sql" element={<SqlService />} />
        <Route path="/services/dsa" element={<Dsa />} />

        {/* Hardware Services */}
        <Route path="/services/tech-support" element={<TechnicalSupport />} />
        <Route path="/services/desktop-support" element={<DesktopSupport />} />
        <Route path="/services/pcb" element={<PCBService />} />
        <Route path="/services/iot" element={<IoTService />} />
      </Routes>
    </Router>
  );
}

export default App;