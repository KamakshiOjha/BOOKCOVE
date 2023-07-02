import React from 'react'
import { Link } from 'react-router-dom'

export default function History() {
    
  return (
    <>
    <p className="para55"><Link to="/category">← Category</Link></p>
   <div className="middle25">
       <div className="middle2_in5">
           <div className="box5 box15">
               
               <img className="book5" src={require("./History/guns.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>The Guns of August</h3></p>
                   <p className="para2_b5">₹1113.23</p>
               </div>
               <p>by Barbara W. Tuchman</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>
                   {/* <!-- <div className="about5">
                       <h4>About the Book</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus rutrum, tincidunt lorem id, placerat leo. Ut mattis dapibus nunc, vel scelerisque nisl pharetra sit amet.</p>
                   </div>  -->*/}
               </div>  
              
                           
           </div> 
       </div> 
           <div className="box5 box25">
               <img className="book5" src={require("./History/book.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>1491: New Revelations of the Americas Before Columbus</h3> </p>
                   <p className="para2_b5">₹574.68</p>
               </div>
               <p>by Charles C. Mann</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
               </div>

           </div>
           <div className="box5 box35">
               <img className="book5" src={require("./History/Orientalism.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Orientalism</h3> </p>
                   <p className="para2_b5">₹245</p>
               </div>
               <p>by Edward W. Said</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>           
            </div>

           </div>
           <div className="box5 box45">
               <img className="book5" src={require("./History/Postwar.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Postwar: A History of Europe Since 1945</h3></p>
                   <p className="para2_b5">₹468</p>
               </div>
               <p>by Tony Judt</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
           </div>

           </div>
       </div>
   </div></>
  )
}
