import React from 'react';
import './Home.css';
import SearchBar from '../../page-layout/search-bar/SearchBar';
import AddForm from '../addform/Addform';
import Footer from './../../page-layout/footer/Footer';


function Home() {

  return (
    <>
      <SearchBar />
      <AddForm />
      <Footer />
    </>
  )
}

export default Home;
