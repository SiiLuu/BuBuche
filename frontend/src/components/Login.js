import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div class="container has-text-centered" id="login">
        <div class="column is-4">
          <h3 class="title has-text-black">Se connecter</h3>
          <hr class="login-hr"></hr>
          <p class="subtitle has-text-black">Connectez-vous pour continuer !</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus=""></input>
                </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="input is-large" type="password" placeholder="Your Password"></input>
                    </div>
                </div>
                <button class="button is-block is-info is-large is-fullwidth">Se connecter <i class="fa fa-sign-in" aria-hidden="true"></i></button>
              </form>
          </div>
          <p class="has-text-grey">
              Vous n'avez pas de compte ? <a href="../">S'inscrire</a>
          </p>
        </div>
      </div>
    );
  }
}