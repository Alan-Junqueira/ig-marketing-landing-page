import React from 'react';
import { CircularProgressContainer } from './styled';

type CircularProgressBar = {
  percentage: number;
  size: number
};

export const CircularProgressBar = ({ percentage, size }: CircularProgressBar) => {
  let percentageDegree = 90 + 3.6 * percentage;
  return (
    <>
      <CircularProgressContainer
        percentage={percentage}
        percentageDegree={percentageDegree}
        size={size}
      ></CircularProgressContainer>
    </>
  );
};
