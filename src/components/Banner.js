import React, { Component } from 'react'

import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import 'react-awesome-button/dist/themes/theme-blue.css';

class Banner extends Component {
  render() {
    return (
      <div>
		  	<section className="hero is-fullheight" id="banner">
		  	  <div className="columns is-gapless" id="tophead">
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
		  	  		<p>Appellez moi au 07 00 00 00 00 ou <button onClick={this.props.handler}>contactez-moi ici</button></p>
		  	  	</div>
		  	  </div>
		  	  <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">
                Votre bois de chauffage <br />
                livré à domicile <br />
                en toute simplicité
              </h1>
              <AwesomeButton href="/#productsList" type="primary">Découvrez mes produits</AwesomeButton>
            </div>
		  	  </div>
		  	</section>
		  </div>
    );
  }
}

export default Banner;