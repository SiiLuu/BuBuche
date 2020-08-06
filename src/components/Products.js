import React from 'react';
import trade from '../assets/satisfait_ou_rembourse.png';

const Products = () => (
  <div className="block products">
		<h1 className="title heading-site">Mes produits</h1>
    <div className="container">
      <div className="columns is-multiline is-variable">
        <div className="column">
          <a href="/#">
            <div className="items">
              <img src={trade} alt="satisfait ou remboursé" />
              <h2>Chêne</h2>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/#">
            <div className="items">
              <img src={trade} alt="satisfait ou remboursé" />
              <h2>Diverse</h2>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/#">
            <div className="items">
              <img src={trade} alt="satisfait ou remboursé" />
              <h2>Bois allumage</h2>
            </div>
          </a>
        </div>
      </div>
		</div>
	</div>
);

export default Products;