import styled from 'styled-components';

export const CountdownSlugContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  gap: 1rem;

  strong {
    font-weight: 600;
    font-size: 4rem;
    line-height: 4rem;

    color: ${(props) => props.theme.colors.white};
  }

  span {
    font-family: 'Inter';
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: ${(props) => props.theme.fontSize.sm};

    color: ${(props) => props.theme.colors['blue-400']};
  }
`;
