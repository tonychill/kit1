import { FC } from "react";
import Carousel from "../../core/Carousel";
import s from "./Media.module.css";

interface MediaProps {
  type: "single" | "multi";
  media: string | string[];
}

const Media: FC<MediaProps> = ({ media, type }) => {
  return (
    <div className="flex">
      <div className="m-auto p-4 ">
        <div className="rounded overflow-hidden h-96">{renderSwitch(type)}</div>
      </div>
    </div>
  );

  function renderSwitch(type: string) {
    switch (type) {
      case "single":
        return <>{typeof media === "string" ? <img src={media} /> : null}</>;
        break;
      case "multi":
        return <>{typeof media === "object" ? <Carousel images={media} /> : null}</>;
        break;
    }
  }
};

export default Media;
