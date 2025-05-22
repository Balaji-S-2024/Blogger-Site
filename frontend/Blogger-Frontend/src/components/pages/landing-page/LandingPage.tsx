import React from 'react';
import './LandingPage.css';
import Navbar from '../../page-layout/navbar/Navbar';
import Footer from '../../page-layout/footer/Footer';


function LandingPage() {

  return (
    <>
      <Navbar />
        <div className='main'>
            <div className='section'>
                <p className='header'>Publish your passions, your way!</p><br /><br />
                <p className='motto'>Create a unique and beautiful blog easily.</p>
            </div>
            <div className='btn-container'>
                <a href="/signin"><button className='create-blog-btn' type='submit'>Create Your Blog</button></a>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default LandingPage;
