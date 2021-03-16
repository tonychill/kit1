const algoliasearch = require("algoliasearch");

const client = algoliasearch("E0VNHV37N5", "897c41981a166bac0318e7a023af6117");
const index = client.initIndex("content");
const Search = () => {
  return (
    <form action="plan" method="get" className="d-inline-block my-2 my-lg-0">
      <input
        type="search"
        className="form-control mr-sm-2 sch-bar test-search-bar p-4"
        aria-label="Search"
        placeholder="Search"
      />
    </form>
  );
};
export default Search;

/*
Search needs to be smart and dynamic. User actions combined with their location within the platform will 
determin search behavior. 

import InputBase from "@material-ui/core/InputBase";

<div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
*/
