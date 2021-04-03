import React from "react";
import { FC, useContext } from "react";
import { SearchContext } from "../../../context";
import { Hit } from "react-instantsearch-core";
import { AutoCompleteProps } from "../../../ts";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectAutoComplete } from "react-instantsearch-dom";
import FilterButton from "../../core/Button/FilterButton";
import GoBackIcon from "../../core/Icon/GoBack";

const AutoComplete: FC<AutoCompleteProps> = ({ hits, refine, currentRefinement, toggleModal }) => {
  const { searchQuery } = useContext(SearchContext);

  return (
    <div className="x-instasearch container max-w-6xl mx-auto sm:mt-8 ">
      <div
        className=" flex items-center h-20 shadow-md mb-6 top-0 w-full left-4 sm:relative sm:w-full md:w-auto sm:-ml-3 sm:mt-4 sm:top-0.5  md:left-48 md:mx-auto z-50"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="px-1 mx-3 rounded-lg  md:max-w-sm ">
          <div className=" flex justify-center items-center  h-12">
            <div onClick={toggleModal}>
              <GoBackIcon />
            </div>

            <div className="flex-grow">
              <input
                className="form-control autosuggest__input-open border-none pl-4 font-sans-alt  text-color-inherit rounded max-w-sm w-80 focus:outline-none py-3 px-4   placeholder-gray-300 text-gray-900 appearance-none inline-block focus:ring-0 "
                type="search"
                value={currentRefinement}
                placeholder="What are you looking for?"
                onChange={(event) => refine(event.currentTarget.value)}
              />
            </div>
            {/* <div className="">
              <span style={{ width: 1 }} className=" rounded-lg mr-2 h-6 w-1/12 bg-gray-200"></span>
              <FilterButton size={33} />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className=" sm:mt-24">
        <div className="grid grid-cols-4 gap-8 sm:mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-2">
          <ul>
            {hits.map((hit, idx) => (
              <li key={idx}>{hit.name}</li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

const ConnectedAutoComplete = connectAutoComplete(AutoComplete);

const searchClient = algoliasearch("IDU7F9CV9W", "2369f862dae0e682c2d21ebbc7cb427d");
//TODO: There should some external logic that determines what index to connect to.

interface AutoProps {
  toggleModal: () => void;
}

const AutoCompleteSearch: FC<AutoProps> = ({ toggleModal }) => (
  <InstantSearch searchClient={searchClient} indexName="experiences">
    <ConnectedAutoComplete toggleModal={toggleModal} />
  </InstantSearch>
);

export default AutoCompleteSearch;

