import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  // Generate current date in DD-MM-YYYY format
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const navDate = `${day}-${month}-${year}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="bg-gray-800 text-white p-2 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center text-sm px-4">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200 font-semibold"
          >
            RealBhutan.in
          </Link>
          <span>{navDate}</span>
        </div>
      </header>

      {/* Page content (with padding to prevent overlap with fixed header) */}
      <main className="grow pt-12">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="bg-gray-200 p-4 mt-8">
        <div className="container mx-auto flex justify-between items-center px-4 text-sm">
          <Link
            to="/terms"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Terms
          </Link>
          <Link
            to="/privacy"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default App;
