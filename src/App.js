import { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import SearchForm from "./components/SearchForm";

function onSearchCallback(value) {
  console.log("onSearchCallback called with value=" + value);
}

function onSelectGenreCallback(genre) {
  console.log("onSelectGenre callback called with genre=" + genre);
}

function genresList() {
  return ["All", "Action", "Comedy"];
}

class App extends Component {
  state = {
    selectedGenre: ''
  };

  constructor(props) {
    super(props);
    this.state.selectedGenre = props.selectedGenre || 'All';
    this.updateGenre = this.updateGenre.bind(this)
  }

  updateGenre(genre) {
    this.setState(() => {
      return {
        selectedGenre: genre
      }
    });
    onSelectGenreCallback(genre);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>movies-roulette</h1>
          <Counter initialValue="321"></Counter>
          <br></br>
          <SearchForm defaultValue="" onSearch={onSearchCallback}></SearchForm>
          <br></br>
          <GenreSelect
            genres={genresList()}
            selected={this.state.selectedGenre}
            onSelect={this.updateGenre}
          ></GenreSelect>
        </header>
      </div>
    );
  }
}

export default App;
