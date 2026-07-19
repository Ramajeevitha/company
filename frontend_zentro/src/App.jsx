import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const PlacementTraining = lazy(() => import("./pages/PlacementTraining"));

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

const LogoPosterService = lazy(() => import("./pages/LogoPosterService"));

function AppContent() {
  return (
    <div className="app-shell">
      <div className="global-bg"></div>

      <div className="page-content">
     
        <ScrollToTop />

        <Navbar />

        <Suspense
          fallback={
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#070b14",
                color: "#fff",
                fontSize: "1.2rem",
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
                </>
              }
            />

        

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/courses" element={<CoursesPage />} />
            <Route
              path="/services/placement-training"
              element={<PlacementTraining />}
            />


            <Route path="/services/software" element={<SoftwareServices />} />

            <Route path="/services/mern-stack" element={<MernService />} />

            <Route path="/services/frontend" element={<FrontendService />} />

            <Route path="/services/backend" element={<BackendService />} />

            <Route path="/services/uiux" element={<UiUxService />} />

            <Route path="/services/sql" element={<SqlService />} />

            <Route
              path="/services/logo-poster-design"
              element={<LogoPosterService />}
            />

       

            <Route path="/services/hardware" element={<HardwareServices />} />

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


        <Footer />
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
