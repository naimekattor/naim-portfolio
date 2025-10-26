import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const skillsData = [
    {
      id: 1,
      title: "React & Next.js",
      description:
        "Expert in building scalable, performant web applications with React hooks, state management, and Next.js framework.",
      proficiency: 95,
    },
    {
      id: 2,
      title: "JavaScript (ES6+)",
      description:
        "Deep knowledge of modern JavaScript, async/await, promises, and functional programming paradigms.",
      proficiency: 92,
    },
    {
      id: 3,
      title: "Tailwind CSS",
      description:
        "Proficient in utility-first CSS for rapid development of responsive, modern user interfaces.",
      proficiency: 90,
    },
    {
      id: 4,
      title: "TypeScript",
      description:
        "Strong typing and object-oriented programming with TypeScript for maintainable code.",
      proficiency: 88,
    },
    {
      id: 5,
      title: "Node.js & Express",
      description:
        "Backend development expertise with Node.js, Express, and RESTful API design.",
      proficiency: 85,
    },
    {
      id: 6,
      title: "Database Design",
      description:
        "Experience with SQL, MongoDB, and database optimization for performance.",
      proficiency: 82,
    },
  ];

  const experienceData = [
    {
      id: 1,
      role: "Junior Frontend Developer",
      company: "Join Venture Ai",
      period: "2025 - Present",
      description:
        "Leading frontend team, architecting scalable React applications, mentoring junior developers.",
      achievements: [
        "Improved performance by 40%",
        "Architected design system",
      ],
    },
    {
      id: 2,
      role: "Frontend Developer Intern",
      company: "Itransition.com",
      period: "May 2025 - July 2025",
      description:
        "Developed  applications using React and Node.js for enterprise clients.",
      achievements: ["Reduced load time by 50%", "Implemented CI/CD pipeline"],
    },
    {
      id: 3,
      role: " Frontend Developer Intern ",
      company: "Farse It",
      period: "March 2025  - 2025 June",
      description:
        "Built responsive web applications, collaborated with design team on UI implementation.",
      achievements: ["Learned React in production"],
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      year: "2019",
      description:
        "Focus on web technologies, algorithms, and software engineering principles.",
      courses: [
        "Web Development",
        "Data Structures",
        "Database Systems",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      degree: "Advanced React Developer Certification",
      institution: "Udemy - Advanced React Bootcamp",
      year: "2021",
      description:
        "Intensive course covering advanced React patterns, hooks, and performance optimization.",
      courses: ["React Hooks", "State Management", "Performance", "Testing"],
    },
    {
      id: 3,
      degree: "Full Stack JavaScript Certificate",
      institution: "FreeCodeCamp",
      year: "2020",
      description:
        "Comprehensive program covering JavaScript, Node.js, MongoDB, and React.",
      courses: ["JavaScript", "Node.js", "MongoDB", "React Fundamentals"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  const renderContent = () => {
    let data = [];
    let isTimeline = false;

    if (activeTab === "skills") {
      data = skillsData;
    } else if (activeTab === "experience") {
      data = experienceData;
      isTimeline = true;
    } else {
      data = educationData;
    }

    if (isTimeline) {
      return (
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-700 to-gray-800 transform sm:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-8 pl-20 sm:pl-0">
            {data.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`transform transition-all duration-500 ${
                  visibleItems.includes(index)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1
                      ? "sm:grid-cols-2 sm:[&>:first-child]:order-2 sm:[&>:last-child]:order-1"
                      : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`hidden sm:flex ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    } `}
                  >
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-black z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50">
                    <div className="flex items-start gap-3 mb-4">
                      <FaBriefcase className="text-gray-400 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="text-sm text-gray-500">{item.company}</p>
                        <p className="text-xs text-gray-600 mt-1">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {item.achievements && (
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <FaCheckCircle className="text-gray-500 mt-0.5 flex-shrink-0 text-xs" />
                            <span className="text-xs sm:text-sm text-gray-400">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "education") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`group bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-gray-600 transition-all duration-500 transform
                ${
                  visibleItems.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
            >
              <div className="flex items-start gap-3 mb-4">
                <FaGraduationCap className="text-gray-400 text-lg flex-shrink-0 group-hover:text-white transition-colors" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {item.institution}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{item.year}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Key Courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded group-hover:bg-gray-700 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Skills View
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`group bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-gray-600 transition-all duration-500 transform
              ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
          >
            <div className="flex items-start gap-3 mb-4">
              <FaCode className="text-gray-400 text-lg flex-shrink-0 group-hover:text-white transition-colors" />
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                {item.title}
              </h3>
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {item.description}
            </p>

            {/* Proficiency Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Proficiency
                </p>
                <span className="text-sm font-bold text-gray-300">
                  {item.proficiency}%
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-600 to-gray-500 rounded-full group-hover:from-gray-500 group-hover:to-gray-400 transition-all duration-700"
                  style={{ width: `${item.proficiency}%` }}
                ></div>
              </div>
            </div>

            {/* Hover Indicator */}
            <div className="mt-6 flex items-center gap-2 text-gray-500 group-hover:text-white transition-all duration-300 text-sm font-semibold">
              Learn more
              <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    );
  };

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest px-4 py-2 rounded-full border border-gray-700">
              My Expertise
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Skills, Experience &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Education
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive overview of my professional journey and technical
            expertise.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 sm:mb-20">
          {[
            { id: "skills", label: "Skills", icon: <FaCode /> },
            { id: "experience", label: "Experience", icon: <FaBriefcase /> },
            { id: "education", label: "Education", icon: <FaGraduationCap /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setVisibleItems([]);
                itemsRef.current = [];
              }}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-lg"
                  : "bg-gray-900 text-gray-300 border border-gray-800 hover:border-gray-600"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div>{renderContent()}</div>

        {/* CTA Section */}
        <div className="mt-20 sm:mt-28 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-8 sm:p-12 text-center hover:border-gray-600 transition-all duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Let's Work Together
          </h3>
          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Interested in collaborating on your next project? Let's create
            something amazing.
          </p>
          <Link
            to={"/contact"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
