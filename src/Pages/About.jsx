import { useEffect, useRef, useState } from "react";
import { FaPencilRuler, FaCode, FaPalette, FaRocket } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

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

  const aboutItems = [
    {
      title: "Mastering Frontend Skills",
      description:
        "Go beyond React and solidify your knowledge in core web technologies like HTML, CSS, and JavaScript (ES6+). Understanding how the web works under the hood.",
      icon: <FaCode />,
    },
    {
      title: "Crafting User Experiences",
      description:
        "Your work directly impacts how users interact with web applications. Create intuitive, dynamic, and responsive UIs that make digital interactions enjoyable and meaningful.",
      icon: <FaPalette />,
    },
    {
      title: "Empowering Innovation",
      description:
        "Leverage flexibility to push boundaries of web applications, whether through new libraries, improved accessibility, or integrating powerful features.",
      icon: <FaRocket />,
    },
    {
      title: "React Ecosystem Mastery",
      description:
        "Dive deeper into React's ecosystem — Redux, React Router, React Query, and testing frameworks like Jest and React Testing Library.",
      icon: <FaCode />,
    },
  ];

  const services = [
    {
      icon: <FaPencilRuler />,
      title: "Web Design",
      count: "30+",
      label: "Projects",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      count: "25+",
      label: "Projects",
    },
    { icon: <FaCode />, title: "Development", count: "45+", label: "Projects" },
    {
      icon: <FaRocket />,
      title: "Optimization",
      count: "18+",
      label: "Projects",
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-700 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Navigation Spacer */}
      <div className="h-20"></div>

      {/* Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest px-4 py-2 rounded-full border border-gray-700">
              About Me
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Crafting Stories Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Design & Innovation
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm passionate about creating meaningful digital experiences that
            combine technical excellence with thoughtful design.
          </p>
        </div>

        {/* About Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 overflow-hidden transform
                ${
                  visibleCards.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                  <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-gray-500 group-hover:text-white transition-all duration-300">
                  <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-20 sm:mb-28"></div>

        {/* Services Stats */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            Expertise & Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 text-center hover:shadow-2xl hover:shadow-gray-900/50"
              >
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-2xl text-gray-300 group-hover:text-white transition-colors">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-2">
                    <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                      {service.count}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 uppercase tracking-wide">
                      {service.label}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="mt-6 h-1 w-8 mx-auto bg-gradient-to-r from-gray-600 to-gray-700 rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-lg bg-gradient-to-r from-gray-900 to-black border border-gray-800 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Ready to collaborate? Let's discuss your next project.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
            Get In Touch
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
