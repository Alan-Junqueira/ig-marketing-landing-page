import { ArrowCircleRight } from 'phosphor-react';
import { InfoCardContainer } from './styled';

type InfoCardProps = {
  type: string;
  title: string;
  description: string;
  color: 'red' | 'purple' | 'yellow';
};

export const InfoCard = ({
  description,
  title,
  type,
  color
}: InfoCardProps) => {
  return (
    <InfoCardContainer color={color}>
      <h3>{type}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href="">
        Learn More <ArrowCircleRight weight="bold" />
      </a>
    </InfoCardContainer>
  );
};
