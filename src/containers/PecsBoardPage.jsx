import React, { Component } from "react";
import PecsContainer from "./PecsContainer";
import PecsBoard from "./PecsBoard";
import Play from "../components/Play";
import API from "../adapters/API";

export default class PecsBoardPage extends Component {
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

  selectedCard = card => {
    console.log(card.title);
    return card;
  };

  render() {
    const {
      categories,
      subcategories,
      displayedCards,
      searchTerm,
      methodSwitch
    } = this.state;
    const {
      handleCategoryChange,
      filterCards,
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      methodChange,
      selectedCard
    } = this;

    return (
      <div className="PecsBoardPage container-fluid">
        <div className="PecsBoardArea row justify-content-center pt-3 mb-3">
          <div>
            <h1>PECS board</h1>
          </div>
          <div>
            <PecsBoard />
          </div>
        </div>
        <div>
          <Play />
        </div>
        <hr className="mb-5" />
        <div>
          <PecsContainer
            handleSearchInputChange={handleSearchInputChange}
            handleSearchSubmit={handleSearchSubmit}
            handleSearchClear={handleSearchClear}
            searchTerm={searchTerm}
            methodChange={methodChange}
            methodSwitch={methodSwitch}
            categories={categories}
            handleCategoryChange={handleCategoryChange}
            subcategories={subcategories}
            filterCards={filterCards}
            displayedCards={displayedCards}
            selectedCard={selectedCard}
          />
        </div>
      </div>
    );
  }
}
