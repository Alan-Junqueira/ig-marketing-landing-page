import { SolutionsCountdownContainer } from './styled';

type SolutionsCountdownProps = {
  quantity: string;
  label: string;
};

export const SolutionsCountdown = ({
  label,
  quantity
}: SolutionsCountdownProps) => {
  return (
    <SolutionsCountdownContainer>
      <strong>{quantity}</strong>
      <span>{label}</span>
    </SolutionsCountdownContainer>
  );
};
