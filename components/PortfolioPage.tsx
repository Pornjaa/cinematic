import React, { useState, useEffect } from 'react';
import { getPortfolioItems } from '../services/contentfulService.tsx';

// Define the type for a portfolio item
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  youtubeId?: string;
}

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        setLoading(true);
        const items = await getPortfolioItems();
        setPortfolioItems(items);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch portfolio items:", err);
        setError('ไม่สามารถโหลดผลงานได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPortfolioItems();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p className="text-center text-lg">กำลังโหลดผลงาน...</p>;
    }

    if (error) {
      return <p className="text-center text-lg text-red-400">{error}</p>;
    }

    if (portfolioItems.length === 0) {
      return <p className="text-center text-lg">ยังไม่มีผลงานในขณะนี้</p>;
    }

    return (
      <div className="space-y-16">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{item.title}</h2>
              <p className="text-gray-300 mb-6">{item.description}</p>
            </div>
            
            {item.youtubeId && (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?controls=1`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
            
            {/* Gallery was removed based on user request, so this part is not needed for now */}
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
            ผลงานของเรา (Portfolio)
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            สำรวจโปรเจกต์และผลงานสร้างสรรค์ที่เราได้ใช้พลังของ AI เพื่อเปลี่ยนจินตนาการให้กลายเป็นจริงในรูปแบบภาพยนตร์และแอนิเมชัน
          </p>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default PortfolioPage;