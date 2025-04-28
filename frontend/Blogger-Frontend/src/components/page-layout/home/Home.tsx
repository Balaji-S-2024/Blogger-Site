import React from 'react';
import './Home.css';


function Home() {

  return (
    <>
        <div className='main'>
            <div className='section'>
                <p className='header'>Publish your passions, your way!</p><br /><br />
                <p className='motto'>Create a unique and beautiful blog easily.</p>
            </div>
            <div className='btn-container'>
                <button className='create-blog-btn' type='submit'>Create Your Blog</button>
            </div>
        </div>
    </>
  )
}

export default Home;
