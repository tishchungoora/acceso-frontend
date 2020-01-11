import React, { Component } from "react";
import CardCollection from "../components/CardCollection";
import SearchBar from "../components/SearchBar";

import CategorySelector from "../components/CategorySelector";
import SubCategorySelector from "../components/SubCategorySelector";
import SwitchToSearch from "../components/SwitchToSearch";
import API from "../adapters/API";

export default class PecsContainer extends Component {
  state = {
    categories: [],
    subcategories: [],
    searchTerm: "",
    methodSwitch: false,
    displayedCards: [],
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
        displayedCards: data.sort((a, b) => a.title.localeCompare(b.title)),
        cards: data
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
    } else {
      this.setState({
        displayedCards: this.state.cards,
        subcategories: []
      });
    }
  };

  filterCards = category => {
    if (category !== "") {
      this.setState({
        displayedCards: this.state.cards.filter(
          c => c.category.name === category
        )
      });
    }
  };

  handleSearchInputChange = event =>
    this.setState({
      searchTerm: event.target.value
    });

  handleSearchSubmit = event => {
    event.preventDefault();

    if (this.state.searchTerm === "") {
      this.setState({ displayedCards: this.state.cards });
    } else {
      this.setState({
        displayedCards: this.state.cards.filter(
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
      searchTerm: "",
      displayedCards: this.state.cards
    });
  };

  methodChange = () => {
    this.setState({ methodSwitch: !this.state.methodSwitch });
  };

  render() {
    const {
      categories,
      subcategories,
      displayedCards,
      searchTerm
    } = this.state;
    const {
      handleCategoryChange,
      filterCards,
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      methodChange
    } = this;

    return (
      <div className="PecsContainer container-fluid col-sm-10">
        {this.state.methodSwitch === false ? (
          <div className="row justify-content-center">
            <SearchBar
              handleSearchInputChange={handleSearchInputChange}
              handleSearchSubmit={handleSearchSubmit}
              handleSearchClear={handleSearchClear}
              searchTerm={searchTerm}
              methodChange={methodChange}
            />
          </div>
        ) : (
          <div className="row justify-content-center">
            <CategorySelector
              categories={categories}
              handleCategoryChange={handleCategoryChange}
            />
            <SubCategorySelector
              subcategories={subcategories}
              filterCards={filterCards} />
            <SwitchToSearch methodChange={methodChange} />
          </div>
        )}

        <div className="row justify-content-center">
          <CardCollection displayedCards={displayedCards} />
        </div>
      </div>
    );
  }
}
