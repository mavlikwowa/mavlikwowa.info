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
import Link from 'next/link';
import {
  StyledMenu,
  StyledMenuContainer,
  StyledSidePage,
  StyledSwitcher,
} from './styles';
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
  const clickOnSwitch = (
    event: React.MouseEvent | React.FormEvent,
    lang?: string
  ) => {
    if (
      (lang === 'ru' && !isEnglish) ||
      (lang === 'eng' && isEnglish) ||
      !event
    )
      return;
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
  // Returns a switcher of languages
  const langSwitcher = (): JSX.Element => {
    return (
      <StyledSwitcher isEnglish={isEnglish}>
        <p role="none" onClick={(e) => clickOnSwitch(e, 'ru')}>
          Ru
        </p>
        <Switcher checked={isEnglish} onChange={(e) => clickOnSwitch(e)}>
          {isEnglish ? <EnglishFlagIcon /> : <RussianFlagIcon />}
        </Switcher>
        <p role="none" onClick={(e) => clickOnSwitch(e, 'eng')}>
          Eng
        </p>
      </StyledSwitcher>
    );
  };

  return (
    <>
      {showMenu && (
        <StyledMenu>
          <StyledMenuContainer>
            {langSwitcher()}
            <span className="desktop__links">
              <p role="none" onClick={scrollToExp}>
                {isEnglish ? MENU.exp.en : MENU.exp.ru}
              </p>
              <p role="none" onClick={scrollToAbout}>
                {isEnglish ? MENU.about.en : MENU.about.ru}
              </p>
              <p role="none" onClick={scrollToContacts}>
                {isEnglish ? MENU.contacts.en : MENU.contacts.ru}
              </p>
            </span>
            <Link href="mailto:mavlikwowa@gmail.com" passHref>
              <a>mavlikwowa@gmail.com</a>
            </Link>
            <div className="mobile__burger" role="none" onClick={openSidePage}>
              <BurgerIcon />
            </div>
            <SidePage
              header={langSwitcher()}
              show={showSidePage}
              onCloseClick={closeSidePage}
            >
              <StyledSidePage>
                <p>{isEnglish ? MENU.email.en : MENU.email.ru}</p>
                <Link href="mailto:mavlikwowa@gmail.com" passHref>
                  <a>mavlikwowa@gmail.com</a>
                </Link>
                <h3 role="none" onClick={scrollToExp}>
                  {isEnglish ? MENU.exp.en : MENU.exp.ru}
                </h3>
                <h3 role="none" onClick={scrollToAbout}>
                  {isEnglish ? MENU.about.en : MENU.about.ru}
                </h3>
                <h3 role="none" onClick={scrollToContacts}>
                  {isEnglish ? MENU.contacts.en : MENU.contacts.ru}
                </h3>
              </StyledSidePage>
            </SidePage>
          </StyledMenuContainer>
        </StyledMenu>
      )}
    </>
  );
};

export default Menu;
