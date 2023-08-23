import React, { useState } from 'react';
import './editor.css';
import adjust from '../../assets/color-swatch.png';
import filter from '../../assets/setting-4.png';
import crop from '../../assets/scissor.png';

const Editor = () => {
    let toBeRendered = 1;
    const [opt, setOpt] = useState('');
    const handleClick = (e) => {
        let choosen = e.target.innerHTML;
        console.log(choosen);
        if (choosen === 'Filers') {
            setOpt(choosen);
        }
    }
    return (
        <div className="editorContainer">
            <div className="editor">
                <div className="editor_navbar">
                    <div className="editor_navbar_options">
                        <div className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={adjust} alt="adjust image" />
                            <p className="option" onClick={handleClick}>ADJUST</p>
                        </div>
                        <div className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={filter} alt="filter image" />
                            <p className="option" onClick={handleClick}>FILTER</p>
                        </div>
                        <div className='editor_navbar_options_cont'>
                            <img className='editor_icons' src={crop} alt="crop image" />
                            <p className="option" onClick={handleClick}>CROP</p>
                        </div>
                    </div>
                    <div className="editor_navbar_upload editor_navbar_options_cont" >
                        <p>Upload</p>
                    </div>
                </div>
                <div className='editor_properties'>
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}

export default Editor