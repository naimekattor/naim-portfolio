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
            <p className='text-[#A2A2A2] text-[16px] mt-[15px] text-wrap'>01. Mastering Frontend Skills: Go beyond React and solidify your knowledge in core web technologies like HTML, CSS, and JavaScript (ES6+). Aim to understand how the web works under the hood.<br/>

02. React Ecosystem: Dive deeper into React's ecosystem — Redux or other state management libraries, React Router, React Query, and testing frameworks like Jest or React Testing Library.<br/>

03. Backend Knowledge: Learn the basics of backend development (Node.js, Express, databases) to become a more versatile full-stack developer.<br/>

04. Performance Optimization: Develop skills in optimizing React apps for performance, focusing on things like lazy loading, reducing bundle size, and effective state management.<br/>

05. Build Real Projects: Take on challenging projects that solve real-world problems or contribute to open-source projects to build a strong portfolio.<br/>

06. Stay Updated: Follow industry trends and new React features (like Server Components) to remain competitive.<br/>

07 .Career Goals: Think about specializing (e.g., UI/UX design) or aiming for leadership roles, such as becoming a tech lead or a solution architect in the long run.</p>
          </div>
          <div>
            <img src={about_2} alt="" className='w-[90px] h-[90px]' />
            <span className='text-[30px] text-white my-[30px] font-semibold'>My Purpose</span>

            <p className='text-[#A2A2A2] text-[16px] my-[15px]'> <span className="text-[18px] font-semibold">01. Crafting User Experiences:</span> Your work directly impacts how users interact with web applications. The purpose is to create intuitive, dynamic, and responsive UIs that make users' digital interactions enjoyable and meaningful.<br/>

<span className="text-[18px] font-semibold">02. Efficient Development:</span> React is known for its component-based architecture, which encourages reusability and maintainability. As a React developer, your goal is to build scalable components that can be reused, reducing redundancy and speeding up the development process.<br/>

<span className="text-[18px] font-semibold">03. Optimizing Performance:</span> Ensuring fast loading times, smooth interactions, and optimized rendering are crucial. React developers often work to minimize bottlenecks and use tools like React Profiler to boost performance.<br/>

<span className="text-[18px] font-semibold">04. Bridging UI and Logic:</span> React enables developers to tightly integrate the UI with application logic through hooks, state management, and props. Your purpose is to connect user interactions seamlessly with underlying data and logic, creating a fluid experience.<br/>

<span className="text-[18px] font-semibold">05. Keeping Up with Trends:</span> React is a constantly evolving library with frequent updates and new features. Staying current ensures that your projects are secure, efficient, and leverage modern best practices.<br/>

<span className="text-[18px] font-semibold">06. Collaborating in Teams:</span> As part of a development team, your purpose extends to working alongside designers, backend developers, and other stakeholders to deliver cohesive, user-centric products.<br/>

<span className="text-[18px] font-semibold">07. Empowering Innovation:</span> By leveraging React’s flexibility, your purpose is to push the boundaries of what web applications can do, whether it’s by adopting new libraries, improving accessibility, or integrating powerful features like animations or real-time updates.</p>
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
