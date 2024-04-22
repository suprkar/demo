import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow_icon.png';
import heroImage from '../Assets/hero_icon.png';

const Hero = () => {
  return (
    <div className='hero' style={{ background: 'linear-gradient(to right, #F3B664, #FFE7C1)' }}>
      <div className="hero-left">
        <h2 className='NEW-ARRIVALS-ONLY'>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="Hand icon" />
          </div>
          <p className='para'>collections</p>
          <p className='para'>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="Arrow icon" />
        </div>
      </div>
      <div className="hero-right">
          <img src={heroImage} alt="Hero display" height='600' width='500' />
      </div>
    </div>
  );
};

export default Hero;
