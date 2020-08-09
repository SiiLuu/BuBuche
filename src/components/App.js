import React from 'react';
import '../styles/main.css';

import Header from './Header';
import Banner from './Banner';
import About from './About';
import Products from './Products';
import Footer from './Footer';
import Contact from './Contact'

const App = () => (
  <div className="App">
    <Header />
    <Banner />
    <About />
    <Products />
    <Contact />
    <Footer />
  </div>
);

export default App;
