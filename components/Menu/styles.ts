/* Libraries */
import styled from '@emotion/styled';
/* Interfaces */
import { StyledSwitcherProps } from './interfaces';

export const StyledMenu = styled.div`
  ${() => {
    return `
    display: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #121826;
    position: sticky;
    z-index: 999;
    @media (max-width: 940px) {
      border-radius: 15px;
    }
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
    
    .desktop__links {
      display: flex;
      width: 300px;
      align-items: center;
      justify-content: space-between;
      p {
        // margin-right: 100px;
        cursor: pointer;
        white-space: nowrap;
      }
      p:first-of-type {
        // margin-left: 20px;
      }
      p:last-of-type {
        // margin-right: 20px;
      }
      @media (max-width: 940px) {
        display: none;
      }
    }
    
    .mobile__burger {
      display: none;
      @media (max-width: 940px) {
        display: block;
      }
    }
   
    svg {
      cursor: pointer;
      fill: white;
    }
    
    > div: last-of-type {
      background: #121826;
    }
    
    > a {
      @media (max-width: 940px) {
        display: none;
      }
    }
  `;
  }}
`;

export const StyledSwitcher = styled.span<StyledSwitcherProps>`
  ${({ isEnglish }: StyledSwitcherProps) => {
    return `
      display: flex;
      flex-direction: row;
      width: auto;
      justify-content: center;
      align-items: center;
      p {
        margin: 0 9px 0 9px;
        cursor: pointer;
      }
      p: first-of-type {
        color:${isEnglish ? 'white' : '#F32F4B'};
        cursor:${isEnglish ? 'pointer' : 'default'};
      }
      p: last-of-type {
        color:${isEnglish ? '#F32F4B' : 'white'};
        cursor:${isEnglish ? 'default' : 'pointer'};
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
    
    h3 {
      cursor: pointer;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      margin: 0 0 26px 0;
      &:hover {
        text-decoration: underline;
      } 
    }
    
    a {
      margin-bottom: 40px;
    }
  `;
  }}
`;
