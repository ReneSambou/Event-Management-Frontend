import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Login() {
  return ( 
    
    <div className='LoginBody'> 
      <div className='lg-container'>
        <form action="">
          <h1>Login As Admin</h1>
          <div className="lg-input-box">
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className="lg-input-box">
            <input type='password' placeholder='Choose Password' required/>
            <FaLock className='icon'/>
          </div>
          
          <div className="lg-remember-forgot">
            <label><input type='checkbox'/>Remember me</label>
            <a href='/'>Forgot Password?</a>
          </div>
          <div className="lg-button">
          <button type='submit'>Login</button>
          </div>
          <div className="lg-register-link">
            <p>Don't have an account? <Link to="Register">Register now</Link></p>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;