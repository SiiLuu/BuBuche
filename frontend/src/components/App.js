import React, { Component } from 'react'

import '../styles/main.css';

import API from '../utils/API'

import Header from './Header';
import Banner from './Banner';
import About from './About';
import Products from './Products';
import Footer from './Footer';
import Contact from './Contact'
import Auth from './Auth';

class App extends Component {
  state = {
    ActiveContact: false,
    ActiveLogin: false
  }

  handlerActiveContact = () => {
    let { ActiveContact, ActiveLogin } = this.state
    console.log("tamer")
    ActiveContact = true
    ActiveLogin = false
    window.scrollTo(0, 0)
    this.setState({ ActiveContact, ActiveLogin })
  }

  handlerActiveLogin = () => {
    let { ActiveContact, ActiveLogin } = this.state
    ActiveContact = false
    ActiveLogin = true
    window.scrollTo(0, 0)
    this.setState({ ActiveContact, ActiveLogin })
  }

  async componentDidMount() {
    API.get('/')
      .then((res) => console.log(res.data.message))
      .catch(() => console.log("Error express server !"))
  }

  render() {
    const { ActiveContact, ActiveLogin } = this.state
    return (
      <div className="App">
        <Header handler={this.handlerActiveLogin} />
        { !ActiveContact && !ActiveLogin &&  <Banner handler={this.handlerActiveContact} /> }
        { !ActiveContact && !ActiveLogin && <About /> }
        { !ActiveContact && !ActiveLogin && <Products /> }
        { ActiveContact && <Contact /> }
        { ActiveLogin && <Auth handler={this.handlerActiveContact} /> }
        <Footer handler={this.handlerActiveContact} />
      </div>
    );
  }
}

export default App;
