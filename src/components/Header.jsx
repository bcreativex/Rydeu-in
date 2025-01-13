import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, User, HelpCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import country from '../assets/curr.png';

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const isHelpPage = location.pathname === '/help'; // Check if the current page is the Help page

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md w-full p-1 px-6">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-8 mr-4">
          <Link to="/">
            <img src={logo} alt="Rydeu Logo" className="h-9" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {!isHelpPage && ( // Hide these links if on the Help page
              <>
                <Link to="/" className="text-gray-900 hover:text-gray-500 font-bold">
                  Transfers
                </Link>
                <Link to="/" className="text-gray-600 hover:text-gray-900 font-semibold">
                  Bus Hire
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 mr-0">
          <Link to="/help" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <HelpCircle className="h-5 w-5" />
            Help
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <img src={country} alt="Country" className="cursor-pointer" />
          </div>
          <div className="flex items-center gap-4">
            {/* Rounded button */}
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-3 py-2 shadow-sm hover:bg-gray-100 transition"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <User className="h-5 w-5 text-gray-600" />
                <Menu className="h-5 w-5 text-gray-600" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border">
                  <div className="px-4 py-3 border-b">
                    <button className="w-full bg-pink-500 text-white rounded py-2 mb-2 hover:bg-pink-600">
                      Login
                    </button>
                    <button className="w-full border border-pink-500 text-pink-500 rounded py-2 hover:bg-pink-50">
                      Signup
                    </button>
                  </div>
                  <nav className="py-2">
                    <Link to="/requests" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Requests
                    </Link>
                    <Link to="/bookings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Bookings
                    </Link>
                    <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Account
                    </Link>
                    <div className="border-t my-2"></div>
                    <Link to="/business" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Business/Agent
                    </Link>
                    <Link to="/driver" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Driver/Carrier
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
