import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div
            onClick={() => this.props.history.goBack()}
            className="header-nav"
          >
            <i className="fas fa-arrow-left" />
          </div>
          <div className="logo__box">
            <Link to="/">
              <img src="./images/logo.png" alt="" className="logo" />
            </Link>
          </div>
          <div className="contact__box">
            <div className="contact__tel">
              <Link to="tel:+2349067483735">
                <i className="fas fa-phone-square" />
              </Link>
            </div>
            <div className="contact__facebook">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://facebook.com"
              >
                <i className="fab fa-facebook-square" />
              </Link>
            </div>
            <div className="contact__instagram">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://instagram.com"
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
            <div className="contact__twitter">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://twitter.com"
              >
                <i className="fab fa-twitter-square" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
