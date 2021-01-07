/* Libraries */
import * as React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import GlobalStyles from '../GlobalStyles';

// Config
const SeoConfig = {
  title: 'Vladimir Malikov',
  description: 'My CV',
};

/* SEO Component */
const SEO = (): JSX.Element => {
  return (
    <>
      <DefaultSeo title={SeoConfig.title} description={SeoConfig.description} />
      <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" /> */}
        {/* <GlobalStyles /> */}
        <></>
      </Head>
    </>
  );
};

export default SEO;
