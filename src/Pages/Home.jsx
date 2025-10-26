import { useState, useEffect, useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import naim from "../assets/images/banner3.png";
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const profileImageRef = useRef(null);
  const socialSectionRef = useRef(null);
  const contentRef = useRef(null);

  // Parallax and scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      if (profileImageRef.current) {
        profileImageRef.current.style.transform = `translateY(${
          scrollY * 0.3
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for subtle hover effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { label: "Facebook", url: "https://www.facebook.com/" },
    { label: "Twitter", url: "https://x.com/" },
    { label: "Instagram", url: "https://www.instagram.com/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-700 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Navigation Spacer */}
        <div className="h-20"></div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
            {/* Left Section - Image */}
            <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                {/* Image Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur-lg opacity-30"></div>

                {/* Profile Image */}
                <div
                  ref={profileImageRef}
                  className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 p-1"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
                    {/* <div className="text-center">
                      <div className="text-6xl font-bold text-gray-700 mb-4">
                        NK
                      </div>
                      <p className="text-gray-500">Portfolio Image</p>
                    </div> */}
                    <img src={naim} alt="naim" srcset="" />
                  </div>
                </div>

                {/* Social Links Box */}
                <div
                  ref={socialSectionRef}
                  className="absolute -bottom-6 -right-6 bg-white text-black rounded-2xl shadow-2xl p-6 w-fit backdrop-blur-lg border border-gray-200"
                >
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm font-semibold hover:text-gray-600 transition-colors duration-300 group"
                      >
                        <span className="group-hover:translate-x-1 inline-block transition-transform">
                          {link.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Content */}
            <div
              ref={contentRef}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Subtitle */}
              <div className="mb-6 inline-block lg:inline-block">
                <span className="text-sm sm:text-base font-semibold text-gray-400 uppercase tracking-widest">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Main Headline */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Naim
                  </span>
                </h1>

                {/* Typewriter Effect */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 h-20 lg:h-24 flex items-center">
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "UI/UX Designer",
                        "Creative Coder",
                        "Problem Solver",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 80,
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Crafting beautiful, intuitive digital experiences with 5+ years
                of expertise. I specialize in building contemporary web
                applications with meticulous attention to detail and
                user-centric design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 group"
                >
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-900 transition-all duration-300"
                >
                  <IoMdPlay className="text-sm" />
                  Get In Touch
                </Link>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800">
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold">50+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Projects</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold">30+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Clients</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold">5+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Years Exp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center items-center py-12 text-gray-500 animate-bounce">
            <AiOutlineDown className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
