import { VideoSectionContent } from '../services/contentfulService.tsx';

const VideoSection = ({ headline, description, videos }) => {
  return (
    <section id="video" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className={`aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/20 ${
                videos.length > 0 && videos.length % 2 !== 0 && index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?controls=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;