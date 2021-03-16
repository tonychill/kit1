import { FC, Fragment } from "react";
import { CardProps } from "../../../ts";
//TODO: Add min height to card image. This should be done using the Media component.
interface xCardProps {
  type: "reward" | "promo" | "story" | "experience" | "event" | "info" | "category";
  meta: unknown;
  profile?: string;
  media?: string;
  title?: string;
  location?: { lat: number; long: number };
  content: string;
  onClick?: () => void;
  // followers?: Profile[];
  /*
   */
}
/**TODO: Handle situations where the card conentent is larger than a certain 
 * character count and will have to expand? 
 */
const Card: FC<CardProps> = ({ type, title }) => {
  const Header = ({}) => {
    return (
      <section className="mb-3 p-0 flex items-center">
        <div className="flex-auto flex-grow-0 ">
          <div
            className=" w-12 border-gray-50 border-2 h-12 shadow-sm bg-gray-50 flex overflow-hidden relative flex-shrink-0 rounded-full justify-center "
            aria-label="recipe"
          >
            <img
              className="w-full h-full object-cover text-center text-in"
              src="//images.ctfassets.net/g5nrk2qtffpm/Nj4YUF1LAu1dz1YBTXjAr/ba27dc69d8f91dea896947dcf017d198/3.jpg"
            />
          </div>
        </div>
        <div className=" flex-auto ml-2">
          <span className=" block font-medium leading-5 m-0">Betty</span>
          <span className="block font-medium leading-5 m-0">a month ago</span>
        </div>
      </section>
    );
  };
  const Media = () => (
    <section className=" mb-2">
      <div className=" overflow-hidden shadow-sm rounded-md">
        <div className=" box-border rounded-full">
          <div className=" cursor-pointer flex overflow-hidden relative items-center flex-row">
            <div>
              <img className=" border-0 max-w-full align-middle" src="https://picsum.photos/640/400/?random" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
  return (
    <div className=" pb-7">
      {type ? (
        <Fragment>
          <Header />
          <Media />
          <Content />
        </Fragment>
      ) : null}
    </div>
  );
};
export default Card;
