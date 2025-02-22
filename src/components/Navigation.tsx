'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary' : 'text-gray-400 hover:text-primary';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#252526] shadow-md border-b border-[#323232] relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/Images/Zach Logo-white.png"
              alt="Jackson Web Builds Logo"
              width={120}
              height={40}
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-accent text-lg">&lt;</span>
            <div className="flex space-x-8">
              <Link href="/" className={`${isActive('/')} font-medium transition-colors`}>
                Home
              </Link>
              <Link href="/services" className={`${isActive('/services')} font-medium transition-colors`}>
                Services
              </Link>
              <Link href="/contact" className={`${isActive('/contact')} font-medium transition-colors`}>
                Contact
              </Link>
            </div>
            <span className="text-accent text-lg">/&gt;</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#252526] border-b border-[#323232] py-4 px-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`${isActive('/')} font-medium transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`${isActive('/services')} font-medium transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`${isActive('/contact')} font-medium transition-colors block py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
