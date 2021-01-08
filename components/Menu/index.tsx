/* Libraries */
import React, { useContext } from 'react';
/* Styled  Components */
import {
  Switcher,
  EnglishFlagIcon,
  RussianFlagIcon,
  BurgerIcon,
} from 'mavlikwowa.ui';
import { StyledMenu, StyledMenuContainer } from './styles';
/* Components */
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';

const Menu: React.FC = () => {
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  // An action after click
  const clickOnSwitch = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <StyledMenu>
      <StyledMenuContainer>
        <Switcher checked={isEnglish} onChange={clickOnSwitch}>
          {isEnglish ? <EnglishFlagIcon /> : <RussianFlagIcon />}
        </Switcher>
        <BurgerIcon />
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export default Menu;
