import React from 'react'
import './Footer.css';
import image2 from './image2.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <div class="bottom">
        <div class="bottom_in">
            <div class="menu">
                <h4>CONTACT US</h4>
                <div className='Address_location'>
               <img className='image_location' src={require("./icons8-location-48.png")} alt="" />
                <p className='para_location'>65 - A , DILSHAD GARDEN , DELHI</p>
                </div>
                <div className='email_location'>
               <img className='image_location' src={require("./icons8-mail-24.png")} alt="" />
                <p className='para_location'>kkamakshiojha@gmail.com</p>
                </div>
            
            </div>


            
            <div class="support">
            <h4>SUPPORT</h4>
            <div className='Address_location1'>
               
                <p className='para_location'>Support - Visit <Link to="/localtreasure">Local Treasure</Link></p>
                </div>
                <div className='email_location1'>
                <p className='para_location'>Review - Visit  <Link to="/about">About Us</Link></p>
                </div>
            </div>
        </div>
    </div>
    <div class="Heading_f">
        <div class="heading_in_f">
            <p class="heading1_f"><a href="/">BOOKCOVE</a> </p>
        </div>
    </div></>
  )
}
