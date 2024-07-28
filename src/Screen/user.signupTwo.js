import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { push } from './firebase.configuration.js';
import './signup.style.css';
import googleG from '../assests/blood-donation.png';
import useBlockBackButton from './block.backButton';

const auth = getAuth(push);
const db = getDatabase(push);

const SignupTwo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || {}; // Get name and email from location state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {userId} = useParams()
  const submitData = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user data in the Realtime Database
      await set(ref(db, 'users/' + user.uid), {
        username: name,
        email: email
      });

      navigate(`/dashboard/${userId}`); // Navigate to a welcome page or dashboard

    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Error creating user: " + error.message);
    }
  };

  useBlockBackButton()

  return (
    <div className="mainBody">
      <form onSubmit={submitData} className="signupBody">
        <div className='createAccoutDescript'>
          <img src={googleG} alt="google" />
          <span>Create your <br /> Account</span>
          <button>Sign up with Google</button>
        </div>
        <div className='signupBodyFields'>
          <input type="password" required placeholder='Enter Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
          <input type="password" required placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br /> <br />
          <span className='goBack' onClick={() => navigate('/v2/si12nup345/fo87rm7280008788')}
          >go Back</span>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  )
}

export default SignupTwo;
