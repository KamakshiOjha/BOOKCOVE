import React, { useState } from 'react'
import './Home.css';
// import { Link } from 'react-router-dom';
import Card from './Card';

import axios from 'axios';
import Bestseller from './Bestseller';
import { Link } from 'react-router-dom';


export default function Home()  {
  return (
    <>
    <div className="Heading">
        <div className="heading_in">
            <p className="heading01"><Link to="/">BOOKCOVE</Link> </p>
        </div>
    </div>
    <div className="middle1">
        <div className="image1">

        </div>
    </div>
    <div className="middle22">
        <div className="middle2_in2">
            <div className="box2 box12">
                
                <img className="book2" src={require("./Bestseller/book1.png")} alt=""/>
                <div className="hide2">
                <div className="hide_in2">
                    <p className="para1_b2"><h3 className="h3_tag2"><Link className='Link' to='/outliveb1'>Outlive: The Science and Art of Longevity</Link></h3></p>
                    <p className="para2_b2">₹1555.50</p>
                </div>
                <p>by Peter Attia</p>
                <div className='flex_in'>
                <Link to="#" className="discover2">Wishlist</Link>
                <Link to="#" className="discover2" >Add to cart</Link>
                </div>
                
            </div>
        </div>
            <div className="box2 box22">
                <div className="inbox12">
                    <div>
                        <Link className="anchor1_12" to="" onclick="">← </Link>
                    </div>
                    <div>
                        <Link className="anchor2_12" to="" onclick="">→</Link>
                    </div>
                </div>
                <div>
                    <p className="heading622"><Link to="/bestseler">BEST SELLER AUTHOR'S FOR 2023</Link></p>
                </div>

            </div>
            <div className="box2 box32">
                <img className="book02" src={require("./Bestseller/book2.png")}  alt=""/>
                <div className="hide2">
                <div className="hide_in2">
                    <p className="para1_b2"><h3 className="h3_tag2"><Link className='Link' to=''>It Starts with Us</Link></h3> </p>
                    <p className="para2_b2">₹859.25</p>
                </div>
                <p>by Colleen Hoover</p>
                <div className='flex_in'>
                <Link to="#" className="discover2">Wishlist</Link>
                <Link to="#" className="discover2">Add to cart</Link>
                </div>
            </div>

            </div>
            <div className="box2 box42">
                <img className="book02" src={require("./Bestseller/book3.png")}  alt=""/>
                <div className="hide2">
                <div className="hide_in2">
                    <p className="para1_b2"><h3 className="h3_tag2"><Link className='Link' to=''>It Ends with Us</Link></h3> </p>
                    <p className="para2_b2">₹808.47</p>
                </div>
                <p>by Colleen Hoover</p>
                <div className='flex_in'>
                <Link to="#" className="discover2">Wishlist</Link>
                <Link to="#" className="discover2">Add to cart</Link>
                </div>
            </div>

            </div>
        </div>
    </div>
    <div className="middle3">
        <div className="image2">
            <div className='image2_in'>
            
            <div>
                <p className="heading5"><Link to="/bestseler">BEST SELLER</Link></p>
            </div>
            <div className="para3">
                <p>Looking for the most captivating reads? Look no further!</p>
                <p>Browse our collection now and embark on an extraordinary reading adventure.</p>
                <p>Happy reading!</p>


            </div>
            </div>
        </div>
    </div>
    <div className="middle21">
        <div className="middle2_in1">
            <div className="box1 box11">
                
               
            <img className="book1" src={require("./Category_book/fantasy.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Fantasy</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
        </div>
            <div className="box1 box21">
                <img className="book1" src={require("./Category_book/autobiogrphy.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Autobiography</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
                
            </div>
            <div className="box2 box22">
                <div className="inbox12">
                    <div>
                        <Link className="anchor1_12" to="" onclick="">← </Link>
                    </div>
                    <div>
                        <Link className="anchor2_12" to="" onclick="">→</Link>
                    </div>
                </div>
                <div>
                    <p className="heading622"><Link to="">CATEGORY</Link></p>
                </div>

            </div>
            <div className="box1 box41">
                <img className="book1" src={require("./Category_book/romance.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Romance</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>

            </div>
        </div>
        </div>
        <div className="middle21">
        <div className="middle2_in1">
            <div className="box1 box11">
                
               
            <img className="book1" src={require("./Category_book/art.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Art</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
        </div>
            <div className="box1 box21">
                <img className="book1" src={require("./Category_book/business.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Business</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
                
            </div>
            <div className="box1 box31">
                <img className="book1" src={require("./Category_book/science.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Science Fiction</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>

            </div>
            <div className="box1 box41">
                <img className="book1" src={require("./Category_book/suspense.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Suspense Thriller</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>

            </div>
        </div>
    </div>
        
   
    <div className="middle43_in">
            <Link to="/category">Show All	→</Link>
        </div>
    <div className="middle5">
        <div className="image3">
        <div className='image2_in'>
            {/* <div className="inbox2">
                <div>
                    <Link className="anchor1" to="">←</Link>
                </div>
                <div>
                    <Link className="anchor2" to="">→</Link>
                </div>
            </div> */}
            <div>
                <p className="heading4"><Link to="/Launch_new">NEW LAUNCHED</Link></p>
            </div>
            <div className="para2">
                <p>Explore captivating works by talented new authors and uncover curated bookstore gems.</p>
                <p>Join us on this literary journey of discovery and support local talent and independent bookstores.</p>
                <p>Experience the magic of fresh voices and hidden treasures at BookCove today!</p>

            </div>
            </div>
    
        </div>
    </div>
    <div className="middle6">
        <div className="middle6_in">
            <p className="para4">JOIN TO OUR CLUB READING / DISCUSSION</p>
            <form>
                <input type="text" className="form1" name="fname"/>
              </form>
            <p className="para5"><Link to="/joinclub">Subscribe now →</Link></p>
        </div>

    </div>
   
    </>
  )
}

