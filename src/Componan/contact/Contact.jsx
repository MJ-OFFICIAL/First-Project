import React from 'react'
import './Contact.css'
import { CgMail } from "react-icons/cg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3c78cc15-77f0-4437-899c-ba549370a06e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact_col">
            <h3>Send us a Massage</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, aperiam libero? Natus at repellendus explicabo, molestiae in et fuga quibusdam? officia, dolorum aut beatae laboriosam!</p>
            <li><CgMail  className=' text-3xl mr-3' />jamadar5041@gmail.com</li>
            <li><FaPhoneSquareAlt className=' text-2xl mr-3' />9158501458</li>
            <li><FaLocationDot  className=' text-2xl mr-3'/>Pune,</li>
        </div>
        <div className="contact_col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name'placeholder='Enter Your Name' required/>
                <label>Your Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Number' required />
                <label>Writte Your Messages Here</label>
                <textarea name="message"  id="" rows="4" placeholder='Enter Your Massage'></textarea>
                <button type='submit' className=' bg-blue-500 text-white rounded-2xl p-3 mt-2 font-bold hover:bg-blue-600'>Submit Now</button>
            </form>
            <span>{result} </span>
        </div>
      
    </div>
  )
}

export default Contact
