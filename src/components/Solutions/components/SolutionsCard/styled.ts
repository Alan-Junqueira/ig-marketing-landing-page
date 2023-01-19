import styled from 'styled-components';

export const SolutionsCardContainer = styled.div`
  position: relative;

  > img {
    width: 100%;
    max-width: 360px;
    height: auto;
  }

  > div {
    position: absolute;
    bottom: -8.5rem;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 26rem;
    width: 100%;

    padding: 2.2rem 5rem 2.7rem 2.5rem;
    background-color: ${(props) => props.theme.colors.white};

    box-shadow: 0px 40px 100px -30px rgba(0, 0, 0, 0.04);
    border-radius: 0px 0px 2px 2px;

    h3 {
      font-weight: 600;
      font-size: ${(props) => props.theme.fontSize.base};
      line-height: ${(props) => props.theme.fontSize['2xl']};

      color: ${(props) => props.theme.colors['dark-blue-100']};
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.6rem;

      font-family: 'Inter';
      font-size: 1.5rem;
      line-height: ${(props) => props.theme.fontSize.lg};

      color: ${(props) => props.theme.colors['purple-500']};
    }
  }
`;
