import React, { useState } from 'react'
import './adjust.css'

export const Adjust = () => {
  const [bright, setBright] = useState(0);
  const handleBrightness = (e) => {
    console.log(e.target.value);
  }
  const handleContrast = (e) => {
    console.log(e.target.value);
  }
  const handleHue = (e) => {
    console.log(e.target.value);
  }
  const handleSaturation = (e) => {
    console.log(e.target.value);
  }
  const handleSharpness = (e) => {
    console.log(e.target.value);
  }
  const handleTemperature = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="adjust">
      <h3 className='adjustHeading'>ADJUST</h3>
      <div>
        <p>Brightness</p>
        <input onChange={handleBrightness} className='slideInput' type="range" />
      </div>
      <div>
        <p>Contrast</p>
        <input onChange={handleContrast} className='slideInput' type="range" />
      </div>
      <div>
        <p>Hue</p>
        <input onChange={handleHue} className='slideInput' type="range" />
      </div>
      <div>
        <p>Saturation</p>
        <input onChange={handleSaturation} className='slideInput' type="range" />
      </div>
      <div>
        <p>Sharpness</p>
        <input onChange={handleSharpness} className='slideInput' type="range" />
      </div>
      <div>
        <p>Temperature</p>
        <input onChange={handleTemperature} className='slideInput' type="range" />
      </div>
    </div>
  )
}
