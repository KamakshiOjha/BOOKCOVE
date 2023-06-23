import React from 'react'
import { Link } from 'react-router-dom'
import './Comunity.css';
export default function Comunity(props) {
  return (
    <>
    <body>
      <div className='container_community'>
        <div class="contain_bg">
          <div class="trans_bg">
            <div class="text_descp">
              <div className='h2_tag3'><h2>"Books are the threads that weave our souls together, creating a vibrant tapestry of knowledge, imagination, and connection."</h2></div>
              <div className='h5_tag1'><h5>Join our Bookshop Community today and become a part of this vibrant literary journey. Together, let's explore the boundless worlds that books have to offer, forge new connections, and celebrate the magic of reading. We can't wait to meet you!</h5></div>
              <button type="button" class='button4'>Join Community</button>
            </div>
          </div>
        </div>

      </div>
      </body>
    </>
  )
}


{/* <img className='image2' src={require("./image2.png")} alt="Your Image" /> */ }
