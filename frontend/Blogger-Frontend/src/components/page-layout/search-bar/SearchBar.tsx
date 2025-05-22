import React from 'react';
import './SearchBar.css';
import hamburger from "../../../assets/hamburger.png";
import blogger_logo from '../../../assets/blogger-logo.png';
import profile from "../../../assets/profile.png";


function SearchBar() {

  return (
    <>
    <div className='nav-bar'>
      <div className='search-bar-nav'>
        <div className='menu-container'>
          <div className='menu-img-container'>
            <img src={hamburger} alt="" className='menu-icon' />
          </div>
              <a href="/" className='blogger-link'>
                <img src={blogger_logo} alt="" className='logo-img' />
                <span className='logo-name'>Blogger</span>
              </a>
        </div>
        <div>
          SearchBar
        </div>
        <div className='profile-container'>
          <img src={profile} alt="Profile Photo" className='profile'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchBar;
