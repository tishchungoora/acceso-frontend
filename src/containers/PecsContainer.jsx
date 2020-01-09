import React, { Component } from "react";
import CardCollection from "../components/CardCollection";
import SearchBar from "../components/SearchBar";
import CategorySelector from "../components/CategorySelector";
import API from "../adapters/API";

export default class PecsContainer extends Component {
  state = {
    categories: [],
    cards: []
  };

  setCategories = () => {
    API.fetchCategories().then(data =>
      this.setState({
        categories: data.sort((a, b) => a.name.localeCompare(b.name))
      })
    );
  };

  setCards = () => {
    API.fetchCards().then(data =>
      this.setState({
        cards: data.sort((a, b) => a.title.localeCompare(b.title))
      })
    );
  };

  componentDidMount() {
    this.setCategories();
    this.setCards();
  }

  render() {
    const { categories, cards } = this.state;

    return (
      <div>
        <div className="col p-3">
          <CategorySelector categories={categories} />
        </div>
        <div className="col p-3">
          <SearchBar />
        </div>

        <div>
          <CardCollection cards={cards} />
        </div>
      </div>
    );
  }
}
