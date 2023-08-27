import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import './editor.css';
import adjust from '../../assets/color-swatch.svg';
import filter from '../../assets/setting-4.svg';
import crop from '../../assets/scissor.svg';
import upload from '../../assets/upload.svg';
import { Adjust } from '../adjust/Adjust';
import { useSelector } from 'react-redux';

const Editor = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    let bri = useSelector(state => state.filter.brightness);
    let contrast = useSelector(state => state.filter.contrast);
    let satur = useSelector(state => state.filter.saturation);
    let hu = useSelector(state => state.filter.hue);
    let sh = useSelector(state => state.filter.sharpness);
    const [image, setImage] = useState(null);
    const [opt, setOpt] = useState("");
    const ref = useRef();
    const imgStyle = {
        filter: `saturate(${satur}%) brightness(${bri}%) contrast(${contrast}%) hue-rotate(${hu}deg) blur(${sh}px)`,
        maxWidth: 'none',
    };
    const handleFileUpload = () => {
        ref.current.click();
    };
    const uploadImage = (e) => {
        const uploadImage = e.target.files[0];
        console.log(uploadImage);
        if (uploadImage && uploadImage.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(uploadImage);
            setImage(imageUrl);
        } else {
            toast.error("Upload an image file");
        }
    }
    const handleDownload = () => {
        if (image) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            const img = document.getElementById('editImage');

            canvas.width = img.width;
            canvas.height = img.height;
            context.filter = imgStyle.filter; 

            
            context.drawImage(img, 0, 0, img.width, img.height);

            const quality = 1;
            
            const filteredImageUrl = canvas.toDataURL('image/jpeg', quality);

            const a = document.createElement('a');
            a.href = filteredImageUrl;
            a.download = 'filtered_image.jpg';
            a.click();
        }

    }
    return (
        <div className="editorContainer">
            <div className="editor" >
                <div className="editor_navbar">
                    <div className="editor_navbar_options">
                        <div onClick={() => setOpt("ADJUST")} className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={filter} alt="adjust image" />
                            <p className="option">ADJUST</p>
                        </div>
                        <div onClick={() => setOpt("FILTER")} className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={adjust} alt="filter image" />
                            <p className="option">FILTER</p>
                        </div>
                        <div onClick={() => setOpt("CROP")} className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={crop} alt="crop image" />
                            <p className="option">CROP</p>
                        </div>
                    </div>
                    <input ref={ref} onChange={uploadImage} type="file" name="file" id="file" style={{ display: 'none' }} />
                    <div onClick={handleFileUpload} className="editor_navbar_upload editor_navbar_options_cont" >
                        <img src={upload} alt="" />
                        <p>Upload</p>
                    </div>
                </div>
                <div className='editor_properties'>
                    {opt === "ADJUST" && <Adjust />}
                </div>

                <div className='editor_imageArea_container' style={{ overflow: 'hidden' }}>
                    <div className='editor_imageArea' style={{ overflow: 'hidden' }}>
                        {image && <img id='editImage' src={image} alt='Uploaded Image' style={{ ...imgStyle, transform: `scale(${zoomLevel})` }} />}
                    </div>
                {image && <div className='bottons'>
                    <button className='func' onClick={() => setZoomLevel(Math.max(0.2, zoomLevel - 0.1))}>Zoom Out</button>
                    <button className='func' onClick={() => setZoomLevel(zoomLevel + 0.1)}>Zoom In</button>
                    <button className='func' onClick={handleDownload}>Download</button>
                </div>}
                </div>
            </div>
        </div>
    )
}

export default Editor