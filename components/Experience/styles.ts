/* Libraries */
import styled from '@emotion/styled';

export const StyledExperience = styled.div`
  ${() => {
    return `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 6%;
    h3 {
      margin: 0;
    }
    > div:last-of-type {
      margin-top: 60px;
      > div:before {
        display: none;
      }
    }
  `;
  }}
`;

export const StyledPositionRow = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h4 {
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: white;
      width: 425px;
      text-align: left;
      @media (max-width: 940px) {
        width: 45%;
      }
    }
  `;
  }}
`;

export const StyledCompanyBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  img {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 65px 33px;
    margin-right: 20px;
  }
  img[alt='ACS'] {
    padding: 35px 33px;
  }
  > img {
    @media (max-width: 940px) {
      display: none;
    }
  }
  > div {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      bottom: -35px;
      left: 0;
      width: 100%;
      background: white;
      height: 1px;
      opacity: 0.4;
    }
    h3 {
      font-style: normal;
      font-weight: 300;
      font-size: 36px;
      line-height: 45px;
      color: #f32f4b;
    }
    img {
      @media (min-width: 940px) {
        display: none;
      }
    }
  }
`;
