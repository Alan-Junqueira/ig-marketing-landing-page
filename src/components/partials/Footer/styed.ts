import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 7.5rem 0 3rem 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 97.6rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 5.4rem;
    border-bottom: 1px solid ${(props) => props.theme.colors['light-gray-200']};

    > span {
      font-family: 'Lekton';
      font-weight: 700;
      font-size: 3.4rem;
      line-height: 3.5rem;

      letter-spacing: -0.04em;

      color: ${(props) => props.theme.colors['gray-900']};
    }

    > nav {
      ul {
        display: flex;
        align-items: center;
        gap: 3.2rem;

        font-family: 'Inter';
        font-weight: 500;
        font-size: ${(props) => props.theme.fontSize.base};
        line-height: 1.9rem;

        color: ${(props) => props.theme.colors['gray--op-94']};

        li {
          display: flex;
          align-items: center;
          gap: 0.4rem;

          svg {
            width: 0.8rem;
            height: auto;

            color: ${(props) => props.theme.colors['dark-gray-300']};
          }
        }
      }
    }

    > ul {
      display: flex;
      align-items: center;
      gap: 2.8rem;

      svg {
        width: 1.3rem;
        height: auto;
        color: ${(props) => props.theme.colors.black};
      }
    }
  }

  > p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.3rem;

    text-align: center;

    margin-top: 3rem;

    color: ${(props) => props.theme.colors['gray-500']};
  }
`;
