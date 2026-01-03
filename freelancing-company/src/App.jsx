import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import MernService from "./pages/MernService";
import PernService from "./pages/PernService";
import FrontendService from "./pages/FrontendService";
import BackendService from "./pages/BackendService";
import DjangoService from "./pages/DjangoService";
import UiUxService from "./pages/UiUxService";
import SqlService from "./pages/SqlService";
import OfficeService from "./pages/OfficeService";
import TechnicalSupport from "./pages/TechnicalSupport";
import DesktopSupport from "./pages/DesktopSupport";
import PCBService from "./pages/PCBService";
import IoTService from "./pages/IoTService";

function App() {
  return (
    <Router>
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
                <Contact />
              </section>
              <Footer />
            </>
          }
        />

   
        <Route path="/services" element={<Services />} />


        <Route path="/services/mern-stack" element={<MernService />} />
        <Route path="/services/pern-stack" element={<PernService />} />
        <Route path="/services/frontend" element={<FrontendService />} />
        <Route path="/services/backend" element={<BackendService />} />
        <Route path="/services/django" element={<DjangoService />} />
        <Route path="/services/uiux" element={<UiUxService />} />
        <Route path="/services/sql" element={<SqlService />} />
        <Route path="/services/office" element={<OfficeService />} />
        <Route path="/services/technical-support" element={<TechnicalSupport />} />
        <Route path="/services/desktop-support" element={<DesktopSupport />} />
        <Route path="/services/pcb" element={<PCBService />} />
        <Route path="/services/iot" element={<IoTService />} />
      </Routes>
    </Router>
  );
}

export default App;
