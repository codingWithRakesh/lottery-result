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
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// Main App Component
export default function ReputedCounter() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">
      <Navbar isCounter={true} />
      {/* <BottomNav/> */}
      <Footer />
    </div>
  );
}
