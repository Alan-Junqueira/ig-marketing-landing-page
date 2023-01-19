import React from 'react';
import { InfoCard } from '../InfoCard';
import { CommunityContainer, CommunityContent } from './styled';

import profiles from '/assets/images/profiles.png';

export const Community = () => {
  return (
    <CommunityContainer id="community">
      <CommunityContent>
        <img src={profiles} alt="" />
        <InfoCard
          color="yellow"
          description="Bring your relationships to new heights with our community product. Discover your biggest enthusiasts "
          title="Community marketing"
          type="Community"
        />
      </CommunityContent>
    </CommunityContainer>
  );
};
