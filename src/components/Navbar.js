import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './Navbar.css';

// import Card from './Card';

export default function Navbar(props) {
    // const [text, setText] = useState("");
    // const click= ()=>{
    //     console.log("handle click");
    //     let newText;
    //     if(newText==='community'){
            
    //     }

    // }
    // const [search, setsearch ]= useState("");
    // const [bookData,setData] = useState([]);
    // const searchBook=(event)=>{
    //     if(event.key==="Enter"){
    //         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyASV3TzrNaw2DkoIz19FfNd9V-Siup4jtM')
    //         .then(res=>setData(res.data.items) )
    //         .catch(err=>console.log(err))
    //     }

    // }
  return (
    <>
     <div class="nav">
        <div class="nav_bar_fixed">
            <div class="nav_left">
                <ul class="ul">
                    <li><Link to="/bestseler">Best Seller</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    {/* <li><Link to="">All Books</Link></li>  */}
                    <li><Link to="/author">Author's </Link></li>
                    <li><Link to="/joinclub">Join Club</Link></li>
                    {/* <li><Link to="">Audio Book</Link></li> */}
                    <li><Link to="/about">About Us</Link></li>
                </ul>

            </div>
            <div class="nav_right">
                <ul class="ul">
                <li><Link to="/localtreasure">Local Treasure</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/wishlist">Wishlist</Link></li>
                    {/* <li><Link to="">Special For You</Link></li>  */}
                    <li><Link to="/cart">Cart</Link></li>
                </ul>

            </div>
        </div>
    </div>
    </>
  )}