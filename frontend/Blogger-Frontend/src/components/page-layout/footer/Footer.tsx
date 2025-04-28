import React from 'react';
import './Footer.css';


function Footer() {

  return (
    <>
        <div className='footer'>
            <div className='footer-content'>
                <div>
                    <p>HELP</p>
                    <div>
                        <p className='list-items'>Help Center</p>
                        <p className='list-items'>Help Form</p>
                        <p className='list-items'>Video Tutorials</p>
                    </div>
                </div>
                <div>
                    <p>COMMUNITY</p>
                    <div>
                        Blogger Buzzz
                    </div>
                </div>
                <div>
                    <p>DEVELOPER</p>
                    <div>
                        <p>Blogger API</p>
                        <p>Developer Forum</p>
                    </div>
                </div>
            </div>
            <div className='footer-content'>
                <p>Terms of Service </p>
                <p>Privacy</p>
                <p>Content Policy</p>
            </div>
        </div>
    </>
  )
}

export default Footer;
