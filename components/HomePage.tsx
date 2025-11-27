import React, { useState, useEffect } from 'react';
import Hero from './Hero.tsx';
import VideoSection from './VideoSection.tsx';
import CourseCTA from './CourseCTA.tsx';
import ArticleLink from './ArticleLink.tsx';
import { getHomePageContent, HomePageContent } from '../services/contentfulService.tsx';

const HomePage = () => {
  const [content, setContent] = useState<HomePageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const homePageContent = await getHomePageContent();
        setContent(homePageContent);
      } catch (error) {
        console.error("Failed to load homepage content:", error);
        // content will remain null, we can show an error or fallback
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Error loading content. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <Hero {...content.hero} />
      <VideoSection {...content.videoSection} />
      <CourseCTA {...content.courseCTA} />
      <ArticleLink {...content.articleLink} />
    </>
  );
};

export default HomePage;