/* Libraries */
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

/* Styled Components */
import { Slider } from 'mavlikwowa.ui';
import { StyledAbout } from './styles';

/* Components */
import SliderItem from './SliderItem';

/* Data */
import { ABOUT, BLOCKIDS } from '../../data/texts';

/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';

/* Interfaces */
import { SliderItemSettings } from '../../data/interfaces';

export const About: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <StyledAbout id={BLOCKIDS.AboutId}>
      <h3>{isEnglish ? ABOUT.en : ABOUT.ru}</h3>
      <Slider
        arrowsColor="white"
        data={ABOUT.SliderItem.map((item: SliderItemSettings) => {
          return (
            <SliderItem
              key={uuidv4()}
              backgroundUrl={item.backgroundUrl}
              color={item.color}
              boxShadow={item.boxShadow}
              isEnglish={isEnglish}
            >
              {isEnglish ? item.enChild : item.ruChild}
            </SliderItem>
          );
        })}
        width="100%"
        height="250px"
      />
    </StyledAbout>
  );
};

export default About;
