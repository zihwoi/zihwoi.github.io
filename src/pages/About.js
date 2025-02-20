import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Smooth fade-in over 1 second
      className="max-w-5xl mx-auto p-6 bg-mainBg text-accent"
    >
      <h2 className="text-3xl font-bold mb-6">✿ about me</h2>
      <div className="bg-softBg p-6 rounded-lg shadow-md">
        <p className="mb-4">
          i'm a software developer learning to build websites and enjoy the
          world.
        </p>
        <p className="mb-4 font-semibold">what i am learning:</p>
        <ul className="list-disc list-inside mb-4 text-secondaryBg">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>MYSQL</li>
          <li>Python</li>
          <li>MongoDB and Postman</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default About;
