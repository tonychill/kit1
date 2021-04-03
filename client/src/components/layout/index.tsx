import { FC } from "react";
import Head from "next/head";
//TODO: Add loading functionality....
// import Spinner from "../../components/ui/Spinner";

export interface LayoutProps {
  meta: { title: string; description: string };
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
  /**TODO: Decide on how the Layout component should be implemented. Currently
   * it wraps the entire routing so default pages are not getting the req meta
   * object and failing during build. Probable the Layout component should only
   * be added to actual pages rather than the entire routing component tree.
   */
  return (
    <>
      <Head>
        <title>{meta?.title || "Enjoythevi"}</title>
        <meta name="description" content={meta?.description || "Welcome to the best that the virgin islands has to offer."} />
        <meta content="/media/images/coconut_logo.png"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        <meta charSet="utf-8" />
      </Head>
      <main className=" mt-[70px] md:mt-20">{children}</main>
    </>
  );
};
export default Layout;
