import { useState, useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import {
  FaHome, FaBook
} from "react-icons/fa";
import {
  MdDesignServices, MdContactMail
} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { FiShoppingBag } from "react-icons/fi";
import N from '../assets/images/logo3.png';
import { fadeIn, slideInLeft, hoverScale } from '../utils/gsapAnimations';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const hamburgerRef = useRef(null);

  const handleNavBar = () => {
    setNavMenu(!navMenu);
  };

  useEffect(() => {
    // Logo animation
    if (logoRef.current) {
      fadeIn(logoRef.current, 1, 0.2);
    }

    // Nav items stagger animation
    if (navItemsRef.current.length > 0) {
      navItemsRef.current.forEach((item, index) => {
        slideInLeft(item, 0.8, index * 0.1);
        hoverScale(item, 1.05);
      });
    }

    // Hamburger button animation
    if (hamburgerRef.current) {
      fadeIn(hamburgerRef.current, 0.8, 0.5);
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Hamburger for small screens */}
      <div 
        ref={hamburgerRef}
        className='lg:hidden fixed top-4 left-4 z-50 text-3xl text-[#ffffff] bg-[#f58c0f] p-2 rounded cursor-pointer hover:bg-[#e67e0e] transition-colors duration-300'
      >
        {navMenu ? <RxCross1 onClick={handleNavBar} /> : <FaBars onClick={handleNavBar} />}
      </div>

      <aside className={`lg:block w-[250px] h-screen md:bg-[#fdf2ba] bg-[#ffffff] z-40 transform transition-transform duration-300 
        ${navMenu ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>

        <div className='h-screen flex flex-col p-4'>
          <div className='mb-10 px-4'>
            <img 
              ref={logoRef}
              src={N} 
              alt="Logo" 
              className="w-full cursor-pointer" 
            />
          </div>
          <ul className='flex flex-col gap-4 px-4'>
            {[
              { icon: <FaHome />, label: 'Home', path: '/' },
              { icon: <FaBook />, label: 'About Me', path: '/about' },
              { icon: <MdDesignServices />, label: 'Service', path: '/service' },
              { icon: <GiSkills />, label: 'Skills', path: '/skills' },
              { icon: <FiShoppingBag />, label: 'Portfolio', path: '/portfolio' },
              { icon: <ImBlogger2 />, label: 'Blog', path: '/blog' },
              { icon: <MdContactMail />, label: 'Contact', path: '/contact' },
            ].map(({ icon, label, path }, index) => (
              <NavLink to={path} key={path} onClick={() => setNavMenu(false)}>
                <li 
                  ref={addToRefs}
                  className='flex items-center gap-4 border border-[#f58c0f] group cursor-pointer p-2 rounded text-[#000000] hover:text-[#f58c0f] transition-all duration-300 hover:shadow-lg hover:border-[#e67e0e]'
                >
                  <span className='text-white bg-[#222831] p-3 rounded group-hover:bg-[#f58c0f] group-hover:text-black transition-all duration-300'>
                    {icon}
                  </span>
                  <span className="uppercase font-medium">{label}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
