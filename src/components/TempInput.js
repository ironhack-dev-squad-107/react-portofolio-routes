import React, { Component } from "react";

import "./TempInput.css";

class TempInput extends Component {
  getScaleName() {
    switch (this.props.scale) {
      case "c":
        return "Celsius";

      case "f":
        return "Fahrenheit";

      case "k":
        return "Kelvins";

      default:
        return "Unknown";
    }
  }

  render() {
    return (
      <section className="TempInput">
        <h3>Temperature in {this.getScaleName()}</h3>

        {/* no <form> because changes should happen without submitting */}
        <label>
          Current Temperature:
          <input
            // the correct onChange method is shared by the parent as PROP
            onChange={event => this.props.tempChange(event)}
            // the number for the temperature is shared by the parent as a PROP
            value={this.props.temperature}
            name="temperature"
            type="number"
            placeholder="400"
          />
        </label>
      </section>
    );
  }
}

export default TempInput;
