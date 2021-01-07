/* Libraries */
import React from 'react';
/* Styled Components */
import { Tag } from 'mavlikwowa.ui';
import { StyledHeader, StyledSkills } from './style';
/* Components */
/* Data */
import { SKILLS } from '../../data/texts';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Владимир Маликов</h1>
      <h3>Frontend Developer</h3>
      <div>
        <img alt="avatar" src="/img/avatar.png" />
        <StyledSkills>
          {SKILLS.map((item: string) => {
            // Doesn't have similar items
            return (
              <Tag
                key={item}
                background="#129900"
                border="#ADD900"
                color="#D0FFC9"
                width="110px"
                height="35px"
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
