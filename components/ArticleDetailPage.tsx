import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug } from '../services/contentfulService.tsx';

// Define the type for a single article, including the 'content' field
interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImageUrl: string;
  category: string;
  publishDate: string;
  content?: any; // This will be the Rich Text JSON object
}

// A custom, lightweight renderer to avoid CDN/React version conflicts.
// This function manually parses the Contentful Rich Text JSON structure.
const renderContentfulRichText = (richTextDocument: any) => {
  if (!richTextDocument || !Array.isArray(richTextDocument.content)) {
    return null;
  }

  return richTextDocument.content.map((node: any, index: number) => {
    // Handle Paragraphs
    if (node.nodeType === 'paragraph') {
      // Concatenate all text from child text nodes within the paragraph
      const text = node.content?.map((childNode: any) => {
        if (childNode.nodeType === 'text') {
          return childNode.value;
        }
        return '';
      }).join('') || '';

      // Don't render empty <p> tags if a paragraph is empty
      if (text.trim() === '') return null;

      return <p key={index}>{text}</p>;
    }
    
    // Handle Embedded Images
    if (node.nodeType === 'embedded-asset-block' && node.data?.target?.fields) {
      const file = node.data.target.fields.file;
      if (file?.url && file.contentType.startsWith('image/')) {
        const url = `https:${file.url}`;
        const alt = node.data.target.fields.description || node.data.target.fields.title || 'Embedded asset';
        return <img key={index} src={url} alt={alt} className="my-8 rounded-lg shadow-lg" />;
      }
    }

    // This renderer can be expanded to handle other node types like headings, lists, etc.
    // For now, it will ignore unhandled types.
    return null;
  });
};


const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const fetchArticle = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const fetchedArticle = await getArticleBySlug(slug);
        if (fetchedArticle) {
          setArticle(fetchedArticle);
          setError(null);
        } else {
          setError('ไม่พบบทความที่คุณต้องการ');
        }
      } catch (err) {
        console.error("Failed to fetch article:", err);
        setError('ไม่สามารถโหลดบทความได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">กำลังโหลดบทความ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-xl text-red-400 mb-6">{error}</p>
        <Link to="/articles" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          &larr; กลับไปหน้ารวมบทความ
        </Link>
      </div>
    );
  }

  if (!article) {
    return null; // Should be covered by error state
  }

  // Check if the content is effectively empty to show a helpful message.
  const isContentEmpty = !article.content ||
                       !article.content.content ||
                       article.content.content.length === 0 ||
                       (article.content.content.length === 1 &&
                        article.content.content[0].nodeType === 'paragraph' &&
                        (!article.content.content[0].content || article.content.content[0].content.length === 0));

  return (
    <div className="animate-fade-in pb-20">
      <div className="relative h-64 md:h-96 w-full">
          <img src={article.featuredImageUrl} alt={article.title} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 -mt-16 md:-mt-24 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl p-6 md:p-10">
          <div className="text-center mb-8">
            <Link to="/articles" className="text-sm font-bold text-cyan-400 uppercase tracking-wider hover:text-cyan-300">{article.category}</Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white my-3">{article.title}</h1>
            <span className="text-gray-400">{article.publishDate}</span>
          </div>

          <article className="prose prose-invert lg:prose-xl max-w-none text-gray-300">
            {isContentEmpty ? (
              <div className="text-center text-gray-400 italic bg-gray-700/50 p-6 rounded-lg my-8">
                <p>ยังไม่มีเนื้อหาสำหรับบทความนี้</p>
                <p className="text-sm mt-2">กรุณาเพิ่มเนื้อหาในช่อง 'Content' ของบทความนี้ใน Contentful</p>
              </div>
            ) : (
              renderContentfulRichText(article.content)
            )}
          </article>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
             <Link to="/articles" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                กลับไปหน้ารวมบทความ
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;