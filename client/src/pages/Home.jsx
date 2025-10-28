import React from 'react';
import { Link } from "react-router-dom";

const IconCard = ({ imgSrc }) => (
  <a
    href="#"
    className="flex items-center justify-center p-2 m-2 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 aspect-square bg-white"
  >
    <img
      src={imgSrc}
      alt="grid item"
      className="w-full h-full object-cover rounded-lg"
    />
  </a>
);

export default function Home() {
  const navDate = '26-10-2025';
  const results = {
    fr: { time: '4:20PM', value: '33' },
    sr: { time: '5:20PM', value: '88' },
  };

  // 🖼️ Update with your final grid image filenames in /public
  const gridItems = [
    { imgSrc: '/commonNumber.png', to:'/common-numbers' },
    { imgSrc: '/socialNumber.png', to:'/social-numbers' },
    { imgSrc: '/dreamNumber.png', to:'/dream-numbers' },
    { imgSrc: '/analysis.png', to:'/analytics' },
    { imgSrc: '/targetGame.png' , to:'/targetgame'},
    { imgSrc: '/previousResults.png', to:'/previous-results' },
    { imgSrc: '/teerCalendar.png', },
    { imgSrc: '/reputedCountries.png', to:'/reputedcounter' },
    { imgSrc: '/onlineShopping.png',  },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header 1: Top Bar */}
      <header className="bg-gray-800 text-white p-2 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <span>TheRoyalBhutan.com</span>
          <span>{navDate}</span>
        </div>
      </header>

      {/* Offset below fixed header */}
      <div className="h-10"></div>

      {/* Header 2: Main Title */}
      <div className="bg-gray-200 p-3 shadow-md mt-10">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          The Royal Bhutan | Teer Results
        </h1>
      </div>

      {/* Header 3: Results Bar */}
      <div className="bg-green-600 text-white p-3 shadow-lg">
        <div className="container mx-auto flex justify-around items-center text-lg font-semibold">
          <div className="text-center">
            <span>F/R ({results.fr.time}): </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-md">
              {results.fr.value}
            </span>
          </div>
          <div className="text-center">
            <span>S/R ({results.sr.time}): </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-md">
              {results.sr.value}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content: Grid Images */}
   <main className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {gridItems.map((item, index) => (
      <Link
        key={index}
        to={item.to}
        className="flex items-center justify-center rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-105 aspect-square border-2 border-black p-2 bg-white"
      >
        <img
          src={item.imgSrc}
          alt={item.alt ?? "grid image"}
          className="w-full h-full object-cover rounded-md"
        />
      </Link>
    ))}
  </div>
</main>



      {/* Footer */}
      <footer className="bg-gray-200 p-4 mt-8">
        <div className="container mx-auto text-right px-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
