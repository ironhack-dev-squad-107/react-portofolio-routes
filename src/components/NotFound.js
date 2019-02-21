import React, { Component } from "react";

import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <section className="NotFound">
        <h2>404 Not Found</h2>
        <p>Sorry! The page you are looking for does not exist.</p>

        <p>Here is a DRAGON and a UNICORN.</p>
        <span>🐉 🦄</span>
      </section>
    );
  }
}

export default NotFound;
