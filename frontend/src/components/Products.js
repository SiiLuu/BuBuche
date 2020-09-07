import React from 'react';
import trade from '../assets/satisfait_ou_rembourse.png';

import Tilt from 'react-parallax-tilt';

const number = [0, 1, 2];
const title = ["Chêne", "Allumage", "Autre"]

const Products = () => (
  <div id="productsList" className="products">
		<h1 className="title heading-site">Mes produits</h1>
    <div className="container">
      <div className="columns is-multiline is-variable">
        {number.map((index) => (
          <div className="column"
            key={index}>
            <a href="/#">
              <Tilt>
                <div className="items">
                  <img src={trade} alt="satisfait ou remboursé" />
                  <h2>{title[index]}</h2>
                </div>
              </Tilt>
            </a>
          </div>
        ))}
      </div>
		</div>
	</div>
);

export default Products;