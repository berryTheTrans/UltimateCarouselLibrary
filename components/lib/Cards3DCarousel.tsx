import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Cards3DCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const cards = [
    { title: "Neon Nights", color: "from-purple-500 to-pink-500" },
    { title: "Ocean Mist", color: "from-blue-400 to-teal-400" },
    { title: "Sunset Blvd", color: "from-orange-500 to-red-500" },
    { title: "Forest Rain", color: "from-green-500 to-emerald-700" },
    { title: "Midnight City", color: "from-indigo-600 to-blue-800" },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1 < cards.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 flex justify-center items-center perspective-1000 overflow-hidden py-10">
       {/* 
         Tailwind needs a plugin for 'perspective-1000' usually, 
         but we can simulate with arbitrary values or style tag.
         For this demo, we assume standard transforms.
       */}
       <div className="relative w-full h-full flex justify-center items-center perspective-[1000px] transform-style-3d">
         {cards.map((card, index) => {
           const offset = index - activeIndex;
           const isActive = index === activeIndex;
           const xOffset = offset * 50; // Distance between cards
           const scale = isActive ? 1.1 : 0.8;
           const rotateY = offset * 25; // Rotation angle
           const zIndex = isActive ? 10 : 10 - Math.abs(offset);
           const opacity = isActive ? 1 : 0.6;

           return (
             <div
               key={index}
               className={`absolute w-64 h-80 rounded-2xl shadow-xl transition-all duration-500 ease-out flex items-center justify-center bg-gradient-to-br ${card.color}`}
               style={{
                 transform: `translateX(${xOffset}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
                 zIndex: zIndex,
                 opacity: Math.abs(offset) > 2 ? 0 : opacity, // Hide distant cards
               }}
             >
               <h3 className="text-white font-bold text-2xl drop-shadow-md px-4 text-center">{card.title}</h3>
             </div>
           );
         })}
       </div>

       {/* Navigation Buttons - Positioned Absolute with High Z-Index */}
       <button 
         onClick={handlePrev}
         disabled={activeIndex === 0}
         className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 disabled:opacity-30 transition backdrop-blur-sm"
       >
         <ArrowLeft size={24} />
       </button>
       <button 
         onClick={handleNext}
         disabled={activeIndex === cards.length - 1}
         className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 disabled:opacity-30 transition backdrop-blur-sm"
       >
         <ArrowRight size={24} />
       </button>
    </div>
  );
};

export const cards3DCode = {
  react: `import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Carousel3D = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const cards = [1, 2, 3, 4, 5]; // Replace with real data

  return (
    <div className="relative w-full h-96 flex flex-col items-center py-10">
       <div className="relative w-full h-full flex justify-center items-center perspective-[1000px]">
         {cards.map((_, index) => {
           const offset = index - activeIndex;
           const isActive = index === activeIndex;
           
           return (
             <div
               key={index}
               className="absolute w-64 h-80 rounded-2xl shadow-xl transition-all duration-500 ease-out bg-blue-500"
               style={{
                 transform: \`translateX(\${offset * 50}%) scale(\${isActive ? 1.1 : 0.8}) rotateY(\${offset * 25}deg)\`,
                 zIndex: isActive ? 10 : 10 - Math.abs(offset),
                 opacity: Math.abs(offset) > 2 ? 0 : (isActive ? 1 : 0.6),
               }}
             >
               {/* Card Content */}
             </div>
           );
         })}
       </div>
       
       <button onClick={() => setActiveIndex(i => i-1)} className="absolute left-4 top-1/2 z-50 bg-black/50 text-white p-3 rounded-full">
          <ArrowLeft />
       </button>
       <button onClick={() => setActiveIndex(i => i+1)} className="absolute right-4 top-1/2 z-50 bg-black/50 text-white p-3 rounded-full">
          <ArrowRight />
       </button>
    </div>
  );
};`,
  tailwind: `<div class="relative w-full h-96 flex items-center justify-center">
  <div class="relative w-full h-full flex justify-center items-center perspective-[1000px]">
    <!-- Items -->
    <div class="absolute w-64 h-80 bg-blue-500 z-10" style="transform: translateX(0%) scale(1.1) rotateY(0deg)"></div>
  </div>
  <button class="absolute left-4 top-1/2 z-50 bg-black/50 text-white p-3 rounded-full">Prev</button>
  <button class="absolute right-4 top-1/2 z-50 bg-black/50 text-white p-3 rounded-full">Next</button>
</div>`,
  html: `<div style="position: relative; width: 100%; height: 24rem; display: flex; align-items: center; justify-content: center; perspective: 1000px;">
  <div style="position: absolute; width: 16rem; height: 20rem; background: #3b82f6; z-index: 10; transform: translateX(0) scale(1.1) rotateY(0deg); border-radius: 1rem;"></div>
  <button style="position: absolute; left: 1rem; top: 50%; z-index: 50;">Prev</button>
  <button style="position: absolute; right: 1rem; top: 50%; z-index: 50;">Next</button>
</div>`
};