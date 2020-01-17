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
    noSearchResults: false,
    methodSwitch: false,
    cardsOnBoard: [],
    played: false
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
    window.scrollTo(0, 0);
    this.setCategories();
    this.setCards();
  }

  handleCategoryChange = parentCategory => {
    const newCards = [...this.state.cards];

    if (parentCategory !== "All") {
      const subcats = this.state.categories.find(
        cat => cat.name === parentCategory
      ).children;
      this.setState({
        subcategories: subcats.sort((a, b) => a.name.localeCompare(b.name))
      });
    } else {
      this.setState({
        displayedCards: newCards,
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

  searchForPotentialMatching = () => {
    const newCards = this.state.cards.filter(
      c =>
        c.title.toLowerCase().includes(this.state.searchTerm) ||
        c.category.name.toLowerCase().includes(this.state.searchTerm)
    );
    if (newCards.length < 1) {
      this.setState({ noSearchResults: true });
    } else {
      this.setState({
        displayedCards: newCards,
        noSearchResults: false
      });
    }
  };

  handleSearchSubmit = event => {
    event.preventDefault();

    if (this.state.searchTerm === "") {
      this.setState({ displayedCards: this.state.cards });
    } else {
      this.searchForPotentialMatching();
    }
  };

  handleSearchClear = event => {
    event.preventDefault();
    this.setState({
      searchTerm: "",
      displayedCards: this.state.cards,
      noSearchResults: false
    });
  };

  methodChange = () => {
    this.setState({
      methodSwitch: !this.state.methodSwitch,
      noSearchResults: false
    });
  };

  selectCard = card => {
    if (this.state.cardsOnBoard.includes(card)) {
      alert(
        "You can only add a card once to a PECS board. Please add a different card."
      );
    } else if (this.state.cardsOnBoard.length < 6) {
      this.setState({
        cardsOnBoard: [...this.state.cardsOnBoard, card]
      });
    } else {
      alert(
        "A PECS board can hold a maximum of 6 cards at a time. This is so that information can be exchanged as efficiently as possible, especially to non-verbal individuals with autism."
      );
    }
  };

  removeCard = card => {
    const cardsOnBoard = this.state.cardsOnBoard.filter(c => c.id !== card.id);
    this.setState({ cardsOnBoard });
  };

  resetBoard = () => {
    this.setState({ cardsOnBoard: [] });
  };

  playVoice = () => {
    let wordSet = this.state.cardsOnBoard.map(card => card.title).join(", ");
    window.responsiveVoice.enableEstimationTimeout = false;
    window.responsiveVoice.speak(wordSet, "UK English Female", {
      rate: 1.0,
      onend: this.toggleToPlay
    });
    this.setState({ played: true });
  };

  stopVoice = () => {
    window.responsiveVoice.cancel();
    this.setState({ played: false });
  };

  toggleToPlay = () => {
    this.setState({ played: false });
  };

  render() {
    const {
      categories,
      subcategories,
      displayedCards,
      searchTerm,
      noSearchResults,
      methodSwitch,
      cardsOnBoard,
      played
    } = this.state;
    const {
      handleCategoryChange,
      filterCards,
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      methodChange,
      selectCard,
      playVoice,
      stopVoice,
      removeCard,
      resetBoard
    } = this;

    return (
      <div className="PecsBoardPage container-fluid">
        <div className="PecsBoardArea row justify-content-center pt-3 mb-3">
          <PecsBoard
            cardsOnBoard={cardsOnBoard}
            removeCard={removeCard}
            resetBoard={resetBoard}
          />
        </div>
        <div>
          <Player playVoice={playVoice} stopVoice={stopVoice} played={played} />
        </div>
        <hr className="mb-5" />
        <div>
          <PecsContainer
            handleSearchInputChange={handleSearchInputChange}
            handleSearchSubmit={handleSearchSubmit}
            handleSearchClear={handleSearchClear}
            searchTerm={searchTerm}
            noSearchResults={noSearchResults}
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
