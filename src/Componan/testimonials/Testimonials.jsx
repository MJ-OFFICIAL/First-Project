import React, { useRef } from "react";
import "./Testimonials.css";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaBackward } from "react-icons/fa";
import user_1  from '../../assets/user_1.webp'
import user_2  from '../../assets/user_2.webp'
import user_3  from '../../assets/user_3.webp'
import user_4  from '../../assets/user_4.jpeg'

const Testimonials = () => {
    const slider = useRef();
     let tx = 0;

     const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`
        
     }
     const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translatex(${tx}%)`
     }
    
  return (
    <div>
      <div className="flex justify-between  cursor-pointer " id="testimonials">
        <div className="back">
          <FaBackward className=" bg-blue-500  w-12 rounded-xl" onClick={slideBackward} />
        </div>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide rounded-3xl">
                        <div className="user_info">
                            <img src={user_1} alt="" />
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, unde et! Tempore, amet iure sequi perspiciatis quisquam voluptatibus minima quam!</p>
                    </div>
                </li>
                <li>
                    <div className="slide rounded-3xl">
                        <div className="user_info">
                            <img src={user_2} alt="" />
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, unde et! Tempore, amet iure sequi perspiciatis quisquam voluptatibus minima quam!</p>
                    </div>
                </li>
                <li>
                    <div className="slide rounded-3xl">
                        <div className="user_info">
                            <img src={user_3} alt="" />
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, unde et! Tempore, amet iure sequi perspiciatis quisquam voluptatibus minima quam!</p>
                    </div>
                </li>
                <li>
                    <div className="slide rounded-3xl">
                        <div className="user_info">
                            <img src={user_4} alt="" />
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, unde et! Tempore, amet iure sequi perspiciatis quisquam voluptatibus minima quam!</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="next">
          <TbPlayerTrackNextFilled className=" bg-blue-500 w-12 rounded-xl" onClick={slideForward} />
        </div>
      </div>

    </div>
  );
};
export default Testimonials;
