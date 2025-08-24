import React, { useEffect, useRef } from 'react';
import Card from '../Components/Card';
import { blogData } from '../skillsData';
import { 
  fadeIn, 
  slideInBottom, 
  staggerAnimation
} from '../utils/gsapAnimations';

const Blog = () => {
  // Refs for animations
  const blogRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Page entrance animation
    if (blogRef.current) {
      fadeIn(blogRef.current, 1, 0.2);
    }

    // Header animation
    if (headerRef.current) {
      const headerElements = headerRef.current.children;
      staggerAnimation(Array.from(headerElements), 'slideInBottom', 0.3);
    }

  }, []);

  return (
    <div 
      ref={blogRef}
      className='w-[100%] h-[100%] mx-auto lg:px-[15%] md:px-[10%] px-[2%] bg-[#02050a]'
    >
      <div ref={headerRef} className='py-8 text-center'>
        <h1 className='text-[20px] pt-[100px] text-[#55e5a6] font-semibold uppercase mb-4'>
          All Blog
        </h1>
        <h2 className='text-[52px] text-white font-RegularBold leading-tight'>
          Crafting Unique Experiences <br />
          Inspiring Connections
        </h2>
      </div>
      <Card data={blogData} />
    </div>
  );
};

export default Blog;