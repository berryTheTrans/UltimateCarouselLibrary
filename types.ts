import { ReactNode } from 'react';

export type Category = 
  | 'Core' 
  | 'Interaction' 
  | 'Animation' 
  | 'Layout' 
  | 'Specialized';

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
  component: ReactNode;
  code: {
    react: string;
    tailwind: string;
    html: string; // Plain HTML for copy-paste
    css?: string;
  };
}

export interface NavItem {
  label: string;
  count: number;
  category: Category | 'All';
  icon: ReactNode;
}