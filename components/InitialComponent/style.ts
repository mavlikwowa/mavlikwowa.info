import styled from '@emotion/styled';

export const StyledComponent = styled.div`
  ${() => {
    return `
      display: flex;
      align-items: center;
    `;
  }}
`;
