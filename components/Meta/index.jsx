import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  const titleToDisplay =
    title?.[0]?.toUpperCase() + title?.replace("-", " ")?.substring(1);
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <title>{`${titleToDisplay} | Veeture`}</title>
    </Head>
  );
};

// KEYNOTE set default props
Meta.defaultProps = {
  title: "Veeture Lifestyle",
  keywords: "Fashion, Design, Stylish, Young",
  description:
    "Project Veeture is a online clothing store, its front-end is built with Next.js framework and leveraging Content management system Sanity to export product contents to the front-end.The website support user registeration with email or google login, product filtering, online payment and other fundermental functions a e-commerce website should have.",
};

export default Meta;
