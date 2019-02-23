import React, { Component } from "react";
import axios from "axios";

import "./PokemonSearch.css";

class PokemonSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      pokemonArray: []
    };
  }

  // use if you want to get data IMMEDIATELY when the component loads
  // Timeline of React: constructor() -> render() -> componentDidMount()
  componentDidMount() {
    // get random pokemon number (1-802)
    const randomNumber = Math.floor(Math.random() * 802) + 1;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then(response => {
        // to get the JSON info from AXIOS use response.data
        console.log(response.data);

        const pokemonList = this.state.pokemonArray;
        pokemonList.push(response.data);
        // call setState() to render the DOM again with the new pokemon
        this.setState({ pokemonArray: pokemonList });
      })
      .catch(() => {
        alert("Sorry! Something went wrong with the search.");
      });
  }

  genericOnChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  searchPokeInfo(event) {
    // prevent the default page reload of a form submission
    event.preventDefault();

    const { searchText } = this.state;

    // charizard 6   | pickachu 25
    // jigglypuff 39 | mewtwo 150
    console.log(`https://pokeapi.co/api/v2/pokemon/${searchText}`);
    // GET https://pokeapi.co/api/v2/pokemon/567
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchText}`)
      .then(response => {
        // to get the JSON info from AXIOS use response.data
        console.log(response.data);

        const pokemonList = this.state.pokemonArray;
        pokemonList.push(response.data);
        // call setState() to render the DOM again with the new pokemon
        this.setState({ pokemonArray: pokemonList });
      })
      .catch(() => {
        alert("Sorry! Something went wrong with the search.");
      });
  }

  render() {
    return (
      <section className="PokemonSearch">
        <h2>Pokemon Search</h2>

        <form onSubmit={event => this.searchPokeInfo(event)}>
          <label>
            Pokemon Number or Name:
            <input
              onChange={event => this.genericOnChange(event)}
              value={this.state.searchText}
              name="searchText"
              type="text"
              placeholder="25 or pickachu"
            />
          </label>

          <button>Search</button>
        </form>

        <h3>Search Results</h3>
        <ul>
          {this.state.pokemonArray.map(onePoke => {
            return (
              <li key={onePoke.id}>
                <h2>{onePoke.name}</h2>
                <p>Pokemon Number: {onePoke.id}</p>
                <img src={onePoke.sprites.front_default} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default PokemonSearch;
