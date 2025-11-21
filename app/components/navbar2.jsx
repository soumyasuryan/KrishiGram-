"use client";

import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);

  return (
    <nav className="flex justify-center items-center ">
      <ul className="flex justify-between w-full md:pb-5 px-5 md:pt-0 text-white">
        {/* Hamburger and mobile dropdown container */}
        
            <img src="/web_logo.svg" alt="Logo" className="w-24 sm:w-34" />
            <ul className="flex flex-col text-sm m-10">
              <h6>For every Gram,</h6>
              <h6>There stands krishiGram</h6>
            </ul>

          

        {/* Desktop Menu */}
        
        
      </ul>
    </nav>
  );
}

export default Navbar;
