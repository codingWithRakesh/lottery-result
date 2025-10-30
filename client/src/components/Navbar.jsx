import React from 'react'
import { Home, Target, Users, Brain, Gift, Copyright, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

const Navbar = ({ isShow = false, isCounter = false }) => {
    return (
        <header className="bg-white shadow-sm w-full">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-2xl font-bold text-blue-700">TeerBhutan.com</h1>
                    <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
                        <Menu size={24} className="text-gray-700" />
                    </button>
                </div>

                {isShow && <div className="hidden md:block bg-gray-100 p-2 rounded-md text-center text-xs text-gray-700">
                    <p>TEER CHAMPION (2014) : ASHIF PRINCE</p>
                    <p>TEER CHAMPION (2015) : RINKU DATTA</p>
                    <p>TEER CHAMPION TILL NOW(2016) :MD SHAWKAT RAIHAN</p>
                </div>}
                {
                    isCounter && <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row justify-around items-start sm:items-center space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">License No.</h3>
                                <p className="text-lg font-bold text-gray-800">1097</p>
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
                }
            </div>
        </header>
    )
}

export default Navbar