import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import MernService from "./pages/MernService";
import PernService from "./pages/PernService";
import FrontendService from "./pages/FrontendService";
import BackendService from "./pages/BackendService";
import DjangoService from "./pages/DjangoService";
import UiUxService from "./pages/UiUxService";
import SqlService from "./pages/SqlService";
import AIService from "./pages/AIService";
import DeepLearningService from "./pages/DeepLearningService";
import GenAIService from "./pages/GenAIService";
import OfficeService from "./pages/OfficeService";
import TechnicalSupport from "./pages/TechnicalSupport";
import DesktopSupport from "./pages/DesktopSupport";
import PCBService from "./pages/PCBService";
import IoTService from "./pages/IoTService";
import Wood3DService from "./pages/Wood3DService";

/* Smooth scroll handler */
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Hero />
              </div>

              {/* 🔥 FIX: div instead of section */}
              <div id="services">
                <Services />
              </div>

              <div id="about">
                <About />
              </div>

              <Footer />
            </>
          }
        />

        {/* SERVICE DETAIL PAGES */}
        <Route path="/services/mern-stack" element={<MernService />} />
        <Route path="/services/pern-stack" element={<PernService />} />
        <Route path="/services/frontend" element={<FrontendService />} />
        <Route path="/services/backend" element={<BackendService />} />
        <Route path="/services/django" element={<DjangoService />} />
        <Route path="/services/uiux" element={<UiUxService />} />
        <Route path="/services/sql" element={<SqlService />} />
        <Route path="/services/ai" element={<AIService />} />
        <Route path="/services/dl" element={<DeepLearningService />} />
        <Route path="/service/gen-ai" element={<GenAIService />} />
        <Route path="/services/office" element={<OfficeService />} />
        <Route path="/services/tech-support" element={<TechnicalSupport />} />
        <Route path="/services/desktop-support" element={<DesktopSupport />} />
        <Route path="/services/pcb" element={<PCBService />} />
        <Route path="/services/iot" element={<IoTService />} />
        <Route path="/service/wood-3d" element={<Wood3DService />} />
       

      </Routes>
    </Router>
  );
}

export default App;
