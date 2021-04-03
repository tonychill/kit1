import { useInfiniteLoader } from "masonic";
import { useEffect, useState, FC } from "react";
import { getContent } from "../../hooks/contentful";

// import CTA from "../../Elements/Cta";

import OpenStory from "./OpenStory";
import MasonicView from "./MasonicView";

interface StoryFeedProps {
openedStory: string;
displayCta: string;
auth: string;
limit: number | undefined;
}

const StoryFeed: FC<StoryFeedProps> = ({ openedStory, displayCta, auth, limit = 10 }) => {
const [localStories, setLocalStories] = useState([]);

const closeTheStory = () => {
// setOpenStory(null);
};

const maybeLoadMore = useInfiniteLoader(loader, {
isItemLoaded: (index, items) => !!items[index],
minimumBatchSize: limit,
threshold: 3,
});

useEffect(() => {
if (localStories.length === 0) {
setInitialStories();
}
}, []);

return (
<div className="w-full max-w-7xl min-h-screen focus:outline-none">
{/_ {displayCta ? <CTA auth={auth} /> : null} _/}
{/_ {openedStory ? <OpenStory close={closeTheStory} story={openedStory} /> : null} _/}
{localStories === undefined ? null : <MasonicView stories={localStories} maybeLoadMore={maybeLoadMore} />}
</div>
);

async function setInitialStories() {
try {
let params = {
limit,
type: "story",
from: "useEffect",
};

      setLocalStories(await getContent(params));
    } catch (error) {
      console.log(error);
    }

}
function handleLocalStoryUpdate(current: never[], next: never[]) {
let newArray = [...current, ...next];
setLocalStories(newArray);
}
async function loader(startIndex: number, stopIndex: number, currentItems: string): Promise<void> {
const skip = startIndex;
const limit = stopIndex - startIndex + 1;

    try {
      const nextItems = await getContent({ skip, limit, type: "story" });
      if (nextItems.length > 0) handleLocalStoryUpdate(localStories, nextItems);
    } catch (error) {
      console.log("Error from spread attempt:  ", error);
    }

}
};

export default StoryFeed;
