import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Account.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Simulating login logic
      if (email === 'kkamakshiojha@gmail.com' && password === 'komal') {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        alert("Incorrect password or Email");
      }
  
      // Reset form fields
      setEmail('');
      setPassword('');
    };
  return (
    <>
    <div className="Heading4">
        <div className="heading_in4">
            <p className="heading14"><Link to="">ACCOUNT</Link> </p>
            <div className="hidden_log">
                <p className="heading24"><Link to="">LOGIN</Link> </p>
            </div>
        </div>
    </div>
   
    <div className="login">
        <div className="login_in">
            <p className="p_log">Need a BOOKCOVE account? <Link className="a_log" to="">Create an account</Link></p>
            <form onSubmit={handleSubmit}>
                <div className="form_group1">
                  <label className="email" htmlFor="email">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}required placeholder="Email"/>
                </div>
                <div className="form_group2">
                  <label htmlFor="password" className="password">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}required placeholder="password"/>
                </div>
                <button className="button_log" type="submit">Login</button>
              </form>
        
              {loggedIn && <p className='log_suc'>Login successful!</p>}

        </div>
    </div>

    </>
  );
}

export default LoginPage;