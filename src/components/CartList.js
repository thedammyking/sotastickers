import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React from "react";
import Item from "./Item";

const CartList = props => {
  let { cart } = props;
  return (
    <div className="cart__list">
      {cart.map((item, i) => <Item {...props} key={i} i={i} item={item} />)}
    </div>
  );
};

export default CartList;
