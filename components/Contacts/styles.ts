/* Libraries */
import styled from '@emotion/styled';

export const StyledContacts = styled.div`
  ${() => {
    return `
    display: flex;
    flex-direction: column;
    padding: 0 10% 0 10%;
    align-items: center;
    justify-content: center;
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      flex-wrap: wrap;
      img {
        margin: 15px;
        width: 90px;
        height: 90px;
        padding: 10px;
        cursor: pointer;
        &:hover {
          border: 1px solid;
        }
        &:active {
          border: none;
        }
      }
    }
  `;
  }};
`;
