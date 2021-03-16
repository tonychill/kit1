import { useInfiniteLoader } from "masonic";
import { useEffect, useState } from "react";
import { getContentx } from "../../../hooks/contentful";
import MasonicView from "./MasonicView";
// import CTA from "../../Elements/Cta";
// import OpenStory from "./OpenStory";

const StoryFeed = ({ openedStory = null, displayCta, Auth, limit = 10 }) => {
  const [localStories, setLocalStories] = useState([]);

  const maybeLoadMore = useInfiniteLoader(loader, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: limit,
    threshold: 3,
  });

  useEffect(() => {
    if (localStories.length === 0) {
      setInitialStories();
    }
    async function setInitialStories() {
      try {
        let params = {
          limit,
          type: "story",
          from: "useEffect",
        };

        setLocalStories(await getContentx(params));
      } catch (error) {
        console.log(error);
      }
    }
  }, [localStories]);
  return (
    <div className="w-full max-w-7xl m-auto">
      {/* {displayCta ? <CTA auth={auth} /> : null} */}
      {openedStory ? <OpenStory close={closeTheStory} story={openedStory} /> : null}
      {localStories === undefined ? null : <MasonicView stories={localStories} maybeLoadMore={maybeLoadMore} />}
    </div>
  );
  function closeTheStory(openStory) {
    setOpenStory(null);
  }

  async function loader(startIndex, stopIndex, currentItems) {
    const skip = startIndex;
    const limit = stopIndex - startIndex + 1;

    try {
      const nextItems = await getContentx({ skip, limit, type: "story" });
      if (nextItems.length > 0) setLocalStories((current) => [...current, ...nextItems]);
    } catch (error) {
      console.log("Error from spread attempt:  ", error);
    }
  }
};

export default StoryFeed;
