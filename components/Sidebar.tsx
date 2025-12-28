import React from 'react';
import { Category, NavItem } from '../types';
import { Layout, MousePointer2, Sparkles, Box, Briefcase, Layers } from 'lucide-react';

interface SidebarProps {
  activeCategory: Category | 'All';
  onSelectCategory: (cat: Category | 'All') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory }) => {
  const navItems: NavItem[] = [
    { label: 'All Carousels', count: 100, category: 'All', icon: <Layers size={18} /> },
    { label: 'Core', count: 18, category: 'Core', icon: <Box size={18} /> },
    { label: 'Interaction', count: 20, category: 'Interaction', icon: <MousePointer2 size={18} /> },
    { label: 'Animation', count: 25, category: 'Animation', icon: <Sparkles size={18} /> },
    { label: 'Layout', count: 20, category: 'Layout', icon: <Layout size={18} /> },
    { label: 'Specialized', count: 19, category: 'Specialized', icon: <Briefcase size={18} /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen fixed left-0 top-0 overflow-y-auto hidden md:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <span className="bg-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">C</span>
          Library
        </h1>
        <p className="text-xs text-slate-400 mt-2">v1.0.0 • React + Tailwind</p>
      </div>

      <nav className="px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onSelectCategory(item.category)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === item.category
                ? 'bg-indigo-600/10 text-indigo-400'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              {item.label}
            </div>
            <span className="text-xs bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full">
              {item.count}
            </span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-6 border-t border-slate-800">
        <div className="bg-slate-800/50 rounded-lg p-4">
          <h4 className="text-white text-sm font-medium mb-1">Need help?</h4>
          <p className="text-slate-400 text-xs mb-3">Check the documentation for installation steps.</p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium py-2 rounded-md transition-colors">
            Read Docs
          </button>
        </div>
      </div>
    </aside>
  );
};