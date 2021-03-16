import React from "react";
import { FC, useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectAutoComplete, Configure } from "react-instantsearch-dom";
import { SearchProps } from "../../../ts";
import Input from "../../core/Input";
import { Hit } from "react-instantsearch-core";
import ExperienceCard from "../ExperienceCard";
import FilterButton from "../../core/Button/FilterButton";
import GoBackIcon from "../../core/Icon/GoBack";

<Configure filters="free_shipping:true" hitsPerPage={4} analytics={false} enablePersonalization={true} distinct />;

const Search: FC<SearchProps> = ({ hits, refine, currentRefinement }) => {
  const [localHits, setLocalHits] = useState(hits);
  const { handleSearchHits } = useContext(SearchContext);

  useEffect(() => {
    if (handleSearchHits !== undefined) handleSearchHits(hits);
  }, [hits]);

  return (
    <div className="w-full max-w-xs">
      <ul>
        <li>
          <Input
            placeholder="Search for homes, yachts, stories..."
            type="search"
            value={currentRefinement}
            onChange={(event) => refine(event.currentTarget.value)}
          />
        </li>
        {/* {hits.map((hit) => (
          <li key={hit.objectID}>{hit.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

const ConnectedSearch = connectAutoComplete(Search);

const searchClient = algoliasearch("IDU7F9CV9W", "2369f862dae0e682c2d21ebbc7cb427d");
// // //TODO: There should some external logic that determines what index to connect to.

const ConnectedInstaSearch: FC = ({}) => (
  <InstantSearch searchClient={searchClient} indexName="experiences">
    <ConnectedSearch defaultRefinement="" />
  </InstantSearch>
);

export default ConnectedInstaSearch;

{
  /* <ExperienceCard key={idx} id={hit.objectId} title={hit.name} price={+hit.rate} media={hit.imageUrl} description={hit.description} /> */
}
