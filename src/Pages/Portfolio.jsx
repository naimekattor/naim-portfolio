import React, { useState } from 'react';
import { gallerydata } from '../skillsData';
import Modal from '../Components/Modal';
const Portfolio = () => {
  const [url, setUrl] = useState();
  const [webUrl, setWebUrl] = useState();
  const [project, setProject] = useState();
  const [showModal, setShowModal] = useState(false)
  const handleModal = (project, url, webUrl) => {
    setShowModal(true)
    setUrl(url)
    setWebUrl(webUrl)
    setProject(project);
  }
  const handleClose = () => {
    setShowModal(false)
  }
  return (
    <div className='w-screen h-[100%] mx-auto lg:px-[15%] md:px-[10%] px-[2%] bg-[#02050a]'>
      <div className='py-8'>
        <h1 className='text-[20px] pt-[100px] text-[#55e5a6] font-semibold uppercase '>my recent Portfolio</h1>
        <h2 className='text-[52px] text-white font-RegularBold'>Elevate your brand to new heights with our
          portfolio expertise</h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-8'>
        {gallerydata.map((curElem, index) => <div key={index} onClick={() => handleModal(curElem.project, curElem.url, curElem.webUrl)} className=' drop-shadow cursor-pointer '>
          <img className='rounded w-[400px] h-[300px]' src={curElem.url} alt="" />
        </div>)}
        {showModal && <Modal url={url} webUrl={webUrl} project={project} close={handleClose} />}
      </div>
    </div>
  );
};

export default Portfolio;