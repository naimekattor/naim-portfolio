import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaCommentDots } from "react-icons/fa";
const Card = ({ data }) => {
  console.log(data);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-8'>
      {
        data.map((curElem) => <div key={curElem} className=' drop-shadow cursor-pointer '>
          <div className='relative'>
            <img className=' w-[350px] h-[300px]' src={curElem.urlToImage} alt="" />
            <span className=' absolute top-2 right-8 bg-[#55e6a5] text-black p-2 rounded drop-shadow-md'>10 june</span>
          </div>

          <div className='flex gap-4 my-4'>
            <span className='text-[#55e6a5] text-[14px]'><CgProfile /></span>
            <span className=' text-white text-[14px] font-semibold'>By admin</span>
            <span className='text-[#55e6a5] text-[14px]'><FaCommentDots />
            </span>
            <span className=' text-white text-[14px] font-semibold'>Comments(05)</span>
          </div>
          <h2 className='text-[16px] text-white font-semibold mb-[16px]'>{curElem.title}</h2>
          <p className=' text-[#a2a2a2] text-[14px] font-semibold'>{curElem.description}</p>
          <span><a className='text-white' href={curElem.url}>More...</a></span>
        </div>)
      }

    </div>

  );
};

export default Card;