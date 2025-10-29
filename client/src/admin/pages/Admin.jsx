import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import CardBhutan from '../components/CardBhutan';

const Admin = () => {
  return (
    // Page container
    <div className="w-full min-h-screen bg-gray-100 font-inter">
      <Navbar />
      {/* Cards container: centers the cards with a gap, and stacks them on mobile */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10">
        <Card title="F/R (4:20PM)" />
        <Card title="S/R (5:20PM)" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10">
        <CardBhutan title="Bhutan" />
        <CardBhutan title="Bhutan" />
      </div>
    </div>
  );
};

export default Admin;