import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Import the necessary functions from Firebase

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Initialize Firebase Auth

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/signin/fo87rm7280008788');
      })
      .catch((error) => {
        // Handle Errors here.
        console.error('Sign out error', error);
      });
  };

  return (
    <div>
      <span onClick={logout}>Logout</span>
    </div>
  );
};

export default Logout;

