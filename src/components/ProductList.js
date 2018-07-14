import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import Product from "./Product";

export default class ProductList extends Component {
  state = {
    photos: [],
    hasMore: true
  };

  componentWillMount() {
    this.fetchMoreData();
  }

  fetchMoreData = () => {
    let { photos } = this.props;
    let { photos: statePhotos } = this.state;
    let start = statePhotos.length;
    let offSet = start + 20;
    if (photos.length === statePhotos.length)
      return this.setState({
        hasMore: false
      });
    return this.setState({
      photos: statePhotos.concat(photos.slice(start, offSet))
    });
  };

  loader() {
    return (
      <div className="loader">
        <Loader type="Puff" color="#000" height="50" width="50" />
      </div>
    );
  }

  render() {
    let { photos, hasMore } = this.state;
    return (
      <div className="product__list">
        <InfiniteScroll
          dataLength={photos.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={this.loader()}
        >
          {photos.map((photo, i) => (
            <Product {...this.props} key={i} i={i} photo={photo} />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
