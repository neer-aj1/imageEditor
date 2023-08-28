import React, { useEffect, useRef, useState } from 'react'
import './format.css'

const Format = () => {
  const ref = useRef();
  const [image, setImage] = useState(null)
  const [imgName, setImgName] = useState(null)
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => {
    ref.current.click();
  }
  const handleUpload = (e) => {
    const photo = e.target.files[0];
    setImage(photo);
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const URL = e.target.result;
      setImgName(URL);
    }
    reader.readAsDataURL(photo)
  }
  const convertImageToFormat = (format) => {
    if (image) {
      setLoading(true);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = imgName;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL(`image/${format}`);
        setImgName(dataURL);
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = `compressed.${format}`;
        a.click();
        setImage(null);
        setLoading(false);
      }
    }
  }
  return (
    <div className="compressMaster">
      <div className='compress_heading'>
        <h1>Change Format</h1>
      </div>
      <div className="compress">
        {image ?
          <><div className='convertButtons' style={{ display: 'flex', gap: '20px' }}>
            <button onClick={() => convertImageToFormat('png')}>Convert to PNG</button>
            <button onClick={() => convertImageToFormat('jpeg')}>Convert to JPEG</button>
            <button onClick={() => convertImageToFormat('webp')}>Convert to WebP</button>
          </div>
          </> :
          <>
            <input ref={ref} type="file" accept='image/*' onChange={handleUpload} style={{ display: 'none' }} />
            <button className='compressUploadImage' onClick={handleClick}>Upload Image</button>
          </>
        }
        {isLoading ? <div>LOADING.....</div> : null}
      </div>
    </div>
  )
}

export default Format