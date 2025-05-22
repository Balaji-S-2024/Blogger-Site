import './App.css';
// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/pages/landing-page/LandingPage';
import SignIn from './components/pages/signin/SignIn';
import SignUp from './components/pages/siginup/SignUp';
import Home from './components/pages/home/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
