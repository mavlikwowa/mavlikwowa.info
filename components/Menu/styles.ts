/* Libraries */
import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  ${() => {
    return `
    display: fixed;
    top: 0;
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
