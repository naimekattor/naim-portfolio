import React from 'react';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaMapLocation } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Footer from '../Components/Footer';
const Contact = () => {
  return (
    <div className='lg:w-[100%] md:w-[100%] h-[100%] mx-auto lg:px-[15%] md:px-[10%] px-[2%] bg-[#02050a] cursor-context-menu'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 pt-[100px]'>
        <div className='flex flex-col justify-center items-center p-[25px] bg-[#09101a] drop-shadow-lg rounded-[8px]'>
          <span className=' text-[#55e6a5]'><IoPhonePortraitOutline className='text-4xl' />
          </span>
          <h4 className='text-[20px] text-white font-semibold mt-[30px] mb-[15px]'>Phone</h4>
          <p className='text-[16px] text-[#a2a2a2] mb-[20px] font-semibold'>Don't be hesitate to call me</p>
          <h5 className='text-[16px] text-white font-semibold cursor-pointer hover:text-[#55e6a5]'>+8801518920316</h5>
        </div>
        <div className='flex flex-col justify-center items-center p-[25px] bg-[#09101a] drop-shadow-lg rounded-[8px]'>
          <span className=' text-[#55e6a5]'><FaMapLocation className='text-4xl' />
          </span>
          <h4 className='text-[20px] text-white font-semibold mt-[30px] mb-[15px]'>Map</h4>
          <p className='text-[16px] text-[#a2a2a2] mb-[20px] font-semibold'>11/A,Mirpur-2, Dhaka-1216,Bangladesh</p>
          <h5 className='text-[16px] text-white font-semibold cursor-pointer hover:text-[#55e6a5]'>View On Map</h5>
        </div>
        <div className='flex flex-col justify-center items-center p-[25px] bg-[#09101a] drop-shadow-lg rounded-[8px]'>
          <span className=' text-[#55e6a5]'><SlCalender className='text-4xl' />
          </span>
          <h4 className='text-[20px] text-white font-semibold mt-[30px] mb-[15px]'>Calender</h4>
          <p className='text-[16px] text-[#a2a2a2] mb-[20px] font-semibold'>Subscribe Newslater</p>
          <h5 className='text-[16px] text-white font-semibold cursor-pointer hover:text-[#55e6a5]'>naimekattor@gmail.com</h5>
        </div>
      </div>
      <form className='grid grid-cols-1 gap-4 mt-[40px] items-center'>
        <input className='w-[100%] h-[60px] rounded border px-4 text-white bg-[#02050a]' placeholder='Your Name' type="text" name="" id="" />
        <input className='w-[100%] h-[60px] rounded border px-4 text-white bg-[#02050a]' placeholder='Subject' type="text" name="" id="" />
        <input className='w-[100%] h-[60px] rounded border px-4 text-white bg-[#02050a]' placeholder='Email' type="email" name="" id="" />
        <textarea className='w-[100%] h-[100px] rounded border px-4 text-white bg-[#02050a]' placeholder='Your Message Here..' name="" id=""></textarea>
        <button className='relative py-[18px] px-[67px] bg-[#55e6a5] mt-[20px] text-black font-semibold  w-60 mx-auto text-center before:absolute before:inset-0 before:bg-white/70 before:text-black before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 '>Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
