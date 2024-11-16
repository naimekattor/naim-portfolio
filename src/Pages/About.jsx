import React from 'react';
import { FaAward } from "react-icons/fa";
import about_1 from "../assets/images/about_1.png"
import about_2 from "../assets/images/about_2.png"
import profile from "../assets/images/profile.jpg"
const About = () => {
  return (
    /*  About Section */
    <div className='w-[100%] mx-auto lg:px-[15%] md:px-[10%] px-[2%] bg-[#07050a] h-[100%]'>
      <div className='pt-[80px] '>
        <span className='text-[#51e5a8] text-[20px]'>ABOUT ME</span>
        <h1 className='text-white text-[36px] flex-wrap font-semibold  py-[12px]'>Crafting stories through design <br /> and
          innovation</h1>
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className='grid grid-cols-1'>
          <div>
            <img src={about_1} alt="" className='w-[90px] h-[90px]' />
            <span className='text-[30px] text-white my-[30px] font-semibold'>My Ambition</span>
            <p className='text-[#A2A2A2] text-[16px] mt-[15px] text-wrap'>Mastering Frontend Skills: Go beyond React and solidify your knowledge in core web technologies like HTML, CSS, and JavaScript (ES6+). Aim to understand how the web works under the hood.

React Ecosystem: Dive deeper into React's ecosystem — Redux or other state management libraries, React Router, React Query, and testing frameworks like Jest or React Testing Library.

Backend Knowledge: Learn the basics of backend development (Node.js, Express, databases) to become a more versatile full-stack developer.

Performance Optimization: Develop skills in optimizing React apps for performance, focusing on things like lazy loading, reducing bundle size, and effective state management.

Build Real Projects: Take on challenging projects that solve real-world problems or contribute to open-source projects to build a strong portfolio.

Stay Updated: Follow industry trends and new React features (like Server Components) to remain competitive.

Career Goals: Think about specializing (e.g., UI/UX design) or aiming for leadership roles, such as becoming a tech lead or a solution architect in the long run.</p>
          </div>
          <div>
            <img src={about_2} alt="" className='w-[90px] h-[90px]' />
            <span className='text-[30px] text-white my-[30px] font-semibold'>My Purpose</span>

            <p className='text-[#A2A2A2] text-[16px] my-[15px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, sapiente ratione iusto unde expedita, porro recusandae ad adipisci rerum nam inventore, voluptatibus pariatur eum veritatis quasi deleniti hic maiores commodi!</p>
          </div>
        </div>
        <div className=' relative'>
          <img src={profile} alt="" className='h-[640px] md:w-[570px] w-[400px]' />
          <div className='bg-[#51e5a8] py-[50px] md:px-[60px] px-[40px] lg:absolute right-[20px] bottom-[-50px] rounded flex gap-4 items-center justify-center'>
            <div className='text-3xl'><FaAward />
            </div>
            <div >
              <span className='text-2xl font-bold'>15+</span>
              <br />
              <span className='text-2xl font-semibold'>Years of Experience</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
