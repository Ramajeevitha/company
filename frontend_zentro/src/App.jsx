import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";


/* Lazy Loaded Pages */
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const SoftwareServices = lazy(() => import("./pages/SoftwareServices"));
const HardwareServices = lazy(() => import("./pages/HardwareServices"));

const MernService = lazy(() => import("./pages/MernService"));
const FrontendService = lazy(() => import("./pages/FrontendService"));
const BackendService = lazy(() => import("./pages/BackendService"));
const UiUxService = lazy(() => import("./pages/UiUxService"));
const SqlService = lazy(() => import("./pages/SqlService"));

const TechnicalSupport = lazy(() => import("./pages/TechnicalSupport"));
const DesktopSupport = lazy(() => import("./pages/DesktopSupport"));
const PCBService = lazy(() => import("./pages/PCBService"));
const IoTService = lazy(() => import("./pages/IoTService"));

const LogoPosterService = lazy(() =>
  import("./pages/LogoPosterService")
);

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;

      setTimeout(() => {
        const el = document.getElementById(targetId);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
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
       
      </div>

      <div className="page-content">
        <ScrollHandler />
        <Navbar />

        <Suspense
          fallback={
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "1.2rem",
                background: "#070b14",
              }}
            >
              Loading...
            </div>
          }
        >
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

            {/* Services */}
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/software"
              element={<SoftwareServices />}
            />
            <Route
              path="/services/hardware"
              element={<HardwareServices />}
            />

            {/* Courses */}
            <Route path="/courses" element={<CoursesPage />} />

            {/* Software Pages */}
            <Route
              path="/services/mern-stack"
              element={<MernService />}
            />
            <Route
              path="/services/frontend"
              element={<FrontendService />}
            />
            <Route
              path="/services/backend"
              element={<BackendService />}
            />
            <Route
              path="/services/uiux"
              element={<UiUxService />}
            />
            <Route path="/services/sql" element={<SqlService />} />
            <Route
              path="/services/logo-poster-design"
              element={<LogoPosterService />}
            />

            {/* Hardware Pages */}
            <Route
              path="/services/tech-support"
              element={<TechnicalSupport />}
            />
            <Route
              path="/services/desktop-support"
              element={<DesktopSupport />}
            />
            <Route path="/services/pcb" element={<PCBService />} />
            <Route path="/services/iot" element={<IoTService />} />
          </Routes>
        </Suspense>
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
      if (loader) {
        loader.style.display = "none";
      }
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