import React from 'react';
import './Home.css';
import SearchBar from '../../page-layout/search-bar/SearchBar';
import AddForm from '../addform/Addform';
import Footer from './../../page-layout/footer/Footer';
import Allposts from './../all-posts/AllPosts';


function Home() {

  return (
    <>
      <SearchBar />
      <Allposts />
      <Footer />
    </>
  )
}

export default Home;
