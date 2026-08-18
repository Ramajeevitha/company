import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SEO from "./components/SEO/SEO";
import FAQ from "./components/FAQ/FAQ";


const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage/CoursesPage"));
const CareersPage = lazy(() => import("./pages/CareersPage/CareersPage"));
const InternshipsPage = lazy(() => import("./pages/InternshipsPage/InternshipsPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/ProductsPage"));
const PlacementTraining = lazy(() => import("./pages/PlacementTraining/PlacementTraining"));



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
                  <SEO title="Home" />
                  <section id="home">
                    <Hero />
                  </section>

                  <section id="services">
                    <Services />
                  </section>

                  <section id="about">
                    <About />
                  </section>

                  <Partners />

                  <FAQ />
                </>
              }
            />



            <Route path="/services" element={<ServicesPage />} />

            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route
              path="/services/placement-training"
              element={<PlacementTraining />}
            />



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

    AOS.init({ duration: 800, once: true });

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
