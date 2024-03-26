// Modal.js
import React from 'react';

const Modal = ({ videoUrl, onClose }) => {
    return (
        <div className="modal" style={{zIndex:"999"}}>
            <div className="modal-content">
                {/* <video src={videoUrl} width="600" height="300" controls autoPlay /> */}
                <h1>hellllllll</h1>
                <video width="600" height="300">
                    <source src={videoUrl}/>
                </video>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
