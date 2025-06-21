import { useState } from 'react';
import { IoMdPlay } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Typewriter from 'typewriter-effect';
import banner3 from '../assets/images/banner3.png'
const Home = () => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className=" bg-cover min-h-screen bg-origin-content   bg-repeat bg-intro1">
      <div className="w-11/12 mx-auto   flex items-center py-16">
        <div className="grid  md:grid-cols-12 grid-cols-1 w-full">
          {/* Left Side: Image and Socials */}
          <div className="md:col-span-4 col-span-12 flex md:items-end items-start">
            <div className="relative z-10 pb-5 w-full flex flex-col md:items-center items-start mt-[10px] md:mt-0">
              <img
                decoding="async"
                src={banner3}
                alt="Xorim"
                className="border-none rounded-none shadow-none h-auto max-w-full mt-20"
              />
              <div className="md:absolute -right-[48%] bottom-0 bg-[#ffb646] rounded-[10px] py-[120px]  -z-10 min-w-[380px] flex justify-end px-6 mt-4 md:mt-0">
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
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer">X</a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://www.dribbble.com/" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Banner Content */}
          <div className="md:col-span-8 col-span-12 flex items-center md:pl-[80px]">
            <div className="w-full px-6">
              {/* Banner Top */}
              <div className="flex md:flex-row flex-col gap-[60px] mb-[70px] relative z-10 text-center">
                <div className=" mb-6 md:mb-0">
                  <p className='text-[#666666] text-[18px]'>
                    My aim is to build contemporary homes whose beauty perishes in the delicate touches of minutiae lines and shapes. Within our plan, we endowed Villa with interestingly high-contrast spatial experiences. I’ve spent most of my waking hours.
                  </p>
                </div>
                <div>
                  <a href="https://wp.validthemes.net/xorim/projects/" className="
    inline-flex items-center justify-end uppercase relative z-10 text-[20px] text-right min-w-[160px] text-[#000000]
    after:content-['']
    after:absolute after:left-0 after:top-1/2 after:w-[100px] after:h-[100px]
    after:-translate-y-1/2 after:bg-[#ffb646] after:rounded-full after:-z-10
  ">
                    <div className="relative text-[16px] text-black font-semibold z-10 flex items-center">
                      <span className='relative '>
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
              <div className='relative z-10 md:pl-[50px] pl-0'>
                <h2 className="text-2xl md:text-[70px] text-center font-bold md:mb-4 mb-1">HI, I’M Naim</h2>
                <h1 className="text-3xl md:text-[70px] ml-[70px] font-semibold md:mt-12 mt-4 mb-4">
                  <Typewriter
                    options={{
                      strings: ['Web Developer', 'Professional Coder', 'UI/UX Designer'],
                      autoStart: true,
                      loop: true,
                      delay: 150,
                      deleteSpeed: 110,
                    }}
                  />
                  {/* <span className="header-caption" id="page-top">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper inline-block">
                        <b className="is-hidden">Web Developer</b>
                        <b className="is-visible">Professional Coder</b>
                        <b className="is-hidden">UI/UX Designer</b>
                      </span>
                    </span>
                  </span> */}
                </h1>
                <p className='md:float-right float-none md:max-w-[70%] w-full  bg-[#ffffff66] p-[40px] rounded-[10px] mt-6 text-[#666666] text-[18px] font-normal'>
                  Creative and detail-oriented Web Developer with 25+ years of experience in developing intuitive, user-centric interfaces.
                </p>
              </div>


              {/* <div className="mt-8">
                <span className="text-white md:text-[70px] text-[40px] font-bold block">Hi, I'M Naim!</span>
                <span className="text-white md:text-[70px] text-[40px] font-bold block">CREATIVE</span>
                <span className="font-bold md:text-[70px] text-[40px] text-[#51e5a8] mb-[65px] uppercase block">
                  <Typewriter
                    options={{
                      strings: ['DEVELOPER', 'Designer', 'Freelancer', 'Youtuber'],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </span>
                <p className="text-[#fff] mb-5 md:text-[16px] text-[14px] md:w-1/2">
                  Delivering websites or web apps, cybersecurity solutions, UX/UI design, eCommerce solutions, website architectures, QA testing, maintenance, consulting, and even a custom CMS.
                </p>
                <div className="flex md:gap-4 gap-4 md:flex-row items-center justify-start">
                  <button className="relative bg-[#51e5a8] h-[60px] md:py-1 md:px-8 py-2 px-6 border font-semibold overflow-hidden before:inset-0 before:absolute before:scale-x-0 before:bg-black/50 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                    Download Cv
                  </button>
                  <div className="flex gap-4 items-center justify-center cursor-pointer">
                    <span className="bg-[#51e5a8] rounded-full md:py-2 md:px-2 py-1 px-1 text-[40px]">
                      <IoMdPlay />
                    </span>
                    <span className="text-1xl text-white">
                      <a onClick={() => setShowIframe(true)} href="https://www.youtube.com/embed/azCHvowfwKc?si=zcAqoh6wDzWBoIex" target="page" rel="noopener noreferrer">
                        Watch The Video
                      </a>
                    </span>
                  </div>
                </div>
                {showIframe && (
                  <div className="relative p-[30px] inline-block">
                    <iframe
                      className="md:w-[560px] md:h-[315px] w-[200px] h-[200px]"
                      src="https://www.youtube.com/embed/azCHvowfwKc?si=zcAqoh6wDzWBoIex"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      name="page"
                    />
                    <button
                      className="absolute bg-white right-0 top-0 z-10 text-black p-[10px] rounded-full"
                      onClick={() => setShowIframe(false)}
                    >
                      <RxCross1 />
                    </button>
                  </div>
                )}
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;