import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyCompany</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
