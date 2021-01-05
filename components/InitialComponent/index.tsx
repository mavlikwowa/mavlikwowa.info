import React from 'react';
import { Switcher, Button, SidePage } from 'mavlikwowa.ui';
import { InitialComponentProps } from './interfaces';
import { StyledComponent } from './style';

const InitialComponent: React.FC = ({ testText }: InitialComponentProps) => {
  return (
    <StyledComponent>
      {testText}
      <Switcher />
      <Button>Test</Button>
      <SidePage
        onCloseClick={() => {
          console.log('test');
        }}
        show
      />
    </StyledComponent>
  );
};

export default InitialComponent;
