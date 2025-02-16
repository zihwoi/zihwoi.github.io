// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-mainBg text-accent">
      <h2 className="text-3xl font-bold mb-6">
        about me
      </h2>
      <div className="bg-softBg p-6 rounded-lg shadow-md">
        <p className="mb-4">
          i'm a software developer learning to build new things and enjoy the world.
        </p>
        <p className="mb-4 font-semibold">
          what am i learning:
        </p>
        <ul className="list-disc list-inside mb-4 text-secondaryBg">
          <li>React.js</li>
          <li>JavaScript/TypeScript</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>Painting</li>
          <li>Videography</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
