import React, { useState, useEffect } from 'react';

export const VerticalCarousel = () => {
  const [active, setActive] = useState(0);
  const items = [
    { title: "Breaking News", desc: "Global markets see unprecedented growth in AI sector.", time: "10m ago" },
    { title: "Tech Update", desc: "New Quantum processor breaks encryption records.", time: "1h ago" },
    { title: "Design Trends", desc: "Why neomorphism is making a subtle comeback.", time: "2h ago" },
    { title: "Health", desc: "Study shows coding increases lifespan (unverified).", time: "4h ago" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">Live Feed</h3>
        <span className="text-xs text-green-500 font-mono animate-pulse">● LIVE</span>
      </div>
      <div className="h-64 relative overflow-hidden">
        {items.map((item, index) => {
          const offset = index - active;
          // Loop logic visual adjustment
          const isVisible = Math.abs(offset) <= 2; 
          
          return (
            <div
              key={index}
              className={`absolute w-full p-4 transition-all duration-500 ease-in-out flex items-start gap-4 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              style={{
                transform: `translateY(${offset * 100}%)`,
              }}
            >
               <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
                 {item.title[0]}
               </div>
               <div>
                 <div className="flex justify-between items-baseline w-full">
                    <h4 className="font-medium text-slate-900 dark:text-white">{item.title}</h4>
                    <span className="text-xs text-slate-400">{item.time}</span>
                 </div>
                 <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
               </div>
            </div>
          );
        })}
      </div>
      <div className="p-2 bg-slate-50 dark:bg-slate-900 text-center text-xs text-slate-400 cursor-pointer hover:text-indigo-500 transition-colors">
        View all updates
      </div>
    </div>
  );
};

export const verticalCarouselCode = {
  react: `import React, { useState, useEffect } from 'react';

export const VerticalFeed = () => {
  const [active, setActive] = useState(0);
  const items = [1, 2, 3, 4]; // Your data

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 relative overflow-hidden">
      {items.map((item, index) => {
        const offset = index - active;
        return (
          <div
            key={index}
            className="absolute w-full p-4 transition-all duration-500 ease-in-out"
            style={{ transform: \`translateY(\${offset * 100}%)\` }}
          >
             {/* Content */}
          </div>
        );
      })}
    </div>
  );
};`,
  tailwind: `<div class="h-64 relative overflow-hidden">
  <div class="absolute w-full p-4 transition-all duration-500 ease-in-out translate-y-0">
    <!-- Active Item -->
  </div>
  <div class="absolute w-full p-4 transition-all duration-500 ease-in-out translate-y-full">
    <!-- Next Item -->
  </div>
</div>`,
  html: `<div style="height: 16rem; position: relative; overflow: hidden;">
  <div style="position: absolute; width: 100%; padding: 1rem; transition: all 0.5s ease-in-out; transform: translateY(0);">
    Item 1
  </div>
</div>`
};