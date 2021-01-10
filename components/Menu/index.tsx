/* Libraries */
import React, { useContext, useState } from 'react';
/* Styled  Components */
import {
  Switcher,
  EnglishFlagIcon,
  RussianFlagIcon,
  BurgerIcon,
  SidePage,
} from 'mavlikwowa.ui';
import { StyledMenu, StyledMenuContainer, StyledSidePage } from './styles';
/* Components */
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';
/* Utils */
import { scrollToElement } from '../../utils/utils';
/* Data */
import { BLOCKIDS, MENU } from '../../data/texts';

const Menu: React.FC = () => {
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);
  const [showSidePage, setShowSidePage] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(true);
  // An action after click
  const clickOnSwitch = () => {
    setIsEnglish(!isEnglish);
  };
  // Closes SidePage
  const closeSidePage = () => {
    setShowSidePage(false);
  };
  // Opens SidePage
  const openSidePage = () => {
    setShowSidePage(true);
  };
  // Scrolls to Contact component
  const scrollToContacts = () => {
    closeSidePage();
    setShowMenu(false);
    scrollToElement(BLOCKIDS.ContactsId);
    setTimeout(() => {
      setShowMenu(true);
    }, 1000);
  };
  // Scrolls to About component
  const scrollToAbout = () => {
    closeSidePage();
    setShowMenu(false);
    scrollToElement(BLOCKIDS.AboutId);
    setTimeout(() => {
      window.scrollBy(0, -50);
      setShowMenu(true);
    }, 1000);
  };
  // Scrolls to Experience component
  const scrollToExp = () => {
    closeSidePage();
    setShowMenu(false);
    scrollToElement(BLOCKIDS.ExpId);
    setTimeout(() => {
      window.scrollBy(0, -50);
      setShowMenu(true);
    }, 1000);
  };
  return (
    <>
      {showMenu && (
        <StyledMenu>
          <StyledMenuContainer>
            <Switcher checked={isEnglish} onChange={clickOnSwitch}>
              {isEnglish ? <EnglishFlagIcon /> : <RussianFlagIcon />}
            </Switcher>
            <div role="none" onClick={openSidePage}>
              <BurgerIcon />
            </div>
            <SidePage show={showSidePage} onCloseClick={closeSidePage}>
              <StyledSidePage>
                <h1 role="none" onClick={scrollToExp}>
                  {isEnglish ? MENU.exp.en : MENU.exp.ru}
                </h1>
                <h1 role="none" onClick={scrollToAbout}>
                  {isEnglish ? MENU.about.en : MENU.about.ru}
                </h1>
                <h1 role="none" onClick={scrollToContacts}>
                  {isEnglish ? MENU.contacts.en : MENU.contacts.ru}
                </h1>
              </StyledSidePage>
            </SidePage>
          </StyledMenuContainer>
        </StyledMenu>
      )}
    </>
  );
};

export default Menu;
