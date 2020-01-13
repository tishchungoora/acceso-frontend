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
          <CardCollection
            displayedCards={displayedCards}
            selectCard={selectCard}
          />
        </div>
        </div>
        

        
      </div>
    );
  }
}
