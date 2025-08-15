'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '@/data/services';

export default function ServicesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => goToNext(), 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Helper to keep indexes in range
  const at = (i: number) => (i + services.length) % services.length;

  // Choose a few neighbors for each side (customize count if you like)
  const sideCount = 3;
  const leftThumbs = Array.from({ length: sideCount }, (_, k) => at(currentIndex - (k + 1))).reverse();
  const rightThumbs = Array.from({ length: sideCount }, (_, k) => at(currentIndex + (k + 1)));

  return (
    <section className="relative w-full bg-gray-900">
      {/* Grid: side thumbs / main / side thumbs */}
      <div className="grid grid-cols-12 gap-4 items-center px-4 py-6 md:py-8 lg:py-10">

        {/* Left thumbnails (hide on small) */}
        <aside className="hidden md:flex md:col-span-2 flex-col gap-4 h-full">
          {leftThumbs.map((idx) => (
            <button
              key={`left-${idx}`}
              onClick={() => !isAnimating && setCurrentIndex(idx)}
              className="group relative w-full pb-[150%] overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`Go to ${services[idx].title}`}
              disabled={isAnimating}
            >
              <Image
                src={services[idx].img}
                alt={services[idx].title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width:1024px) 16vw, (min-width:768px) 20vw, 40vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </aside>

        {/* Main slideshow */}
        <div className="col-span-12 md:col-span-8">
          {/* Aspect ratio box (2:3 / tall). All % based */}
          <div className="relative w-full pb-[150%] overflow-hidden rounded-xl">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Image fills the box; object-contain = show full tall image without cropping */}
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  sizes="(min-width:1024px) 66vw, (min-width:768px) 60vw, 100vw"
                />

                {/* Top-to-bottom gradient for legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/90 max-w-2xl mb-6">
                    {service.shortDesc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium transform hover:bg-green-700 transition-all duration-200 hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={goToPrevious}
              disabled={isAnimating}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              onClick={goToNext}
              disabled={isAnimating}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={30} />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  disabled={isAnimating}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-white w-8' : 'bg-white/60 w-3 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right thumbnails (hide on small) */}
        <aside className="hidden md:flex md:col-span-2 flex-col gap-4 h-full">
          {rightThumbs.map((idx) => (
            <button
              key={`right-${idx}`}
              onClick={() => !isAnimating && setCurrentIndex(idx)}
              className="group relative w-full pb-[150%] overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={`Go to ${services[idx].title}`}
              disabled={isAnimating}
            >
              <Image
                src={services[idx].img}
                alt={services[idx].title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width:1024px) 16vw, (min-width:768px) 20vw, 40vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </aside>
      </div>
    </section>
  );
}
