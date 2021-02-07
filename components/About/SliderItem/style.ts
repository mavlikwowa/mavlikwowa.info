/* Libraries */
import styled from '@emotion/styled';

/* Interfaces */
import { StyledSliderItemProps } from './interfaces';

export const StyledSliderItem = styled.div<StyledSliderItemProps>`
  ${({ backgroundUrl, color, boxShadow, isEnglish }: StyledSliderItemProps) => {
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
    h1 {
      font-weight: 300;
    }
    @media (max-width: 940px) {
      h3 {
        font-size: 18px;
        line-height: 35px !important;
      }
      h1 {
        font-size: 25px !important;
        line-height: 33px !important;
        word-break: ${isEnglish ? 'none' : 'break-all'};
      }
    }
  `;
  }}
`;
