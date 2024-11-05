import React from 'react';
import coding from "../assets/images/coding.png"
import app from "../assets/images/app-development.png"
import digital from "../assets/images/digital-services.png"
const Service = () => {
  return (
    <div className='lg:px-[15%] md:px-[10%] px-[2%] w-[100%] h-[100%] bg-[#02050a] mx-auto '>
      <div className='mb-[40px] pt-[100px]'><h1 className='text-[20px] text-[#55E6A5] font-semibold text-center'>MY serivce</h1>
        <h2 className='text-[52px] text-white font-RegularBold text-center'>Bringing your vision <br /> to life with
          precision and passion</h2>
      </div>
      <div>
        <div className='flex md:flex-row flex-col  gap-4'>
          <div className='px-[40px] p-[40px] mt-[65px] bg-[#09101A] relative  hover:translate-y-[-60px] cursor-pointer duration-1000 rounded'>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white'>Website Design</h1>
            <p className='text-[16px] text-[#A2A2A2]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis veniam provident dignissimos consequatur doloribus et? At, possimus!</p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px]'><img className='w-[76px] h-[76px]' src={coding} alt="" /></div>
          </div>
          <div className='px-[40px] p-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded '>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white'>Website Development</h1>
            <p className='text-[16px] text-[#A2A2A2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sunt reprehenderit quasi porro itaque inventore quae laudantium?</p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px]'><img className='w-[76px] h-[76px]' src={app} alt="" /></div>
          </div>
          <div className='px-[40px] p-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded'>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white'>Apps Development</h1>
            <p className='text-[16px] text-[#A2A2A2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima distinctio voluptates ratione recusandae quibusdam dolore voluptate.</p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px]'><img className='w-[76px] h-[76px]' src={digital} alt="" /></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Service;