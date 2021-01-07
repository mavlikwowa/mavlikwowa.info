/* Libraries */
import React from 'react';
import { Global, css } from '@emotion/react';

/* Global styles */
const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        //@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
        /* montserrat-300 - latin */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: normal;
          src: url('/fonts/Inter/Regular/Inter-Regular.eot'),
            url('/fonts/Inter/Regular/Inter-Regular.woff2?v=3.12')
              format('woff2'),
            url('/fonts/Inter/Regular/Inter-Regular.woff?v=3.12') format('woff'),
            url('/fonts/Inter/Regular/Inter-Regular.ttf') format('truetype'),
            url('/fonts/Inter/Regular/Inter-Regular.svg') format('svg');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 600;
          src: url('/fonts/Inter/SemiBold/Inter-SemiBold.eot'),
            url('/fonts/Inter/SemiBold/Inter-SemiBold.woff2?v=3.12'),
            url('/fonts/Inter/SemiBold/Inter-SemiBold.woff?v=3.12'),
            url('/fonts/Inter/SemiBold/Inter-SemiBold.ttf'),
            url('/fonts/Inter/SemiBold/Inter-SemiBold.svg');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: normal;
          src: url('/fonts/Inter/Regular/Inter-Regular.eot'),
            url('/fonts/Inter/Regular/Inter-Regular.woff2?v=3.12')
              format('woff2'),
            url('/fonts/Inter/Regular/Inter-Regular.woff?v=3.12') format('woff'),
            url('/fonts/Inter/Regular/Inter-Regular.ttf') format('truetype'),
            url('/fonts/Inter/Regular/Inter-Regular.svg') format('svg');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: bold;
          src: url('/fonts/Inter/Bold/Inter-Bold.eot'),
            url('/fonts/Inter/Bold/Inter-Bold.woff2?v=3.12') format('woff2'),
            url('/fonts/Inter/Bold/Inter-Bold.woff?v=3.12') format('woff'),
            url('/fonts/Inter/Bold/Inter-Bold.ttf') format('truetype'),
            url('/fonts/Inter/Bold/Inter-Bold.svg') format('svg');
        }
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 900;
          src: url('/fonts/Inter/ExtraBold/Inter-ExtraBold.woff2?v=3.12')
              format('woff2'),
            url('/fonts/Inter/ExtraBold/Inter-ExtraBold.woff?v=3.12')
              format('woff'),
            url('/fonts/Inter/ExtraBold/Inter-ExtraBold.ttf') format('truetype');
        }
        * {
          box-sizing: border-box;
          font-family: Inter, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
