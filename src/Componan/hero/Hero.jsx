import React from 'react'
import './Hero.css'
 
const Hero = () => {
  return (
    <div id='hero'>
        <div id="hero_txt" className=' text-white absolute top-52 left-72 w-1/2 text-center '>
            <h1 className=' text-5xl font-semibold'>We Esure Better Education For a Better World</h1>
            <p className=' max-w-2xl m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit laudantium quisquam perferendis delectus architecto atque nam. Quos, modi nobis!</p>
            <button className=' hero_btn bg-white rounded-2xl text-black text-xl p-1 px-4 cursor-pointer hover:bg-slate-300'>Explore Me  </button>
        </div>
      
    </div>
  )
}

export default Hero
