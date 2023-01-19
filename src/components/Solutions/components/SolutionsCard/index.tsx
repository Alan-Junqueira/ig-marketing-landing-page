import { ArrowCircleRight } from 'phosphor-react';
import { SolutionsCountdown } from '../SolutionsCountdown';
import { SolutionsCardContainer } from './styled';

type SolutionsCardProps = {
  title: string;
  followerQt: string;
  engagementQt: string;
  image: string;
};

export const SolutionsCard = ({
  engagementQt,
  followerQt,
  image,
  title
}: SolutionsCardProps) => {
  return (
    <SolutionsCardContainer>
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <div>
          <SolutionsCountdown quantity={followerQt} label="FOLLOWER REACH" />
          <SolutionsCountdown quantity={engagementQt} label="ENGAGEMENT" />
        </div>
        <a href="">
          Learn More <ArrowCircleRight weight="bold" />
        </a>
      </div>
    </SolutionsCardContainer>
  );
};
