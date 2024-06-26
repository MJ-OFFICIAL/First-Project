import React from 'react'
import './Campus.css'
import gallery_1  from '../../assets/gallery_1.jpeg'
import gallery_2  from '../../assets/gallery_2.jpeg'
import gallery_3  from '../../assets/gallery_3.jpeg'
import gallery_4  from '../../assets/gallery_4.webp'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" className=' rounded-2xl'/>
            <img src={gallery_2} alt="" className=' rounded-2xl'/>
            <img src={gallery_3} alt="" className=' rounded-2xl'/>
            <img src={gallery_4} alt="" className=' rounded-2xl'/>
            
        </div>
        <button className='flex items-center justify-center bg-blue-600 text-white rounded-lg p-2' >See More...<FaRegArrowAltCircleRight /></button>
      
    </div>
  )
}

export default Campus
