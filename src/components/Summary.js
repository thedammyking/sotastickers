import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";

export default class Summary extends Component {
  getNumberofSmall() {
    let { cart } = this.props;
    cart = cart.filter(item => item.size === "A2").map(item => item.qty);
    if (cart.length > 0) return cart.reduce((ac, cv) => ac + cv);
    return 0;
  }
  getNumberOfBig() {
    let { cart } = this.props;
    cart = cart.filter(item => item.size === "A1").map(item => item.qty);
    if (cart.length > 0) return cart.reduce((ac, cv) => ac + cv);
    return 0;
  }

  render() {
    let big = this.getNumberOfBig();
    let small = this.getNumberofSmall();
    console.log(big, small);
    return (
      <div className="summary">
        <div className="summary__wrapper">
          <p className="summary__title">Order Summary</p>
          <table className="summary__table">
            <tbody>
              <tr>
                <td>{small}</td>
                <td>Small(A2)</td>
                <td>{`$ ${small * 10}`}</td>
              </tr>
              <tr>
                <td>{big}</td>
                <td>Big(A1)</td>
                <td>{`$ ${big * 20}`}</td>
              </tr>
              <tr>
                <td />
                <td>Total</td>
                <td>{`$ ${small * 10 + big * 20}`}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/order");
            }}
            className="summary__action"
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}
