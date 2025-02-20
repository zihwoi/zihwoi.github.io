import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BouncingBall = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const moveAmount = 180; // Control how far it moves per click

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Update screen size dynamically
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bounceBall = () => {
    let newX = position.x + (Math.random() > 0.5 ? moveAmount : -moveAmount);
    let newY = position.y + (Math.random() > 0.5 ? moveAmount : -moveAmount);

    const ballSize = 40; // Ball diameter to prevent going off-screen
    const padding = 20; // Ensures space around edges

    // Constrain position within visible screen size
    newX = Math.min(Math.max(newX, padding), screenWidth - ballSize - padding);
    newY = Math.min(Math.max(newY, padding), screenHeight - ballSize - padding);

    setPosition({ x: newX, y: newY });
  };

  return (
    <motion.div
      className="w-10 h-10 bg-accent rounded-full fixed cursor-pointer z-50"
      style={{ top: position.y, left: position.x }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      onClick={bounceBall}
    />
  );
};

export default BouncingBall;
