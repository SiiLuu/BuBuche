import React from 'react';

import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';
import "react-awesome-button/dist/styles.css";

const Footer = () => (
  <div className="block" id="footer">
		<h1 className="title heading-site">Contact</h1>
    <div className="container">
      <h2>Une question, un doute, passer commande ?</h2>
      <div id="footcall">
        <i className="fa fa-phone" aria-hidden="true"></i>
				<h3>Appellez moi au 07 00 00 00 00 ou <a href="/#">contactez-moi ici</a></h3>
      </div>
      <div className="columns is-multiline is-variable">
        <div className="column">
          <div className="items">
            <h2 id="footLogo">BuBuche<br /><br /></h2>
            <h4>Votre bois de chauffage <br /> livré à domicile</h4>
          </div>
        </div>
        <div className="column">
          <div className="items">
            eazreazrz
          </div>
        </div>
        <div className="column">
          <div className="items">
            <h4>Route de marquixanes<br />Le vieux chêne d'Eus<br />Eus, 66500<br /><br /></h4>
            <h4><strong>Je suis aussi sur les réseaux !</strong><br /><br /></h4>
            <AwesomeButton href="https://fontawesome.com/v4.7.0/icon/facebook" type="primary">
              Facebook
            </AwesomeButton>
          </div>
        </div>
      </div>
		</div>
	</div>
);

export default Footer;