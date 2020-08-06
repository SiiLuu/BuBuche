import React, { Component } from 'react'

class Header extends Component {
  state = {
    burgerActive: false,
    fixedNavbar: false
  }

  // Active and desactive burger
  toggleClass = () => {
    const { burgerActive } = this.state;
    this.setState({ burgerActive: !burgerActive });
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const fixed = window.scrollY > 80 ? true : false;
      this.setState({ fixedNavbar: fixed });
    });
  }

  render() {
    const { burgerActive, fixedNavbar } = this.state;
    return (
      <div className="block">
        <header className={fixedNavbar ? "header fixedHead": "header"}>
          <div id="computer_navbar">
            <a href="/#" className="header-logo">
              BuBuche
            </a>
            <nav className="header-menu">
              <a href="/#">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                Connexion
              </a>
              <a href="/#">
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                Panier
              </a>
            </nav>
          </div>
          <div id="responsive_navbar">
              <a href="/#" className="header-logo">
                BuBuche
              </a>
              <button
                className={burgerActive ? "navbar-burger is-active": "navbar-burger"}
                onClick={this.toggleClass}
                aria-label="menu" aria-expanded="false"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
              <div className={burgerActive ? "navbar-menu is-active": "navbar-menu"} id="navMenu">
                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/#">Accueil</a>
                  <a className="navbar-item" href="/#">À propos</a>
                  <a className="navbar-item" href="/#">Mes travaux</a>
                  <a className="navbar-item" href="/#">Contact</a>
                </div>
              </div>
            </div>
        </header>
      </div>
    )
  }
}

export default Header;