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
      selectCard,
      loading
    } = this.props;

    return (
      <div className="PecsContainer container-fluid col-sm-10">
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
          <div>
            <div className="row justify-content-center">
              <CategorySelector
                categories={categories}
                handleCategoryChange={handleCategoryChange}
              />
              <SubCategorySelector
                subcategories={subcategories}
                filterCards={filterCards}
              />
            </div>
            <div className="row justify-content-center">
              <SwitchToSearch methodChange={methodChange} />
            </div>
          </div>
        )}
        <div className="Cards mb-4">
          <div className="PecsCardsTitle row justify-content-center">
            <h1>PECS cards</h1>
          </div>
          {loading ? (
            <div className="Spinner row  justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="CardsBrowser row justify-content-center">
              {noSearchResults ? (
                <p className="lead">
                  Sorry, we couldn't find any matching results. Please try with
                  a different word or filter by category
                </p>
              ) : (
                <CardCollection
                  displayedCards={displayedCards}
                  selectCard={selectCard}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
