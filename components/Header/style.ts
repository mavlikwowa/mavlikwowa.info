/* Libraries */
import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  ${() => {
    return `
    display: flex;
    background: white;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    // background-image: url('/img/avatar.png');
    // background-size: cover;
    min-height: 960px;
    // color: white;
    h1 {
      margin-bottom: 0;
    }
    h3 {
      color: grey;
    }
    img {
      width: 256px;
      height: 256px;
      margin: 0 10px 25px 0;
      @media (max-width: 940px) {
        margin: 0 0 25px 0;
      }
    }
    > div:first-of-type {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 0 20% 0 20%;
        @media (max-width: 940px) {
          flex-direction: column;
          padding: 0 2% 0 2%;
          align-items: center;
        }
    }
  `;
  }}
`;

export const StyledSkills = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 30%;
    div {
      margin: 0px 5px 5px 0;
      animation-duration: 5s;
      animation-name: showing;
      @keyframes showing {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
    }
    @media (max-width: 940px) {
      max-width: 100%;
      justify-content: space-evenly;
    }
  `;
  }}
`;
