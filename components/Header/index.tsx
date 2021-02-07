/* Libraries */
import React, { useContext } from 'react';
/* Interfaces */
import { Tag } from 'mavlikwowa.ui';
import { SkillProps } from '../../data/interfaces';
/* Styled Components */
import { StyledHeader, StyledSkills, StyledSkill } from './style';
/* Components */
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';
/* Data */
import { SKILLS, FAMILYNAME, HEADERSKILLS } from '../../data/texts';

const Header: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <StyledHeader>
      <img alt="avatar" src="/img/avatar.png" />
      <div>
        <div>
          <h3>{isEnglish ? FAMILYNAME.en : FAMILYNAME.ru}</h3>
          <h1>Frontend Developer</h1>
          <h4>{isEnglish ? HEADERSKILLS.en : HEADERSKILLS.ru}</h4>
        </div>
        <StyledSkills>
          {SKILLS.map((item: SkillProps, index: number) => {
            // Doesn't have similar items
            return (
              <StyledSkill
                key={item.name}
                style={{ animationDelay: `${index / 4}S` }}
              >
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </StyledSkill>
              // <Tag
              //   key={item.name}
              //   background="#129900"
              //   border="#ADD900"
              //   color="#D0FFC9"
              //   width="110px"
              //   height="35px"
              //   style={{ animationDelay: `${index / 4}S` }}
              // >
              //   {item}
              // </Tag>
            );
          })}
        </StyledSkills>
      </div>
    </StyledHeader>
  );
};

export default Header;
