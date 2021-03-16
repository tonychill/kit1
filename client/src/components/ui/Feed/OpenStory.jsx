/*The Item comoponent diplays content based on that data passed to it. I.e. stories, bookable items, events and other 
objects */
import Link from "next/link";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Type from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import Media from "../../Bits/Carousel";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "6rem",
  },
  card: {},
  content: {
    marginRight: 32,
    marginBottom: 64,
    "&>section": {
      marginBottom: 32,
    },
  },
  header: {
    marginLeft: -16,
  },
  tools: {
    position: "-webkit-sticky",
    position: "sticky",
    height: "100%",
    marginRight: -85,
    top: 117,
    left: "-20px",
  },
  storyImg: {
    position: "-webkit-sticky",
    position: "sticky",
    height: "100%",
    top: 117,
  },
  backButton: {
    background: "none",
    border: "none",
  },
  mainWrapper: {
    maxWidth: 987,
    margin: "auto",
  },
  media: {
    height: 0,
    paddingTop: "69.25%", // 16:9
  },
  img: {
    width: "100%",
    display: "block",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    display: "block",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

// const { _item_img_wrap, _item_media_section } = styles;
export default function OpenStory({ story, close }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    let parent = document.querySelector(".x123").parentElement;

    while (parent) {
      const hasOverflow = getComputedStyle(parent).overflow;
      if (hasOverflow !== "visible") {
        console.log(hasOverflow, parent);
      }
      parent = parent.parentElement;
    }
  });
  if (1)
    return (
      <Grid container className={classes.root}>
        <Grid className={clsx(classes.tools, "x123")}>
          <button className={classes.backButton} onClick={close}>
            <img height="25" width="25" src="/media/images/back-arrow.png" />
          </button>
        </Grid>
        <Grid item className={classes.mainWrapper}>
          <Grid container>
            <Grid item xs={7}>
              <div className={classes.content}>
                <section>
                  <Grid container>
                    <Grid item>
                      <CardHeader
                        className={classes.header}
                        avatar={<Avatar aria-label="recipe" src={story.fields.profile.fields?.profilepic.fields?.file.url} className={classes.avatar} />}
                        // action={
                        //   <IconButton aria-label="settings">
                        //     <MoreVertIcon />
                        //   </IconButton>
                        // }
                        title={story.fields.profile.fields?.profilename}
                        subheader={moment(`${story.sys.createdAt}`, "YYYYMMDD").fromNow()}
                      />
                    </Grid>
                  </Grid>
                </section>
                <section>
                  <Type variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                    amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum,
                    distinctio voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque
                    maxime, sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                  </Type>
                </section>
                <section>
                  <Type variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                    amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum,
                    distinctio voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque
                    maxime, sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                  </Type>
                </section>
                <section>
                  <Type variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                    amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum,
                    distinctio voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque
                    maxime, sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                  </Type>
                </section>
                <section>
                  <Type variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus fugit doloribus quaerat incidunt dicta blanditiis numquam modi, atque at
                    amet reprehenderit voluptatum velit aspernatur cupiditate animi quas corporis, nam magni. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem? Modi praesentium quae beatae fugiat reprehenderit facilis cum,
                    distinctio voluptates consequuntur autem magni optio cupiditate recusandae possimus rerum tempore mollitia, voluptate totam obcaecati itaque
                    maxime, sapiente voluptatum quam. Fuga exercitationem distinctio quis repudiandae expedita dolorum sint ullam officiis quos! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit aperiam sed magni, quidem veritatis autem?
                  </Type>
                </section>
              </div>
            </Grid>
            <Grid className={classes.storyImg} item xs={5}>
              <img style={{ width: "100%", maxHeight: 400, borderRadius: 12 }} src={story.fields?.media[0].fields.file.url} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );

  return (
    <a data-key="key" onClick={(e) => console.log(e)} className={classes.root}>
      <Card>
        <CardContent>
          <div className={classes.card}>
            <img className={classes.img} alt="kitty" src="/src" />
            <span children={name} />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
