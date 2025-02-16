import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-mainBg ">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;