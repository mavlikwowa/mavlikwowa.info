/* Libraries */
import * as React from 'react';

/* Components */
import GlobalStyles from '../components/GlobalStyles';
import SEO from '../components/SEO';

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <Component {...pageProps} />
    </>
  );
};

export default App;
