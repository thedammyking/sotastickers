import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import CartList from "../components/CartList";
import Summary from "../components/Summary";
import Header from "../components/Header";
import products from "../data/products";
import "../css/Cart.css";

class Cart extends Component {
  componentWillMount() {
    if (this.props.cart.length < 1) this.props.history.replace("/store");
  }
  render() {
    let { cart, history } = this.props;
    if (cart.length < 1) history.replace("/store");
    return (
      <section className="section-cart">
        <Header history={history} />
        <div className="cart__container">
          <CartList {...this.props} photos={products} />
          <Summary {...this.props} />
        </div>
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
)(Cart);
