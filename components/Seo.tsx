import React from "react";
import Head from "next/head";
export const Seo = (): JSX.Element => {
  return (
    <Head>
      <meta
        name="description"
        content="Elegant social media badges to spice up your documentation at your disposal."
      />
      <meta
        name="keywords"
        content="Readme, social media, icons, badges, github badges"
      />
      <meta name="author" content="Paul Bokelman" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Socialize</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
