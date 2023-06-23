import React from 'react'
import { Link } from 'react-router-dom'
import './Biography.css';

export default function Biography() {
  return (
 <>
    <p className="para55"><Link to="/category">← Category</Link></p>
   <div className="middle25">
       <div className="middle2_in5">
           <div className="box5 box15">
               
               <img className="book5" src={require("./Biography_images/steve.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Steve Jobs</h3></p>
                   <p className="para2_b5">₹381</p>
               </div>
               <p>by Walter Isaacson</p>
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
               <img className="book5" src={require("./Biography_images/The_Immortal.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>The Immortal Life of Henrietta Lacks</h3> </p>
                   <p className="para2_b5">₹423</p>
               </div>
               <p>by Rebecca Skloot </p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
               </div>

           </div>
           <div className="box5 box35">
               <img className="book5" src={require("./Biography_images/Alexander.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Alexander Hamilton</h3> </p>
                   <p className="para2_b5">₹2459</p>
               </div>
               <p>by Ron Chernow </p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>           
            </div>

           </div>
           <div className="box5 box45">
               <img className="book5" src={require("./Biography_images/Becoming1.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Becoming</h3></p>
                   <p className="para2_b5">₹468</p>
               </div>
               <p>by Michelle Obama</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
           </div>

           </div>
       </div>
   </div>
   <div className="middle25">
       <div className="middle2_in5">
           <div className="box5 box15">
               
               <img className="book5" src={require("./Biography_images/Born_Crime.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Born a Crime</h3></p>
                   <p className="para2_b5">₹330</p>
               </div>
               <p>by Trevor Noah </p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>
                   {/* <!-- <div className="about5">
                       <h4>About the Book</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus rutrum, tincidunt lorem id, placerat leo. Ut mattis dapibus nunc, vel scelerisque nisl pharetra sit amet.</p>
                   </div>  --> */}
               </div> 
              
                           
           </div> 
       </div> 
           <div className="box5 box25">
               <img className="book5" src={require("./Biography_images/young_Girl.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>The Diary of a Young Girl</h3> </p>
                   <p className="para2_b5">₹135</p>
               </div>
               <p>by Anne Frank</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
               </div>

           </div>
           <div className="box5 box35">
               <img className="book5" src={require("./Biography_images/Wild.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Into the Wild</h3> </p>
                   <p className="para2_b5">407</p>
               </div>
               <p>by Jon Krakauer</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>           
            </div>

           </div>
           <div className="box5 box45">
               <img className="book5" src={require("./Biography_images/Bird_Sings.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>I Know Why the Caged Bird Sings</h3></p>
                   <p className="para2_b5">₹403</p>
               </div>
               <p>by Maya Angelou </p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
           </div>

           </div>
       </div>
   </div>
   <div className="middle25">
       <div className="middle2_in5">
           <div className="box5 box15">
               
               <img className="book5" src={require("./Biography_images/Malala.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>I Am Malala: The Girl Who Stood Up for Education and Was Shot by the Taliban</h3></p>
                   <p className="para2_b5">₹720</p>
               </div>
               <p>by Malala Yousafzai </p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>
                   {/* <!-- <div className="about5">
                       <h4>About the Book</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus rutrum, tincidunt lorem id, placerat leo. Ut mattis dapibus nunc, vel scelerisque nisl pharetra sit amet.</p>
                   </div>  --> */}
               </div> 
              
                           
           </div> 
       </div> 
           <div className="box5 box25">
               <img className="book5" src={require("./Biography_images/Frida.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Frida: A Biography of Frida Kahlo</h3> </p>
                   <p className="para2_b5">₹1433</p>
               </div>
               <p>by Hayden Herrera </p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
               </div>

           </div>
           <div className="box5 box35">
               <img className="book5" src={require("./Biography_images/John_Adams.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>John Adams</h3> </p>
                   <p className="para2_b5">₹2354</p>
               </div>
               <p>by John Quincy Adams Former, Charles Francis Adams Jr</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>           
            </div>

           </div>
           <div className="box5 box45">
               <img className="book5" src={require("./Biography_images/Barracoon.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Barracoon: The Story of the Last "Black Cargo"</h3></p>
                   <p className="para2_b5">₹1544</p>
               </div>
               <p>by Zora Hurston</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
           </div>

           </div>
       </div>
   </div>
   <div className="middle25">
       <div className="middle2_in5">
           <div className="box5 box15">
               
               <img className="book5" src={require("./Biography_images/Einstein.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Einstein: His Life and Universe</h3></p>
                   <p className="para2_b5">₹438</p>
               </div>
               <p>by Walter Isaacson</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>
                   {/* <!-- <div className="about5">
                       <h4>About the Book</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus rutrum, tincidunt lorem id, placerat leo. Ut mattis dapibus nunc, vel scelerisque nisl pharetra sit amet.</p>
                   </div>  --> */}
               </div> 
              
                           
           </div> 
       </div> 
           <div className="box5 box25">
               <img className="book5" src={require("./Biography_images/Elon.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h3> </p>
                   <p className="para2_b5">₹402</p>
               </div>
               <p>by Ashlee Vance</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
               </div>

           </div>
           <div className="box5 box35">
               <img className="book5" src={require("./Biography_images/Malcolm.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>The Autobiography of Malcolm X</h3> </p>
                   <p className="para2_b5">₹377</p>
               </div>
               <p>by MALCOLM X</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>           
            </div>

           </div>
           <div className="box5 box45">
               <img className="book5" src={require("./Biography_images/Turing.png")} alt=""/>
               <div className="hide5">
               <div className="hide_in5">
                   <p className="para1_b5"><h3>Alan Turing: The Enigma</h3></p>
                   <p className="para2_b5">₹433</p>
               </div>
               <p>by Andrew Hodges</p>
               <div className='flex_in5'>
                   <Link to="#" className="discover5">Wishlist</Link>
                   <Link to="#" className="discover5">Add to cart</Link>

               </div>
           </div>

           </div>
       </div>
   </div>
   
   </>
  )
}
