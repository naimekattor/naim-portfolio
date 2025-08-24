import { useState, useEffect, useRef } from 'react';
import { IoMdPlay } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Typewriter from 'typewriter-effect';
import banner3 from '../assets/images/banner3.png'
import { 
  fadeIn, 
  slideInLeft, 
  slideInRight, 
  slideInBottom, 
  scaleIn, 
  floatingAnimation,
  scrollAnimation,
  staggerAnimation
} from '../utils/gsapAnimations';

const Home = () => {
  const [showIframe, setShowIframe] = useState(false);
  
  // Refs for animations
  const profileImageRef = useRef(null);
  const socialSectionRef = useRef(null);
  const bannerTopRef = useRef(null);
  const bannerBottomRef = useRef(null);
  const typewriterRef = useRef(null);
  const descriptionRef = useRef(null);
  const portfolioButtonRef = useRef(null);

  useEffect(() => {
    // Profile image animation
    if (profileImageRef.current) {
      scaleIn(profileImageRef.current, 1.2, 0.3);
      floatingAnimation(profileImageRef.current, 15, 3);
    }

    // Social section animation
    if (socialSectionRef.current) {
      slideInRight(socialSectionRef.current, 1, 0.5);
    }

    // Banner top section
    if (bannerTopRef.current) {
      const elements = bannerTopRef.current.children;
      staggerAnimation(Array.from(elements), 'fadeIn', 0.3);
    }

    // Banner bottom section
    if (bannerBottomRef.current) {
      const elements = bannerBottomRef.current.children;
      staggerAnimation(Array.from(elements), 'slideInBottom', 0.4);
    }

    // Typewriter text animation
    if (typewriterRef.current) {
      slideInBottom(typewriterRef.current, 1, 1);
    }

    // Description text animation
    if (descriptionRef.current) {
      slideInBottom(descriptionRef.current, 1, 1.5);
    }

    // Portfolio button animation
    if (portfolioButtonRef.current) {
      scaleIn(portfolioButtonRef.current, 1, 2);
    }

    // Scroll-triggered animations
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element, index) => {
      scrollAnimation(element, 'fadeIn', 'top 80%');
    });

  }, []);

  return (
    <div className="bg-cover min-h-screen bg-origin-content bg-repeat bg-intro1">
      <div className="w-11/12 mx-auto flex items-center py-16">
        <div className="grid md:grid-cols-12 grid-cols-1 w-full">
          {/* Left Side: Image and Socials */}
          <div className="md:col-span-4 col-span-12 flex md:items-end items-start">
            <div className="relative z-10 pb-5 w-full flex flex-col md:items-center items-start mt-[10px] md:mt-0">
              <img
                ref={profileImageRef}
                decoding="async"
                src={banner3}
                alt="Xorim"
                className="border-none rounded-none shadow-none h-auto max-w-full mt-20 cursor-pointer"
              />
              <div 
                ref={socialSectionRef}
                className="md:absolute -right-[48%] bottom-0 bg-[#ffb646] rounded-[10px] py-[120px] -z-10 min-w-[380px] flex justify-end px-6 mt-4 md:mt-0"
              >
                <ul className="
                  relative
                  list-none 
                  after:content-['']
                  after:absolute
                  after:left-0 after:bottom-0
                  after:border-b-2 after:border-r-2 after:border-[#ffffff]
                  after:rounded-br-[10px]
                  after:pointer-events-none
                  after:z-0
                ">
                  <li className="animate-on-scroll"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Facebook</a></li>
                  <li className="animate-on-scroll"><a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">X</a></li>
                  <li className="animate-on-scroll"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                  <li className="animate-on-scroll"><a href="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Dribbble</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Banner Content */}
          <div className="md:col-span-8 col-span-12 flex items-center md:pl-[80px]">
            <div className="w-full px-6">
              {/* Banner Top */}
              <div 
                ref={bannerTopRef}
                className="flex md:flex-row flex-col gap-[60px] mb-[70px] relative z-10 text-center"
              >
                <div className="mb-6 md:mb-0 animate-on-scroll">
                  <p className='text-[#666666] text-[18px] leading-relaxed'>
                    My aim is to build contemporary homes whose beauty perishes in the delicate touches of minutiae lines and shapes. Within our plan, we endowed Villa with interestingly high-contrast spatial experiences. I've spent most of my waking hours.
                  </p>
                </div>
                <div className="animate-on-scroll">
                  <a 
                    ref={portfolioButtonRef}
                    href="https://wp.validthemes.net/xorim/projects/" 
                    className="
                      inline-flex items-center justify-end uppercase relative z-10 text-[20px] text-right min-w-[160px] text-[#000000]
                      after:content-['']
                      after:absolute after:left-0 after:top-1/2 after:w-[100px] after:h-[100px]
                      after:-translate-y-1/2 after:bg-[#ffb646] after:rounded-full after:-z-10
                      hover:scale-105 transition-transform duration-300
                    "
                  >
                    <div className="relative text-[16px] text-black font-semibold z-10 flex items-center">
                      <span className='relative'>
                        <img
                          decoding="async"
                          src="https://wp.validthemes.net/xorim/wp-content/uploads/2025/03/1-1.png"
                          alt="Xorim"
                          className="h-[12px] mr-[15px]"
                        />
                      </span>
                      My Portfolio
                    </div>
                  </a>
                </div>
              </div>

              {/* Banner Bottom */}
              <div ref={bannerBottomRef} className='relative z-10 md:pl-[50px] pl-0'>
                <h2 className="text-2xl md:text-[70px] text-center font-bold md:mb-4 mb-1 animate-on-scroll">HI, I'M Naim</h2>
                <h1 
                  ref={typewriterRef}
                  className="text-3xl md:text-[70px] ml-[70px] font-semibold md:mt-12 mt-4 mb-4 animate-on-scroll"
                >
                  <Typewriter
                    options={{
                      strings: ['Web Developer', 'Professional Coder', 'UI/UX Designer'],
                      autoStart: true,
                      loop: true,
                      delay: 150,
                      deleteSpeed: 110,
                    }}
                  />
                </h1>
                <p 
                  ref={descriptionRef}
                  className='md:float-right float-none md:max-w-[70%] w-full bg-[#ffffff66] p-[40px] rounded-[10px] mt-6 text-[#666666] text-[18px] font-normal animate-on-scroll leading-relaxed'
                >
                  Creative and detail-oriented Web Developer with 25+ years of experience in developing intuitive, user-centric interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;