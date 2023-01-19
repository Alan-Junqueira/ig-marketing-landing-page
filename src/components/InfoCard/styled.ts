import styled, { css } from 'styled-components';

interface IInfoCardContainer {
  color: 'red' | 'purple' | 'yellow';
}

export const InfoCardContainer = styled.div<IInfoCardContainer>`
  max-width: 36rem;
  width: 100%;

  h3 {
    font-family: 'Inter';
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: ${(props) => props.theme.fontSize.lg};

    letter-spacing: 0.2em;
    text-transform: uppercase;

    margin-bottom: 0.8rem;

    ${(props) =>
    props.color === 'red' &&
    css`
        color: ${(props) => props.theme.colors['red-700']}; ;
      `};
    ${(props) =>
    props.color === 'purple' &&
    css`
        color: ${(props) => props.theme.colors['purple-500']};
      `};
    ${(props) =>
    props.color === 'yellow' &&
    css`
        color: ${(props) => props.theme.colors['yellow-500']}; ;
      `};
  }

  h4 {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize['3xl']};
    line-height: 4rem;

    margin-bottom: 1.4rem;

    color: ${(props) => props.theme.colors['blue-600']};
  }

  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 2.8rem;

    letter-spacing: 0.01em;

    margin-bottom: 3rem;

    color: ${(props) => props.theme.colors['blue-300']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-family: 'Inter';
    font-size: 1.5rem;
    line-height: ${(props) => props.theme.fontSize.lg};

    color: ${(props) => props.theme.colors['dark-blue-200']};

    svg {
      width: 1.6rem;
      height: auto;
      color: ${(props) => props.theme.colors['dark-blue-200']};
    }

    &:hover {
      filter: brightness(1.5);
    }
  }
`;
