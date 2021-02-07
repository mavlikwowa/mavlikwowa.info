/* Libraries */
import styled from '@emotion/styled';

export const StyledHeader = styled.div`
  ${() => {
    return `
    display: flex;
    background: white;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    background: url('/img/background.svg') no-repeat;
    background-position-x: -300px;
    background-position-y: -150px;
    h1 {
      color: #F32F4B;
      font-weight: 300;
      font-size: 48px;
      line-height: 60px;
      margin: 0 0 40px 0;
    }
    h3 {
      margin: -14px 0 14px 0;
      font-weight: 500;
      font-size: 36px;
      line-height: 45px;
      color: #FFFFFF;
    }
    h4 {
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: #E6E6E6;
    }
    img {
      margin: 0 40px 25px 6%;
      @media (max-width: 940px) {
        margin: 0 0 25px 0;
      }
    }
    > div:first-of-type {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 457px;
        @media (max-width: 940px) {
          height: auto;
        }
    }
    @media (max-width: 940px) {
      flex-direction: column;
      padding: 0 2% 0 2%;
      align-items: center;
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
    max-width: 560px;
    margin-left: -25px;
    div {
      margin: 0px 5px 5px 0;
      opacity: 0;
      animation-duration: 2s;
      animation-name: showing;
      animation-fill-mode: forwards;
      @keyframes showing {
        0% {opacity: 0;}
        100% {opacity: 1;}
      }
      @media (max-width: 940px) {
        flex-basis: 45%;
      }
    }
    @media (max-width: 940px) {
      justify-content: center;
      margin-left: 0;
    }
  `;
  }}
`;

export const StyledSkill = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 47px;
      height: 42px;
      position: relative;
      left: 20%;
      @media (max-width: 940px) {
        width: 47px;
        height: 42px;
        left: 0;
      }
    }
    h4 {
      margin-top: 0;
    }
  `;
  }}
`;
