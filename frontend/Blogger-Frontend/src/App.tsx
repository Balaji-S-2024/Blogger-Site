import './App.css';
// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/page-layout/footer/Footer';
import Home from './components/pages/home/Home';
import Navbar from './components/page-layout/navbar/Navbar';
import SignIn from './components/pages/signin/SignIn';
import SignUp from './components/pages/siginup/SignUp';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
