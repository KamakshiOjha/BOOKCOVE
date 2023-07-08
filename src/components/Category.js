import React from 'react'
import './Category.css';
import { Link } from 'react-router-dom';
// import Card from './Card';

// import axios from 'axios';
// import Bestseller from './Bestseller';
// import { Link } from 'react-router-dom';


export default function Category() {
  return (
    <>
     <div className="Heading1">
        <div className="heading_in1">
            <p className="heading11"><Link to="/category">CATEGORY</Link> </p>
        </div>
    </div>
    <div>
        <p className="para41">Welcome to our BOOKCOVE! We offer a wide range of categories to cater to every reader's taste. Whether you're a fan of gripping mysteries, epic adventures, or thought-provoking non-fiction, we have something for everyone. Browse through our carefully curated collection and embark on a literary journey unlike any other.</p>
    </div>
    <div className="middle21">
        <div className="middle2_in1">
            <div className="box1 box11">
                      
            <img className="book1" src={require("./Category_book/Children's literature.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Children's literature</h2></p>
                <Link to="/children_literature" className="discover1">Discover</Link>
            </div>
        </div>
            <div className="box1 box21">
                <img className="book1" src={require("./Category_book/bibliogrphy.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Biography</h2></p>
                <Link to="/biography" className="discover1">Discover</Link>
            </div>
            </div>
            <div className="box1 box31">
                <img className="book1" src={require("./Category_book/history.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>History</h2></p>
                <Link to="/history" className="discover1">Discover</Link>
            </div>

            </div>
            <div className="box1 box41">
                <img className="book1" src={require("./Category_book/self_help.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Self Help</h2></p>
                <Link to="#" className="discover1">Discover</Link>
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
            <div className="box1 box31">
                <img className="book1" src={require("./Category_book/mystry.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Mystry</h2></p>
                <Link to="#" className="discover1">Discover</Link>
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
                
               
            <img className="book1" src={require("./Category_book/poetry.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Poetry</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
        </div>
            <div className="box1 box21">
                <img className="book1" src={require("./Category_book/horror.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Horror</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
                
            </div>
            <div className="box1 box31">
                <img className="book1" src={require("./Category_book/adventure.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Adventure</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>

            </div>
            <div className="box1 box41">
                <img className="book1" src={require("./Category_book/humor.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Humor</h2></p>
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
    <div className="middle21">
        <div className="middle2_in1">
            <div className="box1 box11">
                
               
            <img className="book1" src={require("./Category_book/hindu epic.png")} alt=""/>
                <div className="hide1">
                <p><h2>Hindu Epic</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
        </div>
            <div className="box1 box21">
                <img className="book1" src={require("./Category_book/sanskrit.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Sanskrit</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
                
            </div>
            <div className="box1 box31">
                <img className="book1" src={require("./Category_book/religious.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Religious</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>

            </div>
            <div className="box1 box41">
                <img className="book1" src={require("./Category_book/ayurveda.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Ayurveda</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>

            </div>
        </div>
    </div>
    <div className="middle21">
        <div className="middle2_in1">
            <div className="box1 box11">
                
               
            <img className="book1" src={require("./Category_book/rare.jpg")} alt=""/>
                <div className="hide1">
                <p><h2>Rare Addition</h2></p>
                <Link to="#" className="discover1">Discover</Link>
            </div>
        </div>

            </div>
        </div>
    </>
  )
}
