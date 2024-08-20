// components/Sponsors.js
import React from 'react';

const sponsors = [
  '/images/sponsor1.png',
  '/images/sponsor2.png',
    '/images/sponsor3.png',
  '/images/sponsor1.png',
  '/images/sponsor2.png',
  '/images/sponsor3.png',
  '/images/sponsor2.png',
    '/images/sponsor3.png',
  '/images/sponsor1.png',
  '/images/sponsor2.png',
  '/images/sponsor3.png',
  // Add more sponsor images here
];

const Sponsors = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div className=" flex animate-marquee ">
        {/* Render the sponsors twice for seamless scrolling */}
        {sponsors.concat(sponsors).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Sponsor ${index + 1}`}
            className="mx-5 aspect-square min-h-20 min-w-20 bg-blue-100" // Tailwind classes for width and margin
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
