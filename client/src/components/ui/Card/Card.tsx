import { FC, Fragment } from "react";
import { utils } from "../../../hooks";
import Header from "../../core/Header";
import Media from "../../ui/Media";

// import { CardProps } from "../../../ts";
//TODO: Add min height to card image. This should be done using the Media component.
interface xCardProps {
  type: "reward" | "promo" | "story" | "experience" | "event" | "info" | "category";

  title?: string;
  location?: { lat: number; long: number };
  content: string;
  onClick?: () => void;
  // followers?: Profile[];
  /*
   */
}
interface CardProps {
  data?: any;
  meta?: unknown;
  profile?: string;
  media?: string | { src: any; link: any }[];
  kind: "reward" | "promo" | "story" | "experience" | "event" | "info" | "category" | "other";
  image?: string | object[];
  title?: string;
  body?: string;
}
/**TODO: Handle situations where the card conentent is larger than a certain
 * character count and will have to expand?
 */
const Card: FC<CardProps> = ({ kind, title, data, media }) => {
  const parsedMedia = utils.parseMediaToObjectArray(data?.fields?.media);

  // const Media = () => (
  //   <section className=" mb-2">
  //     <div className=" overflow-hidden shadow-sm rounded-md">
  //       <div className=" box-border rounded-full">
  //         <div className=" cursor-pointer flex overflow-hidden relative items-center flex-row">
  //           <div>
  //             <img className=" border-0 max-w-full align-middle" src="https://picsum.photos/640/400/?random" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
  // const Title = ({ title }) => {
  //   return (
  //     <section className={classes.story_title}>
  //       <Grid container>
  //         <Grid item>
  //           <Type variant="body2">{title}</Type>
  //         </Grid>
  //       </Grid>
  //     </section>
  //   );
  // };
  // const Content = ({ content, storyId, storyOpened }) => {
  //   return (
  //     <section className={classes.content_body}>
  //       {1 ? (
  //         <div>
  //           <Type variant="body1" className={clsx(classes.caption, storyOpened ? classes.story_opened : null)}>
  //             {content.content[0].content[0].value}
  //           </Type>
  //         </div>
  //       ) : (
  //         <div className={classes.caption}>hello</div>
  //       )}
  //     </section>
  //   );
  // };
  const Content = () => (
    <section className="mt-3">
      <div>
        <p className="overflow-hidden line-clamp-3 overflow-ellipsis">@bvi !!! I need you back in my life! When are you opening your borders back up again? </p>
      </div>
    </section>
  );

  switch (kind) {
    case "experience":
      return (
        <div className=" pb-7">
          {kind ? (
            <Fragment>
              {media ? <Media type="multi" media={media} /> : null}
              <Content />
            </Fragment>
          ) : null}
        </div>
      );
      break;
    default:
      return (
        <div className=" pb-7">
          {kind ? (
            <Fragment>
              <Header />
              <img className="rounded-xl  h-full w-full inset-0 static object-cover" src={parsedMedia[0].src} />
              {/* {parsedMedia && typeof parsedMedia === "object" ? <Media type="multi" media={parsedMedia} /> : null} */}
              <Content />
            </Fragment>
          ) : null}
        </div>
      );
  }
};
export default Card;
