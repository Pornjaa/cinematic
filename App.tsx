import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import HomePage from './components/HomePage.tsx';
import CourseDetailsPage from './components/CourseDetailsPage.tsx';
import ArticlesPage from './components/ArticlesPage.tsx';
import ArticleDetailPage from './components/ArticleDetailPage.tsx';
import PortfolioPage from './components/PortfolioPage.tsx';

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans antialiased">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course-details" element={<CourseDetailsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;