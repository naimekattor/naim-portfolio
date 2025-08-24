import React, { useEffect, useRef } from 'react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Footer from '../Components/Footer';
import { 
  fadeIn, 
  slideInBottom, 
  scaleIn, 
  staggerAnimation,
  scrollAnimation,
  hoverScale
} from '../utils/gsapAnimations';

const Contact = () => {
  // Refs for animations
  const contactRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Page entrance animation
    if (contactRef.current) {
      fadeIn(contactRef.current, 1, 0.2);
    }

    // Contact cards animation
    if (contactCardsRef.current) {
      const cards = contactCardsRef.current.children;
      staggerAnimation(Array.from(cards), 'scaleIn', 0.2);
    }

    // Form animation
    if (formRef.current) {
      const formElements = formRef.current.children;
      staggerAnimation(Array.from(formElements), 'slideInBottom', 0.1);
    }

  }, []);

  return (
    <div 
      ref={contactRef}
      className='lg:w-[100%] md:w-[100%] h-[100%] mx-auto lg:px-[15%] md:px-[10%] px-[2%] bg-[#02050a] cursor-context-menu'
    >
      <div 
        ref={contactCardsRef}
        className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 pt-[100px]'
      >
        <div className='flex flex-col justify-center items-center p-[25px] bg-[#09101a] drop-shadow-lg rounded-[8px] hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-[#55e6a5] hover:border cursor-pointer'>
          <span className='text-[#55e6a5] hover:scale-110 transition-transform duration-300'>
            <IoPhonePortraitOutline className='text-4xl' />
          </span>
          <h4 className='text-[20px] text-white font-semibold mt-[30px] mb-[15px] hover:text-[#55e6a5] transition-colors duration-300'>
            Phone
          </h4>
          <p className='text-[16px] text-[#a2a2a2] mb-[20px] font-semibold text-center'>
            Don't be hesitate to call me
          </p>
          <a
            href="https://wa.me/8801518920316"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[16px] text-white font-semibold cursor-pointer hover:text-[#55e6a5] transition-colors duration-300 hover:scale-105'
          >
            +8801518920316
          </a>
        </div>
        
        <div className='flex flex-col justify-center items-center p-[25px] bg-[#09101a] drop-shadow-lg rounded-[8px] hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-[#55e6a5] hover:border cursor-pointer'>
          <span className='text-[#55e6a5] hover:scale-110 transition-transform duration-300'>
            <FaMapLocation className='text-4xl' />
          </span>
          <h4 className='text-[20px] text-white font-semibold mt-[30px] mb-[15px] hover:text-[#55e6a5] transition-colors duration-300'>
            Map
          </h4>
          <p className='text-[16px] text-[#a2a2a2] mb-[20px] font-semibold text-center'>
            11/A,Mirpur-2, Dhaka-1216,Bangladesh
          </p>
          <h5 className='text-[16px] text-white font-semibold cursor-pointer hover:text-[#55e6a5] transition-colors duration-300 hover:scale-105'>
            View On Map
          </h5>
        </div>
        
        <div className='flex flex-col justify-center items-center p-[25px] bg-[#09101a] drop-shadow-lg rounded-[8px] hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-[#55e6a5] hover:border cursor-pointer'>
          <span className='text-[#55e6a5] hover:scale-110 transition-transform duration-300'>
            <SlCalender className='text-4xl' />
          </span>
          <h4 className='text-[20px] text-white font-semibold mt-[30px] mb-[15px] hover:text-[#55e6a5] transition-colors duration-300'>
            Calendar
          </h4>
          <p className='text-[16px] text-[#a2a2a2] mb-[20px] font-semibold text-center'>
            Subscribe Newsletter
          </p>
          <a
            href="mailto:naimekattor@gmail.com"
            className='text-[16px] text-white font-semibold cursor-pointer hover:text-[#55e6a5] transition-colors duration-300 hover:scale-105'
          >
            naimekattor@gmail.com
          </a>
        </div>
      </div>
      
      <form 
        ref={formRef}
        className='grid grid-cols-1 gap-4 mt-[40px] items-center max-w-2xl mx-auto'
      >
        <input 
          className='w-[100%] h-[60px] rounded border px-4 text-white bg-[#02050a] hover:border-[#55e6a5] focus:border-[#55e6a5] focus:outline-none transition-all duration-300' 
          placeholder='Your Name' 
          type="text" 
          name="" 
          id="" 
        />
        <input 
          className='w-[100%] h-[60px] rounded border px-4 text-white bg-[#02050a] hover:border-[#55e6a5] focus:border-[#55e6a5] focus:outline-none transition-all duration-300' 
          placeholder='Subject' 
          type="text" 
          name="" 
          id="" 
        />
        <input 
          className='w-[100%] h-[60px] rounded border px-4 text-white bg-[#02050a] hover:border-[#55e6a5] focus:border-[#55e6a5] focus:outline-none transition-all duration-300' 
          placeholder='Email' 
          type="email" 
          name="" 
          id="" 
        />
        <textarea 
          className='w-[100%] h-[100px] rounded border px-4 text-white bg-[#02050a] hover:border-[#55e6a5] focus:border-[#55e6a5] focus:outline-none transition-all duration-300 resize-none' 
          placeholder='Your Message Here..' 
          name="" 
          id=""
        ></textarea>
        <button 
          className='relative py-[18px] px-[67px] bg-[#55e6a5] mt-[20px] text-black font-semibold w-60 mx-auto text-center before:absolute before:inset-0 before:bg-white/70 before:text-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 hover:scale-105 transition-transform duration-300 hover:shadow-lg'
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
