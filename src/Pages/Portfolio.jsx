import React, { useState } from 'react';
import { gallerydata } from '../skillsData';
import Modal from '../Components/Modal';
import ThreeDCarousel from '../Components/ThreeDCarousel';
import Carousel3D from '../Components/Carousel3D';
import project2 from "../assets/images/Refabry.png";
import project3 from "../assets/images/learnup.png";
import project4 from "../assets/images/gadget-shop.jpeg";
import project1 from "../assets/images/responsive.png";
const Portfolio = () => {


  const customSlides = [
    {
      title: "Modern Gardening With GreenWorld",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Node JS", "Express Js", "MongoDB"],
      description: "A gardeners community website, where gardeners share tips and create a community",
      liveLink: "https://gardening-34dc8.web.app/",
      liveIcon: "🔗",
      codeLink: "https://github.com/naimekattor",
      codeIcon: "💻",
      imageUrl: project1
    },
    {
      title: "Refabry E-commerce Store",
      tech: ["React.js", "Redux Toolkit", "Tailwind css"],
      description: "An online E-commerce shop with product filtering, search, and secure checkout system.",
      liveLink: "https://refabry.vercel.app",
      liveIcon: "🔗",
      codeLink: "https://github.com/naimekattor",
      codeIcon: "📦",
      imageUrl: project2
    },
    {
      title: "Language Learning platform",
      tech: ["React.js", "React Router", "Tailwind CSS", "Firebase", "Node Js", "Express Js", "JWT", "MongoDB"],
      description: "A Language Learning platform where users can find theire native language tutor,booked tutor,add tutor",
      liveLink: "https://friendly-beignet-ea5754.netlify.app",
      liveIcon: "🔗",
      codeLink: "https://github.com/naimekattor/",
      codeIcon: "🧠",
      imageUrl: project3
    },
    {
      title: "Gadget Shop E-commerce",
      tech: ["React", "Redux", "Tailwind CSS"],
      description: "An e-commerce platform for gadgets with modern UI, state management, and responsive design.",
      liveLink: "https://your-gadget-shop.com",
      liveIcon: "🔗",
      codeLink: "https://github.com/yourusername/gadget-shop",
      codeIcon: "🛒",
      imageUrl: project4
    }
  ];


  return (
    <div className="overflow-hidden w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">

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