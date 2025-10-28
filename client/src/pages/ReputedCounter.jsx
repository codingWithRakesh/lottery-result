import React from 'react';
import { 
  Target, 
  Users, 
  CloudDrizzle, 
  Gift, 
  Home, 
  ListChecks,
  ShieldCheck,
  MapPin
} from 'lucide-react';

// Data for the navigation cards
const navItems = [
  {
    title: "Teer Result",
    icon: Target,
    color: "bg-gray-800 hover:bg-gray-700",
    textColor: "text-white"
  },
  {
    title: "Social Network",
    icon: Users,
    color: "bg-white hover:bg-gray-50",
    textColor: "text-gray-800"
  },
  {
    title: "Dream Number",
    icon: CloudDrizzle,
    color: "bg-red-500 hover:bg-red-600",
    textColor: "text-white"
  },
  {
    title: "Win Prizes",
    icon: Gift,
    color: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-white"
  },
  {
    title: "Teer & Lottery HOME",
    icon: Home,
    color: "bg-white hover:bg-gray-50",
    textColor: "text-gray-800"
  },
  {
    title: "Previous Result",
    icon: ListChecks,
    color: "bg-teal-500 hover:bg-teal-600",
    textColor: "text-white"
  }
];

// Reusable Navigation Card Component
function NavCard({ item }) {
  const Icon = item.icon;
  return (
    <a 
      href="#" 
      className={`
        ${item.color} ${item.textColor}
        flex flex-col items-center justify-center 
        p-6 sm:p-8 
        rounded-xl 
        shadow-lg 
        hover:shadow-2xl 
        transition-all duration-300 
        transform hover:-translate-y-1
        min-h-[160px] sm:min-h-[200px]
      `}
    >
      <Icon className="w-12 h-12 sm:w-16 sm:h-16 mb-4" strokeWidth={1.5} />
      <span className="text-base sm:text-lg font-semibold text-center">{item.title}</span>
    </a>
  );
}

// Header Component
function Header() {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top bar with site name */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">
            TeeBhutan.com
          </h1>
          <span className="text-sm sm:text-base text-gray-500 font-medium">
            Reputed Counters
          </span>
        </div>
        
        {/* Info bar with License and Address */}
        <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row justify-around items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">License No.</h3>
              <p className="text-lg font-bold text-gray-800">1096</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address</h3>
              <p className="text-lg font-bold text-gray-800">Phuntsholing, BHUTAN</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <p>&copy; {new Date().getFullYear()} TeeBhutan.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Main App Component
export default function ReputedCounter() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Header />

      {/* Main Content Grid */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {navItems.map((item) => (
            <NavCard key={item.title} item={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
