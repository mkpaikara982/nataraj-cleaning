'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = () => {
    const images = [
        '/slideshow/slide_cleaning_01.jpg',
        '/slideshow/slide_cleaning_02.jpg',
        '/slideshow/slide_cleaning_03.jpg',
        '/slideshow/slide_cleaning_04.jpg',
        '/slideshow/slide_cleaning_05.jpg',
        '/slideshow/slide_cleaning_06.jpg',
        '/slideshow/slide_cleaning_07.jpg',
        '/slideshow/slide_cleaning_08.jpg',
        '/slideshow/slide_cleaning_09.jpg',
        '/slideshow/slide_cleaning_11.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            goToNext();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const getVisibleSlides = () => {
        const slides = [];
        const totalImages = images.length;

        // Previous slide
        const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
        slides.push({ index: prevIndex, position: 'prev' });

        // Current slide
        slides.push({ index: currentIndex, position: 'current' });

        // Next slide
        const nextIndex = (currentIndex + 1) % totalImages;
        slides.push({ index: nextIndex, position: 'next' });

        return slides;
    };

    const goToPrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            setTimeout(() => setIsAnimating(false), 500); // Match transition duration
            return newIndex;
        });
    };

    const goToNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            setTimeout(() => setIsAnimating(false), 500); // Match transition duration
            return newIndex;
        });
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
                {getVisibleSlides().map(({ index, position }) => (
                    <div
                        key={index}
                        className={`absolute w-[300px] h-[450px] transition-all duration-500 ease-in-out ${
                            position === 'current' 
                                ? 'z-20 scale-100 opacity-100 translate-x-0'
                                : position === 'prev'
                                ? 'z-10 scale-90 opacity-80 -translate-x-[320px]'
                                : 'z-10 scale-90 opacity-80 translate-x-[320px]'
                        }`}
                    >
                        <Image
                            src={images[index]}
                            alt={`Cleaning service image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg shadow-xl"
                            priority
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                disabled={isAnimating}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-30"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={goToNext}
                disabled={isAnimating}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-30"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => !isAnimating && setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            currentIndex === index
                                ? 'bg-white w-4'
                                : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        disabled={isAnimating}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
