import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, get } from 'firebase/database';
import { push } from './Configuration.js';

const auth = getAuth();
const db = getDatabase(push);

const Signin = ( ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
     .then((res) => {
      alert('Success',res)
    navigate('/dashboard')

     }).catch((err) => {
      alert('reject',err)
     });
    //  if(email == 'hasnainilyas007@gmail.com'){
    //   navigate('/adminpanel')
    //  } else{
    //   navigate('/quiz')

    //  }
        
  };

  return (
    <div className='signin'>
      <form onSubmit={signin}>
        <h1>SignIn Form</h1>
        <input type="email" required placeholder='Enter Your Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
        <input type="password" required placeholder='Enter Your password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
        <button type='submit'>SignIn</button>
      </form>
    </div>
  )
}

export default Signin;
