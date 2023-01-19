import React from 'react';
import { GraphicHorizontalLineContainer } from './styled';

type GraphicHorizontalLineProps = {
  number: string;
};

export const GraphicHorizontalLine = ({
  number
}: GraphicHorizontalLineProps) => {
  return (
    <GraphicHorizontalLineContainer>
      {number}k<div></div>
    </GraphicHorizontalLineContainer>
  );
};
