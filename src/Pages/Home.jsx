import { useState } from 'react';
import { IoMdPlay } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Typewriter from 'typewriter-effect';
const Home = () => {
  const [showIframe, setShowIframe] = useState(false);
  return (
    <div className='w-[100%] h-[100%] mx-auto '>
      <div className='bg-intro1 bg-cover md:bg-cover h-screen w-full bg-repeat flex items-center'>
        <div className='w-[100%] mx-[15%] '>
          <span className='text-white  md:text-[70px] text-[40px] font-RegularBold'>Hi, I'M Naim ! </span>
          <br />
          <span className='text-white  md:text-[70px] text-[40px] font-RegularBold '>CREATIVE </span>
          <span className='font-RegularBold md:text-[70px] text-[40px] text-[#51e5a8] mb-[65px] uppercase'>
            <Typewriter
              options={{
                strings: ['DEVELOPER', 'Designer', 'Freelancer', 'Youtuber'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>

          <p className='text-[#fff] mb-[20px] md:text-[16px] text-[14px] md:w-1/2'> Delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.</p>
          <div className='flex md:gap-4 gap-4 md:flex-row  items-center  justify-start '>
            <button className='relative bg-[#51e5a8] h-[60px] md:py-1 md:px-8 py-2 px-6 border font-semibold overflow-hidden before:inset-0 before:absolute before:scale-x-0 before:bg-black/50 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 '>Download Cv</button>

            <div className='flex gap-4 items-center justify-center cursor-pointer'>
              <span className='bg-[#51e5a8] rounded-full md:py-2 md:px-2 py-1 px-1 text-[40px]'><IoMdPlay />
              </span>
              <span className='text-1xl text-white'><a onClick={() => setShowIframe(true)} href="https://www.youtube.com/embed/azCHvowfwKc?si=zcAqoh6wDzWBoIex" target='page'>Watch The Video</a> </span>

            </div>




          </div>
          <div className='relative p-[30px] inline-block'>
            {showIframe && <iframe className='md:w-[560px] md:h-[315px] w-[200px] h-[200px]' src="" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen name='page'>
            </iframe>}
            {showIframe && <button className=' absolute bg-white right-0 top-0 z-10 text-black p-[10px] rounded-full' onClick={() => setShowIframe(false)}><RxCross1 /></button>}
          </div>
        </div>

      </div>
    </div >
  );
};

export default Home;
