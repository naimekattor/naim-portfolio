import React, { useState } from 'react';
import { FaAward } from "react-icons/fa";
import about_1 from "../assets/images/about_1.png"
import about_2 from "../assets/images/about_2.png"
import profile from "../assets/images/profile.jpg"
import { ParticleBackground } from 'react-interactive-particle-background';
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import aboutCard1 from "../assets/images/aboutCard1.jpeg"
import aboutCard2 from "../assets/images/aboutcard2.jpeg"
import aboutCard3 from "../assets/images/aboutcard3.jpeg"
import aboutCard4 from "../assets/images/aboutcard4.jpeg"
import { FaPencilRuler } from "react-icons/fa";
import { SiUbiquiti } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { FaSquareWebAwesome } from "react-icons/fa6";
const About = () => {
  const particleConfig = {
    particle: {
      particleCount: 300,
      color: "#ffffff", // White particles
      minSize: 1,
      maxSize: 3,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 2,
    },
    opacity: {
      minOpacity: 0.3,
      maxOpacity: 0.8,
      opacityTransitionTime: 3000,
    },
  };

  return (
    /*  About Section */
    <>
      <div className="relative h-auto w-full flex  justify-center">
        {/* Particle Background */}
        <div className=' w-full h-auto'>
          <ParticleBackground config={particleConfig} />
        </div>
        {/* Content Over Particle Background */}
        <div className="absolute ">
          <div className='w-[100%] mx-auto p-[2%]  h-[100%]'>

            <div className='pt-[80px] text-center'>
              <span className='text-[#51e5a8] text-[20px]'>ABOUT ME</span>
              <h1 className='text-white text-[36px] flex-wrap font-semibold  py-[12px]'>Crafting stories through design <br /> and
                innovation</h1>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative pb-[80px] flex flex-col justify-center items-center">


                <div className="scroll-card flex items-center justify-between gap-4">
                  <div className='flex  gap-4'>
                    <span className='text-xl text-[#55e6a5]'><FaRegHandPointRight /></span>
                    <p className='text-[16px] font-serif '><span className='text-xl font-semibold'>Mastering Frontend Skills:</span><br /> Go beyond React and solidify your knowledge in core web technologies like HTML, CSS, and JavaScript (ES6+). Aim to understand how the web works under the hood.</p>
                  </div>
                  <div><img src={aboutCard1} alt="card" srcSet="" /></div>
                </div>
                <div className="scroll-card flex items-center justify-between gap-4">
                  <div className='flex  gap-4'>
                    <span className='text-xl text-[#55e6a5]'><FaRegHandPointRight /></span>
                    <p className='text-[16px] font-serif '><span className='text-xl font-semibold'>Crafting User Experiences:</span><br />Your work directly impacts how users interact with web applications. The purpose is to create intuitive, dynamic, and responsive UIs that make users' digital interactions enjoyable and meaningful.</p>
                  </div>
                  <div><img src={aboutCard2} alt="card" srcSet="" /></div>
                </div>
                <div className="scroll-card flex items-center justify-between gap-4">
                  <div className='flex  gap-4'>
                    <span className='text-xl text-[#55e6a5]'><FaRegHandPointRight /></span>
                    <p className='text-[16px] font-serif '><span className='text-xl font-semibold'>Empowering Innovation:</span><br />By leveraging React’s flexibility, your purpose is to push the boundaries of what web applications can do, whether it’s by adopting new libraries, improving accessibility, or integrating powerful features like animations or real-time updates.</p>
                  </div>
                  <div><img src={aboutCard3} alt="card" srcSet="" /></div>
                </div>
                <div className="scroll-card flex items-center justify-between gap-4">
                  <div className='flex  gap-4'>
                    <span className='text-xl text-[#55e6a5]'><FaRegHandPointRight /></span>
                    <p className='text-[16px] font-serif '><span className='text-xl font-semibold'>React Ecosystem:</span><br /> Dive deeper into React's ecosystem — Redux or other state management libraries, React Router, React Query, and testing frameworks like Jest or React Testing Library.</p>
                  </div>
                  <div><img src={aboutCard4} alt="card" srcSet="" /></div>
                </div>
              </div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-4 py-[80px]'>
              <div className='flex justify-center items-center flex-col gap-4 drop-shadow-lg md:bg-black bg-white md:text-white text-black rounded-md  hover:border-[#55e6a5] hover:border-l-2 hover:border-t-2 p-[80px] hover:transition-all hover:duration-300  '>
                <span className='text-2xl text-[#55e6a5]'><FaPencilRuler /></span>
                <h1 className=' relative text-[24px] font-bold leading-[34px] mb-[9px] after:inset-0 after:absolute after:bg-[#55e6a5] after:h-1 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#55e6a5] hover:transition-all hover:duration-300 cursor-pointer'>Web Design</h1>
                <h2 className='text-[16px] font-normal leading-[26px]'>Projects 30+</h2>
              </div>
              <div className='flex justify-center items-center flex-col gap-4 drop-shadow-lg md:bg-black bg-white md:text-white text-black rounded-md  p-[80px] hover:border-[#55e6a5] hover:border-l-2 hover:border-t-2'>
                <span className='text-2xl text-[#55e6a5]'><SiUbiquiti /></span>
                <h1 className='relative text-[24px] font-bold leading-[34px] mb-[9px] after:inset-0 after:absolute after:bg-[#55e6a5] after:h-1 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#55e6a5] hover:transition-all hover:duration-300 cursor-pointer'>Ui/Ux Design</h1>
                <h2 className='text-[16px] font-normal leading-[26px]'>Projects 4+</h2>
              </div>
              <div className='flex justify-center items-center flex-col gap-4 drop-shadow-lg md:bg-black bg-white md:text-white text-black rounded-md  p-[80px] hover:border-[#55e6a5] hover:border-l-2 hover:border-t-2'>
                <span className='text-2xl text-[#55e6a5]'><FaSquareWebAwesome /></span>
                <h1 className='relative text-[24px] font-bold leading-[34px] mb-[9px] after:inset-0 after:absolute after:bg-[#55e6a5] after:h-1 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#55e6a5] hover:transition-all hover:duration-300 cursor-pointer'>Web Research</h1>
                <h2 className='text-[16px] font-normal leading-[26px]'>Projects 10+</h2>
              </div>
              <div className='flex justify-center items-center flex-col gap-4 drop-shadow-lg md:bg-black bg-white md:text-white text-black rounded-md  p-[80px] hover:border-[#55e6a5] hover:border-l-2 hover:border-t-2'>
                <span className='text-2xl text-[#55e6a5]'><SiMarketo /></span>
                <h1 className='relative text-[24px] font-bold leading-[34px] mb-[9px] after:inset-0 after:absolute after:bg-[#55e6a5] after:h-1 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-[#55e6a5] hover:transition-all hover:duration-300 cursor-pointer'>Marketing</h1>
                <h2 className='text-[16px] font-normal leading-[26px]'>Projects 5+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
