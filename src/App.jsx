 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Community from "./pages/Community";
import TuitionOffers from "./pages/opportunities/TuitionOffers";
import PartTimeJobs from "./pages/opportunities/PartTimeJobs";
import Freelancing from "./pages/opportunities/Freelancing";
import BlindSupport from "./pages/opportunities/BlindSupport";
import ProjectHelp from "./pages/opportunities/ProjectHelp";

function App() {
  return (
    <Router>
      <div className="bg-[#f9fdfb] min-h-screen flex flex-col justify-between">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
            <Route path="/tuition-offers" element={<TuitionOffers />} />
            <Route path="/parttime-jobs" element={<PartTimeJobs />} />
            <Route path="/freelancing" element={<Freelancing />} />
            <Route path="/blind-support" element={<BlindSupport />} />
            <Route path="/project-help" element={<ProjectHelp />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
