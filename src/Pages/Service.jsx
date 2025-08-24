import React, { useEffect, useRef } from 'react';
import coding from "../assets/images/coding.png"
import app from "../assets/images/app-development.png"
import digital from "../assets/images/digital-services.png"
import { 
  fadeIn, 
  slideInBottom, 
  scaleIn, 
  staggerAnimation,
  scrollAnimation,
  hoverScale
} from '../utils/gsapAnimations';

const Service = () => {
  // Refs for animations
  const serviceRef = useRef(null);
  const headerRef = useRef(null);
  const serviceCardsRef = useRef(null);

  useEffect(() => {
    // Page entrance animation
    if (serviceRef.current) {
      fadeIn(serviceRef.current, 1, 0.2);
    }

    // Header animation
    if (headerRef.current) {
      const headerElements = headerRef.current.children;
      staggerAnimation(Array.from(headerElements), 'fadeIn', 0.3);
    }

    // Service cards animation
    if (serviceCardsRef.current) {
      const cards = serviceCardsRef.current.children;
      staggerAnimation(Array.from(cards), 'slideInBottom', 0.3);
    }

  }, []);

  return (
    <div 
      ref={serviceRef}
      className='lg:px-[15%] md:px-[10%] px-[2%] w-[100%] h-[100%] bg-[#02050a] mx-auto'
    >
      <div 
        ref={headerRef}
        className='mb-[40px] pt-[100px] text-center'
      >
        <h1 className='text-[20px] text-[#55E6A5] font-semibold mb-4'>
          MY Service
        </h1>
        <h2 className='text-[52px] text-white font-RegularBold leading-tight'>
          Bringing your vision <br /> to life with precision and passion
        </h2>
      </div>
      
      <div ref={serviceCardsRef}>
        <div className='flex md:flex-row flex-col gap-8'>
          <div className='px-[40px] py-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded hover:shadow-2xl hover:border-[#55E6A5] hover:border transition-all duration-500 group'>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white group-hover:text-[#55E6A5] transition-colors duration-300'>
              Website Design
            </h1>
            <p className='text-[16px] text-[#A2A2A2] leading-8 group-hover:text-gray-300 transition-colors duration-300'>
              Consultation: Engaging with clients to understand their brand, target audience, goals, and project scope.
              User Experience (UX) Research: Analyzing target users' behaviors and preferences to craft designs that offer a great user experience.
            </p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px] group-hover:scale-110 transition-transform duration-300'>
              <img className='w-[76px] h-[76px]' src={coding} alt="Website Design" />
            </div>
          </div>
          
          <div className='px-[40px] py-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded hover:shadow-2xl hover:border-[#55E6A5] hover:border transition-all duration-500 group'>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white group-hover:text-[#55E6A5] transition-colors duration-300'>
              Website Development
            </h1>
            <p className='text-[16px] text-[#A2A2A2] leading-8 group-hover:text-gray-300 transition-colors duration-300'>
              Front-End Development: Coding the design into a functional website using technologies like HTML, CSS, JavaScript, and frameworks like React.
              Content Management Systems (CMS): Integrating CMS solutions (e.g., WordPress) to allow clients to manage and update their content easily.
            </p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px] group-hover:scale-110 transition-transform duration-300'>
              <img className='w-[76px] h-[76px]' src={app} alt="Website Development" />
            </div>
          </div>
          
          <div className='px-[40px] py-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded hover:shadow-2xl hover:border-[#55E6A5] hover:border transition-all duration-500 group'>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white group-hover:text-[#55E6A5] transition-colors duration-300'>
              Visual Design
            </h1>
            <p className='text-[16px] text-[#A2A2A2] leading-8 group-hover:text-gray-300 transition-colors duration-300'>
              Branding: Ensuring that the website reflects the client's brand identity (colors, typography, logos, etc.).
              Responsive Design: Designing for different screen sizes and devices (desktop, mobile, tablet) to offer an optimal experience everywhere.
              Graphic Design: Using tools like Adobe XD, Figma, Sketch, or other platforms to create visually appealing graphics and layouts.
            </p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px] group-hover:scale-110 transition-transform duration-300'>
              <img className='w-[76px] h-[76px]' src={digital} alt="Visual Design" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
