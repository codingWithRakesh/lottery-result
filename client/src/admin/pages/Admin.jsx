import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import CardBhutan from '../components/CardBhutan';

const Admin = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 font-inter">
      <Navbar />
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10">
        <Card title="F/R (4:20PM)" isCheckFR={true} />
        <Card title="S/R (5:20PM)" isCheckFR={false} />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-10">
        <CardBhutan title="Bhutan F/R" />
        <CardBhutan title="Bhutan S/R" />
      </div>
    </div>
  );
};

export default Admin;