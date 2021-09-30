import React from 'react';
import '../css/logo.css';

function Logo(props) {
    return (
        <div className="d-flex">
          <div>
          <span className="dot"></span> 
          <span className="dot position-relative" style={{top:'15px',height:'10px',width:'10px',backgroundColor:'#188AFA'}}></span>
          </div>
          <h2 className="logo-title ms-2">Photo Framed</h2>  
        </div>
    );
}

export default Logo;