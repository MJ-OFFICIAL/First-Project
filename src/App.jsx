import React from 'react'
import '../src/App.css'
import '../src/index.css'
import Navbar from './Componan/navbar/Navbar.jsx'
import Hero from './Componan/hero/Hero.jsx'
import Program from './Componan/program/Program.jsx'
import Title from './Componan/tittle/Title.jsx'
import About from './Componan/About/About.jsx'
import Campus from './Componan/campus/Campus.jsx'
import Testimonials from './Componan/testimonials/Testimonials.jsx'
import Contact from './Componan/contact/Contact.jsx'
import Footer from './Componan/footer/Footer.jsx'
const App = () => {
  return (
    <div>
  <Navbar/>
  <Hero/> 
  <div className="Container">
    <Title subtitle={'Our Program'} title={'What We Offer'}/>  
  <Program/>  
  <About/>
    <Title subtitle={'Gallary'} title={'Campus Photo'}/>  
  <Campus/>
    <Title subtitle={'Testimonials'} title={'What Student Says'}/>  
    <Testimonials/>
    <Title subtitle={'Contact Us'} title={'Get In Touch'}/>  
    <Contact/>
    <Footer/>


  </div>
  </div>
  )
}

export default App
