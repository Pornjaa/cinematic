import { HeroContent } from '../services/contentfulService.tsx';

// Defines the position and span of each image in a 12x12 grid
const collageLayout = [
  'row-start-1 row-end-8 col-start-1 col-end-5',
  'row-start-1 row-end-5 col-start-5 col-end-9',
  'row-start-8 row-end-13 col-start-1 col-end-4',
  'row-start-5 row-end-10 col-start-4 col-end-8',
  'row-start-1 row-end-7 col-start-9 col-end-13',
  'row-start-10 row-end-13 col-start-4 col-end-7',
  'row-start-7 row-end-13 col-start-7 col-end-10',
  'row-start-7 row-end-13 col-start-10 col-end-13',
];

const Hero = ({ headline, subheadline, description, ctaText, ctaLink, images }) => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Collage */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-2 transform scale-110 blur-sm opacity-60">
        {images.map((image, index) => (
          <div key={image.src} className={`overflow-hidden rounded-md ${collageLayout[index % collageLayout.length]}`}>
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center animate-pan"
              // Stagger the animation start times for a more dynamic effect
              style={{ animationDelay: `${index * -3}s` }}
            />
          </div>
        ))}
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 px-4">
        <h2 className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest uppercase mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ textShadow: '0 0 25px rgba(0, 255, 255, 0.4)' }}>
          {headline}
        </h2>
        <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight" 
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            dangerouslySetInnerHTML={{ __html: subheadline }}
        />
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          {description}
        </p>
        <a 
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg hover:shadow-cyan-500/50"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;