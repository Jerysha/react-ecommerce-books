import React from 'react';
import {GiBookAura} from "react-icons/gi";
const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="logo_container footer_logo">
            <div className="logo_icon"><GiBookAura className="nav_icon"/></div>
            <div className="logo_text">
                <h1>Library</h1>
                <p>Founded 1995</p>
            </div>
        </div>
        <ul className="footer_links">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Books</a></li>
            <li><a href="">Cart</a></li>
        </ul>
        <p className="copyright">copyright &copy; 2022 Library</p>
    </div>
  )
}

export default Footer