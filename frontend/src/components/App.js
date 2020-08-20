import React, { Component } from 'react'

import '../styles/main.css';

import API from '../utils/API'

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
    ActiveContact = true
    window.scrollTo(0, 0)
    this.setState({ ActiveContact })
  }

  async componentDidMount() {
    API.get('/')
      .then((res) => console.log(res.data.message))
      .catch(() => console.log("Error express server !"))
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
        <Footer handler={this.handlerActiveContact} />
      </div>
    );
  }
}

export default App;
