"use client";

import React, { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='flex justify-center items-center'>
      <ul className="flex sm:flex-row flex-col items-center justify-center w-300 md:pb-5 px-5 md:pt-0 text-black">
        {/* Hamburger and mobile dropdown container */}
        <li className="w-full relative">
          <ul className="flex justify-between mr-auto sm:w-40 items-center">
            <li>
              {/* Hamburger icon button */}
              <button
                className="h-10 sm:hidden focus:outline-none"
                onClick={toggleDropdown}
                aria-label="Toggle menu"
              >
                <img src="/hamburger.svg" alt="Menu icon" className="h-10" />
              </button>
            </li>
            <img src="/web_logo2.svg" alt="Logo" className="w-24 sm:w-34" />

            {/* <li className="text-4xl font-bold sm:p-2 mr-10 text-center">
              <img src="/web_logo.svg" className='' alt="" width="120" height="120" />
            </li> */}
            <li className=" sm:invisible">
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
          <ul className="flex pr-10">
            <li><a href="/" className="md:mb-20 md:pt-0 p-3 hover:underline">HOME</a></li>
            
            <li><a href="#" className="md:mb-20 md:pt-0 p-3 hover:underline">ABOUT</a></li>
            <li><a href="#" className="md:mb-20 md:pt-0 p-3 hover:underline">CONTACT</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
