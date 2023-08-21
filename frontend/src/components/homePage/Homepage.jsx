import React from 'react';
import topImg from '../../assets/top.png'
import './homepage.css';

function Homepage() {
  return (
    <div className="homepage container2">
      <div className="homepage_left">
        <img src={topImg} alt="image" />
      </div>
      <div className="homepage_right">
        <div className="homepage_right_heading">
          <h2>Edit Your images online and for free with ImgEdi</h2>
        </div>
        <div className="homepage_right_para">
          <p>We provide an online solution to the basic needs of image editing</p>
        </div>
        <button className='getStarted'>GetStarted</button>
      </div>
    </div>
  )
}

export default Homepage