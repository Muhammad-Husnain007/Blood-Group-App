import React from 'react';
import thanksImage from '../assests/Thanks.jpg';
import heartImage from '../assests/heart.png'; // Ensure you have this image
import style from './thanks.module.css';

const ThanksDonor = () => {
  const heartCount = 200; // Number of hearts to display

  return (
    <div className={style.heartContainer}>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 40, position: 'relative', zIndex: 1}}>
        <img style={{width: '400px', height: '500px'}} src={thanksImage} alt="Thanks" />
      </div>
      {[...Array(heartCount)].map((_, index) => (
        <div
          key={index}
          className={style.heart}
          style={{
            top: `${Math.random() * -100}px`,
            left: `${Math.random() * 100}%`,
            backgroundImage: `url(${heartImage})`, // Set heart image
          }}
        />
      ))}
    </div>
  );
};

export default ThanksDonor;
