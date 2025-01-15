import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-gray-800">
          BrandLogo
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>

        <button id="menu-toggle" className="block md:hidden text-gray-600">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div id="mobile-menu" className="hidden md:hidden">
        <nav className="flex flex-col space-y-4 px-4 py-2 bg-gray-100">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
