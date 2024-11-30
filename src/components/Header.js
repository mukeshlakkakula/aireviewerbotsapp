"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import burger and close icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <img
            src="http://localhost:3000/favicon.ico"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          AI Website Hub
        </Link>

        {/* Burger Icon for Mobile */}
        <div className="lg:hidden">
          {menuOpen ? (
            <FiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent z-10`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:items-center w-full lg:w-auto">
            <li>
              <Link
                href="/"
                className="block text-center py-3 lg:py-0 hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="block text-center py-3 lg:py-0 hover:text-blue-400 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/auth/register"
                className="block text-center py-3 lg:py-0 hover:text-blue-400 transition-colors"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
