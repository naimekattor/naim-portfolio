import React, { useState, useEffect, useRef } from "react";
import {
  FaCalendar,
  FaUser,
  FaClock,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";

const Blog = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const cardsRef = useRef([]);

  // Sample blog data
  const blogData = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn best practices for structuring React applications that can grow with your business needs.",
      content:
        "This comprehensive guide covers component architecture, state management strategies, performance optimization, and testing approaches for large-scale React applications.",
      author: "Naim Kattor",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices"],
      image: "⚛️",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS for Modern UI",
      excerpt:
        "Explore advanced Tailwind CSS techniques to create stunning, responsive user interfaces.",
      content:
        "Discover how to leverage Tailwind CSS utilities effectively, create custom components, implement dark mode, and build responsive designs with minimal custom CSS.",
      author: "Naim Kattor",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "CSS",
      tags: ["Tailwind CSS", "UI Design", "Responsive"],
      image: "🎨",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features Explained",
      excerpt:
        "Deep dive into modern JavaScript features that will transform the way you code.",
      content:
        "Understanding destructuring, arrow functions, async/await, spread operators, and other ES6+ features to write cleaner, more efficient JavaScript code.",
      author: "Naim Kattor",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES6+", "Best Practices"],
      image: "📜",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: 4,
      title: "Web Performance Optimization Tips",
      excerpt:
        "Techniques to significantly improve your website performance and user experience.",
      content:
        "Learn about code splitting, lazy loading, image optimization, caching strategies, and monitoring tools to ensure your web applications load faster.",
      author: "Naim Kattor",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web"],
      image: "⚡",
      color: "from-red-500 to-rose-600",
    },
    {
      id: 5,
      title: "Getting Started with Node.js",
      excerpt:
        "A beginner-friendly introduction to backend development with Node.js.",
      content:
        "Explore Node.js fundamentals, Express.js framework, REST API development, middleware, error handling, and best practices for building robust backend applications.",
      author: "Naim Kattor",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Backend",
      tags: ["Node.js", "Express", "Backend"],
      image: "🚀",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      title: "Database Design Best Practices",
      excerpt:
        "Essential principles for designing efficient and scalable databases.",
      content:
        "Learn about normalization, indexing, query optimization, relationships, and how to choose between SQL and NoSQL databases for your specific use case.",
      author: "Naim Kattor",
      date: "Dec 1, 2024",
      readTime: "11 min read",
      category: "Database",
      tags: ["Database", "SQL", "NoSQL"],
      image: "🗄️",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const categories = [
    "All",
    "React",
    "JavaScript",
    "CSS",
    "Backend",
    "Performance",
    "Database",
  ];

  // Filter blogs
  const filteredBlogs = blogData.filter((blog) => {
    const matchCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

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
  }, [filteredBlogs]);

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
              Blog & Articles
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Crafting Unique <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Experiences & Inspiring Connections
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Insights, tutorials, and best practices on web development, design,
            and technology.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 sm:mb-16">
          <div className="relative max-w-2xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 text-white placeholder-gray-500 pl-12 pr-6 py-3 sm:py-4 rounded-lg focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-white text-black shadow-lg"
                    : "bg-gray-900 text-gray-300 border border-gray-800 hover:border-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-500 transform cursor-pointer
                  ${
                    visibleCards.includes(index)
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }
                `}
              >
                {/* Card Header with Image Icon */}
                <div
                  className={`relative bg-gradient-to-br ${blog.color} p-6 sm:p-8 h-24 sm:h-32 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                >
                  <span className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">
                    {blog.image}
                  </span>
                  <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {blog.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendar size={12} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock size={12} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                      >
                        <AiOutlineTag size={10} />
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-white transition-all duration-300 mt-auto">
                    Read Article
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gray-600 to-gray-400 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No articles found matching your search.
            </p>
          </div>
        )}

        {/* Results Counter */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm sm:text-base">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredBlogs.length}
            </span>{" "}
            article{filteredBlogs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-20 sm:mt-28 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-8 sm:p-12 text-center hover:border-gray-600 transition-all duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Subscribe to My Newsletter
          </h3>
          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Get the latest articles, tips, and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-900 border border-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-600 transition-colors"
            />
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
