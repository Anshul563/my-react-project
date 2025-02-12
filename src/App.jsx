import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";  // Navbar is inside the pages folder
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Default route ("/") should show the Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route (optional, for handling invalid URLs) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
