import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";

export default class Item extends Component {
  state = {
    qty: ""
  };

  componentWillMount() {
    this.setState({
      qty: this.props.item.qty
    });
  }
  removeFromCart() {
    const { removeItem, i } = this.props;
    return removeItem(i);
  }

  selectItemSize() {
    const { selectSize, item, i } = this.props;
    if (item.size === "A2") return selectSize("A1", i);
    return selectSize("A2", i);
  }

  duplicateItem() {
    const { duplicateItem, i } = this.props;
    return duplicateItem(i);
  }

  changeQuantity(qty) {
    const { enterItemQuantity, i } = this.props;
    return enterItemQuantity(i, qty);
  }

  render() {
    let { photos, item, i } = this.props;
    item = { ...photos[item.productId], ...item };

    return (
      <div className="item">
        <div onClick={() => this.removeFromCart()} className="item__remove">
          &times;
        </div>
        <div className="item__img-box">
          <img src={item.src.thumbnail} alt={item.title} />
        </div>
        <div className="item__details">
          <div className="item__name">
            <p>{item.title}</p>
          </div>
          <div className="item__price">$ {item.price[item.size]}</div>
          <div className="item__action">
            <div className="item__qty">
              <label htmlFor="item__qty">Qty:</label>
              <input
                value={this.state.qty}
                onBlur={({ target }) => {
                  if (!target.value) return this.changeQuantity(1);
                }}
                onChange={({ target }) => {
                  let value = parseInt(target.value, 10);
                  if (isNaN(value)) {
                    this.setState({
                      qty: value
                    });
                    return this.changeQuantity(1);
                  }
                  if (value === 0) {
                    this.setState({
                      qty: 1
                    });
                    return this.changeQuantity(1);
                  }
                  this.setState({
                    qty: value
                  });
                  return this.changeQuantity(value);
                }}
                autoComplete="off"
                id="item__qty"
                type="number"
              />
            </div>
            <div onClick={() => this.selectItemSize()} className="item__size">
              {`${item.size === "A2" ? "Small" : "Big"} (${item.size})`}
            </div>
            <div
              onClick={() => this.duplicateItem()}
              className="item__duplicate"
            >
              <i className="far fa-copy" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
