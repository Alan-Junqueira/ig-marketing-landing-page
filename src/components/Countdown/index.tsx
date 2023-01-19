import React from 'react';
import { CountdownSlug } from './components/CountdownSlug';
import { CountdownContainer, CountdownContent } from './styled';

export const Countdown = () => {
  return (
    <CountdownContainer>
      <CountdownContent>
        <h2>Search through more than 11 million social media profiles</h2>
        <p>
          Heepsy’s search filters help you find exactly what you’re looking for,
          and our influencer reports provide you with the metrics
        </p>
        <div>
          <CountdownSlug quantity="2260" label="Satisfied Brands" />
          <CountdownSlug quantity="1324" label="Satisfied Clients" />
          <CountdownSlug quantity="3453" label="Sponsored" />
          <CountdownSlug quantity="9786" label="Completed" />
        </div>
      </CountdownContent>
    </CountdownContainer>
  );
};
