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
      <div className="row">
        <div className="col-sm-2 p-3">
          <CategorySelector categories={categories} />
        </div>
        <div className="col-sm-10 p-3">
          <div className="row justify-content-center">
            <SearchBar />
          </div>
          <div className="row">
            <CardCollection cards={cards} />
          </div>
        </div>
      </div>
    );
  }
}
