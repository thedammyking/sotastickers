import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import products from "../data/products";
import "../css/Store.css";

const Store = props => {
  let { cart, history } = props;
  let {
    history: { push }
  } = props;
  return (
    <section className="section-store">
      <Header history={history} />
      <h1 className="store__title">Available Stickers</h1>
      <p className="store__instruction">
        Click on <i className="fas fa-search" /> to zoom the image,{" "}
        <i className="far fa-check-square" /> to add to cart and{" "}
        <i className="far fa-window-close" /> to remove from cart
      </p>
      <ProductList {...props} cart={cart} photos={products} />
      {cart.length > 0 && (
        <div
          onClick={e => {
            e.preventDefault();
            return push("/cart");
          }}
          className="cart"
        >
          <span>
            <i className="fas fa-shopping-cart" />
          </span>
          <p>{cart.length}</p>
        </div>
      )}
    </section>
  );
};

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
)(Store);
