import React, { Component } from "react";
import CardCollection from "../components/CardCollection";
import SearchBar from "../components/SearchBar";
import CategorySelector from "../components/CategorySelector";
import SubCategorySelector from "../components/SubCategorySelector";
import API from "../adapters/API";

export default class PecsContainer extends Component {
  state = {
    categories: [],
    subcategories: [],
    searchTerm: "",
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

  handleCategoryChange = parentCategory => {
    if (parentCategory !== "All") {
      const subcats = this.state.categories.find(
        cat => cat.name === parentCategory
      ).children;
      this.setState({
        subcategories: subcats.sort((a, b) => a.name.localeCompare(b.name))
      });
    }
  };

  handleSearchInputChange = event =>
    this.setState({
      searchTerm: event.target.value
    });

  handleSearchSubmit = event => {
    const newCards = [...this.state.cards];

    if (this.state.searchTerm === "") {
      this.setState({ cards: newCards });
    } else {
      event.preventDefault();
      this.setState({
        cards: newCards.filter(
          c =>
            c.title.toLowerCase().includes(this.state.searchTerm) ||
            c.category.name.toLowerCase().includes(this.state.searchTerm)
        )
      });
    }
  };

  handleSearchClear = event => {
    event.preventDefault();
    this.setState({
      searchTerm: ""
    })
  }

  render() {
    const { categories, subcategories, cards } = this.state;
    const {
      handleCategoryChange,
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear
    } = this;

    return (
      <div className="row">
        <div className="col-sm-2 p-3">
          <CategorySelector
            categories={categories}
            handleCategoryChange={handleCategoryChange}
          />
          <SubCategorySelector subcategories={subcategories} />
        </div>
        <div className="col-sm-10 p-3">
          <div className="row justify-content-center">
            <SearchBar
              handleSearchInputChange={handleSearchInputChange}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchClear={handleSearchClear}
            />
          </div>
          <div className="row">
            <CardCollection cards={cards} />
          </div>
        </div>
      </div>
    );
  }
}
