import styled from 'styled-components';

export const SolutionsCountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  gap: 1rem;

  strong {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize['2xl']};
    line-height: ${(props) => props.theme.fontSize['2xl']};

    color: ${(props) => props.theme.colors['blue-600']};
  }

  span {
    font-family: 'Inter';
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 400;
    text-transform: uppercase;

    color: ${(props) => props.theme.colors['white-200']};
  }
`;
