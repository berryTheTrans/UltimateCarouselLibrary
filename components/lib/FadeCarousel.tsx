import React, { useState, useEffect } from 'react';

export const FadeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { url: "https://picsum.photos/seed/ocean/800/600", title: "Atmospheric" },
    { url: "https://picsum.photos/seed/mountain/800/600", title: "Serene" },
    { url: "https://picsum.photos/seed/forest/800/600", title: "Vibrant" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl shadow-2xl bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.url} 
            alt={slide.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h2 className="text-white text-3xl font-bold tracking-tight transform translate-y-0 transition-transform duration-700 delay-300">
               {index === current && slide.title}
            </h2>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const fadeCarouselCode = {
  react: `import React, { useState, useEffect } from 'react';

export const FadeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { url: "https://picsum.photos/seed/1/800/600", title: "First" },
    { url: "https://picsum.photos/seed/2/800/600", title: "Second" },
    { url: "https://picsum.photos/seed/3/800/600", title: "Third" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={\`absolute inset-0 transition-opacity duration-1000 ease-in-out \${
            index === current ? 'opacity-100' : 'opacity-0'
          }\`}
        >
          <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h2 className="text-white text-3xl font-bold">{slide.title}</h2>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={\`w-2 h-2 rounded-full transition-all \${
              idx === current ? 'bg-white w-6' : 'bg-white/50'
            }\`}
          />
        ))}
      </div>
    </div>
  );
};`,
  tailwind: `<div class="relative w-full aspect-video overflow-hidden rounded-xl bg-black">
  <!-- Slide 1 (Active) -->
  <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100">
    <img src="..." class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
      <h2 class="text-white text-3xl font-bold">First</h2>
    </div>
  </div>
  
  <!-- Slide 2 (Inactive) -->
  <div class="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0">
     <!-- content -->
  </div>
  
  <!-- Indicators -->
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
    <button class="w-2 h-2 rounded-full transition-all bg-white w-6"></button>
    <button class="w-2 h-2 rounded-full transition-all bg-white/50"></button>
  </div>
</div>`,
  html: `<div style="position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; background: #000;">
  <div style="position: absolute; inset: 0; opacity: 1; transition: opacity 1s;">
    <img src="https://picsum.photos/seed/1/800/600" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
</div>`
};