import React from 'react';

const Contact = () => (
  <div id="contact">
    <div className="columns is-gapless" id="topInfo">
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
				<p>Appellez moi au 07 00 00 00 00 ou <a href="/#">contactez-moi ici</a></p>
			</div>
		</div>
    <h2 className="title heading-site">Contact</h2>
		<div className="container">
			<div className="columns is-multiline is-variable">
				<div className="column" id="formContact">
          <div className="field">
            <label className="label">Sujet</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Commande</option>
                  <option>Problème</option>
                  <option>autre</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" placeholder="Email"></input>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>
  
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Comment puis-je vous aider ?"></textarea>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Envoyer</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Annuler</button>
            </div>
          </div>
				</div>
				<div className="column">
          <div id="infos">
            <h1 className="is-size-3">Informations</h1>
            <h2 className="is-size-5">BuBuche<br />routes de marquixanes, 66500, Eus.</h2>
            <h2 className="is-size-5">
              <i className="fa fa-phone" aria-hidden="true"></i>
              Appelez-moi :<br />07 00 00 00 00</h2>
            <h2 className="is-size-5">Envoyez-moi un e-mail :<br /><a href="/#">example@gmail.com</a></h2>
          </div>
				</div>
			</div>
		</div>
	</div>
);

export default Contact;