import React from 'react';

// --- Icon Components (Inline SVGs) ---
// We define simple SVG icons here to replicate the images.

const CommonIcon = () => (
  <div className="border-[6px] border-white rounded-full w-24 h-24 flex items-center justify-center bg-opacity-20 bg-black/10">
    <span className="text-white text-6xl font-bold">C</span>
  </div>
);

const BowIcon = () => (
  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 10.25L21 3m0 0l-6.5 18-3.5-7-7-3.5 18-6.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21c3.14-3.14 3.14-8.22 0-11.36M21 3c-3.14 3.14-8.22 3.14-11.36 0" />
  </svg>
);

const DreamIcon = () => (
  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.67 6.33A8 8 0 004.33 17.67M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.5 12.5c0-2.5 2-4.5 4.5-4.5S11.5 10 11.5 12.5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.5 12.5c0 2.5 2 4.5 4.5 4.5S20.5 15 20.5 12.5" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-24 h-24 text-white" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 5 A 20 20 0 0 1 45 25 L 25 25 Z" fill="#FDE047" />
    <path d="M45 25 A 20 20 0 0 1 25 45 L 25 25 Z" fill="#DC2626" />
    <path d="M25 45 A 20 20 0 0 1 5 25 L 25 25 Z" fill="#16A34A" />
    <path d="M5 25 A 20 20 0 0 1 25 5 L 25 25 Z" fill="#2563EB" />
  </svg>
);

const PredictIcon = () => (
  <div className="w-full px-4">
    <div className="flex items-center mb-2">
      <span className="text-white text-lg font-bold mr-3">D</span>
      <div className="w-full bg-gray-300 h-4 rounded-full">
        <div className="bg-white h-4 rounded-full" style={{ width: '90%' }}></div>
      </div>
    </div>
    <div className="flex items-center mb-2">
      <span className="text-white text-lg font-bold mr-3">H</span>
      <div className="w-full bg-gray-300 h-4 rounded-full">
        <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '70%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <span className="text-white text-lg font-bold mr-3">E</span>
      <div className="w-full bg-gray-300 h-4 rounded-full">
        <div className="bg-orange-500 h-4 rounded-full" style={{ width: '50%' }}></div>
      </div>
    </div>
  </div>
);

const ListIcon = () => (
  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 6.5h.01M6 12.5h.01M6 18.5h.01" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14h.01M12 14h.01M15 14h.01M9 17h.01M12 17h.01M15 17h.01" />
  </svg>
);

const DragonIcon = () => (
  <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18" />
  </svg>
);

const ShoppingIcon = () => (
  <svg className="w-24 h-24 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);


// --- Reusable Card Component ---
const IconCard = ({ title, bgColor, children }) => {
  const textColor = bgColor.includes('white') ? 'text-gray-800' : 'text-white';
  
  return (
    <a href="#" className={`flex flex-col items-center justify-center p-6 m-2 rounded-lg shadow-md hover:shadow-xl transition-shadow ${bgColor} aspect-square`}>
      <div className="flex flex-grow items-center justify-center">
        {children}
      </div>
      <h2 className={`mt-4 text-xl font-bold text-center ${textColor}`}>{title}</h2>
    </a>
  );
};

// --- Main App Component ---
export default function App() {
  // Data from the screenshots
  const navDate = "26-10-2025";
  const results = {
    fr: { time: "4:20PM", value: "33" },
    sr: { time: "5:20PM", value: "88" },
  };
  
  const gridItems = [
    { title: "Common Number", bgColor: "bg-red-500", icon: <CommonIcon /> },
    { title: "TEERBHUTAN SOCIAL", bgColor: "bg-red-500", icon: <BowIcon /> },
    { title: "Dream Number", bgColor: "bg-red-500", icon: <DreamIcon /> },
    { title: "Analytics", bgColor: "bg-teal-500", icon: <AnalyticsIcon /> },
    { title: "Predict Target", bgColor: "bg-yellow-800", icon: <PredictIcon /> },
    { title: "Previous Result", bgColor: "bg-teal-500", icon: <ListIcon /> },
    { title: "Teer Calendar", bgColor: "bg-teal-500", icon: <CalendarIcon /> },
    { title: "REPUTED COUNTERS", bgColor: "bg-white", icon: <DragonIcon /> },
    { title: "ONLINE SHOPPING", bgColor: "bg-white", icon: <ShoppingIcon /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      {/* Header 1: Top Bar */}
      <header className="bg-gray-800 text-white p-2">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <span>TeerBhutan.com</span>
          <span>{navDate}</span>
        </div>
      </header>
      
      {/* Header 2: Main Title */}
      <div className="bg-gray-200 p-3 shadow-md">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          BHUTAN TEER
        </h1>
      </div>

      {/* Header 3: Results Bar */}
      <div className="bg-green-600 text-white p-3 shadow-lg">
        <div className="container mx-auto flex justify-around items-center text-lg font-semibold">
          <div className="text-center">
            <span>F/R ({results.fr.time}): </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-md">{results.fr.value}</span>
          </div>
          <div className="text-center">
            <span>S/R ({results.sr.time}): </span>
            <span className="bg-white text-green-700 px-3 py-1 rounded-md">{results.sr.value}</span>
          </div>
        </div>
      </div>

      {/* Main Content: Icon Grid */}
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {gridItems.map((item) => (
            <IconCard key={item.title} title={item.title} bgColor={item.bgColor}>
              {item.icon}
            </IconCard>
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