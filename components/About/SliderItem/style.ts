/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import { StyledSliderItemProps } from './interfaces';

export const StyledSliderItem = styled.div<StyledSliderItemProps>`
  ${({ backgroundUrl, color, boxShadow }: StyledSliderItemProps) => {
    return `
    display: flex;
    flex-direction: row;
    background-image: url(${backgroundUrl});
    background-size: cover;
    height: 100%;
    width: 90%;
    color: ${color || 'black'};
    box-shadow: ${boxShadow || 'none'};
    align-items: center;
    justify-content: center;
    padding: 0 10% 0 10%;
  `;
  }}
`;
