/* Libraries */
import React from 'react';

/* Styled Components */
import { StyledSliderItem } from './style';

/* Interfaces */
import { StyledSliderItemProps } from './interfaces';

const SliderItem: React.FC<StyledSliderItemProps> = ({
  backgroundUrl,
  color,
  boxShadow,
  isEnglish,
  children,
}: StyledSliderItemProps) => {
  return (
    <StyledSliderItem
      color={color}
      backgroundUrl={backgroundUrl}
      boxShadow={boxShadow}
      isEnglish={isEnglish}
    >
      {children}
    </StyledSliderItem>
  );
};

export default SliderItem;
