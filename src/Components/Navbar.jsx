import { useState, useEffect, useRef } from "react";
import { FaBars, FaHome, FaBook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { MdDesignServices, MdContactMail } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { icon: <FaHome />, label: "Home", path: "/" },
    { icon: <FaBook />, label: "About", path: "/about" },
    { icon: <MdDesignServices />, label: "Services", path: "/service" },
    { icon: <GiSkills />, label: "Skills", path: "/skills" },
    { icon: <FiShoppingBag />, label: "Portfolio", path: "/portfolio" },
    { icon: <ImBlogger2 />, label: "Blog", path: "/blog" },
    { icon: <MdContactMail />, label: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navMenu && !e.target.closest("nav")) {
        setNavMenu(false);
      }
    };

    if (navMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [navMenu]);

  const handleNavClick = (path) => {
    setActiveLink(path);
    setNavMenu(false);
    window.scrollTo(0, 0);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setNavMenu(!navMenu);
  };

  const isActive = (path) => activeLink === path;

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-200"
            : "bg-black border-b border-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 min-w-fit">
              <Link
                to={"/"}
                className={`text-xl sm:text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Naim
                </span>
                <span className={scrolled ? "text-black" : "text-white"}>
                  .dev
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
              <ul className="flex items-center gap-1">
                {navItems.map(({ icon, label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => handleNavClick(path)}
                      className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                        isActive(path)
                          ? scrolled
                            ? "bg-black text-white shadow-md"
                            : "bg-white text-black shadow-md"
                          : scrolled
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-300 hover:bg-gray-900 hover:text-white"
                      }`}
                    >
                      <span className="text-base lg:text-lg">{icon}</span>
                      <span className="hidden xl:inline text-xs lg:text-sm">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                scrolled
                  ? "text-black hover:bg-gray-200"
                  : "text-white hover:bg-gray-900"
              }`}
            >
              {navMenu ? (
                <RxCross1 className="text-2xl sm:text-3xl" />
              ) : (
                <FaBars className="text-2xl sm:text-3xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>

      {/* Mobile Menu Overlay - Full Screen Slide from Top Left */}
      {navMenu && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setNavMenu(false)}
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setNavMenu(false)}
          ></div>

          {/* Slide Menu from Top Left */}
          <div
            className={`absolute top-0 left-0 h-screen w-full sm:w-96 bg-gradient-to-br from-gray-900 to-black shadow-2xl border-r border-gray-800 transform transition-transform duration-300 ease-out ${
              navMenu ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 border-b border-gray-800">
              <div className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Menu
                </span>
              </div>
              <button
                onClick={() => setNavMenu(false)}
                className="p-2 text-white hover:bg-gray-800 rounded-lg transition-all"
              >
                <RxCross1 className="text-2xl" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="overflow-y-auto h-[calc(100vh-80px)] px-4 sm:px-6 py-6">
              <ul className="space-y-2">
                {navItems.map(({ icon, label, path }, index) => (
                  <li
                    key={path}
                    className={`transform transition-all duration-300 ${
                      navMenu
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                    style={{
                      transitionDelay: navMenu ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    <Link
                      to={path}
                      onClick={() => handleNavClick(path)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 font-semibold text-base group ${
                        isActive(path)
                          ? "bg-white text-black shadow-lg"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <span
                        className={`text-2xl transition-transform duration-300 ${
                          isActive(path) ? "scale-110" : "group-hover:scale-110"
                        }`}
                      >
                        {icon}
                      </span>
                      <span>{label}</span>
                      {isActive(path) && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-white"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links at Bottom */}
              <div className="mt-12 pt-6 border-t border-gray-800">
                <p className="text-gray-500 text-sm font-semibold mb-4 px-2">
                  CONNECT
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-white hover:scale-110"
                  >
                    GH
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-white hover:scale-110"
                  >
                    LI
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 text-white hover:scale-110"
                  >
                    TW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
