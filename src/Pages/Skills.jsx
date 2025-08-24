import React, { useEffect, useState, useRef } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { skillsData } from '../skillsData';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Skills");
  const [loading, setLoading] = useState(true);
  
  // Refs for animations
  const skillsRef = useRef(null);
  const headerRef = useRef(null);
  const filterButtonsRef = useRef(null);
  const skillsGridRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    try {
      console.log('Skills data:', skillsData); // Debug log
      const defaultData = skillsData.filter((curElem) => curElem.category === "Skills");
      console.log('Filtered data:', defaultData); // Debug log
      setData(defaultData);
      setLoading(false);
    } catch (err) {
      console.error('Error loading skills data:', err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loading || !skillsRef.current) return;

    // Page entrance animation
    gsap.fromTo(skillsRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      }
    );

    // Header animation
    if (headerRef.current) {
      const headerElements = headerRef.current.children;
      gsap.fromTo(headerElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out"
        }
      );
    }

    // Filter buttons animation
    if (filterButtonsRef.current) {
      const buttons = filterButtonsRef.current.children;
      gsap.fromTo(buttons,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }
      );
    }

    // Skills grid animation with scroll trigger
    if (skillsGridRef.current) {
      const skillItems = skillsGridRef.current.children;
      gsap.fromTo(skillItems,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, [data, loading]);

  const handleFilter = (categoryName) => {
    try {
      const dataCopy = skillsData.filter((curElem) => curElem.category === categoryName);
      setData(dataCopy);
      setCategory(categoryName);

      // Animate the new data
      setTimeout(() => {
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
          gsap.fromTo(item, 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "power2.out"
            }
          );
        });
      }, 100);
    } catch (err) {
      console.error('Error filtering data:', err);
    }
  };

  if (loading) {
    return (
      <div className='lg:px-[15%] md:px-[10%] px-[2%] w-[100%] h-[100%] bg-[#09101a] mx-auto flex items-center justify-center min-h-screen'>
        <div className='text-white text-2xl'>Loading Skills...</div>
      </div>
    );
  }

  return (
    <div 
      ref={skillsRef}
      className='lg:px-[15%] md:px-[10%] px-[2%] w-[100%] min-h-screen bg-[#09101a] mx-auto'
    >
      <div ref={headerRef} className='pt-[100px] text-center'>
        <h1 className='text-white text-center font-semibold text-2xl mb-4'>MY Skills</h1>
        <h2 className='text-white text-center font-RegularBold text-4xl md:text-6xl mb-10 leading-tight'>
          Crafting Stories through Design and Imagination
        </h2>
      </div>
      
      <div ref={filterButtonsRef} className='mb-8'>
        <ul className='flex flex-wrap gap-4 items-center justify-center'>
          <button 
            onClick={() => handleFilter("Skills")} 
            className='p-4 bg-[#141c27] rounded text-white font-semibold hover:bg-[#55E6A5] hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Skills
          </button>
          <button 
            onClick={() => handleFilter("Experience")} 
            className='p-4 bg-[#141c27] rounded text-white font-semibold hover:bg-[#55E6A5] hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Experience
          </button>
          <button 
            onClick={() => handleFilter("Education")} 
            className='p-4 bg-[#141c27] rounded text-white font-semibold hover:bg-[#55E6A5] hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Education
          </button>
        </ul>
      </div>
      
      <div ref={skillsGridRef} className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-[60px]'>
        {data && data.length > 0 ? (
          data.map((curElem, index) => (
            <div 
              key={curElem.id || index}
              className='skill-item flex gap-2 p-[40px] border rounded mt-[30px] hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-[#55E6A5] cursor-pointer'
            >
              <span className='text-[#55E6A5] text-[20px] hover:scale-110 transition-transform duration-300'>
                <MdDoubleArrow />
              </span>
              <div className='flex-1'>
                <h1 className='font-semibold text-white text-[16px] pb-[12px] pr-[30px] hover:text-[#55E6A5] transition-colors duration-300'>
                  {curElem.title}
                </h1>
                <hr className='w-[160px] mb-[20px] border-[#55E6A5]' />
                <h2 className='text-white font-semibold mb-[10px] text-[20px]'>
                  {curElem.sub_title}
                </h2>
                <h4 className='text-white font-semibold mb-[10px] text-[16px] text-[#55E6A5]'>
                  {curElem.session}
                </h4>

                <p className='text-[#a2a2a2] font-semibold text-[16px] mb-[25px] leading-relaxed'>
                  {curElem.description}
                </p>

                <h2 className='text-white font-semibold mb-[20px] text-[16px]'>Performance</h2>
                <div className='min-w-[200px] rounded-full bg-gray-300 overflow-hidden'>
                  <div 
                    className='text-center w-[90%] bg-[#55e6a5] py-2 text-black font-semibold transition-all duration-1000 ease-out'
                    style={{ width: '90%' }}
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='col-span-2 text-center text-white text-xl py-8'>
            No {category} data available
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;