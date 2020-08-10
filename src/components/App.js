import React, { Component } from 'react'
import '../styles/main.css';

import Header from './Header';
import Banner from './Banner';
import About from './About';
import Products from './Products';
import Footer from './Footer';
import Contact from './Contact'

class App extends Component {
  state = {
    ActiveContact: false
  }

  handlerActiveContact = () => {
    let { ActiveContact } = this.state
    ActiveContact = !ActiveContact
    this.setState({ ActiveContact })
  }

  render() {
    const { ActiveContact } = this.state
    return (
      <div className="App">
        <Header />
        { !ActiveContact && <Banner handler={this.handlerActiveContact} /> }
        { !ActiveContact && <About /> }
        { !ActiveContact && <Products /> }
        { ActiveContact && <Contact /> }
        <Footer />
      </div>
    );
  }
}

export default App;
