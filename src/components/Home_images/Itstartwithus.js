import React from 'react'
import { Link } from 'react-router-dom'
import './Itstartwithus.css';

export default function Itstartwithus() {
  return (
    <>
    <div>
    <p className="para55"><Link to="/bestseler">← Back</Link></p>
    </div>
    <div className="coverpage">
        <div className="coverpage_in">
            <img className="img_b" src={require("./BOOKS_FOR IN/book2.png")} alt=""/>
            <div className="about_content">
                <p className="para1_b2"><h1 className="h3_tag2_o">It Starts with Us</h1></p>
                    <h5 className="para2_b2">₹859.25</h5>
                    <h5>by Colleen Hoover</h5>
                    {/* <p>⭐⭐⭐⭐⭐</p> */}
                    <h3 className='h3_tag_o'>About</h3>
                    <div className="paragraphs">
                        <p>Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date.</p>
                        <p>But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life.</p>
                        <p>Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that “no one delivers an emotional read like Colleen Hoover”.</p>
                        
                    </div>
                    
                    
            </div>
        </div>
    </div>

    
    </>
  )
}
