import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import "../css/PhotoView.css";

export default class PhotoView extends Component {
  state = {
    slides: 0,
    slide: {
      photo: {},
      index: 0
    }
  };

  componentWillMount() {
    let { photos } = this.props;
    this.setState({
      slides: photos.length,
      slide: {
        photo: photos[0],
        index: 0
      }
    });
  }

  slide(direction) {
    let { photos } = this.props;
    let {
      slide: { index }
    } = this.state;
    let newIndex;
    switch (direction) {
      case "backward":
        if (index === 0) return null;
        newIndex = index - 1;
        return this.setState({
          slide: {
            photo: photos[newIndex],
            index: newIndex
          }
        });
      case "forward":
        if (index === photos.length - 1) return null;
        newIndex = index + 1;
        return this.setState({
          slide: {
            photo: photos[newIndex],
            index: newIndex
          }
        });
      default:
        return null;
    }
  }
  render() {
    let { photos, showGallery } = this.props;
    let {
      slide: { photo, index }
    } = this.state;

    return (
      <div className="photo-view">
        <div onClick={() => showGallery()} className="photo-view__close">
          <i className="fas fa-times" />
        </div>
        {photos.length > 1 && (
          <div
            onClick={() => this.slide("backward")}
            className={`photo-view__nav photo-view__nav-left${
              index === 0 ? ` disabled-nav` : ``
            }`}
          >
            <i className="fas fa-angle-left" />
          </div>
        )}
        <div className="photo__wrapper">
          <img src={photo.src.main} alt="" />
          <div className="photo__title">
            <p>{photo.title}</p>
          </div>
          <div className="photo__caption">
            <p>{photo.caption}</p>
          </div>
        </div>
        {photos.length > 1 && (
          <div
            onClick={() => this.slide("forward")}
            className={`photo-view__nav photo-view__nav-right${
              index === photos.length - 1 ? ` disabled-nav` : ``
            }`}
          >
            <i className="fas fa-angle-right" />
          </div>
        )}
      </div>
    );
  }
}
