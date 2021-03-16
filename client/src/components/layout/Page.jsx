import { makeStyles } from "@material-ui/core/styles";
import ErrorPage from "next/error";
import Layout from "./index.jsx";
import Grid from "@material-ui/core/Grid";
import Section from "../Elements/Section";

export default ({ leftContent, rightContent }) => {
  const meta = {
    title: "entry.fields.name",
    description: "Experince the Virign Islands like never before.",
    scene: "hid",
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "fcfcfc",
      flexGrow: 1,
      // maxWidth: 1178,
      margin: "auto",
    },
    main_page_content_wrapper: {
      maxWidth: 1286,
      margin: "auto",
    },
    sticky: {
      position: "-webkit-sticky",
      position: "sticky",
      top: 118,
      alignSelf: "flex-start",
      // marginRight: 64,
    },
    "@media(max-width: 500px)": {
      sticky: {
        display: "none !important",
      },
    },
    topics: {
      border: "solid 1px #f4f4f4",
      borderRadius: 12,
      minHeight: 204,
      overflow: "hidden",
    },

    sideroot: {
      position: "sticky",
      // overflowX: "hidden",
      // overflowY: "auto",
      top: 0,
      maxWidth: 353,
      height: "100vh",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "& > div": {
        // minHeight: "100%",
      },
    },

    help_article_wrap: {
      margin: "auto",
      marginTop: 105,
      maxWidth: 764,
    },

    body: {
      maxHeight: "300px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 2 /* number of lines to show */,
      "-webkit-box-orient": "vertical",
    },

    features: {
      overflow: "hidden",
      maxWidth: 391,
      paddingLeft: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      "& li": {
        listStyleType: "none",
      },
    },
    icon: {
      // color: "#62c7fd",
    },
    titleRoot: {
      marginBottom: theme.spacing(2),
    },
  }));

  const router = useRouter();
  const {
    query: { hid },
  } = router;

  const classes = useStyles();

  if (router.isFallback) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout meta={meta} sideBoxShow={true}>
      <div className={classes.main_page_content_wrapper}>
        <Section>
          <Grid container>
            <Grid className={classes.sticky} item xs={3}>
              <Grid container spacing={4}>
                <Grid item xs={12} style={{ maxWidth: 330 }}>
                  <div className={classes.topics}>{leftContent}</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.help_article_wrap} item>
              {rightContent}
            </Grid>
          </Grid>
        </Section>
      </div>
    </Layout>
  );
};
