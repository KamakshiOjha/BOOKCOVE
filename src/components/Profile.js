import React from 'react'
import { Link } from 'react-router-dom'
export default function Profile(props) {
  return (
    <form>
  <div className="form-outline mb-4 my-4 form2">
    <h2>{props.title}</h2>
    <label className="form-label my-3" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" />
    
  </div>
  <div className="form-outline mb-4 form2">
  <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" />
   
  </div>
  <div className="row mb-4 form2">
    <div className="col d-flex justify-content-center">
  
      <div className="form-check form2">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
     
      <Link to="#!">Forgot password?</Link>
    </div>
  </div>
  <button type="button" className="btn btn-primary btn-block mb-4 form2">Sign in</button>

  <div className="text-center">
    <p>Not a member? <Link to="#!">Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
  )
}
