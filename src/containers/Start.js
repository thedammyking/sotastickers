import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../css/Start.css";

export default class Start extends Component {
  render() {
    let {
      history: { push }
    } = this.props;
    return (
      <section className="section-start">
        <Header />
        <div className="slider">
          <div className="slider__container">
            <div className="slides--1" />
            <div className="slides--2" />
          </div>
        </div>
        <div className="slider__overlay">
          <div className="slider__overlay-content">
            <div className="slider__logo-box">
              <Link to="/">
                <img src="./images/logo.png" alt="" className="logo" />
              </Link>
            </div>
            <div className="slider__text-box">
              <h1 className="slider__text">
                The Pictures of your favourite Superheroes and Characters on the
                wall of your room
              </h1>
            </div>
            <button
              onClick={e => {
                e.preventDefault();
                return push("/store");
              }}
              className="slider__btn"
            >
              View Gallery <i className="fas fa-images" />
            </button>
            <div className="slider__contact-box">
              <div className="contact__whatsapp">
                <a href="https://wa.me/2349067483735">
                  <i className="fab fa-whatsapp-square" />
                </a>
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
        </div>
      </section>
    );
  }
}
