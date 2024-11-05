import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { blogData } from '../skillsData';
const Blog = () => {

  return (
    <div className='w-[100%] h-[100%] mx-auto lg:px-[15%] md:px-[10%] px-[2%] bg-[#02050a]'>
      <div className='py-8'>
        <h1 className='text-[20px] pt-[100px] text-[#55e5a6] font-semibold uppercase '>all blog</h1>
        <h2 className='text-[52px] text-white font-RegularBold'>Rafting Unique Experiences
          Inspiring Connections</h2>
      </div>
      <Card data={blogData} />
    </div>
  );
};

export default Blog;