import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FC, useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectAutoComplete, Configure } from "react-instantsearch-dom";
import { SearchProps } from "../../../ts";
import Input from "../../core/Input";
import Icon from "../../core/Icons";
import SearchHit from "../../ui/SearchHit";
import Modal from "../../core/Modal";

import FilterButton from "../../core/Button/FilterButton";

<Configure filters="free_shipping:true" hitsPerPage={4} analytics={false} enablePersonalization={true} distinct />;

const Search: FC<SearchProps> = ({ hits, refine, currentRefinement }) => {
  const { handleSearchHits } = useContext(SearchContext);
  const [showHits, setShowHits] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (handleSearchHits !== undefined) handleSearchHits(hits);
    // if (touchEnd < touchStart && touchStart - touchEnd > 50) setShowHits(false);
  }, [hits /* touchEnd*/]);

  const SearchIcon = () => {
    return <div>{showHits ? <Icon variant="close" /> : <Icon variant="search" />}</div>;
  };
  /**Styles for mobile devices.  */
  let styles = showHits ? "h-full" : null;
  let styles2 = showHits ? "inset-0" : null;
  const MOBILE_STYLES = "search fixed sm:w-full sm:relative sm:mx-4 inset-x-0 top-0 flex justify-center items-start  z-60 ";

  return (
    <div className={clsx(MOBILE_STYLES, styles2)}>
      <div className={clsx("w-full flex flex-col justify-between bg-white  xl:rounded-lg  min-h-320 ", styles)}>
        <div className="flex px-4 items-center flex-none h-[72px] border-b sm:border-none ">
          <div className="hidden sm:flex w-full">
            <button
              onClick={handleModalState}
              className={clsx(
                "flex items-center focus:outline-none font-extralight flex-grow appearance-none w-full bg-white rounded-md text-gray-300 min-h-[52px] px-3 sm:rounded-xl sm:border border-gray-600-opacity-10 bg-white "
              )}
            >
              <span className="p-2 pr-1 cursor-pointer">{/* icon goes here */}</span>
              <span>Search for homes, yachts, stories...</span>
            </button>
          </div>
          <div className="sm:hidden w-full">
            <Input
              placeholder="Search for homes, yachts, stories..."
              type="search"
              value={currentRefinement}
              onChange={(event) => refine(event.currentTarget.value)}
              iconAction={handleHideHits}
              icon={<SearchIcon />}
              onFocus={handleShowHits}
              // onBlur={handleHideHits}
            />
          </div>
        </div>

        {showHits ? (
          <div onTouchStart={(e) => handleTouchStart(e)} onTouchEnd={(e) => handleTouchEnd(e)} className="bg-white flex flex-grow overflow-hidden">
            <div className=" p-4 mb-4 relative w-full flex-none overflow-y-auto xl:w-half">
              <div>
                <ul>
                  {hits.length > 0 ? (
                    hits.map((hit, idx) => (
                      <li key={idx}>
                        <Link href="/experiences">
                          <a className="w-full inline-block" onClick={handleHideHits}>
                            <SearchHit key={hit.objectID} searchHit={hit} />
                          </a>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <div>Sorry, we could't find what you were looking for.</div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Modal header="Header" open={isModalOpen} toggleModal={handleModalState}>
        <Input
          placeholder=""
          type="search"
          value={currentRefinement}
          onChange={(event) => refine(event.currentTarget.value)}
          iconAction={handleHideHits}
          icon={<SearchIcon />}
          // onFocus={handleShowHits}
          // onBlur={handleHideHits}
        />
        <div className="bg-white flex flex-grow ">
          <ul className="w-full">
            {hits.length > 0 ? (
              hits.map((hit, idx) => (
                <li key={idx}>
                  <Link href="/experiences">
                    <a className="w-full inline-block" onClick={handleHideHits}>
                      <SearchHit key={hit.objectID} searchHit={hit} />
                    </a>
                  </Link>
                </li>
              ))
            ) : (
              <div>Sorry, we could't find what you were looking for.</div>
            )}
          </ul>
        </div>
      </Modal>
    </div>
  );

  function handleModalState() {
    setIsModalOpen(!isModalOpen);
  }
  function handleTouchStart(e: any) {
    setTouchStart(e.changedTouches[0].clientX);
  }
  function handleTouchEnd(e: any) {
    setTouchEnd(e.changedTouches[0].clientX);
  }
  function handleShowHits() {
    console.log("onfocus firing... ");
    setShowHits(!showHits);
  }
  function handleHideHits() {
    console.log("onfocus firing... ");
    setShowHits(false);
  }
};

const ConnectedSearch = connectAutoComplete(Search);

const searchClient = algoliasearch("IDU7F9CV9W", process.env.ALGOLIA_KEY);
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
