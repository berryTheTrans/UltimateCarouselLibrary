import React, { useState } from 'react';
import { carousels } from './data/carousels';
import { CarouselItem } from './types';
import { Code2, Eye, X } from 'lucide-react';
import { CodeViewer } from './components/CodeViewer';

export default function App() {
  const [selectedCarousel, setSelectedCarousel] = useState<CarouselItem | null>(null);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [codeLang, setCodeLang] = useState<'react' | 'tailwind' | 'html'>('react');

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      
      {/* Sticky Top Bar - Minimalist Centered Title */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          <div className="flex items-center gap-3">
            <div className="bg-white text-black w-8 h-8 rounded flex items-center justify-center font-bold text-lg">C</div>
            <h1 className="text-xl font-bold tracking-tight text-white uppercase letter-spacing-wide">Ultimate Carousel Library</h1>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {carousels.map((carousel) => (
            <div 
              key={carousel.id} 
              className="group bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="p-4 border-b border-white/10 flex justify-between items-start bg-white/[0.02]">
                <div>
                   <h3 className="font-semibold text-white text-base">{carousel.title}</h3>
                   <p className="text-xs text-neutral-400 mt-1 line-clamp-1">{carousel.description}</p>
                </div>
                <button 
                  onClick={() => { setSelectedCarousel(carousel); setActiveTab('code'); }}
                  className="p-2 text-neutral-400 hover:text-white transition-colors bg-white/5 rounded-lg hover:bg-white/10"
                  title="View Code"
                >
                  <Code2 size={16} />
                </button>
              </div>
              
              {/* Preview Area */}
              <div className="p-6 flex-1 flex items-center justify-center bg-[#050505] relative overflow-hidden min-h-[250px]">
                <div className="w-full scale-90 origin-center transition-transform duration-500 group-hover:scale-100">
                  {carousel.component}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 py-3 border-t border-white/10 bg-[#080808] flex flex-wrap gap-2">
                 {carousel.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="text-[10px] uppercase tracking-wider text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                     {tag}
                   </span>
                 ))}
                 {carousel.tags.length > 3 && (
                   <span className="text-[10px] text-neutral-600 px-1 py-1">+{carousel.tags.length - 3}</span>
                 )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedCarousel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200" onClick={() => setSelectedCarousel(null)}>
          <div className="bg-[#0a0a0a] w-full max-w-6xl max-h-[95vh] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden" onClick={e => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="p-4 md:p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedCarousel.title}</h2>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs bg-white/10 text-neutral-300 px-2 py-0.5 rounded border border-white/10">
                    {selectedCarousel.category}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCarousel(null)}
                className="p-2 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-white/10 bg-[#080808]">
               <button 
                 onClick={() => setActiveTab('preview')}
                 className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${activeTab === 'preview' ? 'border-white text-white bg-white/5' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}
               >
                 <Eye size={16} /> Live Preview
               </button>
               <button 
                 onClick={() => setActiveTab('code')}
                 className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors flex items-center justify-center gap-2 ${activeTab === 'code' ? 'border-white text-white bg-white/5' : 'border-transparent text-neutral-500 hover:text-neutral-300'}`}
               >
                 <Code2 size={16} /> Implementation
               </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-0 flex-1 bg-black min-h-[400px]">
              {activeTab === 'preview' ? (
                <div className="flex flex-col h-full">
                  <div className="flex-1 flex items-center justify-center p-8 md:p-12 bg-[#050505]">
                    <div className="w-full max-w-4xl">
                      {selectedCarousel.component}
                    </div>
                  </div>
                  <div className="p-8 border-t border-white/10 bg-[#0a0a0a]">
                    <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-2">About this Component</h3>
                    <p className="text-neutral-400 leading-relaxed">{selectedCarousel.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                       {selectedCarousel.tags.map(tag => (
                         <span key={tag} className="text-xs text-neutral-500 bg-black px-3 py-1.5 rounded-full border border-white/10">#{tag}</span>
                       ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex border-b border-white/10 bg-[#080808] px-6">
                    <button onClick={() => setCodeLang('react')} className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${codeLang === 'react' ? 'border-white text-white' : 'border-transparent text-neutral-500'}`}>React</button>
                    <button onClick={() => setCodeLang('tailwind')} className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${codeLang === 'tailwind' ? 'border-white text-white' : 'border-transparent text-neutral-500'}`}>Tailwind</button>
                    <button onClick={() => setCodeLang('html')} className={`py-3 px-4 text-xs font-medium border-b-2 transition-colors ${codeLang === 'html' ? 'border-white text-white' : 'border-transparent text-neutral-500'}`}>HTML</button>
                  </div>
                  <div className="flex-1 p-6 bg-[#0a0a0a]">
                    {codeLang === 'react' && <CodeViewer code={selectedCarousel.code.react} language="react" />}
                    {codeLang === 'tailwind' && <CodeViewer code={selectedCarousel.code.tailwind} language="tailwind" />}
                    {codeLang === 'html' && <CodeViewer code={selectedCarousel.code.html} language="html" />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}