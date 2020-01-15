import React, { Component } from "react";
import CardCollection from "../components/CardCollection";
import SearchBar from "../components/SearchBar";
import CategorySelector from "../components/CategorySelector";
import SubCategorySelector from "../components/SubCategorySelector";
import SwitchToSearch from "../components/SwitchToSearch";

export default class PecsContainer extends Component {
  render() {
    const {
      handleSearchInputChange,
      handleSearchSubmit,
      handleSearchClear,
      searchTerm,
      noSearchResults,
      categories,
      handleCategoryChange,
      subcategories,
      filterCards,
      methodChange,
      methodSwitch,
      displayedCards,
      selectCard
    } = this.props;

    return (
      <div className="PecsContainer container-fluid col-sm-10 noPrint">
        {methodSwitch === false ? (
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
              filterCards={filterCards}
            />
            <SwitchToSearch methodChange={methodChange} />
          </div>
        )}
        <div className="Cards">
          <div className="PecsCardsTitle row justify-content-center">
            <h1>PECS cards</h1>
          </div>
          <div className="CardsBrowser row justify-content-center">
            {noSearchResults ? (
              <h3>
                Sorry, we couldn't find any matching results. Please try with a different word or filter by category
              </h3>
            ) : (
              <CardCollection
                displayedCards={displayedCards}
                selectCard={selectCard}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
