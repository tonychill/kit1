import { FC, ComponentType } from "react";
import Card from "../Card";
import { ExperienceFields } from "../../../ts/page-props";
import { Masonry } from "masonic";

interface MasonicViewProps {
  getTheStory?: () => void;
  stories: string[];
  maybeLoadMore: ((startIndex: number, stopIndex: number, items: string[]) => void) | undefined;
}

interface Story {
  data: object;
}

interface CardWithDataProps {
  data: string;
}

const MasonicView: FC<MasonicViewProps> = ({ getTheStory, stories, maybeLoadMore }) => {
  const CardWithData: FC<CardWithDataProps> = ({ data }) => <Card kind="story" data={data} />;
  return <Masonry className="focus:outline-none" items={stories} columnGutter={32} columnWidth={250} overscanBy={1.25} render={CardWithData} />;
};

export default MasonicView;
