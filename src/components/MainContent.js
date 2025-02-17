// src/components/MainContent.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ProjectDetail from "../pages/ProjectDetail"; // ✅ Import the missing page

function MainContent() {
  return (
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* ✅ Add this */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default MainContent;
