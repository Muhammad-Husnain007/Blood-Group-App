import React, { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { push } from '../Screen/firebase.configuration';
import style from './acceptor.module.css';
import { useNavigate } from 'react-router-dom';

const db = getDatabase(push);

const Acceptor = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bloodgroup, setBloodGroup] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate()

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const genders = ['Male', 'Female', 'Other'];

    const submit = () => {
        set(ref(db, `blood/user/acceptor`), {
            name: name,
            email: email,
            bloodgroup: bloodgroup,
            address: address,
            number: number,
            gender: gender,

        });
        navigate('/donordata', { state: { donorGender: gender } });
    };
    

    return (
        <div className={style.mainDivContainer}>
      <span>Acceptopr</span>
      <div className={style.nameEmail}>
        <input
          type="text"
          required
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{' '}
        <input
          type="email"
          required
          placeholder="Enter Your Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
      </div>    
      <div className={style.bloodGroupAddress}>
        <select
          required
          name="bloodgroup"
          value={bloodgroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="" disabled>Select Your Blood Group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>{' '}
        <input
          type="text"
          required
          placeholder="Enter Your Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />{' '}
      </div>
      <div className={style.contactGender}>
        <input
          type="text"
          required
          placeholder="Enter Your Contact Number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />{' '}
        <select
          required
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>Select Gender</option>
          {genders.map((gen) => (
            <option key={gen} value={gen}>
              {gen}
            </option>
          ))}
        </select>
      </div>
      <button onClick={submit}>Submit</button>
    </div>
    );
};

export default Acceptor;

