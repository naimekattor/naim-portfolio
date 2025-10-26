import React, { useState, useRef, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Modern Gardening With GreenWorld",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      description:
        "A vibrant gardeners community platform where gardening enthusiasts can share expert tips, exchange ideas, and cultivate a thriving community. Features include user profiles, community forums, and resource sharing.",
      features: [
        "Community forum with real-time discussions",
        "User profiles and gardening history",
        "Tip sharing and rating system",
        "Responsive mobile design",
        "Secure authentication",
      ],
      liveLink: "https://gardening-34dc8.web.app/",
      codeLink: "https://github.com/naimekattor",
      image: "🌱",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      title: "Refabry E-commerce Store",
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "MongoDB"],
      description:
        "A modern e-commerce platform with advanced product filtering, intelligent search functionality, and a secure checkout system. Optimized for conversions and user experience.",
      features: [
        "Dynamic product filtering and search",
        "Shopping cart with persistent storage",
        "Secure payment gateway integration",
        "Order tracking and history",
        "Admin dashboard for inventory management",
      ],
      liveLink: "https://refabry.vercel.app",
      codeLink: "https://github.com/naimekattor",
      image: "🛍️",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Language Learning Platform",
      tech: [
        "React.js",
        "React Router",
        "Tailwind CSS",
        "Firebase",
        "Node.js",
        "Express.js",
        "JWT",
        "MongoDB",
      ],
      description:
        "An innovative language learning platform connecting students with native language tutors. Features booking system, progress tracking, and personalized learning paths.",
      features: [
        "Tutor discovery and booking system",
        "Video call integration",
        "Progress tracking and analytics",
        "Personalized learning recommendations",
        "Secure payment processing",
        "Chat and messaging system",
      ],
      liveLink: "https://friendly-beignet-ea5754.netlify.app",
      codeLink: "https://github.com/naimekattor",
      image: "📚",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      title: "Gadget Shop E-commerce",
      tech: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB"],
      description:
        "A cutting-edge e-commerce platform specializing in electronics and gadgets. Built with modern UI principles, state management, and responsive design for seamless shopping experience.",
      features: [
        "Advanced product filtering",
        "Real-time inventory updates",
        "Wishlist functionality",
        "Customer reviews and ratings",
        "Multiple payment options",
        "Fast checkout process",
      ],
      liveLink: "https://your-gadget-shop.com",
      codeLink: "https://github.com/yourusername/gadget-shop",
      image: "🎮",
      color: "from-orange-500 to-red-600",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(autoPlayRef.current);
  }, [projects.length]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const getVisibleIndices = () => {
    return [
      (activeIndex - 1 + projects.length) % projects.length,
      activeIndex,
      (activeIndex + 1) % projects.length,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-700 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest px-4 py-2 rounded-full border border-gray-700">
              My Work
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Explore My
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Recent Projects
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Click on any project to view detailed information, technologies
            used, and live links.
          </p>
        </div>
      </div>

      {/* 3D Carousel Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative h-80 sm:h-96 md:h-[500px] perspective w-full flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const position = visibleIndices.indexOf(index);
              let transform = "";
              let opacity = 0;
              let zIndex = 0;

              if (position === 0) {
                transform = "translateX(-120%) scale(0.75) rotateY(35deg)";
                opacity = 0.5;
                zIndex = 1;
              } else if (position === 1) {
                transform = "translateX(0) scale(1) rotateY(0deg)";
                opacity = 1;
                zIndex = 10;
              } else if (position === 2) {
                transform = "translateX(120%) scale(0.75) rotateY(-35deg)";
                opacity = 0.5;
                zIndex = 1;
              } else {
                transform = "translateX(200%) scale(0.6) rotateY(-60deg)";
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={project.id}
                  className="absolute w-full sm:w-4/5 md:w-3/5 h-full transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl group">
                    {/* Card Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8">
                      {/* Top */}
                      <div>
                        <div className="text-5xl sm:text-6xl mb-4">
                          {project.image}
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">
                          {project.title}
                        </h2>
                        <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Bottom */}
                      <div className="flex items-end justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-white/20 backdrop-blur px-2 py-1 rounded text-white/90"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-xs bg-white/20 backdrop-blur px-2 py-1 rounded text-white/90">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                        <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all text-xs sm:text-sm group-hover:scale-105">
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-12 sm:mt-16">
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 transition-all duration-300 transform hover:scale-110 group"
          >
            <AiOutlineArrowLeft
              className="text-gray-400 group-hover:text-white transition-colors"
              size={24}
            />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlay(false);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white w-8"
                    : "bg-gray-700 w-2 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 transition-all duration-300 transform hover:scale-110 group"
          >
            <AiOutlineArrowRight
              className="text-gray-400 group-hover:text-white transition-colors"
              size={24}
            />
          </button>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <span className="font-semibold text-white">{activeIndex + 1}</span> /{" "}
          {projects.length}
        </div>
      </div>

      {/* Modal - Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all z-20"
            >
              <FaTimes size={20} />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-10">
              {/* Icon and Title */}
              <div className="mb-6">
                <div className="text-6xl mb-4">{selectedProject.image}</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400">{selectedProject.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
                >
                  <FaExternalLinkAlt size={18} />
                  View Live Demo
                </a>
                <a
                  href={selectedProject.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all border border-gray-700 hover:border-gray-600"
                >
                  <FaGithub size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
