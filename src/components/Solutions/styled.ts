import styled from 'styled-components';

export const SolutionsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 9rem;
  padding-bottom: 13rem;
`;

export const SolutionsContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 120rem;
  width: 100%;

  > h2 {
    font-weight: 600;
    font-size: 4rem;
    line-height: ${(props) => props.theme.fontSize['6xl']};

    text-align: center;

    margin-bottom: 1rem;

    color: ${(props) => props.theme.colors['blue-600']};
  }

  > p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 2.8rem;

    text-align: center;
    letter-spacing: 0.01em;

    margin-bottom: 8rem;

    color: ${(props) => props.theme.colors['blue-300']};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }
`;
