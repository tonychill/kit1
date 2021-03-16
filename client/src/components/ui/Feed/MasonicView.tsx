import { FC, ComponentType, useEffect } from "react";
import Card from "../Card";
import { Masonry } from "masonic";

interface MasonicViewProps {
  getTheStory?: () => void;
  stories: string[];
  maybeLoadMore: ((startIndex: number, stopIndex: number, items: string[]) => void) | undefined;
}

interface Story {
  data: object;
}

interface StoryCardProps {
  data: string;
}
const MasonicView: FC<MasonicViewProps> = ({ getTheStory, stories, maybeLoadMore }) => {
  const StoryCard: ComponentType<StoryCardProps> = ({ data }) => <Card type="story" data={data} />;
  return (
    <Masonry className="focus:outline-none"  items={stories} columnGutter={32} columnWidth={250} overscanBy={1.25} render={StoryCard} />
  );
};

export default MasonicView;
