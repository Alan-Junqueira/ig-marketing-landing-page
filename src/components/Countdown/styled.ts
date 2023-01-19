import styled from 'styled-components';

export const CountdownContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors['dark-blue-400']};
  margin-block: 4rem;
  padding-block: 12rem;
`;

export const CountdownContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 85rem;
  width: 100%;

  h2 {
    font-weight: 600;
    font-size: 4rem;
    line-height: 5rem;

    text-align: center;

    margin-bottom: 1.2rem;

    color: ${(props) => props.theme.colors.white};
  }

  p {
    flex: 1;
    font-family: 'Inter';
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 2.8rem;

    width: 100%;
    max-width: 56rem;

    margin: 0 auto;

    text-align: center;
    letter-spacing: 0.01em;

    color: ${(props) => props.theme.colors['blue-400']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 11rem;
  }
`;
