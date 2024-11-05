import React from 'react';
import calculator from "../assets/images/calculator-EPmSDPXM.png"
import { RxCross1 } from "react-icons/rx";

const Modal = ({ project, url, webUrl, close }) => {

  return (
    <div className=' fixed left-0 top-0 flex justify-center items-center bg-[rgba(0,0,0,0.7)] w-screen h-screen overflow-hidden z-10'>
      <div className='md:p-[30px] py-[5px] bg-[#09101a] rounded relative flex flex-col md:gap-4 gap-2 justify-center items-center '>
        <h2 className='font-semibold text-2xl text-[#55e6a5] text-center'>Project Name</h2>
        <div className='grid lg:grid-cols-2 gap-8'>
          <span className='text-[14px] font-semibold text-white'>Project: {project}</span>

          <span className='text-[14px] font-semibold text-white'> Language : Html,Css3,Tailwind,JavaScript,React Js</span>
        </div>
        <div className='grid lg:grid-cols-2 gap-4'>
          <span className='text-[14px] font-semibold text-white'>Client : American</span>

          <span className='text-[14px] font-semibold text-white'>Preview : <a href={webUrl}>{webUrl}</a> </span>
        </div>
        <div className='md:w-[400px] w-[300px]'>
          <img className='drop-shadow-lg md:w-96 w-[300px] h-[300px] rounded' src={url} alt="" />
        </div>
        <button onClick={close} className='absolute right-0 top-0 text-2xl bg-white p-3 rounded-full'><RxCross1 />
        </button>
      </div>


    </div>
  );
};

export default Modal;