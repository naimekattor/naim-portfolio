import React, { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardsRef = useRef([]);

  const contactInfo = [
    {
      id: 1,
      icon: <FaPhone />,
      title: "Phone",
      description: "Let's talk about your next project",
      content: "+880 1518 920 316",
      link: "https://wa.me/8801518920316",
      linkText: "Message on WhatsApp",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt />,
      title: "Location",
      description: "Based in Dhaka, Bangladesh",
      content: "11/A, Mirpur-2, Dhaka-1216",
      link: "https://maps.google.com/?q=Mirpur+Dhaka",
      linkText: "View on Map",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: "Email",
      description: "Send me an email anytime",
      content: "naimekattor@gmail.com",
      link: "mailto:naimekattor@gmail.com",
      linkText: "Send Email",
      color: "from-orange-500 to-red-600",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", subject: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-x-hidden">
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
              Get In Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Let's Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
              Conversation
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to discuss how we can work together
            to bring your vision to life.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {contactInfo.map((info, index) => (
            <div
              key={info.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-gray-600 transition-all duration-500 transform
                ${
                  visibleCards.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }
              `}
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${info.color} mb-6 group-hover:shadow-lg group-hover:shadow-blue-900/50 transition-all duration-300`}
              >
                <span className="text-2xl text-white">{info.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{info.description}</p>

              {/* Contact Content */}
              <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">
                <p className="text-white font-semibold text-lg">
                  {info.content}
                </p>
              </div>

              {/* Link */}
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 group-hover:text-white transition-all duration-300 font-semibold text-sm"
              >
                {info.linkText}
                <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Hover Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gray-600 to-gray-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-8 sm:p-12 hover:border-gray-600 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
              Send Me a Message
            </h2>
            <p className="text-gray-400 text-center mb-8">
              I'll get back to you as soon as possible
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <FaCheckCircle className="text-3xl text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400 text-center">
                  Thank you for reaching out. I'll review your message and get
                  back to you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-5">
                {/* Name Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 sm:py-4 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 group-hover:border-gray-600"
                  />
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project topic or inquiry"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 sm:py-4 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 group-hover:border-gray-600"
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 sm:py-4 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 group-hover:border-gray-600"
                  />
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 group-hover:border-gray-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-base sm:text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy. We
                  respect your privacy and will never share your information.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 sm:mt-24 grid grid-cols-3 gap-4 sm:gap-6">
          {[
            { number: "24hrs", label: "Response Time" },
            { number: "100%", label: "Satisfaction" },
            { number: "Available", label: "For Projects" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-4 sm:p-6 text-center hover:border-gray-600 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-bold mb-1">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Divider */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
    </div>
  );
};

export default Contact;
