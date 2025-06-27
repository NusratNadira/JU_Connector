 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import BuyProducts from "./pages/products/BuyProducts";
import SellProducts from "./pages/products/SellProducts";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import TuitionOffers from "./pages/opportunities/TuitionOffers";
import PartTimeJobs from "./pages/opportunities/PartTimeJobs";
import Freelancing from "./pages/opportunities/Freelancing";
import BlindSupport from "./pages/opportunities/BlindSupport";
import ProjectHelp from "./pages/opportunities/ProjectHelp";
import Designer from "./pages/opportunities/Designer";

function App() {
  return (
    <Router>
      <div className="bg-[#f9fdfb] min-h-screen flex flex-col justify-between">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/BuyProducts" element={<BuyProducts />} />
            <Route path="/products/SellProducts" element={<SellProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
            {/* <Route path="/tuition-offers" element={<TuitionOffers />} /> */}
            <Route path="/opportunities/PartTimeJobs" element={<PartTimeJobs />} />
            <Route path="/opportunities/Freelancing" element={<Freelancing />} />
            <Route path="/opportunities/BlindSupport" element={<BlindSupport />} />
            <Route path="/opportunities/ProjectHelp" element={<ProjectHelp />} />
            <Route path="/opportunities/Designer" element={<Designer />} />
             <Route path="/opportunities/TuitionOffers" element={<TuitionOffers />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
