import { useEffect } from 'react';
import Navbar from '../components/Navbar';



// Main App Component
export default function ReputedCounter() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  }, []);
  return (
    <div className="h-auto flex flex-col bg-gray-100 font-sans">
      <Navbar isCounter={true} />

      {/* Logo Below Navbar */}
      <div className="flex justify-center mt-4">
        <img
          src="/logo.png"
          alt="Real Bhutan Logo"
          className="w-110 h-117 object-contain"
        />
      </div>

      {/* <BottomNav/> */}
    </div>

  );
}
