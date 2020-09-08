import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div class="container has-text-centered" id="login">
        <div class="column is-4">
          <h3 class="title has-text-black">S'inscrire</h3>
          <hr class="login-hr"></hr>
          <p class="subtitle has-text-black">Inscrivez-vous pour continuer !</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="nickname" placeholder="Prénom" autofocus=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="lastname" placeholder="Nom" autofocus=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Email" autofocus=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    <input class="input is-large" type="password" placeholder="Mot de passe"></input>
                </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth">S'inscrire <i class="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
          </div>
          <p class="has-text-grey">
              Vous avez déjà un compte ? <a href="../">Se connecter</a>
          </p>
        </div>
      </div>
    );
  }
}