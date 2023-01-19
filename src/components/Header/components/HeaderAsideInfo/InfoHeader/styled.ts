import styled from 'styled-components';

export const InfoHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  span {
    flex: 1;

    font-family: 'Inter';
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: 1.7rem;

    color: ${(props) => props.theme.colors['gray-700']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3.4rem;
    height: 3.4rem;

    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colors['white-400']};

    cursor: pointer;

    svg {
      width: ${(props) => props.theme.fontSize.sm};
      height: auto;
      color: ${(props) => props.theme.colors['gray-300']};
    }
  }
`;
