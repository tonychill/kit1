import { FC } from "react";
import Carousel from "../../core/Carousel";
import s from "./Media.module.css";

interface MediaProps {
  type: "single" | "multi";
  media: { src: any; link: any }[] | string;
}

const Media: FC<MediaProps> = ({ media, type }) => {
  return (
    <div className="cn:media sm:overflow-hidden flex h-full">
      <div className="m-auto w-full ">
        <div className=" pt-[66.666667%] relative bg-center bg-no-repeat w-full">
          <div className="absolute inset-0 h-full w-full   ">{renderSwitch(type)}</div>
        </div>
      </div>
    </div>
  );

  function renderSwitch(type: string) {
    switch (type) {
      case "single":
        return <>{typeof media === "string" ? <img src={media} /> : null}</>;
        break;
      case "multi":
        return <>{Array.isArray(media) ? <Carousel images={media} /> : null}</>;
        break;
    }
  }
};

export default Media;
