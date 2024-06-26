import React from 'react'
import About_img from '../../assets/About_img.webp'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className="about_left">
        <img src={About_img} alt="" className='about-img  rounded-2xl' />
      </div>
      <div className="about_right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leadres Today</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, amet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, amet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, amet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quibusdam.</p>
      </div>
    </div>
  )
}

export default About
