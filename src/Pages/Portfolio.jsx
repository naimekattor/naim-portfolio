import React, { useState } from 'react';
import { gallerydata } from '../skillsData';
import Modal from '../Components/Modal';
import ThreeDCarousel from '../Components/ThreeDCarousel';
import Carousel3D from '../Components/Carousel3D';
import project2 from "../assets/images/progressbar-02KUBb8P.png";
import project3 from "../assets/images/quizzapp--crAInoF.png";
import project4 from "../assets/images/gadget-shop.jpeg";
import project1 from "../assets/images/handson1.png";
const Portfolio = () => {


  const customSlides = [
    {
      title: "Modern Portfolio Website",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      description: "A clean, animated portfolio website showcasing projects, skills, and contact info.",
      liveLink: "https://your-portfolio-live-link.com",
      liveIcon: "🔗",
      codeLink: "https://github.com/yourusername/portfolio",
      codeIcon: "💻",
      imageUrl: project1
    },
    {
      title: "E-commerce Electronics Store",
      tech: ["Next.js", "Redux Toolkit", "Stripe API"],
      description: "An online electronics shop with product filtering, search, and secure checkout system.",
      liveLink: "https://your-electronics-store.com",
      liveIcon: "🔗",
      codeLink: "https://github.com/yourusername/ecommerce-store",
      codeIcon: "📦",
      imageUrl: project2
    },
    {
      title: "AI Blog Generator",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
      description: "A blog platform where users can generate full articles using AI with SEO optimization.",
      liveLink: "https://your-ai-blog-app.com",
      liveIcon: "🔗",
      codeLink: "https://github.com/yourusername/ai-blog-generator",
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