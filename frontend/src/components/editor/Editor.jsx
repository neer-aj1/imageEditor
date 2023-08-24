import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import './editor.css';
import adjust from '../../assets/color-swatch.svg';
import filter from '../../assets/setting-4.svg';
import crop from '../../assets/scissor.svg';
import upload from '../../assets/upload.svg';
import { Adjust } from '../adjust/Adjust';

const Editor = () => {
    const [image, setImage] = useState(null);
    const [opt, setOpt] = useState("");
    const ref = useRef();
    const handleFileUpload = () => {
        ref.current.click();
    };
    const uploadImage = (e) => {
        const uploadImage = e.target.files[0];
        if (uploadImage && uploadImage.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(uploadImage);
            setImage(imageUrl);
        } else {
            toast.error("Upload an image file");
        }
    }
    return (
        <div className="editorContainer">
            <div className="editor" >
                <div className="editor_navbar">
                    <div className="editor_navbar_options">
                        <div onClick={() => setOpt("ADJUST")} className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={adjust} alt="adjust image" />
                            <p className="option">ADJUST</p>
                        </div>
                        <div onClick={() => setOpt("FILTER")} className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={filter} alt="filter image" />
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
                    {opt === "ADJUST" && <Adjust/>}
                </div>
                <div className='editor_imageArea_container'>
                    <div className='editor_imageArea'>
                        {image && <img id='editImage' src={image} alt='Uploaded Image' style={{ maxWidth: '100%', height:Brightness}} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor