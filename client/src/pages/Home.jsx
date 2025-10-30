import React, { useEffect, useState } from "react";
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
  const [Result, setResult] = useState([])
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URI}/api/v1/result/todays-result`);
        if (!response.ok) throw new Error("Failed to fetch today's result");

        const result = await response.json();
        setResult(result.data.results)
      } catch (err) {
        throw new Error(err)

      }
    };

    fetchResult();

  }, [])

  const gridItems = [
    { imgSrc: "/commonNumber.jpeg", to: "/common-numbers" },
    { imgSrc: "/socialNumber.jpeg" },
    { imgSrc: "/dreamNumber.jpeg", to: "/dream-numbers" },
    { imgSrc: "/analysis.jpeg", to: "/analytics" },
    { imgSrc: "/targetGame.jpeg", to: "/targetgame" },
    { imgSrc: "/previousResults.jpeg", to: "/previous-results" },
    { imgSrc: "/teerCalendar.jpeg", to: "/teer-calendar" },
    { imgSrc: "/reputedCountries.jpeg", to: "/reputedcounter" },
    { imgSrc: "/onlineShopping.jpeg" },
  ];

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">



      <div className="bg-gray-200 p-3 shadow-md mt-4">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Real Bhutan | Teer Results
        </h1>
      </div>

      <div className="bg-green-600 text-white p-3 shadow-lg">
        <div className="container mx-auto flex justify-around items-center text-lg font-semibold">
          <div className="text-center">
            <span>F/R ({Result[0]?.time}): </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-md">
              {Result[0]?.number}
            </span>
          </div>
          <div className="text-center">
            <span>S/R ({Result[1]?.time}): </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-md">
              {Result[1]?.number}
            </span>
          </div>
        </div>
      </div>

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
    </div>
  );
}
