import React, { useState } from 'react';

// --- Mock Data ---
// I've populated this with sample data based on your images.
// You would replace this with a real data fetch.
const allData = {
  '2025-August': [
    { city: 'BHUTAN', date: '2025-08-01', fr: '46', sr: '89' },
    { city: 'BHUTAN', date: '2025-08-02', fr: '63', sr: '82' },
    { city: 'BHUTAN', date: '2025-08-03', fr: '67', sr: '38' },
    { city: 'BHUTAN', date: '2025-08-04', fr: '11', sr: '22' },
    { city: 'BHUTAN', date: '2025-08-05', fr: '21', sr: '14' },
    { city: 'BHUTAN', date: '2025-08-06', fr: '95', sr: '32' },
    { city: 'BHUTAN', date: '2025-08-07', fr: '85', sr: '83' },
    // Adding more data for a fuller look
    { city: 'BHUTAN', date: '2025-08-08', fr: '59', sr: '95' },
    { city: 'BHUTAN', date: '2025-08-09', fr: '39', sr: '39' },
    { city: 'BHUTAN', date: '2025-08-10', fr: '52', sr: '74' },
    { city: 'BHUTAN', date: '2025-08-11', fr: '10', sr: '30' },
    { city: 'BHUTAN', date: '2025-08-12', fr: '82', sr: '91' },
  ],
  '2025-September': [
    { city: 'BHUTAN', date: '2025-09-01', fr: '29', sr: '96' },
    { city: 'BHUTAN', date: '2025-09-02', fr: '10', sr: '01' },
    { city: 'BHUTAN', date: '2025-09-03', fr: '43', sr: '69' },
    { city: 'BHUTAN', date: '2025-09-04', fr: '03', sr: '19' },
    { city: 'BHUTAN', date: '2025-09-05', fr: '90', sr: '76' },
    { city: 'BHUTAN', date: '2025-09-06', fr: '70', sr: '89' },
    { city: 'BHUTAN', date: '2025-09-07', fr: '61', sr: '42' },
    { city: 'BHUTAN', date: '2025-09-08', fr: '72', sr: '61' },
    { city: 'BHUTAN', date: '2025-09-09', fr: '45', sr: '61' },
    { city: 'BHUTAN', date: '2025-09-10', fr: '24', sr: '48' },
  ],
  '2025-October': [
    { city: 'BHUTAN', date: '2025-10-01', fr: '82', sr: '51' },
    { city: 'BHUTAN', date: '2025-10-02', fr: '17', sr: '07' },
    { city: 'BHUTAN', date: '2025-10-03', fr: '33', sr: '85' },
    { city: 'BHUTAN', date: '2025-10-04', fr: '54', sr: '01' },
    { city: 'BHUTAN', date: '2025-10-05', fr: '17', sr: '33' },
    { city: 'BHUTAN', date: '2025-10-06', fr: '82', sr: '51' },
    { city: 'BHUTAN', date: '2025-10-07', fr: '17', sr: '07' },
    { city: 'BHUTAN', date: '2025-10-08', fr: '33', sr: '85' },
    { city: 'BHUTAN', date: '2025-10-09', fr: '54', sr: '01' },
    { city: 'BHUTAN', date: '2025-10-10', fr: '17', sr: '33' },
  ],
};

// --- Data for Select Dropdowns ---
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const years = ['2025', '2024', '2023', '2022', '2021'];

// --- Reusable Nav Item Component for Footer ---
const NavItem = ({ title, bgColor, children }) => (
  <a
    href="#"
    className={`flex flex-col items-center justify-center p-3 sm:p-4 text-center text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:z-10 ${bgColor}`}
  >
    <div className="mb-2 h-10 w-10 text-white">{children}</div>
    <span className="text-xs sm:text-sm tracking-wide">{title}</span>
  </a>
);

// --- Main App Component ---
function PreviousResult() {
  // State for the *selected* values in the dropdowns
  const [selectedMonth, setSelectedMonth] = useState('August');
  const [selectedYear, setSelectedYear] = useState('2025');
  
  // State for the *displayed* data after clicking "Submit"
  const [displayMonth, setDisplayMonth] = useState('August');
  const [displayYear, setDisplayYear] = useState('2025');

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayMonth(selectedMonth);
    setDisplayYear(selectedYear);
  };

  // Determine which data to show
  const dataKey = `${displayYear}-${displayMonth}`;
  const resultsToShow = allData[dataKey] || [];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      
      {/* --- Header --- */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">TeerBhutan.com</h1>
          {/* You can add other header elements here if needed */}
        </div>
      </header>

      {/* --- Main Content --- */}
      <main className="flex-grow container mx-auto p-4 md:p-6">
        
        {/* --- Filter Form --- */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6">
            PREVIOUS RESULTS
          </h2>
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {/* Month Select */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="month-select" className="font-medium text-gray-700 text-sm">Month:</label>
              <select
                id="month-select"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full sm:w-auto p-2.5 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
            
            {/* Year Select */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label htmlFor="year-select" className="font-medium text-gray-700 text-sm">Year:</label>
              <select
                id="year-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full sm:w-auto p-2.5 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-200"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-2.5 px-8 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* --- Results Table --- */}
        <div className="w-full shadow-xl rounded-xl overflow-hidden border border-gray-200">
          {/* Dynamic Table Header */}
          <h2 className="text-center text-xl font-semibold p-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white tracking-wide">
            RESULTS : {displayMonth.toUpperCase()}, {displayYear}
          </h2>
          
          {/* Table Container for horizontal scrolling on small screens */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-teal-700 text-white">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold uppercase tracking-wider">CITY</th>
                  <th className="p-4 text-left text-sm font-semibold uppercase tracking-wider">DATE</th>
                  <th className="p-4 text-left text-sm font-semibold uppercase tracking-wider">F/R</th>
                  <th className="p-4 text-left text-sm font-semibold uppercase tracking-wider">S/R</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {resultsToShow.length > 0 ? (
                  resultsToShow.map((row, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-teal-50 transition-colors duration-200"
                    >
                      <td className="p-4 text-gray-800 whitespace-nowrap">{row.city}</td>
                      <td className="p-4 text-gray-800 whitespace-nowrap">{row.date}</td>
                      <td className="p-4 text-gray-800 font-medium">{row.fr}</td>
                      <td className="p-4 text-gray-800 font-medium">{row.sr}</td>
                    </tr>
                  ))
                ) : (
                  // --- No Data Message ---
                  <tr>
                    <td colSpan="4" className="text-center p-8">
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        {/* SVG for No Results */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-medium text-lg">No Results Found</span>
                        <span className="text-sm">Please try a different month or year.</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* --- Icon Footer Navigation --- */}
      <nav className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-gray-300 mt-12 shadow-inner">
        <NavItem title="Teer Result" bgColor="bg-blue-800">
          {/* SVG for Target */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </NavItem>
        
        <NavItem title="Social Network" bgColor="bg-blue-500">
          {/* SVG for Users */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </NavItem>

        <NavItem title="Dream Number" bgColor="bg-red-600">
          {/* SVG for Ticket */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z" />
          </svg>
        </NavItem>

        <NavItem title="Win Prizes" bgColor="bg-teal-500">
          {/* SVG for Gift */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z" />
          </svg>
        </NavItem>

        <NavItem title="Teer & Lottery HOME" bgColor="bg-gray-800">
          {/* SVG for Home */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </NavItem>

        <NavItem title="Common Number" bgColor="bg-orange-600">
          {/* SVG for 'C' (using a simple circle 'C') */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.75a10.25 10.25 0 100 20.5 10.25 10.25 0 000-20.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5C14.7 7.7 13.4 7 12 7s-2.7.7-3.5 1.5M15.5 15.5c-.8.8-2.1 1.5-3.5 1.5s-2.7-.7-3.5-1.5" />
          </svg>
        </NavItem>
      </nav>
      <footer className="bg-gray-900 text-gray-400 p-6 text-center text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
          <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
        </div>
        <p className="mt-4 text-xs text-gray-500">&copy; {new Date().getFullYear()} TeerBhutan.com. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default PreviousResult;