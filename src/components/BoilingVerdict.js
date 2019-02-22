import React, { Component } from "react";

import "./BoilingVerdict.css";

class BoilingVerdict extends Component {
  render() {
    return (
      <div className="BoilingVerdict">
        {this.props.celsiusTemp >= 100 ? (
          // if it's boiling temperature (100 celsius)
          <p>IT’S GETTIN’ HOT IN HURR 🔥</p>
        ) : (
          // if it's NOT boiling temperature
          <p>Brrrrrrr 🌊</p>
        )}
      </div>
    );
  }
}

export default BoilingVerdict;
