import { ArrowCircleRight } from 'phosphor-react';
import React from 'react';
import { NewsletterContainer, NewsletterContent } from './styled';

export const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterContent>
        <h2>Subscribe our newsletter</h2>
        <p>
          Join thousands of marketers and entrepreneurs for a 2-day event at the
          forefront of social commerce.
        </p>
        <button>
          Subscribe <ArrowCircleRight />
        </button>
      </NewsletterContent>
    </NewsletterContainer>
  );
};
