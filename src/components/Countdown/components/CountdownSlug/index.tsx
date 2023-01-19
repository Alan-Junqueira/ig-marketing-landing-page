import React from 'react';
import { CountdownSlugContainer } from './styled';

type CountdownSlugProps = {
  quantity: string;
  label: string;
};

export const CountdownSlug = ({ label, quantity }: CountdownSlugProps) => {
  return (
    <CountdownSlugContainer>
      <strong>{quantity}</strong>
      <span>{label}</span>
    </CountdownSlugContainer>
  );
};
