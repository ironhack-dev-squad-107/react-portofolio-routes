import React, { Component } from "react";

import "./TempCalc.css";
import TempInput from "./TempInput";
import BoilingVerdict from "./BoilingVerdict";

class TempCalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: "",
      fahrenheit: ""
    };
  }

  // This method will be given to TempInput for updating OUR STATE
  updateCelsius(event) {
    const { value } = event.target;
    this.setState({
      celsius: value,
      fahrenheit: (value * 9) / 5 + 32
    });
  }

  // This method will be given to TempInput for updating OUR STATE
  updateFahrenheit(event) {
    const { value } = event.target;
    this.setState({
      fahrenheit: value,
      celsius: ((value - 32) * 5) / 9
    });
  }

  render() {
    return (
      <section className="TempCalc">
        <h2>Temperature Calculator</h2>

        {/*
         * Fahrenheit input
         * needs to know what the celsius state is -> pass the STATE as a prop
         * needs to change the celsius state -> pass a METHOD as a prop
         */}
        <TempInput
          scale="f"
          temperature={this.state.fahrenheit}
          tempChange={event => this.updateFahrenheit(event)}
        />

        {/*
         * Celsius input
         * needs to know what the celsius state is -> pass the STATE as a prop
         * needs to change the celsius state -> pass a METHOD as a prop
         */}
        <TempInput
          scale="c"
          temperature={this.state.celsius}
          tempChange={event => this.updateCelsius(event)}
        />

        {/* needs to know what the celius state is -> pass the STATE as a prop */}
        <BoilingVerdict celsiusTemp={this.state.celsius} />
      </section>
    );
  }
}

export default TempCalc;
