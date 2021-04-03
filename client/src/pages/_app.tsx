import type { AppProps /*, AppContext */ } from "next/app";

import { Fragment } from "react";
import Layout from "../components/layout";
// import { AuthProvider, SearchProvider } from "../context";
import NavBar from "../components/ui/NavBar";
import "tailwindcss/tailwind.css";
import "react-nice-dates/build/style.css";
import "../styles/globals.css";

const navlinks = [
  { text: "Link1", url: "/page1" },
  { text: "Link2", url: "/page2" },
  // { text: "Trips", url: "/trips" },
  // { text: "Chat", url: "/chat" },
  // { text: "More", url: "/mofe" },
];

function Kit1({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Layout {...pageProps}>
        {" "}
        {/* <NavBar /> */}
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default Kit1;
