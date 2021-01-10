/* Libraries */
import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  ${() => {
    return `
    display: fixed;
    top: 5px;
    left: 0;
    width: 100%;
    height: 50px;
    background: aliceblue;
    position: sticky;
    z-index: 999;
    border-radius: 15px;
  `;
  }}
`;

export const StyledMenuContainer = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10% 0 10%;
    
    svg {
      cursor: pointer;
    }
  `;
  }}
`;

export const StyledSidePage = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }  
    }
  `;
  }}
`;
