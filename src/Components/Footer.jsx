import React from 'react';

const Footer = () => {
  return (
    <div className=' w-[100%] h-[100%]] bg-[#09101a] mt-[20px]'>
      <hr />
      <div className='flex py-[60px] gap-4 justify-between px-2'>
        <p className='text-[16px] text-[#a2a2a2] font-semibold hover:text-[#55e6a5] cursor-pointer'>© NaimEkattor 2024 | All Rights Reserved</p>
        <div className='text-[16px] text-[#a2a2a2] font-semibold hover:text-[#55e6a5] cursor-pointer'>Terms & Conditions</div>
        <div className='text-[16px] text-[#a2a2a2] font-semibold hover:text-[#55e6a5] cursor-pointer'>Privacy Policy</div>
        <div className='text-[16px] text-[#a2a2a2] font-semibold hover:text-[#55e6a5] cursor-pointer'>SiteMap</div>
      </div>
    </div>
  );
};

export default Footer;