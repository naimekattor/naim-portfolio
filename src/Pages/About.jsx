import React, { useState } from 'react';
import { FaAward } from "react-icons/fa";
import about_1 from "../assets/images/about_1.png"
import about_2 from "../assets/images/about_2.png"
import profile from "../assets/images/profile.jpg"
import { ParticleBackground } from 'react-interactive-particle-background';
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import aboutCard1 from "../assets/images/aboutCard1.jpeg"
import aboutCard2 from "../assets/images/aboutCard2.jpeg"
import aboutCard3 from "../assets/images/aboutCard3.jpeg"
import aboutCard4 from "../assets/images/aboutCard4.jpeg"
const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
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
          <div className='w-[100%] mx-auto  h-[100%]'>

            <div className='pt-[80px] '>
              <span className='text-[#51e5a8] text-[20px]'>ABOUT ME</span>
              <h1 className='text-white text-[36px] flex-wrap font-semibold  py-[12px]'>Crafting stories through design <br /> and
                innovation</h1>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative pb-[120vh]">


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
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
