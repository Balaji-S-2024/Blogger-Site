import React from 'react';
import './SignIn.css';
import Navbar from '../../page-layout/navbar/Navbar';
import Footer from '../../page-layout/footer/Footer';


function SignIn() {

  return (
    <>
      <Navbar />
        <div className='signin-container'>
            <div className='signin-form signin-card'>
                <label htmlFor="Email">Email</label>
                <input type="email" className='input-text' name="email" id="email" placeholder='Enter your E-mail' />
                <label htmlFor="password">Password</label>
                <input type="text" className='input-text' name="password" id="pass_word" placeholder='Enter you Password' />
                <button type="submit" className='signin-btn'>Sign In</button>
                <p>Don't you have an account? <a href="/signup" className='goto'>Sign Up</a></p>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default SignIn;
