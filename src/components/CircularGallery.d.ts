import React from 'react';

export interface CircularGalleryItem {
  image: string;
  text?: string;
  description?: string;
  alt?: string;
  category?: string;
  slug?: string;
}

export interface CircularGalleryProps {
  items?: CircularGalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  itemSize?: number;
  itemAspect?: number;
  gap?: number;
  wave?: number;
  fadeEdges?: number;
  shadow?: number;
  grayscale?: boolean;
  showTitles?: boolean;
  snap?: boolean;
  autoScroll?: number;
  openOnClick?: boolean;
  intro?: boolean;
  onItemClick?: (item: CircularGalleryItem, index: number) => void;
  onActiveChange?: (index: number) => void;
  dpr?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

declare const CircularGallery: React.FC<CircularGalleryProps>;
export default CircularGallery;
