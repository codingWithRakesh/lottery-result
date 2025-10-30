import { Link } from "react-router-dom";

function NavButtons() {
  const navLinks = [
    { title: "PREDICT NOW", bg: "bg-gray-200", hover: "hover:bg-gray-300" },
    {
      title: "MY PREDICTIONS",
      bg: "bg-teal-400",
      hover: "hover:bg-teal-500",
      text: "text-white",
    },
    { title: "MY WINS", bg: "bg-gray-200", hover: "hover:bg-gray-300" },
    {
      title: "SCORE BOARD",
      bg: "bg-teal-400",
      hover: "hover:bg-teal-500",
      text: "text-white",
    },
  ];

  return (
    <nav className="w-full mb-6">
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href="#"
            className={`p-3 rounded-lg text-center font-semibold transition-colors duration-300 ${
              link.bg
            } ${link.hover} ${link.text || "text-gray-800"}`}
          >
            {link.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default function Targetgame() {
  const quickLinks = [
    { imgSrc: "/socialNumber.jpeg", to: "" },
    { imgSrc: "/onlineShopping.jpeg", to: "" },
    { imgSrc: "/commonNumber.jpeg", to: "/common-numbers" },
    { imgSrc: "/targetGame.jpeg", to: "/targetgame" },
    { imgSrc: "/previousResults.jpeg", to: "/previous-results" },
    { imgSrc: "/teerCalendar.jpeg", to: "/teer-calendar" },
  ];
  return (
    <div className=" bg-gray-50 font-sans flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-6 w-full max-w-4xl">
        <NavButtons />
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
