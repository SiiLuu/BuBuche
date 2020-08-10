import React from 'react';

import Map from './Map'

const Footer = () => (
  <div className="block" id="footer">
    <div className="container">
      <h2>Une question, un doute, passer commande ?</h2>
      <div id="footcall">
        <i className="fa fa-phone" aria-hidden="true"></i>
				<h3>Appellez moi au 07 00 00 00 00 ou <a href="/#">contactez-moi ici</a></h3>
      </div>
      <div className="columns is-multiline is-variable">
        <div className="column is-one-quarter">
          <div className="items">
            <h2 id="footLogo">BuBuche<br /><br /></h2>
            <h4>Votre bois de chauffage <br /> livré à domicile</h4>
          </div>
        </div>
        <div className="column is-half">
          <div id="map">
            <Map />
          </div>
        </div>
        <div className="column is-one-quarter">
          <div className="items">
            <h4>Route de marquixanes<br />Le vieux chêne d'Eus<br />Eus, 66500<br /><br /></h4>
            <h4><strong>Je suis aussi sur les réseaux !</strong><br /><br /></h4>
            <button class="button is-link">Facebook</button>
          </div>
        </div>
      </div>
		</div>
    <h5>2020 - Made by <a href="https://www.linkedin.com/in/lucas-simao-925b1b185/" >Simao Lucas</a></h5>
	</div>
);

export default Footer;