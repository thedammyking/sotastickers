import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import PhotoView from "./PhotoView";
import { findItemIndex } from "../util/helper";

export default class Product extends Component {
  state = {
    showZoom: false,
    size: "A2"
  };

  componentWillMount() {
    const { cart, i } = this.props;
    const index = findItemIndex(cart, i);
    if (index >= 0)
      this.setState({
        size: cart[index].size
      });
  }

  showZoom = () => {
    let { showZoom } = this.state;
    if (!showZoom)
      return this.setState({
        showZoom: true
      });

    if (showZoom)
      return this.setState({
        showZoom: false
      });
  };

  stateUpdate(state, value) {
    return this.setState({
      [state]: value
    });
  }

  addToCart() {
    const { addItem, i } = this.props;
    const item = {
      productId: i,
      size: this.state.size,
      qty: 1
    };
    addItem(item);
  }

  removeFromCart() {
    const { removeItem, cart, i } = this.props;
    const index = findItemIndex(cart, i);
    removeItem(index);
  }

  selectedItemSize(size) {
    const { selectSize, cart, i } = this.props;
    const index = findItemIndex(cart, i);
    selectSize(size, index);
    this.stateUpdate("size", size);
  }

  checkCart(i) {
    const { cart } = this.props;
    const index = findItemIndex(cart, i);
    if (index >= 0) return true;
    return false;
  }

  render() {
    let { photo, i } = this.props;
    let { showZoom, size } = this.state;
    let selected = this.checkCart(i);

    return (
      <div className={`product${selected ? ` overlay` : ``}`}>
        <div className="product__image">
          <img src={photo.src.main} alt="" />
        </div>
        <div className="product__overlay">
          {selected && (
            <div className="product__size">
              <div className="product__size-btn-grp">
                <button
                  onClick={() => this.selectedItemSize("A2")}
                  className={`product__size-btn${
                    size === "A2" ? ` selected` : ``
                  }`}
                >
                  Small(A2)
                </button>
                <button
                  onClick={() => this.selectedItemSize("A1")}
                  className={`product__size-btn${
                    size === "A1" ? ` selected` : ``
                  }`}
                >
                  Large(A1)
                </button>
              </div>
            </div>
          )}
          <div className="product__action-btn-grp">
            <div
              onClick={() =>
                selected ? this.removeFromCart() : this.addToCart()
              }
              className={`product__action product__action-${
                selected ? `close` : `select`
              }`}
            />
            <div
              onClick={() => this.showZoom()}
              className="product__action product__action-search"
            />
          </div>
        </div>
        <p className="product__name">{photo.title}</p>
        {showZoom && <PhotoView photos={[photo]} showGallery={this.showZoom} />}
      </div>
    );
  }
}
