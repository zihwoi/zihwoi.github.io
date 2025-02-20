// src/pages/Home.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AsciiScreen from "../components/AsciiScreen";
import MotionWrapper from "../components/MotionWrapper";
import BouncingBall from "../components/BouncingBall";
import { projects as allProjects } from "../data/projects";

const projects = allProjects.map(({ id, title, description }) => ({
  id,
  title,
  description,
}));

function Home() {
  return (
    <MotionWrapper
      title="my little portfolio"
      subtitle="hi, i work on some projects and this is where i recorded them. i love nature and create stuffs to fulfill the day."
    >
      {/* Bouncing Ball Component */}
      <BouncingBall />

      {/* Featured Projects */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-softBg p-6 rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col items-center justify-between w-full md:w-[420px] min-h-[300px]"
            whileHover={{ scale: 1.05 }}
          > 
            <AsciiScreen title={project.title} /> {/* Use reusable component */}
            <h3 className="text-xl font-bold text-accent mt-4">{project.title}</h3>
            <p className="text-textPrimary text-center mb-4">
              {project.description}
            </p>
            <Link
              to={`/projects/${project.id}`}
              className="text-accent hover:text-secondaryBg font-semibold"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </MotionWrapper>
  );
}


export default Home;
