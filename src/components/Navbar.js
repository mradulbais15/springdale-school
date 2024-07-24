import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/">Springdale Public School</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            About Us
          </Link>
          <Link to="/academics" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Academics
          </Link>
          <Link to="/admissions" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Admissions
          </Link>
          <Link to="/faculty" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Faculty
          </Link>
          <Link to="/students" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Students
          </Link>
          <Link to="/gallery" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Gallery
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
