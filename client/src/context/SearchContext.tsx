import { useState, createContext, useEffect, FC } from "react";
import { Hit } from "react-instantsearch-core";
interface SearchContextProps {
  searchQuery?: string;
  setSearchQuery: (query: string) => void;
  searchHits?: any[];
  handleSearchHits: (hits: any[]) => void;
  //   getAutoCompleteProps: (refine: Function, currentRefinement: string) => void;
}

export const SearchContext = createContext<Partial<SearchContextProps>>({});

export const SearchProvider: FC = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHits, setSearchHits] = useState([
    {
      objectID: "",
      _highlightResult: "",
    },
  ]);
  useEffect(() => {}, [searchHits]);

  return <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchHits, handleSearchHits }}>{children}</SearchContext.Provider>;

  function handleSearchHits(hits: any[]) {
    /**TODO:
     * Imporve function to handle rerender even when there aren't any hits to save to state.
     * Basically, this component may or may not be rendering more than it needs to be.
     * */
    if (hits.length > 0) setSearchHits(hits);
  }
};
