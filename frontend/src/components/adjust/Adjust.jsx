import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBrightness, setContrast, setSaturation, setHue, setSharpness } from '../../slices/filterSlice'
import './adjust.css';

const Adjust = () => {
  const dispatch = useDispatch();
  const [bright, setBright] = useState(useSelector(state => state.filter.brightness));
  const [contrast, setCont] = useState(useSelector(state => state.filter.contrast));
  const [sat, setSat] = useState(useSelector(state => state.filter.saturation));
  const [hue, setH] = useState(useSelector(state => state.filter.hue));
  const [sharp, setShp] = useState(useSelector(state => state.filter.sharpness));
  useEffect(() => {
    dispatch(setBrightness(bright));
    dispatch(setContrast(contrast));
    dispatch(setSaturation(sat));
    dispatch(setHue(hue));
    dispatch(setSharpness(sharp));
  }, [bright, contrast, sat, hue, sharp]);

  const handleBrightness = (e) => {
    setBright(e.target.value);
  }
  const handleContrast = (e) => {
    setCont(e.target.value);
  }
  const handleHue = (e) => {
    setH(e.target.value);
  }
  const handleSaturation = (e) => {
    setSat(e.target.value);
  }
  const handleSharpness = (e) => {
    setShp(e.target.value);
  }
  const handleTemperature = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="adjust">
      <h3 className='adjustHeading'>ADJUST</h3>
      <div>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}>Brightness <span>{bright}%</span> </p>
        <input id='brightness' onChange={handleBrightness} className='slideInput' value={bright} type="range" max={200} min={0} />
      </div>
      <div>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}>Contrast <span>{contrast}%</span> </p>
        <input onChange={handleContrast} className='slideInput' type="range" value={contrast} max={200} min={0} />
      </div>
      <div>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}>Hue <span>{hue}deg</span> </p>
        <input onChange={handleHue} className='slideInput' type="range" value={hue}  max={360} min={-360}/>
      </div>
      <div>
        <p style={{ display: 'flex', justifyContent: 'space-between' }}>Saturation <span>{sat}%</span> </p>
        <input onChange={handleSaturation} className='slideInput' value={sat} type="range" max={200} min={0} />
      </div>
      <div>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>Sharpness <span>{sharp}%</span> </p>
        <input onChange={handleSharpness} className='slideInput' value={sharp} min={0} max={10} step={0.5} type="range" />
      </div>
    </div>
  )
}

export { Adjust }