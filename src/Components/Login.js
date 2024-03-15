import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return ( 
    <div className='LoginBody'> 
      <div className='container'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type='password' placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>
          <div className="remember-forgot">
            <label><input type='checkbox'/>Remember me</label>
            <a href='#'>Forgot Password?</a>
          </div>
          <div className="button">
          <button type='submit'>Login</button>
          </div>
          <div className="register-link">
            <p>Don't have an account? <a href='#'>Register now</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;