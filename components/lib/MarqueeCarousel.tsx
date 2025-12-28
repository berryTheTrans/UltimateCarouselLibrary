import React from 'react';

export const MarqueeCarousel = () => {
  const items = [
    "Next.js", "React", "Tailwind", "TypeScript", "Node.js", "GraphQL", "Prisma", "Vercel"
  ];
  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-slate-900 border-y border-slate-800 py-10 relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, idx) => (
          <div key={idx} className="mx-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer font-bold text-2xl uppercase tracking-wider">
             <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
             {item}
          </div>
        ))}
      </div>
      
      {/* Tailwind Config hint for user */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export const marqueeCode = {
  react: `export const Marquee = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 1", "Item 2", "Item 3"];
  return (
    <div className="overflow-hidden w-full py-10 bg-black relative">
       <div className="flex animate-marquee whitespace-nowrap">
         {items.map((item, i) => (
           <span key={i} className="mx-8 text-white text-2xl font-bold">{item}</span>
         ))}
       </div>
    </div>
  );
};`,
  tailwind: `<!-- Add to tailwind.config.js: 
  theme: { extend: { animation: { marquee: 'marquee 25s linear infinite' }, keyframes: { marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } } } } } 
-->
<div class="overflow-hidden w-full relative flex">
  <div class="flex animate-marquee whitespace-nowrap">
    <span class="mx-8 text-white">Item 1</span>
    <span class="mx-8 text-white">Item 2</span>
    <span class="mx-8 text-white">Item 3</span>
    <!-- Duplicate items required for seamless loop -->
    <span class="mx-8 text-white">Item 1</span>
    <span class="mx-8 text-white">Item 2</span>
    <span class="mx-8 text-white">Item 3</span>
  </div>
</div>`,
  html: `<div style="overflow: hidden; white-space: nowrap;">
  <div style="display: inline-block; animation: marquee 20s linear infinite;">
    <span style="display:inline-block; margin: 0 2rem; color: white; font-size: 1.5rem; font-weight: bold;">ITEM 1</span>
    <span style="display:inline-block; margin: 0 2rem; color: white; font-size: 1.5rem; font-weight: bold;">ITEM 2</span>
    <span style="display:inline-block; margin: 0 2rem; color: white; font-size: 1.5rem; font-weight: bold;">ITEM 3</span>
    <span style="display:inline-block; margin: 0 2rem; color: white; font-size: 1.5rem; font-weight: bold;">ITEM 1</span>
    <span style="display:inline-block; margin: 0 2rem; color: white; font-size: 1.5rem; font-weight: bold;">ITEM 2</span>
    <span style="display:inline-block; margin: 0 2rem; color: white; font-size: 1.5rem; font-weight: bold;">ITEM 3</span>
  </div>
  <style>
    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  </style>
</div>`
};