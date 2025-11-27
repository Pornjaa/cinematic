import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleLinkContent } from '../services/contentfulService.tsx';

const ArticleLink = ({ headline, description, buttonText }) => {
  return (
    <section id="articles" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link 
          to="/articles" 
          className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default ArticleLink;