import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { MdContactMail } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import N from '../assets/images/logo1.png'
const Navbar = () => {
  const [navMenu, setNavMenu] = useState(true)

  const handleNavBar = () => {
    setNavMenu(!navMenu)
  }
  return (
    <header className={`fixed top-0 left-0 h-full w-[250px] bg-[#09101a] z-40 transform ${navMenu ? "-translate-x-full" : "translate-x-0"
      } transition-transform duration-300 lg:translate-x-0`}>
      <div className="dropdown lg:static  min-h-screen w-auto duration-1000">
        <nav className=''>
          <div className=' mb-[40px] p-[30px] text-[#151c25]'>
            <img className='' src={N} alt="" />
          </div>
          <div className=''>
            <ul className='flex flex-col px-8 gap-y-4'>
              <div className='flex gap-4 items-center border group cursor-pointer rounded-[5px]'>
                <span className='text-white bg-[#222831] py-4 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><FaHome />
                </span>
                <NavLink to="/">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] '>Home</li></NavLink>

              </div>
              <div className='flex gap-4 items-center border group cursor-pointer rounded-[5px] '>
                <span className=' text-white bg-[#222831] py-5 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><FaBook />
                </span>
                <NavLink to="/about">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] group-hover:rotate-[360deg]'>About Me</li></NavLink>

              </div>
              <div className='flex gap-4 items-center border group cursor-pointer  rounded-[5px]  '>
                <span className=' text-white bg-[#222831] py-5 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><MdDesignServices />
                </span>
                <NavLink to="/service">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] group-hover:rotate-[360deg]'>Service</li></NavLink>

              </div>
              <div className='flex gap-4 items-center border group cursor-pointer rounded-[5px] '>
                <span className=' text-white bg-[#222831] py-5 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><GiSkills />
                </span>
                <NavLink to="/skills">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] group-hover:rotate-[360deg]'>Skills</li></NavLink>

              </div>
              <div className='flex gap-4 items-center border group cursor-pointer rounded-[5px] '>
                <span className=' text-white bg-[#222831] py-5 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><FiShoppingBag />
                </span>
                <NavLink to="/portfolio">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] group-hover:rotate-[360deg]'>Portfolio</li></NavLink>

              </div>
              <div className='flex gap-4 items-center border group cursor-pointer rounded-[5px] '>
                <span className=' text-white bg-[#222831] py-5 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><ImBlogger2 />
                </span>
                <NavLink to="/blog">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] group-hover:rotate-[360deg]'>Blog</li></NavLink>

              </div>
              <div className='flex gap-4 items-center border group cursor-pointer rounded-[5px] '>
                <span className=' text-white bg-[#222831] py-5 px-6 text-1xl group-hover:bg-[#51e5a8] group-hover:text-black rounded-[5px]'><MdContactMail />
                </span>
                <NavLink to="/contact">
                  <li className=' text-[#a2a2a2] uppercase px-2 group-hover:text-[#51e5a8] '>Contact</li></NavLink>

              </div>
            </ul>
          </div>
        </nav>
      </div>

      <div className='text-3xl py-3 px-5 border bg-[#51e5a8] cursor-pointer lg:hidden h-[58px] rounded absolute right-[-5rem] top-2 z-10' onClick={handleNavBar}>
        {navMenu ? <FaBars />
          : <RxCross1 />
        }

      </div>
    </header>
  );
};

export default Navbar;