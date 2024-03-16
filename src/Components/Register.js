import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from "axios";

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = async (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return; // Don't submit the form if passwords don't match
    }

    try {
      // Send form data to the endpoint
      const response = await axios.post('/save-details', {
        username,
        password,
        confirmPassword
      });

      console.log('Response from server:', response.data);

      // Reset form fields after submission
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setPasswordsMatch(true);

    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error here (e.g., display error message to the user)
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className='LoginBody'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input type='text' placeholder='Username' required name="username" value={username} onChange={handleUsernameChange} />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type='password' placeholder='Choose Password' required name="password" value={password} onChange={handlePasswordChange} />
            <FaLock className='icon' />
          </div>
          <div className="input-box">
            <input type='password' placeholder='Confirm Password' required value={confirmPassword} onChange={handleConfirmPasswordChange} />
            <FaLock className='icon' />
          </div>

          {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}

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
