import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../services/contentfulService.tsx';

// Define the type for a single article to match the service response
interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImageUrl: string;
  category: string;
  publishDate: string;
}

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await getArticles();
        setArticles(fetchedArticles);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
        setError('ไม่สามารถโหลดบทความได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p className="text-center text-lg">กำลังโหลดบทความ...</p>;
    }

    if (error) {
      return <p className="text-center text-lg text-red-400">{error}</p>;
    }

    if (articles.length === 0) {
      return <p className="text-center text-lg">ยังไม่มีบทความในขณะนี้</p>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
            <Link to={`/articles/${article.slug}`} className="block">
              <div className="relative">
                <img src={article.featuredImageUrl} alt={article.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
            </Link>
            <div className="p-6">
              <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                <span>{article.category}</span>
                <span>{article.publishDate}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 h-16">
                 <Link to={`/articles/${article.slug}`} className="hover:text-cyan-400 transition-colors duration-300">{article.title}</Link>
              </h2>
              <p className="text-gray-300 mb-4 h-24 overflow-hidden">{article.excerpt}</p>
              <Link to={`/articles/${article.slug}`} className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center">
                อ่านต่อ
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white animate-fade-in">
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">
            บทความและข่าวสารจาก Cinematic AI
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            แหล่งรวมความรู้ แรงบันดาลใจ และเทคนิคใหม่ๆ เกี่ยวกับการใช้ AI ในโลกภาพยนตร์ ที่จะช่วยยกระดับผลงานของคุณไปอีกขั้น
          </p>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ArticlesPage;