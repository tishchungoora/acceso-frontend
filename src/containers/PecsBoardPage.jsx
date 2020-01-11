import React, { Component } from "react";
import PecsContainer from "./PecsContainer";
import PecsBoard from "./PecsBoard";
import Player from "../components/Player";
import API from "../adapters/API";

export default class PecsBoardPage extends Component {
  state = {
    cards: [],
    displayedCards: [],
    categories: [],
    subcategories: [],
    searchTerm: "",
    methodSwitch: false,
    cardsOnBoard: []
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

  selectCard = card => {
    this.setState({
      cardsOnBoard: [...this.state.cardsOnBoard, card]
    });
  };

  composePhrase = () => {
    let wordSet = this.state.cardsOnBoard
      .map(card => card.title)
      .join("--------");
    window.responsiveVoice.speak(wordSet);
  };

  render() {
    const {
      categories,
      subcategories,
      displayedCards,
      searchTerm,
      methodSwitch,
      cardsOnBoard
    } = this.state;
    const {
      handleCategoryChange,
      filterCards,
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      methodChange,
      selectCard,
      composePhrase
    } = this;

    return (
      <div className="PecsBoardPage container-fluid">
        <div className="PecsBoardArea row justify-content-center pt-3 mb-3">
          <PecsBoard cardsOnBoard={cardsOnBoard} />
        </div>
        <div>
          <Player composePhrase={composePhrase} />
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
            selectCard={selectCard}
          />
        </div>
      </div>
    );
  }
}
