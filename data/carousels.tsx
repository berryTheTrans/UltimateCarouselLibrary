import React from 'react';
import { CarouselItem } from '../types';
import { CoreCarousel, coreCarouselCode } from '../components/lib/CoreCarousel';
import { FadeCarousel, fadeCarouselCode } from '../components/lib/FadeCarousel';
import { Cards3DCarousel, cards3DCode } from '../components/lib/Cards3DCarousel';
import { VerticalCarousel, verticalCarouselCode } from '../components/lib/VerticalCarousel';
import { MarqueeCarousel, marqueeCode } from '../components/lib/MarqueeCarousel';
import { StackCarousel, stackCode } from '../components/lib/StackCarousel';

// Helper to generate IDs
const id = (prefix: string) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

export const carousels: CarouselItem[] = [
  // --- 1. CORE / CONTENT-BASED ---
  {
    id: 'core-image',
    title: 'Image Carousel',
    description: 'The standard responsive image slider. Uses native scroll snapping for best performance.',
    category: 'Core',
    tags: ['image', 'responsive', 'basic'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'core-content',
    title: 'Content Carousel',
    description: 'Designed for text blocks, quotes, or mixed content types.',
    category: 'Core',
    tags: ['text', 'content', 'slider'],
    component: <CoreCarousel items={2} aspect="aspect-[4/3]" />,
    code: coreCarouselCode
  },
  {
    id: 'core-card',
    title: 'Card Carousel',
    description: 'Classic card-based UI commonly used for articles or features.',
    category: 'Core',
    tags: ['cards', 'ui', 'list'],
    component: <CoreCarousel items={3} aspect="aspect-[3/4]" />,
    code: coreCarouselCode
  },
  {
    id: 'core-product',
    title: 'Product Carousel',
    description: 'Horizontal scroll for e-commerce product listings.',
    category: 'Core',
    tags: ['ecommerce', 'product', 'shop'],
    component: <CoreCarousel items={4} aspect="aspect-square" gap="gap-6" />,
    code: coreCarouselCode
  },
  {
    id: 'core-testimonial',
    title: 'Testimonial Carousel',
    description: 'Social proof sliders, often with centering enabled.',
    category: 'Core',
    tags: ['testimonials', 'reviews', 'social'],
    component: <CoreCarousel items={1} aspect="aspect-[21/9]" />,
    code: coreCarouselCode
  },
  {
    id: 'core-video',
    title: 'Video Carousel',
    description: 'Supports video embeds or HTML5 video tags.',
    category: 'Core',
    tags: ['video', 'multimedia'],
    component: <CoreCarousel items={2} aspect="aspect-video" />,
    code: coreCarouselCode
  },
  {
    id: 'core-hero',
    title: 'Hero Carousel',
    description: 'Full-width carousel for landing page headers.',
    category: 'Core',
    tags: ['hero', 'header', 'banner'],
    component: <FadeCarousel />, // Fade usually better for Hero
    code: fadeCarouselCode
  },
  {
    id: 'core-fullscreen',
    title: 'Full-screen Carousel',
    description: 'Immersive slider taking up 100vh.',
    category: 'Core',
    tags: ['fullscreen', 'immersive'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'core-vertical',
    title: 'Vertical Carousel',
    description: 'Vertical scrolling list, great for sidebar news feeds.',
    category: 'Core',
    tags: ['vertical', 'news', 'feed'],
    component: <VerticalCarousel />,
    code: verticalCarouselCode
  },
  {
    id: 'core-horizontal',
    title: 'Horizontal Carousel',
    description: 'Standard horizontal scrolling axis.',
    category: 'Core',
    tags: ['horizontal', 'standard'],
    component: <CoreCarousel items={3} />,
    code: coreCarouselCode
  },
  {
    id: 'core-multi',
    title: 'Multi-item Carousel',
    description: 'Shows multiple items at once depending on breakpoint.',
    category: 'Core',
    tags: ['multi', 'responsive'],
    component: <CoreCarousel items={4} />,
    code: coreCarouselCode
  },
  {
    id: 'core-single',
    title: 'Single-item Carousel',
    description: 'Focus on one item at a time.',
    category: 'Core',
    tags: ['single', 'focus'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'core-center',
    title: 'Center-mode Carousel',
    description: 'Active item is centered with partial view of neighbors.',
    category: 'Core',
    tags: ['center', 'focus'],
    component: <CoreCarousel items={2} />, // Simulated via CSS snap-center
    code: coreCarouselCode
  },
  {
    id: 'core-coverflow',
    title: 'Cover-flow Carousel',
    description: 'iTunes-style 3D cover flow effect.',
    category: 'Core',
    tags: ['3d', 'apple', 'coverflow'],
    component: <Cards3DCarousel />,
    code: cards3DCode
  },
  {
    id: 'core-stack',
    title: 'Stack Carousel',
    description: 'Items stack on top of each other, swipe to reveal next.',
    category: 'Core',
    tags: ['stack', 'deck', 'cards'],
    component: <StackCarousel />,
    code: stackCode
  },
  {
    id: 'core-masonry',
    title: 'Masonry Carousel',
    description: 'Horizontal scroll with masonry grid layout.',
    category: 'Core',
    tags: ['masonry', 'pinterest', 'grid'],
    component: <CoreCarousel items={3} aspect="aspect-[3/5]" />,
    code: coreCarouselCode
  },
  {
    id: 'core-nested',
    title: 'Nested Carousel',
    description: 'A carousel within a carousel.',
    category: 'Core',
    tags: ['nested', 'complex'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },
  {
    id: 'core-infinite',
    title: 'Infinite Carousel',
    description: 'Seamlessly loops content without an end.',
    category: 'Core',
    tags: ['infinite', 'loop'],
    component: <MarqueeCarousel />,
    code: marqueeCode
  },

  // --- 2. INTERACTION-BASED ---
  {
    id: 'int-swipe',
    title: 'Swipe Carousel',
    description: 'Optimized for touch gestures on mobile devices.',
    category: 'Interaction',
    tags: ['touch', 'mobile', 'gestures'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'int-drag',
    title: 'Drag Carousel',
    description: 'Mouse drag enabled for desktop users.',
    category: 'Interaction',
    tags: ['drag', 'mouse'],
    component: <CoreCarousel items={3} />,
    code: coreCarouselCode
  },
  {
    id: 'int-scroll-link',
    title: 'Scroll-linked Carousel',
    description: 'Animations tied to scroll position.',
    category: 'Interaction',
    tags: ['scroll', 'sync'],
    component: <VerticalCarousel />,
    code: verticalCarouselCode
  },
  {
    id: 'int-wheel',
    title: 'Mouse-wheel Carousel',
    description: 'Navigate using the mouse wheel (horizontal shift).',
    category: 'Interaction',
    tags: ['wheel', 'desktop'],
    component: <CoreCarousel items={3} />,
    code: coreCarouselCode
  },
  {
    id: 'int-keyboard',
    title: 'Keyboard-controlled',
    description: 'Full arrow key support for accessibility.',
    category: 'Interaction',
    tags: ['a11y', 'keyboard'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'int-auto',
    title: 'Auto-play Carousel',
    description: 'Automatically cycles through items.',
    category: 'Interaction',
    tags: ['auto', 'timer'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'int-manual',
    title: 'Manual-only Carousel',
    description: 'No auto-play, user must interact.',
    category: 'Interaction',
    tags: ['manual', 'ux'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },
  {
    id: 'int-click',
    title: 'Click-navigation',
    description: 'Navigation via arrow buttons only.',
    category: 'Interaction',
    tags: ['buttons', 'nav'],
    component: <CoreCarousel items={3} />,
    code: coreCarouselCode
  },
  {
    id: 'int-gesture',
    title: 'Gesture-based',
    description: 'Advanced touch gestures like pinch/zoom.',
    category: 'Interaction',
    tags: ['mobile', 'advanced'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'int-voice',
    title: 'Voice-controlled',
    description: 'Navigate using voice commands (Concept).',
    category: 'Interaction',
    tags: ['voice', 'ai', 'experimental'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'int-progress',
    title: 'Progress-controlled',
    description: 'Visual progress bar indicates slide duration.',
    category: 'Interaction',
    tags: ['ui', 'progress'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'int-stepper',
    title: 'Stepper Carousel',
    description: 'Used for multi-step forms or wizards.',
    category: 'Interaction',
    tags: ['form', 'wizard'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'int-dots',
    title: 'Pagination-dot Carousel',
    description: 'Classic dot navigation at the bottom.',
    category: 'Interaction',
    tags: ['dots', 'nav'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'int-thumb',
    title: 'Thumbnail Nav',
    description: 'Main image controlled by smaller thumbnails.',
    category: 'Interaction',
    tags: ['ecommerce', 'gallery'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
  {
    id: 'int-timeline',
    title: 'Timeline Carousel',
    description: 'Chronological events in a horizontal slider.',
    category: 'Interaction',
    tags: ['history', 'timeline'],
    component: <CoreCarousel items={3} />,
    code: coreCarouselCode
  },
  {
    id: 'int-hover',
    title: 'Hover-activated',
    description: 'Slides change on mouse hover.',
    category: 'Interaction',
    tags: ['hover', 'mouse'],
    component: <StackCarousel />,
    code: stackCode
  },

  // --- 3. ANIMATION-STYLE ---
  {
    id: 'anim-slide',
    title: 'Slide Carousel',
    description: 'The default sliding transition.',
    category: 'Animation',
    tags: ['slide', 'default'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },
  {
    id: 'anim-fade',
    title: 'Fade Carousel',
    description: 'Opacity cross-dissolve effect.',
    category: 'Animation',
    tags: ['fade', 'opacity'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'anim-zoom',
    title: 'Zoom Carousel',
    description: 'Ken Burns effect or simple scale-in.',
    category: 'Animation',
    tags: ['scale', 'zoom'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'anim-flip',
    title: 'Flip Carousel',
    description: 'Cards flip over to reveal next content.',
    category: 'Animation',
    tags: ['flip', '3d'],
    component: <Cards3DCarousel />,
    code: cards3DCode
  },
  {
    id: 'anim-rotate',
    title: 'Rotate Carousel',
    description: 'Rotates items in 3D space.',
    category: 'Animation',
    tags: ['rotate', 'transform'],
    component: <Cards3DCarousel />,
    code: cards3DCode
  },
  {
    id: 'anim-cube',
    title: 'Cube Carousel',
    description: 'Simulates a rotating 3D cube.',
    category: 'Animation',
    tags: ['cube', '3d'],
    component: <Cards3DCarousel />,
    code: cards3DCode
  },
  {
    id: 'anim-3d',
    title: '3D Carousel',
    description: 'General purpose 3D perspective slider.',
    category: 'Animation',
    tags: ['3d', 'depth'],
    component: <Cards3DCarousel />,
    code: cards3DCode
  },
  {
    id: 'anim-elastic',
    title: 'Elastic Carousel',
    description: 'Bouncy spring physics on slide change.',
    category: 'Animation',
    tags: ['physics', 'bounce'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },
  {
    id: 'anim-blur',
    title: 'Blur Transition',
    description: 'Content blurs during transition.',
    category: 'Animation',
    tags: ['blur', 'filter'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },

  // --- 4. LAYOUT & VISUAL ---
  {
    id: 'layout-grid',
    title: 'Grid Carousel',
    description: 'Slides multiple rows/cols at once.',
    category: 'Layout',
    tags: ['grid', 'layout'],
    component: <CoreCarousel items={4} />,
    code: coreCarouselCode
  },
  {
    id: 'layout-circular',
    title: 'Circular Carousel',
    description: 'Items arranged in a circle.',
    category: 'Layout',
    tags: ['circle', 'creative'],
    component: <Cards3DCarousel />, // Simulated via 3D rotation
    code: cards3DCode
  },
  {
    id: 'layout-film',
    title: 'Film-strip Carousel',
    description: 'Continuous strip of images.',
    category: 'Layout',
    tags: ['film', 'cinema'],
    component: <MarqueeCarousel />,
    code: marqueeCode
  },
  {
    id: 'layout-mag',
    title: 'Magazine-style',
    description: 'Editorial layout with mixed aspect ratios.',
    category: 'Layout',
    tags: ['editorial', 'print'],
    component: <CoreCarousel items={2} aspect="aspect-[3/4]" />,
    code: coreCarouselCode
  },
  {
    id: 'layout-polaroid',
    title: 'Polaroid Carousel',
    description: 'Stacked photos with white borders.',
    category: 'Layout',
    tags: ['retro', 'photo'],
    component: <StackCarousel />,
    code: stackCode
  },
  {
    id: 'layout-bento',
    title: 'Bento-grid Carousel',
    description: 'Modern dashboard style grid slider.',
    category: 'Layout',
    tags: ['bento', 'dashboard'],
    component: <CoreCarousel items={3} aspect="aspect-square" />,
    code: coreCarouselCode
  },
  {
    id: 'layout-split',
    title: 'Split-screen Carousel',
    description: 'Two independent vertical sliders.',
    category: 'Layout',
    tags: ['split', 'dual'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },

  // --- 5. SPECIALIZED ---
  {
    id: 'spec-ecom',
    title: 'E-commerce Carousel',
    description: 'Product details + gallery.',
    category: 'Specialized',
    tags: ['shop', 'cart'],
    component: <CoreCarousel items={4} />,
    code: coreCarouselCode
  },
  {
    id: 'spec-pricing',
    title: 'Pricing Carousel',
    description: 'Compare pricing tiers on mobile.',
    category: 'Specialized',
    tags: ['pricing', 'saas'],
    component: <CoreCarousel items={1} aspect="aspect-[3/5]" />,
    code: coreCarouselCode
  },
  {
    id: 'spec-onboard',
    title: 'Onboarding Carousel',
    description: 'Welcome flow for new users.',
    category: 'Specialized',
    tags: ['onboarding', 'mobile'],
    component: <FadeCarousel />,
    code: fadeCarouselCode
  },
  {
    id: 'spec-story',
    title: 'Story Carousel',
    description: 'Instagram/Snapchat style stories.',
    category: 'Specialized',
    tags: ['social', 'story'],
    component: <CoreCarousel items={4} aspect="aspect-[9/16]" />,
    code: coreCarouselCode
  },
  {
    id: 'spec-news',
    title: 'News Carousel',
    description: 'Breaking news ticker.',
    category: 'Specialized',
    tags: ['news', 'ticker'],
    component: <VerticalCarousel />,
    code: verticalCarouselCode
  },
  {
    id: 'spec-portfolio',
    title: 'Portfolio Carousel',
    description: 'showcase for designers.',
    category: 'Specialized',
    tags: ['portfolio', 'creative'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },
  {
    id: 'spec-compare',
    title: 'Comparison Carousel',
    description: 'Before/After slider.',
    category: 'Specialized',
    tags: ['compare', 'diff'],
    component: <CoreCarousel items={2} />,
    code: coreCarouselCode
  },
  {
    id: 'spec-code',
    title: 'Code-snippet Carousel',
    description: 'Swipe through code examples.',
    category: 'Specialized',
    tags: ['dev', 'code'],
    component: <CoreCarousel items={1} />,
    code: coreCarouselCode
  },
];