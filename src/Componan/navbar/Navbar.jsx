import React, { useEffect, useState } from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from 'react-scroll';
import './Navbar.css'
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {

   const [sticky,setsticky]= useState(false);

   useEffect(() => {
    window.addEventListener('scroll',() => {
      window.scrollY > 550 ?setsticky(true): setsticky(false);
    })
   },[]);
 
    const [menu,setmenu] = useState(false);
    const toggleMenu = () => {
      menu ? setmenu(false) : setmenu(true);
    }

  return (
    <div>
      <nav className={  `${sticky? 'dark_nav': ''}`} >
        <div className=' w-25 h-10 rounded-xl flex text-2xl font-bold justify-center'>
           <FaGraduationCap /> 
           <h1>Edusity</h1>
        </div>
        <div >

        <ul className=' flex w-100 ' id={menu? '' : 'hide_menu'} >
            <li> <Link to='hero' smooth='{true}' offset={0} duration={50} >Home</Link></li>
            <li> <Link to='program' smooth='{true}' offset={-180} duration={500} >Program</Link></li>
            <li> <Link to='about' smooth='{true}' offset={-150} duration={500} >About Us</Link></li>
            <li> <Link to='campus' smooth='{true}' offset={-210} duration={500} >Cumpus</Link></li>
            <li> <Link to='testimonials' smooth='{true}' offset={-200} duration={500} >Testimanials</Link></li>
            <button className=' contact_btn bg-white rounded-3xl text-black text-xl cursor-pointer'>
            <li> <Link to='contact' smooth='{true}' offset={-150} duration={500} >Contact Us</Link></li>
          
            </button>
        </ul>
        </div>
        <TfiMenu className='menubar' onClick={toggleMenu}/>
      </nav>
    </div>
  )
}

export default Navbar
