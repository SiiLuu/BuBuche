import React, { Component } from 'react'

import Login from './Login';
import Signup from './Signup';

class Auth extends Component {
  state = {
    Switch: true
  }

  handlerSwitch = () => {
    let { Switch } = this.state
    Switch = !Switch
    window.scrollTo(0, 0)
    this.setState({ Switch })
  }

  render() {
    const { Switch } = this.state
    return (
      <div>
		  	<section className="hero is-fullheight" id="auth">
		  	  <div className="columns is-gapless" id="topinfo">
		  	  	<div className="column about-single-element">
		  	  		<i className="fa fa-exchange" aria-hidden="true"></i>
		  	  		<p>Satisfait ou échangé</p>
		  	  	</div>
		  	  	<div className="column about-single-element">
		  	  		<i className="fa fa-tree" aria-hidden="true"></i>
		  	  		<p>Bois 100% français</p>
		  	  	</div>
		  	  	<div className="column about-single-element">
		  	  		<i className="fa fa-truck" aria-hidden="true"></i>
		  	  		<p>Livraison gratuite</p>
		  	  	</div>
		  	  	<div className="column about-single-element" id="headcall">
		  	  		<i className="fa fa-phone" aria-hidden="true"></i>
		  	  		<p>Appelez moi au 07 00 00 00 00 ou <button onClick={this.props.handler}>contactez-moi ici</button></p>
		  	  	</div>
		  	  </div>
		  	  <div className="hero-body">
            { !Switch ? <Signup /> : <Login /> }
			    </div>
		  	</section>
		  </div>
    );
  }
}

export default Auth;