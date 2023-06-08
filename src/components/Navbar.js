import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    // const [text, setText] = useState("");
    // const click= ()=>{
    //     console.log("handle click");
    //     let newText;
    //     if(newText==='community'){
            
    //     }

    // }
  return (
    <div className='top'>
         <nav className="navbar navbar-expand-xxl navbar-light bg-light nav_bar_self">
      
            <div class="top_inside">
    
        <Link className="navbar-brand heading1 my-3" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex search_bar">
                <input className="form-control me-2 search_bar my-2" type="search" placeholder="Search" aria-label="Search"/>
                <button  formAction='' formTarget='_blank' formMethod='get' className="btn btn-primary button1 my-2" type="submit">Search</button>
        </form>

        <div className="collapse navbar-collapse icons nav_2" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link tab1" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link tab2" >About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link tab3" to="/comunity">Community</Link>
                </li>
                 <li className="nav-item">
                    <Link className="nav-link tab4" to="/join">Join</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link tab5" to="/profile">Profile</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link tab6" to="/">Wishlist</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link tab7" to="/">Cart</Link>
                </li>  */}
            
            </ul>
                
        </div>
        </div>
        {/* <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                </div> */}
    </nav>     
    
</div>
  );
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    
}

Navbar.defaultProps = {
    title : "set title"

}