import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Register() {
  return ( 
    <div className='LoginBody'> 
      <div className='container'>
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type='password' placeholder='Choose Password' required/>
            <FaLock className='icon'/>
          </div>
          <div className="input-box">
            <input type='password' placeholder='Confirm Password' required/>
            <FaLock className='icon'/>
          </div>
    
          <div className="button">
          <button type='submit'>Register</button>
          </div>
          <div className="register-link">
            <p>Already have an account? <Link to='login'>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;