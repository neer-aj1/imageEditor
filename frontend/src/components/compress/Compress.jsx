import React, { useRef, useState } from 'react';
import './compress.css';
import imageCompression from 'browser-image-compression';
import { toast } from 'react-toastify';

let image;
const Compress = () => {
  const [compressed, setCompressed] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    ref.current.click();
  }
  const handleUpload = async (e) => {
    image = e.target.files[0];
    setLoading(true);
    const options = {
      maxSizeMB: 0.5,
      useWebWorker: true,
      quality: 1,
      maxWidthOrHeight: 1920
    }
    try {
      const compressedImage = await imageCompression(image, options);
      setCompressed(compressedImage);
    } catch (e) {
      toast.error("Cannot Compress Due to Unknown Reasons");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (compressed) {
      const blob = new Blob([compressed], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "compressed.jpg";
      a.click();
      URL.revokeObjectURL(url);
    }
  };
  
  return (
    <div className="compressMaster">
      <div className='compress_heading'>
        <h1>Compress Image</h1>
      </div>
      <div className="compress">
        <input ref={ref} type="file" accept='image/*' onChange={handleUpload} style={{ display: 'none' }} />
        <button className='compressUploadImage' onClick={handleClick}>Upload Image</button>
        {isLoading ? (<div>COMPRESSING.....</div>) : compressed ? (<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <button className='compressedImageDownload' onClick={handleDownload}> Download </button><br />
          <p>Image compressed and size is reduced by {(((image.size - compressed.size)/image.size)*100).toFixed(2)}%</p>
        </div>) : null}
      </div>
    </div>
  )
}

export default Compress;