import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 mt-8 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2 sm:gap-0">
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Contact Us</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  )
}

export default Footer