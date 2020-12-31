import "../styles/globals.css";

import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" />
        <title>Aamir Khan</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
