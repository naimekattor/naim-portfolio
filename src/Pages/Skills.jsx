import React, { useState } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { skillsData } from '../skillsData';
import { NavLink } from 'react-router-dom';

const Skills = () => {
  const [data, setData] = useState(skillsData);
  const [category, setCategory] = useState("Skills");

  const handleFilter = (categoryName) => {
    const dataCopy = skillsData.filter((curElem) => curElem.category === categoryName);
    setData(dataCopy);


  }
  return (
    <div className='lg:px-[15%] md:px-[10%] px-[2%] w-[100%] h-[100%]] bg-[#09101a] mx-auto'>
      <div>
        <h1 className='text-white text-center font-semibold pt-[100px]'>MY Skills</h1>
        <h2 className='text-white text-center font-RegularBold text-[60px] mb-10'>Crafting Stories through Design and
          Imagination</h2>
      </div>
      <div>
        <ul className='flex gap-4 items-center justify-center'>
          <NavLink onClick={() => handleFilter("Skills")} className='p-4 bg-[#141c27] rounded text-white font-semibold hover:bg-[#55E6A5] hover:text-black cursor-pointer '>Skills</NavLink>
          <NavLink onClick={() => handleFilter("Experience")} className='p-4 bg-[#141c27] rounded text-white font-semibold hover:bg-[#55E6A5] hover:text-black cursor-pointer'>Experience</NavLink>
          <NavLink onClick={() => handleFilter("Education")} className='p-4 bg-[#141c27] rounded text-white font-semibold hover:bg-[#55E6A5] hover:text-black cursor-pointer'>Education</NavLink>
        </ul>
      </div>
      <div className='grid sm:grid-cols-2 gap-4 pb-[60px]'>
        {data.map((curElem, index) => (
          <div className='flex gap-2 p-[40px] border rounded mt-[30px]' key={index} >
            <span className='text-[#55E6A5] text-[20px]'><MdDoubleArrow />
            </span>
            <div>
              <h1 className='font-semibold text-white text-[16px] pb-[12px] pr-[30px] '>{curElem.title}</h1>
              <hr className='w-[160px] mb-[20px] ' />
              <h2 className='text-white font-semibold mb-[10px] text-[20px]'>{curElem.sub_title}</h2>
              <h4 className='text-white font-semibold mb-[10px] text-[16px]'>{curElem.session}</h4>

              <p className='text-[#a2a2a2] font-semibold text-[16px] mb-[25px]'>{curElem.description}</p>

              <h2 className='text-white font-semibold mb-[20px] text-[16px]'>Performence</h2>
            </div>
          </div>
        )
        )}
      </div>
    </div >
  );
};

export default Skills;