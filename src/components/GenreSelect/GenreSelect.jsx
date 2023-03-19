import React, { Component } from "react";
import "./styles.css";

const ALL_GENRE_BUTTON = "All";

class GenreSelect extends Component {
  state = {
    genres: [],
    selected: "",
    onSelect: (genre) => {},
  };

  constructor(props) {
    super(props);
    this.state.genres = Array.from(props.genres) || [];
    this.state.selected = props.selected || ALL_GENRE_BUTTON;
    this.state.onSelect = props.onSelect;
  }

  select = (genreName) => {
    this.state.onSelect(genreName);
  };

  render() {
    const genresButtons = [ALL_GENRE_BUTTON, ...this.state.genres].map((name) =>
      this.createGenreButton(
        name,
        this.state.selected.toLowerCase() === name.toLowerCase(),
        name
      )
    );

    return (
      <>
        <ul className="genresList">
          {genresButtons}
        </ul>
      </>
    );
  }

  createGenreButton(genreName, isSelected, elementKey) {
    return (
      <li
        className={isSelected ? "genreButton selected" : "genreButton"}
        key={elementKey}
        genre={genreName}
        onClick={(e) =>
          !isSelected ? this.select(e.target.attributes.genre.value) : {}
        }
      >
        {genreName}
      </li>
    );
  }
}

export default GenreSelect;
