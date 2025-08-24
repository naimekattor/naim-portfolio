import React, { useEffect, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaCommentDots } from "react-icons/fa";
import { 
  fadeIn, 
  slideInBottom, 
  staggerAnimation,
  hoverScale
} from '../utils/gsapAnimations';

const Card = ({ data }) => {
  const cardsRef = useRef(null);

  useEffect(() => {
    // Animate cards on mount
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      staggerAnimation(Array.from(cards), 'fadeIn', 0.2);
    }
  }, [data]);

  return (
    <div 
      ref={cardsRef}
      className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-8'
    >
      {data.map((curElem, index) => (
        <div 
          key={curElem.id || index} 
          className='drop-shadow cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl group'
        >
          <div className='relative overflow-hidden rounded-lg'>
            <img 
              className='w-[350px] h-[300px] object-cover group-hover:scale-110 transition-transform duration-500' 
              src={curElem.urlToImage} 
              alt={curElem.title || "Blog post"} 
            />
            <span className='absolute top-2 right-8 bg-[#55e6a5] text-black p-2 rounded drop-shadow-md font-semibold'>
              10 June
            </span>
          </div>

          <div className='flex gap-4 my-4'>
            <span className='text-[#55e6a5] text-[14px] hover:scale-110 transition-transform duration-300'>
              <CgProfile />
            </span>
            <span className='text-white text-[14px] font-semibold hover:text-[#55e6a5] transition-colors duration-300'>
              By admin
            </span>
            <span className='text-[#55e6a5] text-[14px] hover:scale-110 transition-transform duration-300'>
              <FaCommentDots />
            </span>
            <span className='text-white text-[14px] font-semibold hover:text-[#55e6a5] transition-colors duration-300'>
              Comments(05)
            </span>
          </div>
          
          <h2 className='text-[16px] text-white font-semibold mb-[16px] group-hover:text-[#55e6a5] transition-colors duration-300 leading-tight'>
            {curElem.title}
          </h2>
          
          <p className='text-[#a2a2a2] text-[14px] font-semibold mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
            {curElem.description}
          </p>
          
          <span>
            <a 
              className='text-white hover:text-[#55e6a5] transition-colors duration-300 font-semibold hover:underline' 
              href={curElem.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Card;