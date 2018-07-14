import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import React, { Component } from "react";
import Start from "./containers/Start";
import Store from "./containers/Store";
import Cart from "./containers/Cart";
import Order from "./containers/Order";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/store" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Order} />
      </Switch>
    );
  }
}

export default App;
