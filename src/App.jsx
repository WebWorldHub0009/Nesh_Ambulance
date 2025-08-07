import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Marquee24x7 from "./components/Marquee";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import Gallery from "./pages/Gallery";
import SingleService from "./pages/SingleService";

// Ambulance data
import { ambulanceServices } from "./data/ambulanceServices";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Marquee24x7 />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doc" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Service Pages */}
        <Route
          path="/services/emergency"
          element={<SingleService service={ambulanceServices[0]} />}
        />
        <Route
          path="/services/transport"
          element={<SingleService service={ambulanceServices[1]} />}
        />
        <Route
          path="/services/event-support"
          element={<SingleService service={ambulanceServices[2]} />}
        />
        <Route
          path="/services/icu"
          element={<SingleService service={ambulanceServices[3]} />}
        />
        <Route
          path="/services/air"
          element={<SingleService service={ambulanceServices[4]} />}
        />
      </Routes>
      <Footer />
      <FloatingButtons/>
    </BrowserRouter>
  );
};

export default App;
