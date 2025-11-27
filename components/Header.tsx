import React from 'react';
import { Link } from 'react-router-dom';
import { FilmIcon } from './icons.tsx';

const Header = () => {
  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white tracking-wider">
          <FilmIcon className="w-8 h-8 text-cyan-400" />
          <span>Cinematic AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/portfolio" className="hover:text-cyan-400 transition-colors duration-300">ตัวอย่างผลงาน</Link>
          <Link to="/course-details" className="hover:text-cyan-400 transition-colors duration-300">คอร์สเรียน</Link>
          <Link to="/articles" className="hover:text-cyan-400 transition-colors duration-300">บทความ</Link>
        </nav>
        <Link 
          to="/course-details"
          className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          สมัครเรียน
        </Link>
      </div>
    </header>
  );
};

export default Header;