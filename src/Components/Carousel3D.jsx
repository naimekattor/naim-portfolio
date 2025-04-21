import { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel3D = ({ items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const itemRefs = useRef([]);
  const resizeTimeout = useRef();

  const calculateLayout = useCallback(() => {
    if (!sliderRef.current) return;

    const itemWidth = Math.min(
      window.innerWidth * 0.8,
      Math.max(250, window.innerWidth * 0.25)
    );
    const height = window.innerHeight * 0.4;
    const totalWidth = itemWidth * items.length;

    sliderRef.current.style.width = `${totalWidth}px`;

    itemRefs.current.forEach(item => {
      if (item) {
        item.style.width = `${itemWidth - 40}px`;
        item.style.height = `${height}px`;
      }
    });
  }, [items.length]);

  const updateSliderPosition = useCallback(() => {
    if (!sliderRef.current) return;

    const itemWidth = Math.min(
      window.innerWidth * 0.8,
      Math.max(250, window.innerWidth * 0.25)
    );
    const translateX = currentIndex * -itemWidth + itemWidth / 2 + window.innerWidth / 2;
    sliderRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
  }, [currentIndex]);

  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex, updateSliderPosition]);

  const handleResize = useCallback(() => {
    clearTimeout(resizeTimeout.current);
    resizeTimeout.current = setTimeout(() => {
      calculateLayout();
      updateSliderPosition();
    }, 100);
  }, [calculateLayout, updateSliderPosition]);

  useEffect(() => {
    calculateLayout();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, [calculateLayout, handleResize]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev % items.length) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const handleNavigation = (direction) => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return prev === 1 ? items.length : prev - 1;
      }
      return prev === items.length ? 1 : prev + 1;
    });
  };
  useEffect(() => {
    updateSliderPosition();
  }, [currentIndex, updateSliderPosition]);
  return (
    <div className="relative w-full py-8 md:py-[125px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden px-2 md:px-4">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ perspective: 1200 }}
        >
          {items.map((item, index) => {
            const isActive = currentIndex === index + 1;
            const position = index + 1 < currentIndex ? 'left' : 'right';

            return (
              <div
                key={item}
                ref={el => itemRefs.current[index] = el}
                className="mx-2 md:mx-4 flex-shrink-0 transition-transform duration-1000 ease-in-out"
              >
                <div className="relative h-full w-full transform-gpu transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: isActive
                      ? 'perspective(1200px)'
                      : `perspective(1200px) rotateY(${position === 'left' ? 40 : -40}deg)`
                  }}
                >
                  <div className="absolute flex h-full w-full items-center justify-center border-2 md:border-4 border-white bg-[#1e272e]">
                    <h1 className="text-4xl md:text-7xl text-white">{item}</h1>
                  </div>

                  <div className="absolute left-0 top-0 h-full w-4 md:w-[40px] border-l-2 md:border-l-4 border-white bg-[#1e272e]"
                    style={{
                      transform: 'translate3d(1px, 0, -40px) rotateY(-90deg)',
                      transformOrigin: '0%'
                    }}
                  />

                  <div className="absolute right-0 top-0 h-full w-4 md:w-[40px] border-r-2 md:border-r-4 border-white bg-[#1e272e]"
                    style={{
                      transform: 'translate3d(-1px, 0, -40px) rotateY(90deg)',
                      transformOrigin: '100%'
                    }}
                  />

                  {isActive && (
                    <div className="absolute bottom-[-10%] md:bottom-[-15%] left-0 h-4 md:h-[40px] w-full opacity-85 shadow-[0_0_5px_5px_rgba(0,0,0,0.11)]"
                      style={{
                        transform: 'rotateX(90deg) translate3d(0px, -20px, 0px)'
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-[-10%] md:bottom-[-15%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-8">
        <button
          onClick={() => handleNavigation('prev')}
          className="transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <FiChevronLeft className="text-4xl md:text-6xl text-white" />
        </button>
        <button
          onClick={() => handleNavigation('next')}
          className="transition-transform duration-300 ease-in-out hover:scale-125"
        >
          <FiChevronRight className="text-4xl md:text-6xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carousel3D;