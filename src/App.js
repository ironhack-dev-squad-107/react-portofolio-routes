import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/AboutUs.js";
import HomePage from "./components/HomePage.js";
import ProjectList from "./components/ProjectList.js";
import NotFound from "./components/NotFound.js";
import ProjectDetails from "./components/ProjectDetails.js";
import TempCalc from "./components/TempCalc.js";
import PokemonSearch from "./components/PokemonSearch.js";

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
            <NavLink to="/temperature">Temperature Calculator</NavLink>
            <NavLink to="/pokemon">Pokemon Search</NavLink>
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
          <Route path="/project/:projectId" component={ProjectDetails} />
          <Route path="/temperature" component={TempCalc} />
          <Route path="/pokemon" component={PokemonSearch} />

          {/* ALWAYS put your 404 route LAST */}
          <Route component={NotFound} />
        </Switch>

        <footer>
          <p>Made with 🤖 at Ironhack</p>

          {/* You can put a Switch anywhere in your code */}
          <Switch>
            <Route
              path="/project"
              // Use render instead of component to define the HTML directly
              // (or the send your own PROPS to the the component)
              render={() => {
                return <p>WARNING: These Projects Are FAKE.</p>;
              }}
            />
          </Switch>
        </footer>
      </div>
    );
  }
}

export default App;
