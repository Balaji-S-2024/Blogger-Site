import React from 'react';
import blogger_logo from '../../../assets/blogger-logo.png';
import './Navbar.css';


function Navbar() {

  return (
    <>
        <div className='navbar'>
            <div className='nav-item logo'>
              <a href="/" className='blogger-link'>
                <img src={blogger_logo} alt="" className='logo-img' />
                <span className='logo-name'>Blogger</span>
              </a>
            </div>
            <div className='nav-item'>
              PUBLISH YOUR BLOGS
            </div>
            <div className='nav-item sign-in-container'>
                <a href="/signin"><button className='btn' type='button' >Sign In</button></a>
            </div>
        </div>
    </>
  )
}

export default Navbar;
