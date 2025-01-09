"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <section className="bg-black shadow-md text-white">
        <nav className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
          <div className="left flex items-center">
            <Image
              src="/images/THFlogo.png"
              alt="logo"
              width={120}
              height={120}
              className="filter brightness-0 invert"
            />
            <h1 className="text-xl font-semibold ml-2">Ventures</h1>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-black text-white z-20 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:static md:flex md:transform-none md:bg-transparent md:h-auto md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 text-lg font-medium items-center h-full md:h-auto">
              <li className="py-4 px-6 md:py-0 md:px-0">
                <a
                  href="#Home"
                  className="text-white hover:text-gray-300 transition-all"
                >
                  Home
                </a>
              </li>
              <li className="py-4 px-6 md:py-0 md:px-0">
                <a
                  href="#About"
                  className="text-white hover:text-gray-300 transition-all"
                >
                  About
                </a>
              </li>
              <li className="py-4 px-6 md:py-0 md:px-0">
                <a
                  href="#Portfolio"
                  className="text-white hover:text-gray-300 transition-all"
                >
                  Portfolio
                </a>
              </li>
              <li className="py-4 px-6 md:py-0 md:px-0">
                <a
                  href="#Contact"
                  className="text-white hover:text-gray-300 transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Background Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 md:hidden"
              onClick={toggleMenu}
            ></div>
          )}
        </nav>
      </section>
    </div>
  );
}



