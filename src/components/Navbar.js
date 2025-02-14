// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#FFF5E1] shadow-md dark:bg-[#3E2723]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#FF8E72] dark:text-[#FFB6A3]">
              zihwoi
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-[#5C3D2E] dark:text-[#FDEBD3] hover:text-[#FF9770]">
              Home
            </Link>
            <Link to="/about" className="text-[#5C3D2E] dark:text-[#FDEBD3] hover:text-[#FF9770]">
              About
            </Link>
            <Link to="/projects" className="text-[#5C3D2E] dark:text-[#FDEBD3] hover:text-[#FF9770]">
              Projects
            </Link>
            <Link to="/contact" className="text-[#5C3D2E] dark:text-[#FDEBD3] hover:text-[#FF9770]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
