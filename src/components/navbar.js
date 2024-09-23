'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mx-20 h-16">
          {/* Logo */}
          <div className="text-xl font-bold relative w-24 h-8 flex items-center justify-center">
            <Link href="/">
              <p className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-button via-extra to-button animate-gradient">
                Mansha
              </p>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-color">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-extra md:bg-transparent`}>
            <div className="flex flex-col md:flex-row md:space-x-8 text-xl">
              <Link href="/" className="text-color hover:text-button hover:-translate-y-1 transition-transform duration-300 border-b-2 border-transparent hover:border-current">
                Home
              </Link>
              <Link href="#experiences" className="text-color hover:text-button hover:-translate-y-1 transition-transform duration-300 border-b-2 border-transparent hover:border-current">
                Experience
              </Link>
              <Link href="#resume" className="text-color hover:text-button hover:-translate-y-1 transition-transform duration-300 border-b-2 border-transparent hover:border-current">
                Resume
              </Link>
              <Link href="/projects" className="text-color hover:text-button hover:-translate-y-1 transition-transform duration-300 border-b-2 border-transparent hover:border-current">
                Projects
              </Link>
              <Link href="#skills" className="text-color hover:text-button hover:-translate-y-1 transition-transform duration-300 border-b-2 border-transparent hover:border-current">
                Skills
              </Link>
              <Link href="/contact" className="text-color hover:text-button hover:-translate-y-1 transition-transform duration-300 border-b-2 border-transparent hover:border-current">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
