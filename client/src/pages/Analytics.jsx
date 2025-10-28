import React, { useState } from 'react';
import { Home, Target, Users, Brain, Gift, Copyright, Menu, X } from 'lucide-react';
import IconGrid from '../components/IconGrid';

// --- Reusable Grid Item Component ---
// This component is used for each of the 6 blocks in the main grid

// --- Header Component ---
function Header() {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="container mx-auto px-4 py-3">
        {/* Top bar with logo */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-blue-700">TeerBhutan.com</h1>
          {/* Mobile menu button - can be wired up if needed */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
        
        {/* Champion list - hidden on mobile, shown on desktop */}
        <div className="hidden md:block bg-gray-100 p-2 rounded-md text-center text-xs text-gray-700">
          <p>TEER CHAMPION (2014) : ASHIF PRINCE</p>
          <p>TEER CHAMPION (2015) : RINKU DATTA</p>
          <p>TEER CHAMPION TILL NOW(2016) :MD SHAWKAT RAIHAN</p>
        </div>
      </div>
    </header>
  );
}

// --- Navigation Buttons Component ---
function NavButtons() {
  const navLinks = [
    { title: "PREDICT NOW", bg: "bg-gray-200", hover: "hover:bg-gray-300" },
    { title: "MY PREDICTIONS", bg: "bg-teal-400", hover: "hover:bg-teal-500", text: "text-white" },
    { title: "MY WINS", bg: "bg-gray-200", hover: "hover:bg-gray-300" },
    { title: "SCORE BOARD", bg: "bg-teal-400", hover: "hover:bg-teal-500", text: "text-white" },
  ];

  return (
    <nav className="w-full mb-6">
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href="#"
            className={`p-3 rounded-lg text-center font-semibold transition-colors duration-300 ${link.bg} ${link.hover} ${link.text || 'text-gray-800'}`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

// --- Icon Grid Component ---


// --- Footer Component ---
function Footer() {
  return (
    <footer className="w-full bg-gray-200 mt-8 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2 sm:gap-0">
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

// --- Main App Component ---
// This brings all the other components together
export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow container mx-auto px-4 py-6 w-full max-w-4xl">
        <NavButtons />
        <IconGrid />
      </main>
      
      <Footer />
    </div>
  );
}