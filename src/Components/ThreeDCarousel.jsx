import { useEffect, useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // You forgot to import icons
import { ThreeDCard } from "./ThreeDCard";

const ThreeDCarousel = ({ slides = [] }) => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(300);
  const [itemHeight, setItemHeight] = useState(400);
  const currIndexRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalTime = 4000;
  const margin = 10;
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartTime, setTouchStartTime] = useState(null);
  const autoSlideRef = useRef(null);

  /* useEffect(() => {
    const resize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) {
        setItemWidth(Math.max(screenWidth * 0.9, 200));
        setItemHeight(window.innerHeight * 0.3);
      } else if (screenWidth < 640) {
        setItemWidth(Math.max(screenWidth * 0.8, 250));
        setItemHeight(window.innerHeight * 0.4);
      } else if (screenWidth < 1024) {
        setItemWidth(Math.max(screenWidth * 0.5, 300));
        setItemHeight(window.innerHeight * 0.5);
      } else {
        setItemWidth(Math.max(screenWidth * 0.25, 350));
        setItemHeight(window.innerHeight * 0.6);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []); */

  useEffect(() => {
    if (Array.isArray(slides) && slides.length > 0) {
      move(Math.floor(slides.length / 2));
    }
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemWidth]);

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
        box.style.transform = "perspective(1200px)";
      } else {
        item.classList.remove("active");
        box.style.transform = `perspective(1200px) rotateY(${i < index - 1 ? 40 : -40}deg)`;
      }
    });

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.8s ease";
      sliderRef.current.style.transform = `translate3d(${index * -(itemWidth + margin * 2) + (window.innerWidth / 2 - itemWidth / 2)
        }px, 0, 0)`;
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
      className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div className="relative">
        {/* Buttons */}
        <div className="absolute bottom-[-80px] left-5 md:left-1/4">
          <button
            className="text-white text-4xl md:text-5xl hover:scale-125 transition-transform"
            onClick={prev}
          >
            <FaAngleLeft />
          </button>
        </div>
        <div className="absolute bottom-[-80px] right-5 md:right-1/4">
          <button
            className="text-white text-4xl md:text-5xl hover:scale-125 transition-transform"
            onClick={next}
          >
            <FaAngleRight />
          </button>
        </div>

        {/* Carousel */}
        <div className="flex relative transition-transform duration-1000 overflow-hidden" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="mx-2 md:mx-4 relative shrink-0"

            >
              <div className="item-3d-frame relative w-full h-full transition-transform duration-1000 transform-style-preserve-3d">
                {/* Front Face */}
                <ThreeDCard slide={slide} />

                {/* Left and Right Sides */}
                <div className="absolute top-0 left-0 w-3 md:w-5 h-full bg-gray-800 border-l-4 border-white transform -translate-x-1 rotate-y-[-90deg] origin-left"></div>
                <div className="absolute top-0 right-0 w-3 md:w-5 h-full bg-gray-800 border-r-4 border-white transform translate-x-1 rotate-y-[90deg] origin-right"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDCarousel;
