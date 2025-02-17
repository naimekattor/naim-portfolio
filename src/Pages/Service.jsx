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
            <p className='text-[16px] text-[#A2A2A2] leading-8'>Consultation: Engaging with clients to understand their brand, target audience, goals, and project scope.
              User Experience (UX) Research: Analyzing target users' behaviors and preferences to craft designs that offer a great user experience.</p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px]'><img className='w-[76px] h-[76px]' src={coding} alt="" /></div>
          </div>
          <div className='px-[40px] p-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded '>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white'>Website Development</h1>
            <p className='text-[16px] text-[#A2A2A2] leading-8'>Front-End Development: Coding the design into a functional website using technologies like HTML, CSS, JavaScript, and frameworks like React.
              Content Management Systems (CMS): Integrating CMS solutions (e.g., WordPress) to allow clients to manage and update their content easily.</p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px]'><img className='w-[76px] h-[76px]' src={app} alt="" /></div>
          </div>
          <div className='px-[40px] p-[40px] mt-[65px] bg-[#09101A] relative hover:translate-y-[-60px] cursor-pointer duration-1000 rounded'>
            <h1 className='mt-[40px] mb-[20px] text-[20px] text-white'>Visual Design</h1>
            <p className='text-[16px] text-[#A2A2A2] leading-8'>Branding: Ensuring that the website reflects the client's brand identity (colors, typography, logos, etc.).
              Responsive Design: Designing for different screen sizes and devices (desktop, mobile, tablet) to offer an optimal experience everywhere.
              Graphic Design: Using tools like Adobe XD, Figma, Sketch, or other platforms to create visually appealing graphics and layouts.</p>
            <div className='p-[10px] bg-[#55E6A5] absolute rounded top-[-40px]'><img className='w-[76px] h-[76px]' src={digital} alt="" /></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Service;
