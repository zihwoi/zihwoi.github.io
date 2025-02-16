// src/pages/Home.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "cutepixo",
    title: "Cutepixo",
    image: "https://source.unsplash.com/400x300/?pixel,art",
    description: "A fun pixel art project.",
  },
  {
    id: "project-2",
    title: "Project 2",
    image: "https://source.unsplash.com/400x300/?technology,code",
    description: "A different cool project.",
  },
];

function Home() {
  // Ball state (position)
  const [position, setPosition] = useState({ x: 100, y: 100 });

  // Function to move ball when clicked
  const bounceBall = () => {
    const newX = Math.random() * window.innerWidth - 50;
    const newY = Math.random() * window.innerHeight - 50;
    setPosition({ x: newX, y: newY });
  };

  return (
    <motion.div
      className="relative max-w-4xl mx-auto p-6 bg-mainBg text-textPrimary min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Bouncing Ball */}
      <motion.div
        className="w-10 h-10 bg-accent rounded-full fixed cursor-pointer"
        style={{
          top: position.y,
          left: position.x,
          position: "fixed",
        }}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        onClick={bounceBall}
      />

      {/* Hero Section */}
      <motion.h1
        className="text-5xl font-bold text-accent mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        my little portfolio
      </motion.h1>

      <motion.p
        className="text-lg text-textSecondary text-center mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        hi, i work on some projects and this is where i recorded them. i love nature and create 
        stuffs to fulfill the day.
      </motion.p>

      {/* Featured Projects */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-softBg p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold text-accent mt-3">{project.title}</h3>
            <p className="text-textPrimary mb-2">{project.description}</p>
            <Link
              to={`/projects/${project.id}`}
              className="text-accent hover:text-secondaryBg"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
