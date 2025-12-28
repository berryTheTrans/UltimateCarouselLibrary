import React, { useState } from 'react';

export const StackCarousel = () => {
  const [cards, setCards] = useState([
    { id: 1, color: 'bg-red-500' },
    { id: 2, color: 'bg-blue-500' },
    { id: 3, color: 'bg-green-500' },
    { id: 4, color: 'bg-yellow-500' },
  ]);

  const moveToEnd = (index: number) => {
    if (index === 0) {
      setCards((prev) => {
        const newCards = [...prev];
        const first = newCards.shift();
        if (first) newCards.push(first);
        return newCards;
      });
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto h-64 flex items-center justify-center">
      {cards.map((card, index) => {
        return (
          <div
            key={card.id}
            onClick={() => moveToEnd(index)}
            className={`absolute w-64 h-48 rounded-xl shadow-2xl transition-all duration-500 ease-in-out cursor-pointer flex items-center justify-center text-white font-bold text-2xl border-4 border-slate-900 ${card.color}`}
            style={{
              zIndex: cards.length - index,
              transform: `translateY(${index * -10}px) scale(${1 - index * 0.05})`,
              opacity: index > 2 ? 0 : 1
            }}
          >
            Click Me
          </div>
        );
      })}
    </div>
  );
};

export const stackCode = {
  react: `import React, { useState } from 'react';

export const Stack = () => {
  const [items, setItems] = useState([1, 2, 3, 4]);

  const cycle = () => {
    setItems(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <div className="relative h-64 w-full flex justify-center items-center">
      {items.map((item, index) => (
        <div
          key={item}
          onClick={index === 0 ? cycle : undefined}
          className="absolute w-64 h-48 rounded-xl bg-blue-500 transition-all duration-300 shadow-xl border-4 border-black"
          style={{
             zIndex: items.length - index,
             transform: \`translateY(\${index * -10}px) scale(\${1 - index * 0.05})\`,
             opacity: index > 2 ? 0 : 1
          }}
        >
          {/* Content */}
        </div>
      ))}
    </div>
  );
};`,
  tailwind: `<div class="relative h-64 w-full flex justify-center items-center">
  <!-- Top Card -->
  <div class="absolute w-64 h-48 bg-blue-500 z-30 transform scale-100 translate-y-0 rounded-xl shadow-xl"></div>
  <!-- Middle Card -->
  <div class="absolute w-64 h-48 bg-blue-600 z-20 transform scale-95 -translate-y-2 rounded-xl shadow-xl"></div>
  <!-- Bottom Card -->
  <div class="absolute w-64 h-48 bg-blue-700 z-10 transform scale-90 -translate-y-4 rounded-xl shadow-xl"></div>
</div>`,
  html: `<div style="position: relative; height: 16rem; display: flex; align-items: center; justify-content: center;">
  <div style="position: absolute; width: 16rem; height: 12rem; background: #3b82f6; z-index: 3; border-radius: 0.75rem; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);"></div>
  <div style="position: absolute; width: 16rem; height: 12rem; background: #2563eb; z-index: 2; transform: translateY(-10px) scale(0.95); border-radius: 0.75rem;"></div>
  <div style="position: absolute; width: 16rem; height: 12rem; background: #1d4ed8; z-index: 1; transform: translateY(-20px) scale(0.90); border-radius: 0.75rem;"></div>
</div>`
};