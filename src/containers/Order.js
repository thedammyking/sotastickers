import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import * as actionCreators from "../actions/actionCreators";
import Header from "../components/Header";
import "../css/Order.css";

class Order extends Component {
  state = {
    f_name: "",
    l_name: "",
    w_number: "",
    address: "",
    f_nameInput: false,
    l_nameInput: false,
    w_numberInput: false,
    addressInput: false,
    requesting: false,
    screenWidth: "",
    option: false
  };

  componentWillMount() {
    if (this.props.cart.length < 1) this.props.history.replace("/store");
    this.setState({
      screenWidth: window.screen.width
    });
  }

  updateState(state, value) {
    this.setState({
      [state]: value
    });
  }

  lodaer() {
    return (
      <div className="loader">
        <Loader type="Puff" color="#000" height="50" width="50" />
      </div>
    );
  }

  handleOrder(e) {
    e.preventDefault();
    if (this.state.screenWidth <= 425) return this.updateState("option", true);
    return this.sendMail();
  }

  sendMail = () => {
    return this.setState({
      option: false,
      requesting: true
    });
  };

  render() {
    let {
      f_nameInput,
      l_nameInput,
      w_numberInput,
      addressInput,
      f_name,
      l_name,
      w_number,
      address,
      requesting,
      screenWidth,
      option
    } = this.state;
    let { history } = this.props;

    return (
      <section className="section-order">
        <Header history={history} />
        <div className="order">
          <form className="order__form">
            <div
              className={`order__form-group ${
                f_nameInput || f_name.length > 0 ? `input-focused` : ``
              }`}
            >
              <input
                autoComplete="given-name"
                id="firstname"
                type="text"
                value={f_name}
                className="order__form-control"
                onChange={({ target }) =>
                  this.updateState("f_name", target.value)
                }
                onFocus={() => this.updateState("", true)}
                onBlur={() => this.updateState("", false)}
              />
              <label htmlFor="firstname">First Name</label>
              <div className="under-line" />
            </div>
            <div
              className={`order__form-group ${
                l_nameInput || l_name.length > 0 ? `input-focused` : ``
              }`}
            >
              <input
                autoComplete="off"
                id="lastname"
                type="tel"
                value={l_name}
                className="order__form-control"
                onChange={({ target }) =>
                  this.updateState("l_name", target.value)
                }
                onFocus={() => this.updateState("l_nameInput", true)}
                onBlur={() => this.updateState("l_nameInput", false)}
              />
              <label htmlFor="lastname">Last Name</label>
              <div className="under-line" />
            </div>
            <div
              className={`order__form-group ${
                w_numberInput || w_number.length > 0 ? `input-focused` : ``
              }`}
            >
              <input
                autoComplete="tel-national"
                id="whatsapp"
                type="text"
                value={w_number}
                className="order__form-control"
                onChange={({ target }) =>
                  this.updateState("w_number", target.value)
                }
                onFocus={() => this.updateState("w_numberInput", true)}
                onBlur={() => this.updateState("w_numberInput", false)}
              />
              <label htmlFor="whatsapp">WhatsApp Number</label>
              <div className="under-line" />
            </div>
            <div
              className={`order__form-group ${
                addressInput || address.length > 0 ? `input-focused` : ``
              }`}
            >
              <input
                autoComplete="street-address"
                id="address"
                type="text"
                value={address}
                className="order__form-control"
                onChange={({ target }) =>
                  this.updateState("address", target.value)
                }
                onFocus={() => this.updateState("addressInput", true)}
                onBlur={() => this.updateState("addressInput", false)}
              />
              <label htmlFor="address">Address</label>
              <div className="under-line" />
            </div>
            <div className="order__form-group">
              <button
                onClick={e => this.handleOrder(e)}
                className="place-order"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
        {screenWidth <= 425 &&
          option && (
            <div className="order-option">
              <div className="options">
                <a href="#">
                  <i className="fab fa-whatsapp" />
                </a>
                <Link onClick={() => this.sendMail()} to="#">
                  <i className="far fa-envelope" />
                </Link>
              </div>
            </div>
          )}
        {requesting && <div className="waiting">{this.lodaer()}</div>}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
