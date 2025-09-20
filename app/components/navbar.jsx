"use client";

import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul className="flex sm:flex-row flex-col items-center sm:justify-between md:p-10 p-5 text-white">
        {/* Hamburger and mobile dropdown container */}
        <li className="w-full relative">
          <ul className="flex justify-between mr-auto sm:w-10 items-center">
            <li>
              {/* Hamburger icon button */}
              <button
                className="h-10 mr-4 sm:hidden focus:outline-none"
                onClick={toggleDropdown}
                aria-label="Toggle menu"
              >
                <img src="/hamburger.svg" alt="Menu icon" className="h-10 mr-10" />
              </button>
            </li>
            <li className="text-4xl font-bold sm:p-2 mr-10 text-center">
              KrishiGram
            </li>
            <li>
              <a href="#">
                <img src="/contact_icon.svg" className="h-10 sm:invisible" alt="Contact Icon" />
              </a>
            </li>
          </ul>

          {/* Dropdown menu: absolutely positioned to overlay content */}
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 right-0 bg-gray-800/30 mt-2 rounded shadow-md sm:hidden z-50 flex flex-col items-center">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700/10">HOME</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700/10">FEATURES</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700/10">ABOUT</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-700/10">CONTACT</a></li>
            </ul>
          )}
        </li>

        {/* Desktop menu: visible on sm and larger screens */}
        <li className="hidden sm:flex">
          <ul className="flex">
            <li><a href="#" className="md:p-5 p-3 hover:underline">HOME</a></li>
            <li><a href="#" className="md:p-5 p-3 hover:underline">FEATURES</a></li>
            <li><a href="#" className="md:p-5 p-3 hover:underline">ABOUT</a></li>
            <li><a href="#" className="md:p-5 p-3 hover:underline">CONTACT</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

