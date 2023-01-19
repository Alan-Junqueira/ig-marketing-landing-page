import React from 'react';
import { SolutionsCard } from './components/SolutionsCard';
import { SolutionsContainer, SolutionsContent } from './styled';

import solutionProfile1 from '/assets/images/solution-profile-1.png';
import solutionProfile2 from '/assets/images/solution-profile-2.png';
import solutionProfile3 from '/assets/images/solution-profile-3.png';

export const Solutions = () => {
  return (
    <SolutionsContainer id="solutions">
      <SolutionsContent>
        <h2>Solutions for every need</h2>
        <p>
          Join thousands of marketers and entrepreneurs for a 2-day event at the
          forefront of social commerce.
        </p>
        <div>
          <SolutionsCard
            engagementQt="56.2 K"
            followerQt="6.7 M"
            image={solutionProfile1}
            title="Rebel Clothing"
          />

          <SolutionsCard
            engagementQt="56.2 K"
            followerQt="6.7 M"
            image={solutionProfile2}
            title="Rebel Clothing"
          />

          <SolutionsCard
            engagementQt="56.2 K"
            followerQt="6.7 M"
            image={solutionProfile3}
            title="Rebel Clothing"
          />
        </div>
      </SolutionsContent>
    </SolutionsContainer>
  );
};
