// src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-mainBg text-accent">
      <h2 className="text-3xl font-bold mb-6">
        find me on:
      </h2>
      <div className="bg-softBg p-6 rounded-lg shadow-md">
        <p className="mb-4">my links:</p>
        <div className="space-y-2">
          <p>
            <a href="https://x.com/zihwoi" target="_blank" rel="noopener noreferrer" 
               className="text-accent hover:text-secondaryBg">
              x (twitter)
            </a>
          </p>
          <p>
            <a href="https://www.zihwoi.com/" target="_blank" rel="noopener noreferrer" 
               className="text-accent hover:text-secondaryBg">
              zi.hwoi
            </a>
          </p>
          <p>
            <a href="https://github.com/zihwoi" target="_blank" rel="noopener noreferrer" 
               className="text-accent hover:text-secondaryBg">
              github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
