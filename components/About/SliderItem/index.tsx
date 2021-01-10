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
  children,
}: StyledSliderItemProps) => {
  return (
    <StyledSliderItem
      color={color}
      backgroundUrl={backgroundUrl}
      boxShadow={boxShadow}
    >
      {children}
    </StyledSliderItem>
  );
};

export default SliderItem;
