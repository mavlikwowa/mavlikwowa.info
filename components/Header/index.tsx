/* Libraries */
import React, { useContext } from 'react';
/* Styled Components */
import { Tag } from 'mavlikwowa.ui';
import { StyledHeader, StyledSkills } from './style';
/* Components */
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';
/* Data */
import { SKILLS, FAMILYNAME } from '../../data/texts';

const Header: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <StyledHeader>
      <h1>{isEnglish ? FAMILYNAME.en : FAMILYNAME.ru}</h1>
      <h3>Frontend Developer</h3>
      <div>
        <img alt="avatar" src="/img/avatar.png" />
        <StyledSkills>
          {SKILLS.map((item: string, index: number) => {
            // Doesn't have similar items
            return (
              <Tag
                key={item}
                background="#129900"
                border="#ADD900"
                color="#D0FFC9"
                width="110px"
                height="35px"
                style={{ animationDelay: `${index / 4}S` }}
              >
                {item}
              </Tag>
            );
          })}
        </StyledSkills>
      </div>
    </StyledHeader>
  );
};

export default Header;
