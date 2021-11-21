import React from 'react';
import './style.css'


function Footer() {
    return (
        <footer className= "flex-row space-between px-1">
           <div className="made-with-love"> ♥ We designed (Eric) and coded (Amanda) this website together ♥ </div>
           <div className="browser-support">*Please view using Google Chrome</div>
        </footer>
    )
}

export default Footer;