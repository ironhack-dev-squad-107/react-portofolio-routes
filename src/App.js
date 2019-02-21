import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/AboutUs.js";
import HomePage from "./components/HomePage.js";
import ProjectList from "./components/ProjectList";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Portfolio Site of Nizar</h1>

          <nav>
            {/* Use NavLink or Link for cool React navigation with NO REFRESH
             * (NavLink adds a special "active" class to the current page)
             */}
            {/* <a href="/">Home</a> */}
            <NavLink exact to="/">
              Home
            </NavLink>

            {/* <a href="/about">About Me</a> */}
            <NavLink to="/about">About Me</NavLink>

            {/* <a href="/project-list">Projects</a> */}
            <NavLink to="/project-list">Projects</NavLink>
          </nav>
        </header>

        {/*
         * Switch defines a part of your app that changes based on the URL
         * (only chooses one piece of content in the list)
         */}
        <Switch>
          {/*
           * each Route defines one potential content that could appear
           * (it associates a URL with a component)
           */}
          {/* your path="/" Route ALWAYS needs the exact prop */}
          <Route exact path="/" component={HomePage} />

          <Route path="/about" component={AboutUs} />
          <Route path="/project-list" component={ProjectList} />

          {/* ALWAYS put your 404 route LAST */}
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 🤖 at Ironhack</p>
        </footer>
      </div>
    );
  }
}

export default App;
