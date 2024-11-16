import React, { useState } from 'react';
import { IoMdPlay } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
const Home = () => {
  const [showIframe, setShowIframe] = useState(false);
  return (
    <div className='w-[100%] h-[100%] mx-auto'>
      <div className='bg-intro1 bg-cover md:bg-cover h-screen w-screen bg-repeat flex items-center'>
        <div className='w-[100%] mx-[15%] '>
          <span className='text-white  md:text-[70px] text-[40px] font-RegularBold'>Hi, I'M Naim ! </span>
          <br />
          <span className='text-white  md:text-[70px] text-[40px] font-RegularBold '>CREATIVE </span>
          <span className='font-RegularBold md:text-[70px] text-[40px] text-[#51e5a8] mb-[65px]'>DEVELOPER</span>
          <p className='text-[#fff] mb-[20px] md:text-[16px] text-[14px]'> Delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.</p>
          <div className='flex md:gap-4 gap-4 md:flex-row flex-col items-center  justify-start '>
            <button className='bg-[#51e5a8] h-[60px] md:py-1 md:px-8 py-2 px-6 border font-semibold hover:bg-[#09101a] hover:text-white'>Download Cv</button>
            <div className='flex gap-4 items-center justify-center cursor-pointer'>
              <span className='bg-[#51e5a8] rounded-full md:py-2 md:px-2 py-1 px-1 text-[40px]'><IoMdPlay />
              </span>
              <span className='text-1xl text-white'><a onClick={() => setShowIframe(true)} href="https://www.youtube.com/embed/azCHvowfwKc?si=zcAqoh6wDzWBoIex" target='page'>Watch The Video</a> </span>

            </div>
            <div className='relative p-[30px]'>
              {showIframe && <iframe className='md:w-[560px] md:h-[315px] w-[200px] h-[200px]' src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen name='page'>
              </iframe>}
              {showIframe && <button className=' absolute bg-white right-0 top-0 z-10 text-black p-[10px] rounded-full' onClick={() => setShowIframe(false)}><RxCross1 /></button>}

            </div>



          </div>
        </div>

      </div>
    </div >
  );
};

export default Home;
