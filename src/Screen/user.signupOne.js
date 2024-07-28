import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate, useParams } from 'react-router-dom';
import './signup.style.css';
import googleG from '../assests/blood-donation.png';
import useBlockBackButton from './block.backButton.js';

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const SignupOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams();

  const createUser = (e) => {
    e.preventDefault();
    navigate(`/signup345Two/fo87rm7280008788`, { state: { name, email, userId } });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(`/dashboard/${userId}`, { state: { name: user.displayName, email: user.email } });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useBlockBackButton();

  return (
    <div className='mainBody'>
      <form onSubmit={createUser} className='signupBody'>
        <div className='createAccoutDescript'>
          <img src={googleG} alt="google" />
          <span>Create your <br /> Account</span>
          <button type="button" onClick={signInWithGoogle}>Sign up with Google</button>
        </div>
        <div className='signupBodyFields'>
          <input type="text" required placeholder='Enter Your Name' name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />
          <input type="email" required placeholder='Enter Your Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default SignupOne;

