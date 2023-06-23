import { Link } from 'react-router-dom';
import './Home.css';
import React from 'react'

export default function Bestseller(props) {
  return (
    <div className="card card1" >
        <div>
        <img src={require(`./${props.image}`)}className="card-img-top image4" alt="..."/>

        </div>
                 <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 </div>
                 <ul className="list-group list-group-flush">
                 <li className="list-group-item">{props.by}</li>
                
                 <li className="list-group-item">&#8377; {props.price} </li>
                  </ul>
                <div className="card-body card2">
                <Link to="/" className="btn btn-primary button3"> Wishlist</Link>
                <Link to="/" className="btn btn-primary">Add To Cart</Link>
               
                     </div>
                 </div>
  )
}
