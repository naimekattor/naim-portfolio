import React, { useState } from 'react';
import { gallerydata } from '../skillsData';
import Modal from '../Components/Modal';
import ThreeDCarousel from '../Components/ThreeDCarousel';
import Carousel3D from '../Components/Carousel3D';

const Portfolio = () => {


  const customSlides = ["A", "B", "C"];


  return (
    <div className="overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">

      {/* Carousel Section */}
      <div className='w-full h-full flex items-center justify-center pt-24'>
        <ThreeDCarousel
          slides={customSlides}

        />

      </div>


    </div>
  );
};

export default Portfolio;