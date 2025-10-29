import TableComponent from '../components/TableComponent';
import { Link } from "react-router-dom";
import { dreamData } from '../constants/constant.js';



export default function DreamNumbers() {
    const quickLinks = [
    { imgSrc: "/socialNumber.jpeg", to: "" },
    { imgSrc: "/onlineShopping.jpeg", to: "/dream-numbers" },
    { imgSrc: "/commonNumber.jpeg", to: "/common-numbers" },
    { imgSrc: "/targetGame.jpeg", to: "/targetgame" },
    { imgSrc: "/previousResults.jpeg", to: "/previous-results" },
    { imgSrc: "/teerCalendar.jpeg", to: "/teer-calendar" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
 
      
      <main className="container mx-auto px-4">
        <TableComponent header={["DREAM", "DIRECT", "HOUSE", "ENDING"]} body={dreamData} />
         {/* <BottomNav/> */}
      </main>
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