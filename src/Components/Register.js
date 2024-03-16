import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../Components/Assets/signup.json';
import {userSchema} from '../Validations/UserValidation'
import * as yup from "yup"

 
function Login() {
  return ( 
    
    <div className='LoginBody'> 
    <div className='lg-lottie'>
        <Lottie animationData={animationData} />
        </div>
      <div className='lg-container'>
        <form action="">
          <h1>Create Account</h1>
          <div className="lg-input-box">
            <input type='text' placeholder='Username' required/>
            <FaUser className='icon' />
          </div>
          <div className="lg-input-box">
            <input type='password' placeholder='Choose Password' required/>
            <FaLock className='icon'/>
          </div>

          <div className="lg-input-box">
            <input type='password' placeholder='Confirm Password' required/>
          </div>
          
          <div className="lg-remember-forgot">
            <label><input type='checkbox'/>Remember me</label>
            <a href='/'>Forgot Password?</a>
          </div>
          <div className="lg-button">
          <button type='submit'>Register</button>
          </div>
          <div className="lg-register-link">
            <p>Already have an account? <Link to="Login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Login;