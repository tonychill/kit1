import Head from "next/head";
import { FC } from "react";

export interface LayoutProps {
  meta?: {
    title: string | undefined;
    description: string;
  };
}

const Layout: FC<LayoutProps> = ({ children, meta }) => {
  return (
    <>
      <Head>
        <title>{meta?.title || "Enjoythevi"}</title>
        <meta name="description" content={meta?.description || "Welcome to the best that the virgin islands has to offer."} />
        <meta content="/media/images/coconut_logo.png"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></meta>
        <meta charSet="utf-8" />
      </Head>
      <main className="mt-36">
        <div>{children}</div>
      </main>
    </>
  );
};
export default Layout;
