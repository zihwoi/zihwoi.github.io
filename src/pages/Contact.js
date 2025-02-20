// src/pages/Contact.js
import React from "react";
import MotionWrapper from "../components/MotionWrapper";

function Contact() {
  return (
    <MotionWrapper>
      <h2 className="text-4xl font-bold text-accent text-center mb-6">
        find me on:
      </h2>
      <div className="bg-softBg p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <p className="mb-4 text-lg font-medium">my links:</p>
        <div className="space-y-3">
          {[
            { name: "X (twitter)", url: "https://x.com/zihwoi" },
            { name: "Blog", url: "https://www.zihwoi.com/" },
            { name: "Github", url: "https://github.com/zihwoi" },
          ].map((link, i) => (
            <p key={i}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-secondaryBg transition-colors"
              >
                {link.name}
              </a>
            </p>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}

export default Contact;
