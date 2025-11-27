import React from 'react';
import { Link } from 'react-router-dom';
import { CourseCTAContent } from '../services/contentfulService.tsx';

const CourseCTA = ({ headline, description, features, boxHeadline, boxDescription }) => {
  return (
    <section id="course" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">{headline}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {description}
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <div className="bg-gray-900 rounded-lg shadow-xl p-8 text-center transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">{boxHeadline}</h3>
              <p className="text-gray-400 mb-6">{boxDescription}</p>
              <Link 
                to="/course-details"
                className="inline-block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                รายละเอียดคอร์สและสมัครเรียน
              </Link>
              <p className="text-xs text-gray-500 mt-4">ที่นั่งมีจำนวนจำกัด</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCTA;