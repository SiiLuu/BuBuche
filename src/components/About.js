import React from 'react';

import trade from '../assets/satisfait_ou_rembourse.png';

const About = () => (
  <div id="engagements">
		<h2 className="title heading-site">Mes engagements</h2>
		<div className="container about">
			<div className="columns is-multiline is-variable is-8">
				<div className="column about-single-element">
					<p className="is-size-4"><strong>Livraison gratuite avec prise de rendez-vous à partir de 3 stère acheté</strong></p>
					<p className="is-size-6">Vous réservez <strong>un créneau de livraison</strong> de 2 heures et je viens vous livrer chez vous, dans votre appartement, cave ou jardin, <strong>peu importe le nombre d'étages.</strong></p>
				</div>
				<div className="column about-single-element">
					<img src={trade} alt="satisfait ou remboursé" />
				</div>
				<div className="column about-single-element">
					<p className="is-size-4"><strong>Satisfait ou échangé</strong></p>
					<p className="is-size-6">Je garanti des produits de qualité — <strong>bois sec</strong>. Vos commandes de bois sont échangées gratuitement si elles ne correspondent à la description.</p>
				</div>
			</div>
		</div>
	</div>
);

export default About;