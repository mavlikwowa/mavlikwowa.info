/* Libraries */
import styled from '@emotion/styled';

export const StyledExperience = styled.div`
  ${() => {
    return `
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  `;
  }}
`;

export const StyledCompanyName = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0 5% 0 5%;
    position: relative;
    &:after {
      position: absolute;
      content: '';
      border-bottom: 1px solid black;
      width: 85%;
      height: 100%;
    }
    
    img {
      margin: 5px;
      border: 1px solid black;
    }
    
    h2 {
      margin-left: 5px;
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
    padding: 0 10% 0 10%;
    h2 {
      margin-right: 10px;
      flex-basis: 60%;
    }
    h4 {
      flex-basis: 40%;
    }
  `;
  }}
`;
