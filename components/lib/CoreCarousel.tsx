import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CoreCarouselProps {
  items?: number;
  aspect?: string;
  gap?: string;
}

export const CoreCarousel: React.FC<CoreCarouselProps> = ({ items = 4, aspect = 'aspect-video', gap = 'gap-4' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const images = [
    "https://picsum.photos/seed/architecture/800/600",
    "https://picsum.photos/seed/nature/800/600",
    "https://picsum.photos/seed/travel/800/600",
    "https://picsum.photos/seed/tech/800/600",
    "https://picsum.photos/seed/people/800/600",
  ];

  return (
    <div className="relative w-full group">
      <div 
        ref={scrollRef}
        className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar ${gap} rounded-xl`}
      >
        {images.map((src, idx) => (
          <div key={idx} className={`flex-shrink-0 w-full md:w-[calc(100%/${items > 1 ? 2 : 1})] lg:w-[calc(100%/${items})] snap-center relative ${aspect} overflow-hidden rounded-xl bg-slate-800`}>
            <img 
              src={src} 
              alt={`Slide ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium">Card Title {idx + 1}</p>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white backdrop-blur-sm z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white backdrop-blur-sm z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export const coreCarouselCode = {
  react: `import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full group">
      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 rounded-xl">
        {[1,2,3,4].map((i) => (
          <div key={i} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-center aspect-video relative rounded-xl overflow-hidden">
             <img src="https://picsum.photos/seed/img\${i}/800/600" alt="img" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button onClick={() => scroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-10">
        <ChevronLeft />
      </button>
      <button onClick={() => scroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-10">
        <ChevronRight />
      </button>
    </div>
  );
};`,
  tailwind: `<div class="relative w-full group">
  <div class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4">
    <!-- Item 1 -->
    <div class="flex-shrink-0 w-full md:w-1/3 snap-center aspect-video bg-slate-800 rounded-xl overflow-hidden">
      <img src="..." class="w-full h-full object-cover" />
    </div>
  </div>
  <!-- Buttons -->
  <button class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-10">Left</button>
  <button class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-10">Right</button>
</div>`,
  html: `<div style="position: relative; width: 100%;">
  <div style="display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 1rem; scroll-behavior: smooth;">
    <div style="flex-shrink: 0; width: 100%; scroll-snap-align: center; aspect-ratio: 16/9; background: #333; border-radius: 0.75rem; overflow: hidden;">
      <img src="https://picsum.photos/seed/1/800/600" alt="Slide 1" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
  </div>
</div>`
};