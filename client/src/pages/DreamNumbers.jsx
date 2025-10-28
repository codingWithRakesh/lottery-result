import React from 'react';

// --- SVG Icons ---
// Using inline SVGs to avoid external dependencies and match the images.

const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 0 1-4.132 5.13c-2.533 1.5-5.636 1.89-8.632 1.01V4.11c3.11.9 6.273.5 8.84-1.01a12.025 12.025 0 0 1 4.132-5.13m-3.86 19.33A12.025 12.025 0 0 1 10.5 14.37m5.09 5.09a12.025 12.025 0 0 1-5.09-5.09M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 0 1-4.132 5.13c-2.533 1.5-5.636 1.89-8.632 1.01V4.11c3.11.9 6.273.5 8.84-1.01a12.025 12.025 0 0 1 4.132-5.13m-3.86 19.33A12.025 12.025 0 0 1 10.5 14.37m5.09 5.09a12.025 12.025 0 0 1-5.09-5.09" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const IconSocial = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-4.682 2.72a3 3 0 0 1-4.682-2.72m4.682 2.72v.003M18.182 18.182m-3-3a3 3 0 1 0 6 0 3 3 0 1 0-6 0ZM12 12v.003m-3.182-3.182a3 3 0 1 0 6 0 3 3 0 1 0-6 0ZM5.818 5.818a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z" />
  </svg>
);

const IconCommon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
  </svg>
);

const IconPrizes = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 0 1-2.25 2.25H5.25a2.25 2.25 0 0 1-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
  </svg>
);

const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const IconPrevious = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);

// --- Data Transcribed from Images ---
const dreamData = [
  { dream: "Quarrel between husband and wife", direct: "03, 08, 13, 37, 40, 73", house: "", ending: "3" },
  { dream: "Erotic dream", direct: "17, 40, 53, 59, 60, 83", house: "", ending: "" },
  { dream: "Bathing in the open", direct: "08, 18, 28, 48, 78, 98", house: "", ending: "8" },
  { dream: "Travelling", direct: "08, 14, 18, 52, 64, 68, 74, 78, 98", house: "", ending: "8" },
  { dream: "Travelling in an aeroplane", direct: "23, 43, 53, 63, 68, 73, 83, 93", house: "", ending: "3" },
  { dream: "Taking a walk", direct: "", house: "", ending: "0, 1" },
  { dream: "Studying", direct: "", house: "", ending: "5" },
  { dream: "Corpse", direct: "", house: "9", ending: "9" },
  { dream: "Playing", direct: "00, 27, 40, 50, 57, 60", house: "", ending: "" },
  { dream: "Talking over the phone", direct: "98, 96, 94", house: "", ending: "" },
  { dream: "Eating", direct: "01, 02, 05, 15, 16, 45, 75, 85, 95", house: "", ending: "" },
  { dream: "Breast Feeding", direct: "02, 03, 05, 12, 20, 52, 53", house: "", ending: "" },
  { dream: "Male", direct: "6", house: "6", ending: "" },
  { dream: "Female", direct: "5", house: "5", ending: "" },
  { dream: "Child", direct: "2, 3", house: "2, 3", ending: "" },
  { dream: "Police", direct: "7, 87, 8", house: "", ending: "" },
  { dream: "Wild Pig", direct: "46", house: "", ending: "" },
  { dream: "Snake or lea fish", direct: "09, 17, 37, 57, 77, 99", house: "", ending: "7" },
  { dream: "Cow, goat or buffalo", direct: "12, 18, 19, 22, 24, 34, 42, 54, 72, 74, 84, 94, 97", house: "", ending: "" },
  { dream: "Cow", direct: "4", house: "4", ending: "" },
  { dream: "Tiger", direct: "9", house: "9", ending: "" },
  { dream: "Dog", direct: "4, 5, 6", house: "4", ending: "" },
  { dream: "Horse", direct: "8", house: "8", ending: "" },
  { dream: "Bird", direct: "2", house: "2", ending: "" },
  { dream: "Elephant", direct: "9", house: "9", ending: "" },
  { dream: "Snail", direct: "0", house: "", ending: "0" },
  { dream: "Turtle", direct: "9", house: "9", ending: "" },
  { dream: "Crab", direct: "6, 2", house: "6", ending: "2" },
  { dream: "Spider", direct: "6, 12", house: "", ending: "" },
  { dream: "Honey bee", direct: "74, 24, 14, 04, 94", house: "", ending: "4" },
  { dream: "Insect", direct: "37, 21", house: "", ending: "" },
  { dream: "Sour fruits", direct: "00, 03, 11, 12, 13, 23, 32, 43, 63, 70, 73, 79, 93", house: "", ending: "" },
  { dream: "Paddy field", direct: "24, 38, 52, 54, 64, 68, 74", house: "", ending: "" },
  { dream: "Pumpkin", direct: "28, 35, 48, 53, 58, 68, 78, 88, 98", house: "", ending: "" },
  { dream: "Bamboo", direct: "0, 1", house: "", ending: "" },
  { dream: "Big Tree", direct: "8, 9", house: "", ending: "" },
  { dream: "Small tree", direct: "2, 3, 8", house: "", ending: "" },
  { dream: "Banana", direct: "11, 3", house: "", ending: "" },
  { dream: "Jackfruit", direct: "4", house: "", ending: "4" },
  { dream: "Papaya", direct: "1, 12", house: "", ending: "" },
  { dream: "Orange", direct: "8, 9", house: "", ending: "" },
  { dream: "Chilli", direct: "1, 2", house: "", ending: "" },
  { dream: "Bamboo Shoot", direct: "1, 11", house: "1", ending: "2" },
  { dream: "Tool used to cut wood", direct: "1, 57, 61, 67", house: "1", ending: "6" },
  { dream: "Tools : cutter, chopper, hammer", direct: "07, 17, 27, 47, 67, 71, 87", house: "", ending: "7" },
  { dream: "An event or a shopping place", direct: "18, 28, 38, 52, 58, 62", house: "", ending: "8" },
  { dream: "Money", direct: "00, 14, 15, 20, 25, 35, 50", house: "", ending: "0, 5" },
  { dream: "Small water body", direct: "00, 01, 02, 80, 90", house: "4, 7", ending: "0" },
  { dream: "Tools : cutter, chopper, hammer", direct: "07, 17, 27, 47, 67, 71, 87", house: "", ending: "7" },
  { dream: "An event or a shopping place", direct: "18, 28, 38, 52, 58, 62", house: "4, 7", ending: "0" },
  { dream: "Footpath or a road made of bricks", direct: "19, 61, 71, 91", house: "", ending: "" },
  { dream: "Automobile : 4 wheeler", direct: "21, 24, 54, 62, 64", house: "8", ending: "4" },
  { dream: "Automobile : 2/3 wheeler", direct: "52, 53, 54, 58, 60, 62, 68", house: "", ending: "" },
  { dream: "God", direct: "09, 13, 29, 89", house: "", ending: "" },
  { dream: "Book, pen, paper", direct: "00, 02, 05", house: "0", ending: "3" },
  { dream: "Earthquake", direct: "00, 07, 08, 14, 41, 75, 95", house: "", ending: "" },
  { dream: "Ghost or apparition", direct: "52, 54, 58, 62, 64, 68", house: "9", ending: "9" },
  { dream: "Oven, kiln, fireplace", direct: "12, 31, 63, 66, 68", house: "", ending: "" },
  { dream: "Fire", direct: "", house: "", ending: "0" },
  { dream: "Hand Pump", direct: "2, 3, 7, 17, 18, 20, 71", house: "", ending: "" },
  { dream: "Water Carrier", direct: "8", house: "8", ending: "8" },
  { dream: "Lake", direct: "6", house: "", ending: "" },
  { dream: "Boat", direct: "3", house: "", ending: "" },
  { dream: "Rice Chopper", direct: "8", house: "", ending: "" },
  { dream: "Big river", direct: "8", house: "", ending: "" },
  { dream: "Cooking pan", direct: "2", house: "", ending: "" },
  { dream: "Shoe", direct: "8", house: "", ending: "" },
  { dream: "Train", direct: "9", house: "", ending: "" },
  { dream: "Temple", direct: "1, 2, 9", house: "", ending: "" },
  { dream: "Umbrella", direct: "1", house: "1", ending: "7" },
  { dream: "Pencil", direct: "7, 77, 79", house: "7", ending: "7" },
];

const navItems = [
  { title: "Teer Result", icon: <IconTarget />, color: "bg-gray-800" },
  { title: "Social Network", icon: <IconSocial />, color: "bg-blue-400" },
  { title: "Common Number", icon: <IconCommon />, color: "bg-red-500" },
  { title: "Win Prizes", icon: <IconPrizes />, color: "bg-teal-500" },
  { title: "Teer & Lottery HOME", icon: <IconHome />, color: "bg-gray-700" },
  { title: "Previous Result", icon: <IconPrevious />, color: "bg-cyan-600" },
];

// --- Components ---

// Header Component
const AppHeader = () => (
  <header className="bg-blue-300 p-4 shadow-md">
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold text-blue-900">TeerBhutan.com</h1>
      <p className="text-lg font-semibold text-blue-800 mt-1">
        BELOW IS A COMPILATION OF DREAM MEANINGS.
      </p>
    </div>
  </header>
);

// Dream Table Component
const DreamTable = () => (
  <div className="max-w-7xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full min-w-max divide-y divide-gray-200">
        <thead className="bg-green-600">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              DREAM
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              DIRECT
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              HOUSE
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              ENDING
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dreamData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.dream}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.direct}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.house}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.ending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Navigation Grid Component
const NavCard = ({ title, icon, color }) => (
  <a
    href="#"
    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md text-white font-semibold text-center transition-transform transform hover:scale-105 ${color}`}
    style={{ minHeight: '140px' }}
  >
    {icon}
    <span>{title}</span>
  </a>
);

const NavGrid = () => (
  <div className="max-w-7xl mx-auto my-8 px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {navItems.map((item) => (
        <NavCard key={item.title} title={item.title} icon={item.icon} color={item.color} />
      ))}
    </div>
  </div>
);

// Footer Component
const AppFooter = () => (
  <footer className="bg-gray-800 text-gray-300 p-6 mt-12">
    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8">
      <a href="#" className="hover:text-white transition-colors">Terms</a>
      <a href="#" className="hover:text-white transition-colors">Contact Us</a>
      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
    </div>
  </footer>
);


// --- Main App Component ---
export default function DreamNumbers() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <AppHeader />
      
      <main className="container mx-auto px-4">
        <DreamTable />
        <NavGrid />
      </main>
      
      <AppFooter />
    </div>
  );
}