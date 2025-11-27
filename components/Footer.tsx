import React from 'react';
import { Link } from 'react-router-dom';
import { FilmIcon, FacebookIcon, YoutubeIcon, TiktokIcon } from './icons.tsx';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
              <FilmIcon className="w-8 h-8 text-cyan-400" />
              <span>Cinematic AI</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              ยกระดับการสร้างสรรค์ภาพยนตร์ด้วยพลังแห่งปัญญาประดิษฐ์
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Resources</h2>
              <ul className="text-gray-400 space-y-2">
                <li><Link to="/course-details" className="hover:text-cyan-400">คอร์สเรียน</Link></li>
                <li><Link to="/articles" className="hover:text-cyan-400">บทความ</Link></li>
                <li><a href="#" className="hover:text-cyan-400">เกี่ยวกับเรา</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Follow us</h2>
              <ul className="text-gray-400 space-y-2">
                <li><a href="https://www.facebook.com/profile.php?id=61563219540499" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Facebook</a></li>
                <li><a href="https://www.youtube.com/@cinematicai112" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Youtube</a></li>
                <li><a href="https://www.tiktok.com/@cinematicaiofficial" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">Tiktok</a></li>
              </ul>
            </div>
             <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-300 uppercase tracking-wider">Legal</h2>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} Cinematic AI™. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61563219540499" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@cinematicai112" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <YoutubeIcon className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@cinematicaiofficial" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white">
              <TiktokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;