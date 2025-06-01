import React from 'react';
import './Footer.css';
import { FaHandsHelping, FaUsers, FaCode, FaLock, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glass">
        <div className="footer-sections">
          <div className="footer-column">
            <h4><FaHandsHelping /> Help</h4>
            <ul>
              <li>Help Center</li>
              <li>Help Form</li>
              <li>Video Tutorials</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4><FaUsers /> Community</h4>
            <ul>
              <li>Blogger Buzzz</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4><FaCode /> Developer</h4>
            <ul>
              <li>Blogger API</li>
              <li>Developer Forum</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p><FaFileAlt /> Terms of Service</p>
          <p><FaLock /> Privacy</p>
          <p><FaShieldAlt /> Content Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
