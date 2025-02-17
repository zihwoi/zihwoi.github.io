// src/pages/Contact.js
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-mainBg text-textPrimary min-h-screen flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Title */}
      <motion.h2
        className="text-4xl font-bold text-accent text-center mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        find me on:
      </motion.h2>

      {/* Contact Card */}
      <motion.div
        className="bg-softBg p-6 rounded-lg shadow-md w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-lg font-medium">my links:</p>
        <div className="space-y-3">
          <p>
            <a
              href="https://x.com/zihwoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondaryBg transition-colors"
            >
              X (twitter)
            </a>
          </p>
          <p>
            <a
              href="https://www.zihwoi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondaryBg transition-colors"
            >
              Blog
            </a>
          </p>
          <p>
            <a
              href="https://github.com/zihwoi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-secondaryBg transition-colors"
            >
              Github
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
