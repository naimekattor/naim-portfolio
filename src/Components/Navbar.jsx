import { useState } from 'react';
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
import N from '../assets/images/logo1.png';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleNavBar = () => {
    setNavMenu(!navMenu);
  };

  return (
    <>
      {/* Hamburger for small screens */}
      <div className='lg:hidden fixed top-4 left-4 z-50 text-5xl text-[#09101a] bg-[#51e5a8] p-2 rounded cursor-pointer'>
        {navMenu ? <RxCross1 onClick={handleNavBar} /> : <FaBars onClick={handleNavBar} />}
      </div>

      <aside className={`fixed lg:static top-0 left-0 min-h-screen w-[250px] bg-[#09101a] z-40 transform transition-transform duration-300 
        ${navMenu ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>

        <div className='min-h-screen flex flex-col p-4'>
          <div className='mb-10 px-4'>
            <img src={N} alt="Logo" className="w-full" />
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
            ].map(({ icon, label, path }) => (
              <NavLink to={path} key={path} onClick={() => setNavMenu(false)}>
                <li className='flex items-center gap-4 border group cursor-pointer p-2 rounded text-[#a2a2a2] hover:text-[#51e5a8]'>
                  <span className='text-white bg-[#222831] p-3 rounded group-hover:bg-[#51e5a8] group-hover:text-black'>
                    {icon}
                  </span>
                  <span className="uppercase">{label}</span>
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
