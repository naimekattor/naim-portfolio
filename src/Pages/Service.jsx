import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      icon: <FaCode />,
      title: "Website Design",
      description:
        "Crafting beautiful, intuitive digital experiences through strategic consultation and in-depth UX research. We understand your brand, target audience, and goals to create designs that truly engage and convert.",
      features: [
        "UX Research",
        "Brand Strategy",
        "User Experience",
        "Design Systems",
      ],
    },
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "Transforming designs into fully functional, high-performance websites. Leveraging modern technologies like React, Node.js, and responsive frameworks to build solutions that scale with your business.",
      features: [
        "Front-End Dev",
        "Back-End Solutions",
        "CMS Integration",
        "Performance",
      ],
    },
    {
      icon: <FaPalette />,
      title: "Visual Design",
      description:
        "Creating visually stunning and brand-consistent designs across all platforms. From responsive layouts to graphic design, we ensure your brand stands out on every device and screen size.",
      features: ["Responsive Design", "Branding", "Graphics", "Accessibility"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-700 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      {/* Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest px-4 py-2 rounded-full border border-gray-700">
              Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Bringing Your Vision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              to Life with Precision
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs. From concept
            to launch, we deliver excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-gray-600 transition-all duration-500 overflow-hidden transform
                ${
                  visibleCards.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-800/50">
                  <span className="text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 group-hover:from-white group-hover:to-gray-300 transition-colors duration-300"></div>
                      <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-gray-500 group-hover:text-white transition-all duration-300 font-semibold text-sm">
                  Learn More
                  <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gray-600 to-gray-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 sm:mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Info Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 sm:p-10 hover:border-gray-600 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>Expert team with 5+ years of industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>Custom solutions tailored to your business needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>100% responsive and performance-optimized</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                  <span>Ongoing support and maintenance included</span>
                </li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 sm:p-10 hover:border-gray-600 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  Let's collaborate on your next project and create something
                  extraordinary together.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 w-fit">
                Get Started
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 sm:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-4 sm:p-6 text-center hover:border-gray-600 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold mb-2">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
