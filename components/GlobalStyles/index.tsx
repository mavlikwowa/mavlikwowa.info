/* Libraries */
import React from 'react';
import { Global, css } from '@emotion/react';

/* Global styles */
const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-Thin.eot');
          src: local('Geometria Thin'), local('Geometria-Thin'),
            url('/fonts/Geometria/Geometria-Thin.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-Thin.woff') format('woff'),
            url('/fonts/Geometria/Geometria-Thin.ttf') format('truetype');
          font-weight: 100;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-MediumItalic.eot');
          src: local('Geometria MediumItalic'), local('Geometria-MediumItalic'),
            url('/fonts/Geometria/Geometria-MediumItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-MediumItalic.woff') format('woff'),
            url('/fonts/Geometria/Geometria-MediumItalic.ttf')
              format('truetype');
          font-weight: 500;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-Italic.eot');
          src: local('Geometria Italic'), local('Geometria-Italic'),
            url('/fonts/Geometria/Geometria-Italic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-Italic.woff') format('woff'),
            url('/fonts/Geometria/Geometria-Italic.ttf') format('truetype');
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-Heavy.eot');
          src: local('Geometria Heavy'), local('Geometria-Heavy'),
            url('/fonts/Geometria/Geometria-Heavy.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-Heavy.woff') format('woff'),
            url('/fonts/Geometria/Geometria-Heavy.ttf') format('truetype');
          font-weight: 900;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-ExtraBoldItalic.eot');
          src: local('Geometria ExtraBoldItalic'),
            local('Geometria-ExtraBoldItalic'),
            url('/fonts/Geometria/Geometria-ExtraBoldItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-ExtraBoldItalic.woff')
              format('woff'),
            url('/fonts/Geometria/Geometria-ExtraBoldItalic.ttf')
              format('truetype');
          font-weight: 800;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-Medium.eot');
          src: local('Geometria Medium'), local('Geometria-Medium'),
            url('/fonts/Geometria/Geometria-Medium.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-Medium.woff') format('woff'),
            url('/fonts/Geometria/Geometria-Medium.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-BoldItalic.eot');
          src: local('Geometria BoldItalic'), local('Geometria-BoldItalic'),
            url('/fonts/Geometria/Geometria-BoldItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-BoldItalic.woff') format('woff'),
            url('/fonts/Geometria/Geometria-BoldItalic.ttf') format('truetype');
          font-weight: bold;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-LightItalic.eot');
          src: local('Geometria LightItalic'), local('Geometria-LightItalic'),
            url('/fonts/Geometria/Geometria-LightItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-LightItalic.woff') format('woff'),
            url('/fonts/Geometria/Geometria-LightItalic.ttf') format('truetype');
          font-weight: 300;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-HeavyItalic.eot');
          src: local('Geometria HeavyItalic'), local('Geometria-HeavyItalic'),
            url('/fonts/Geometria/Geometria-HeavyItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-HeavyItalic.woff') format('woff'),
            url('/fonts/Geometria/Geometria-HeavyItalic.ttf') format('truetype');
          font-weight: 900;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria.eot');
          src: local('Geometria'),
            url('/fonts/Geometria/Geometria.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria.woff') format('woff'),
            url('/fonts/Geometria/Geometria.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-Bold.eot');
          src: local('Geometria Bold'), local('Geometria-Bold'),
            url('/fonts/Geometria/Geometria-Bold.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-Bold.woff') format('woff'),
            url('/fonts/Geometria/Geometria-Bold.ttf') format('truetype');
          font-weight: bold;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-ExtraBold.eot');
          src: local('Geometria ExtraBold'), local('Geometria-ExtraBold'),
            url('/fonts/Geometria/Geometria-ExtraBold.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-ExtraBold.woff') format('woff'),
            url('/fonts/Geometria/Geometria-ExtraBold.ttf') format('truetype');
          font-weight: 800;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-ThinItalic.eot');
          src: local('Geometria ThinItalic'), local('Geometria-ThinItalic'),
            url('/fonts/Geometria/Geometria-ThinItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-ThinItalic.woff') format('woff'),
            url('/fonts/Geometria/Geometria-ThinItalic.ttf') format('truetype');
          font-weight: 100;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-ExtraLightItalic.eot');
          src: local('Geometria ExtraLightItalic'),
            local('Geometria-ExtraLightItalic'),
            url('/fonts/Geometria/Geometria-ExtraLightItalic.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-ExtraLightItalic.woff')
              format('woff'),
            url('/fonts/Geometria/Geometria-ExtraLightItalic.ttf')
              format('truetype');
          font-weight: 200;
          font-style: italic;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-Light.eot');
          src: local('Geometria Light'), local('Geometria-Light'),
            url('/fonts/Geometria/Geometria-Light.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-Light.woff') format('woff'),
            url('/fonts/Geometria/Geometria-Light.ttf') format('truetype');
          font-weight: 300;
          font-style: normal;
        }

        @font-face {
          font-family: 'Geometria';
          src: url('/fonts/Geometria/Geometria-ExtraLight.eot');
          src: local('Geometria ExtraLight'), local('Geometria-ExtraLight'),
            url('/fonts/Geometria/Geometria-ExtraLight.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/Geometria/Geometria-ExtraLight.woff') format('woff'),
            url('/fonts/Geometria/Geometria-ExtraLight.ttf') format('truetype');
          font-weight: 200;
          font-style: normal;
        }
        * {
          box-sizing: border-box;
          font-family: Geometria, normal;
        }
        body {
          background: #121826;
        }
        h1 {
          color: #f32f4b;
          font-weight: 300;
          font-size: 48px;
          line-height: 60px;
        }
        h3 {
          font-weight: 500;
          font-size: 36px;
          line-height: 45px;
          color: #ffffff;
        }
        h4 {
          font-weight: normal;
          font-size: 18px;
          line-height: 23px;
        }
      `}
    />
  );
};

export default GlobalStyles;
