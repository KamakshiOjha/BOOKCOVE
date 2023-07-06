import React, { useState } from 'react'
import './Create_account.css';
import { Link } from 'react-router-dom';


const Create_account = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform sign-up logic here
  
      // Reset form fields
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    };
  
    return (
      <>
        <div className="Heading4_s">
        <div className="heading_in4_s">
            <p className="heading14_s"><Link to="/create_account">SIGN UP</Link> </p>
            
        </div>
    </div>
        <div className="login_s">
        <div className="login_in_s">
        <h2 className='h2_s'>Create Your Account</h2>
        <form className='form_s' onSubmit={handleSubmit}>
          <label className='label_s'>
            Full Name:
          </label>
          <input
              type="text"
              className='input_s'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
  
          <label className='label_s'>
            Email Address:
          </label>
          <input
              type="email"
              className='input_s'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
  
          <label className='label_s'>
            Password:
          </label>
          <input
              type="password"
              className='input_s'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
  
          <label className='label_s'>
            Confirm Password:
            </label>
            <input
              type="password"
              className='input_s'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
  
          <button className='button_log_s ' type="submit">Sign Up</button>
        </form>
      </div>
      </div>
      </>
    );
  };

  export default Create_account;