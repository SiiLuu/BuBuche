import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Login</h3>
                    <hr class="login-hr"></hr>
                    <p class="subtitle has-text-black">Please login to proceed.</p>
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
                            <button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        Already an account ? <a href="../">Sign Up</a>
                    </p>
                </div>
            </div>
    );
  }
}