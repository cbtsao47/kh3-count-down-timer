import React, { Component } from "react";
import KH3Logo from "./images/Kingdom_Hearts_III_Logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo__wrapper">
          <img src={KH3Logo} alt="logo" className="logo__img" />
        </div>
      </div>
    );
  }
}

export default App;
