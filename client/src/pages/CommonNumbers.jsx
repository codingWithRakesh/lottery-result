import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ResultsTable = ({ title, direct, house, ending }) => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden border border-gray-300 rounded-lg">
      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th
              colSpan="3"
              className="py-2 text-base font-bold text-black border-b border-gray-300"
            >
              {title}
            </th>
          </tr>
          <tr className="bg-teal-500 text-black font-semibold">
            <td className="p-2 border-r border-gray-300">Direct</td>
            <td className="p-2 border-r border-gray-300">House</td>
            <td className="p-2">Ending</td>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-lg font-bold">
            <td className="p-3 border-r border-gray-300">{direct}</td>
            <td className="p-3 border-r border-gray-300">{house}</td>
            <td className="p-3">{ending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function CommonNumbers() {
  const [Result, setResult] = useState({});
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_URI}/api/v1/common/get-common-numbers`
        );
        if (!response.ok) throw new Error("Failed to fetch today's result");

        const result = await response.json();
        setResult(result.data.common);
      } catch (err) {
        console.log(err);
      }
    };

    fetchResult();
  }, []);

  useEffect(() => {
    console.log(Result);
  }, [Result]);


  const quickLinks = [
    { imgSrc: "/socialNumber.jpeg", to: "" },
    { imgSrc: "/dreamNumber.jpeg", to: "/dream-numbers" },
    { imgSrc: "/analysis.jpeg", to: "/analytics" },
    { imgSrc: "/targetGame.jpeg", to: "/targetgame" },
    { imgSrc: "/previousResults.jpeg", to: "/previous-results" },
    { imgSrc: "/teerCalendar.jpeg", to: "/teer-calendar" },
  ];
  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="container mx-auto max-w-6xl px-4 py-4">
        <div className="space-y-4">
          {Result.FR ? (<ResultsTable title="BHUTAN (F/R)" direct={Result.FR.Direct} house={Result.FR.House} ending={Result.FR.Ending} />): (<div>The common Number has not yet been decided</div>) }
          {Result.SR ? (<ResultsTable title="BHUTAN (S/R)" direct={Result.SR.Direct} house={Result.SR.House} ending={Result.SR.Ending} />): (<div>The common Number has not yet been decided</div>) }
        </div>

        <p className="text-xs text-center text-gray-700 my-4">
          Disclaimer : These common numbers are purely based on certain
          calculations done using past results. There is no guarantee of the
          accuracy of these numbers.
        </p>
      </main>

      {/* <BottomNav/> */}

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-[4px] justify-items-center px-1 py-3">
        {quickLinks.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 overflow-hidden border border-gray-800 dark:border-gray-200 bg-white dark:bg-gray-900 hover:scale-[1.04] transition-transform duration-200"
          >
            <img
              src={item.imgSrc}
              alt={`link-${index}`}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
