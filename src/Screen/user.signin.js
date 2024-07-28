import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDatabase } from 'firebase/database';
import { push } from './firebase.configuration.js';
import './signin.style.css';
import googleG from '../assests/blood-donation.png';
import useBlockBackButton from './block.backButton.js';

const auth = getAuth();
const db = getDatabase(push);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // For handling errors
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    setError("");  // Reset error state before attempting sign in

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert('Login Successful');
        navigate('/dashboard');
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          setError('Incorrect password. Please try again.');
        } else if (err.code === 'auth/user-not-found') {
          setError('No user found with this email. Please sign up.');
        } else {
          setError('Incorrect password or email');
        }
      });
  };

  useBlockBackButton();

  return (
    <div className='signinMainContainer'>
      <form onSubmit={signin} className='signinBody'>
        <div className='signinAndFromGoogle'>
          <img src={googleG} alt="google" />
          <span>Sign in</span>
          <button type='button'>Sign in with Google</button>
        </div>
        <div className='fieldsAndButton'>
          <div className='inputFields'>
            <input
              type="email"
              required
              placeholder='Enter Your Email'
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              required
              placeholder='Enter Your Password'
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className='errorMessage'>{error}</p>}
          <div className='createAndSignin'>
            <span onClick={() => navigate('/v2/si12nup345/fo87rm7280008788')}>Create account</span>
            <button type='submit'>Sign in</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
