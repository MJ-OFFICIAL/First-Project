import React from 'react'
import './Program.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.webp'
import program_3 from '../../assets/program_3.jpeg'

const Program = () => {
  return (
    <div className=' program img_container '>
      <div className="program_container   ">
       <img  src={program_1} alt="" className=' rounded-2xl '/>
      </div>
      <div className="program_container  "> <h1>JAMADAR</h1>
        <img src={program_2} alt="program2" className=' rounded-2xl ' />
      </div>
      <div className="program_container ">
        <img src={program_3} alt="program3"  className=' rounded-2xl ' />
      </div>
    </div>
  )
}

export default Program
