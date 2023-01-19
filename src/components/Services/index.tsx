import React from 'react';
import { InfoCard } from '../InfoCard';
import { ServicesContainer, ServicesContent, ServicesSlug } from './styled';

import progressBars from '/assets/images/progress-bars.svg';

export const Services = () => {
  return (
    <ServicesContainer>
      <ServicesContent>
        <InfoCard
          color="red"
          description="Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling"
          title="Managed services"
          type="services"
        />
        <div className="earnings">
          <span>Earning By Platform Type</span>
          <div className="progress-bars">
            <img src={progressBars} alt="" />
          </div>
          <div className="services-slug">
            <ServicesSlug variant="blue">Instagram</ServicesSlug>
            <ServicesSlug variant="red">Dribble</ServicesSlug>
            <ServicesSlug variant="yellow">Twitter</ServicesSlug>
          </div>
        </div>
      </ServicesContent>
    </ServicesContainer>
  );
};
