import { FC } from "react";
import { Hit } from "react-instantsearch-core";
import Icon from "../../core/Icons";
import Type from "../../core/Type";

interface SearchHitProps {
  searchHit: Hit;
}
const SearchHit: FC<SearchHitProps> = ({ searchHit }) => {
  return (
    <div
      className="h-24
      p-3 border-b pb-3"
    >
      <div className="mx-2 flex h-full items-center">
        <div className="flex items-center my-3">
          <div className="mr-4">
            <Icon variant="house"></Icon>
          </div>
          <div className="wrapper ">
            <div className="title">
              <Type variant="title">{searchHit.name}</Type>
            </div>
            <div className="flex">
              <div className="max-w-xs">
                <div className="flex items-center">
                  <span className="mr-1">
                    <Type variant="hint">Beds {searchHit.beds} | </Type>
                  </span>
                  <span className="mr-1">
                    <Type variant="hint">Beds {searchHit.beds} | </Type>
                  </span>
                  <span className="mr-1">
                    <Type variant="hint">Beds {searchHit.beds}</Type>
                  </span>
                </div>
                {/* <div className="flex">
                  <span>
                    <Type variant="base">Baths</Type>
                  </span>
                  <Type variant="hint">{searchHit.baths}</Type>
                </div>
                <div className="flex">
                  <span>
                    <Type variant="base">Guests</Type>
                  </span>
                  <Type variant="hint">{searchHit.guests}</Type>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHit;

/*** Notes ***
 * Notes go here.
 *
       



     <div id="search-item-0" role="option" aria-selected="true" className="relative border-b border-transparent z-10">
      <div className="flex justify-between items-center leading-normal py-4 px-16 transition-colors duration-75 ease-out overflow-hidden text-white bg-nebula-500 shadow">
        <div className="flex items-start overflow-hidden">
          <div className="flex justify-center h-24 w-16 pb-4 mr-16 mt-4 flex-none transition-colors duration-75 ease-out text-color-inherit">
            <svg aria-labelledby="title" viewBox="0 0 9.2 18.2" fill="currentColor" className="block h-full w-auto" role="img">
              <title id="title">Getting Started</title>
              <path d="M8.88,7.93,5.61,6.79,6.45.54A.47.47,0,0,0,6.13,0a.46.46,0,0,0-.57.21L.06,9.58l0,.08a.48.48,0,0,0,.29.61l3.27,1.14-.84,6.25a.47.47,0,0,0,.32.51.41.41,0,0,0,.16,0A.47.47,0,0,0,3.64,18L9.13,8.62a.59.59,0,0,0,0-.08A.48.48,0,0,0,8.88,7.93Zm-4.33,3.2a.49.49,0,0,0-.32-.51L1.13,9.54l4.19-7L4.65,7.07A.49.49,0,0,0,5,7.58l3.1,1.08-4.19,7Z" />
            </svg>
          </div>
          <div className="flex flex-col truncate">
            <div className="flex items-center truncate text-sm leading-tight mt-4 xl:mt-2 mb-2 xl:order-2 text-color-inherit">
              <div className="flex-grow-0 truncate min-w-0">
                <div className="truncate">Getting Started</div>
              </div>
            </div>
            <div className="xl:order-1 truncate min-w-0 font-semibold">
              <div className="truncate">
                How Algolia <mark className="bg-transparent text-color-inherit underline">work</mark>s
              </div>
            </div>
            <div className="xl:order-3 xl:hidden">
              <div className="block truncate text-sm text-color-inherit">
                Algolia is a hosted search engine capable of delivering real-time results from the first keystroke. Algolia’s powerful API lets you quickly and
                seamlessly implement search within your websites, mobile, and voice applications. Our search engine powers billions of queries for thousands of
                companies every month, delivering relevant results …
              </div>
            </div>
          </div>
        </div>
        <div className="w-24 ml-8 p-2 flex-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="block h-auto w-16">
            <polyline points="9 10 4 15 9 20" />
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
          </svg>
        </div>
      </div>
    </div>
      
 */
