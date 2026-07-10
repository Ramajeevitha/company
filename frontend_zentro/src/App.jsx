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
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import CoursesPage from "./pages/CoursesPage";
import SoftwareServices from "./pages/SoftwareServices";
import HardwareServices from "./pages/HardwareServices";

import Plasma from "./components/Plasma";

import MernService from "./pages/MernService";

import FrontendService from "./pages/FrontendService";
import BackendService from "./pages/BackendService";

import UiUxService from "./pages/UiUxService";
import SqlService from "./pages/SqlService";
import TechnicalSupport from "./pages/TechnicalSupport";
import DesktopSupport from "./pages/DesktopSupport";
import PCBService from "./pages/PCBService";
import IoTService from "./pages/IoTService";
import LogoPosterService from "./pages/LogoPosterService";

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

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }, 120);
    }
  }, [location]);

  return null;
};

function AppContent() {
  return (
    <div className="app-shell">
      <div className="global-bg">
        <Plasma
          color="#48cae4"
          speed={1}
          direction="forward"
          scale={1}
          opacity={1}
          mouseInteractive={false}
        />
      </div>

      <div className="page-content">
        <ScrollHandler />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <section id="services">
                  <Services />
                </section>

                <section id="about">
                  <About />
                </section>

                <section id="contact">
                  <Footer />
                </section>
              </>
            }
          />

          <Route path="/services/mern-stack" element={<MernService />} />
         
          <Route path="/services/frontend" element={<FrontendService />} />
          <Route path="/services/backend" element={<BackendService />} />
        
          <Route path="/services/uiux" element={<UiUxService />} />
          <Route path="/services/sql" element={<SqlService />} />
        

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/software" element={<SoftwareServices />} />
          <Route path="/services/hardware" element={<HardwareServices />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/services/logo-poster-design" element={<LogoPosterService />} />

          <Route path="/services/tech-support" element={<TechnicalSupport />} />
          <Route
            path="/services/desktop-support"
            element={<DesktopSupport />}
          />
          <Route path="/services/pcb" element={<PCBService />} />
          <Route path="/services/iot" element={<IoTService />} />
        </Routes>
      </div>
    </div>
  );
}

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
      <AppContent />
    </Router>
  );
}

export default App;
