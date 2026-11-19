import React from 'react';

export interface FlexCarouselItem {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
}

export type FlexCarouselPreset = 'liquid' | 'ribbon' | 'vortex' | 'arch';
export type FlexCarouselIntro = 'rise' | 'bloom' | 'spin' | 'deal' | 'fade' | 'none';
export type FlexCarouselFit = 'natural' | 'portrait' | 'square' | 'landscape';

export interface FlexCarouselProps {
  items?: FlexCarouselItem[];
  preset?: FlexCarouselPreset;
  intro?: FlexCarouselIntro;
  cardHeight?: number;
  gap?: number;
  radius?: number;
  fit?: FlexCarouselFit;
  lensWidth?: number;
  lensHeight?: number;
  tilt?: number;
  roundness?: number;
  bend?: number;
  reach?: number;
  curl?: 'twist' | 'rise' | 'fall';
  dispersion?: number;
  liquid?: number;
  followCursor?: boolean;
  squeeze?: number;
  focusOnClick?: boolean;
  autoplay?: boolean;
  interval?: number;
  captions?: boolean;
  showCount?: boolean;
  captureWheel?: boolean;
  onChange?: (index: number, item: FlexCarouselItem) => void;
  onSelect?: (index: number, item: FlexCarouselItem) => void;
  className?: string;
  style?: React.CSSProperties;
}

declare const FlexCarousel: React.FC<FlexCarouselProps>;
export default FlexCarousel;
