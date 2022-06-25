import React from 'react';

import styles from './App.css';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Jumbotron />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
