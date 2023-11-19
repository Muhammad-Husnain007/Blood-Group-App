// Donor.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, set, ref, push as dbPush } from 'firebase/database';
import {  push } from '../Screen/Configuration';
import './Style.css';

const db = getDatabase(push);

const Donor = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodgroup, setBloodGroup] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const submit = () => {
    set(ref(db, `blood/user/donor/${Date.now()}`), {
      name: name,
      email: email,
      bloodgroup: bloodgroup,
      address: address,
      number: number,
      gender: gender,
    }).then((res) => {
         navigate('/donordata')
  });
  };

  return (
    <div>
      <h1>Donor</h1>
      <input
        type="text"
        required
        placeholder="Enter Your Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="email"
        required
        placeholder="Enter Your Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="text"
        required
        placeholder="Enter Your Blood Group"
        name="bloodgroup"
        value={bloodgroup}
        onChange={(e) => setBloodGroup(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="text"
        required
        placeholder="Enter Your Address"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />{' '}
      <br /> <br />
      <input
        type="text"
        required
        placeholder="Enter Your Contact Number"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />{' '}
      <br /> <br />
      <label className='gender'>Gender: </label>
      <span className='gender'>Male</span>
      <input
        type="radio"
        value="Male"
        id='radio'
        checked={gender === 'Male'}
        onChange={(e) => setGender(e.target.value)}
        name="gender"
      />
      <span className='gender'>Female</span>
      <input
        type="radio"
        id='radio'
        value="Female"
        checked={gender === 'Female'}
        onChange={(e) => setGender(e.target.value)}
        name="gender"
      />{' '}
      <br /> <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Donor;



