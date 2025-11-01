"use client";

import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleFeatures = () => setIsFeaturesOpen(!isFeaturesOpen);

  return (
    <nav className="flex justify-center items-center ">
      <ul className="flex sm:flex-row flex-col items-center justify-center w-full md:pb-5 px-5 md:pt-0 text-white">
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
            <img src="/web_logo.svg" alt="Logo" className="w-24 sm:w-34" />

            <li className="sm:invisible">
              <a href="#">
                <img
                  src="/contact_icon.svg"
                  className="h-10 sm:invisible"
                  alt="Contact Icon"
                />
              </a>
            </li>
          </ul>

          {/* Mobile Dropdown */}
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 right-0 bg-gray-800/30 mt-2 rounded shadow-md sm:hidden z-50 flex flex-col items-center">
              <li>
                <a href="/" className="block px-4 py-2 hover:bg-gray-700/10">
                  HOME
                </a>
              </li>

              {/* Mobile Features Dropdown */}
              <li className="w-full text-center">
                <button
                  onClick={toggleFeatures}
                  className="w-full px-4 py-2 hover:bg-gray-700/10 flex justify-center items-center gap-1"
                >
                  FEATURES
                  <span>{isFeaturesOpen ? "▲" : "▼"}</span>
                </button>
                {isFeaturesOpen && (
                  <ul className="bg-gray-100/80 text-sm rounded-b-md text-black">
                    <li>
                      <a
                        href="/weather_alerts"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Weather Forecasting
                      </a>
                    </li>
                    <li>
                      <a
                        href="/crop_recommendation"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Crop Recommendation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fertilizer_recommendation"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Fertilizer Recommendation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/market_prices"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Market Prices
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pest-detection"
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        Pest Detection
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-700/10"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-700/10"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Desktop Menu */}
        <li className="hidden sm:flex">
          <ul className="flex pr-10 items-center gap-4 relative">
            <li>
              <a href="/" className="p-3 hover:underline">
                HOME
              </a>
            </li>

            {/* Desktop Features Dropdown */}
            <li
              className="relative group"
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              
            >
              <button className="p-3 flex items-center gap-1 hover:underline">
                FEATURES <span>{isFeaturesOpen ? "▲" : "▼"}</span>
              </button>

              {isFeaturesOpen && (
                <ul className="absolute top-full left-0 bg-white text-black border rounded-lg shadow-md mt-1 w-56 z-50 text-sm">
                  <li>
                    <a
                      href="/weather_alerts"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Weather Forecasting
                    </a>
                  </li>
                  <li>
                    <a
                      href="/crop_recommendation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Crop Recommendation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fertilizer_recommendation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fertilizer Recommendation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/market_prices"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Market Prices
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pest-detection"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pest Detection
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="/about" className="p-3 hover:underline">
                ABOUT
              </a>
            </li>
            <li>
              <a href="/contact" className="p-3 hover:underline">
                CONTACT
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
