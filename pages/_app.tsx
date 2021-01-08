/* Libraries */
import * as React from 'react';

/* Components */
import GlobalStyles from '../components/GlobalStyles';
import SEO from '../components/SEO';

/* Contexts */
import LanguageProvider from '../components/Providers/LanguageProvider';

export const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
};

export default App;
