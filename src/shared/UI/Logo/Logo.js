import React from 'react';
import "./Logo.css"

const Logo = () => {
    return ( 
        <div className="logo">
            <img  src = "./assets/logo.png" alt="logo" className="logo-img"/>
            <label className="logo-text">
                Visual Lab Editor
            </label>
        </div>
     );
}
 
export default Logo;