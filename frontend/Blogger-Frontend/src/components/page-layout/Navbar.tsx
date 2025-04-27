import React from 'react';
import blogger_logo from '../../assets/blogger-logo.png';
import './Navbar.css';


function Navbar() {

  return (
    <>
        <div className='navbar'>
            <div className='nav-item logo'><img src={blogger_logo} alt="" className='logo-img' /> <span className='logo-name'>Blogger</span></div>
            <div className='nav-item sign-in-container'>
                <button className='btn'>Sign In</button>
            </div>
        </div>
    </>
  )
}

export default Navbar;
