import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ThreeDCard } from "./ThreeDCard";
import { gsap } from 'gsap';

const ThreeDCarousel = ({ slides = [] }) => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(300);
  const currIndexRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalTime = 4000;
  const margin = 10;
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartTime, setTouchStartTime] = useState(null);
  const autoSlideRef = useRef(null);

  useEffect(() => {
    if (Array.isArray(slides) && slides.length > 0) {
      move(Math.floor(slides.length / 2));
    }
    startAutoSlide();
    
    // Responsive item width
    const updateItemWidth = () => {
      const isMobile = window.innerWidth < 768;
      setItemWidth(isMobile ? 280 : 350);
    };
    
    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    
    return () => {
      stopAutoSlide();
      window.removeEventListener('resize', updateItemWidth);
    };
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      if (!isHovered) {
        move(currIndexRef.current + 1);
      }
    }, intervalTime);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const move = (index) => {
    if (!Array.isArray(slides) || slides.length === 0) return;
    if (index < 1) index = slides.length;
    if (index > slides.length) index = 1;

    setCurrIndex(index);
    currIndexRef.current = index;

    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      const box = item.querySelector(".item-3d-frame");

      if (i === index - 1) {
        item.classList.add("active");
        // GSAP animation for active item
        gsap.to(box, {
          transform: "perspective(200px)",
          duration: 0.8,
          ease: "power2.out"
        });
      } else {
        item.classList.remove("active");
        const rotation = i < index - 1 ? 40 : -40;
        gsap.to(box, {
          transform: `perspective(1200px) rotateY(${rotation}deg)`,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });

    if (sliderRef.current) {
      const translateX = index * -(itemWidth + margin * 2) + (window.innerWidth / 2 - itemWidth / 2);
      gsap.to(sliderRef.current, {
        x: translateX,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  const prev = () => move(currIndexRef.current - 1);
  const next = () => move(currIndexRef.current + 1);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartTime(Date.now());
    stopAutoSlide();
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX - touchEndX;
    const touchDuration = Date.now() - touchStartTime;

    const swipeSpeed = Math.abs(touchDiff / touchDuration);

    if (swipeSpeed > 0.5) {
      if (touchDiff > 0) {
        move(currIndexRef.current + 2);
      } else {
        move(currIndexRef.current - 2);
      }
    } else {
      if (touchDiff > 50) {
        next();
      } else if (touchDiff < -50) {
        prev();
      }
    }

    setTouchStartX(null);
    setTouchStartTime(null);
    startAutoSlide();
  };

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div className="relative flex-1 flex items-center justify-center">
        {/* Navigation Buttons - Responsive positioning */}
        <div className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10">
          <button
            className="text-white text-2xl md:text-3xl lg:text-4xl hover:scale-125 transition-transform bg-black/20 rounded-full p-2 hover:bg-black/40"
            onClick={prev}
            aria-label="Previous slide"
          >
            <FaAngleLeft />
          </button>
        </div>
        
        <div className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10">
          <button
            className="text-white text-2xl md:text-3xl lg:text-4xl hover:scale-125 transition-transform bg-black/20 rounded-full p-2 hover:bg-black/40"
            onClick={next}
            aria-label="Next slide"
          >
            <FaAngleRight />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-4xl mx-auto px-4">
          <div 
            className="flex relative transition-transform duration-1000 overflow-hidden" 
            ref={sliderRef}
            style={{ transform: 'translate3d(0, 0, 0)' }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="mx-2 md:mx-4 relative shrink-0"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="item-3d-frame relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d">
                  {/* Front Face */}
                  <ThreeDCard slide={slide} />

                  {/* Left and Right Sides - Hidden on mobile */}
                  <div className="hidden md:block absolute top-0 left-0 w-3 md:w-5 h-full bg-gray-800 border-l-4 border-white transform -translate-x-1 rotate-y-[-90deg] origin-left"></div>
                  <div className="hidden md:block absolute top-0 right-0 w-3 md:w-5 h-full bg-gray-800 border-r-4 border-white transform translate-x-1 rotate-y-[90deg] origin-right"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Indicators */}
      <div className="flex justify-center items-center gap-2 py-4 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currIndex - 1 ? 'bg-white scale-125' : 'bg-gray-500'
            }`}
            onClick={() => move(index + 1)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDCarousel;
