import styled from 'styled-components';

export const FeatureContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 8.2rem;
  padding-bottom: 3rem;

  background-color: ${(props) => props.theme.colors.white};
`;

export const FeatureContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-inline: 2.4rem;
  max-width: 80rem;
  width: 100%;

  h2 {
    font-weight: 600;
    font-size: 4rem;
    line-height: ${(props) => props.theme.fontSize['6xl']};

    margin-bottom: 1rem;
    text-align: center;

    color: ${(props) => props.theme.colors['blue-600']};
  }

  > p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 2.8rem;

    letter-spacing: 0.01em;
    text-align: center;

    max-width: 55rem;
    width: 100%;

    margin-bottom: 8.5rem;

    color: ${(props) => props.theme.colors['blue-300']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 14rem;

    > div:first-child {
      max-width: 34rem;
      width: 100%;

      h3 {
        font-family: 'Inter';
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSize.sm};
        line-height: ${(props) => props.theme.fontSize.lg};

        letter-spacing: 0.2em;
        text-transform: uppercase;

        margin-bottom: 0.8rem;

        color: ${(props) => props.theme.colors['purple-500']};
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
    }

    > div:last-child {
      display: flex;
      flex-direction: column;

      padding: 0.6rem 2rem 2rem 2rem;
      background-color: ${(props) => props.theme.colors.white};

      box-shadow: -8px 30px 80px -25px rgba(82, 82, 82, 0.1);
      border-radius: 8px;

      div.profile-bars {
        display: flex;
        gap: 1.6rem;

        margin-bottom: 2rem;

        div.bars {
          flex: 1;
          div.bar-1 {
            width: 54%;
            height: 0.7rem;
            border-radius: 7px;

            margin-bottom: 1.2rem;

            background-color: ${(props) => props.theme.colors['white-600']};
          }
          div.bar-2 {
            width: 100%;
            height: 0.6rem;
            border-radius: 7px;

            margin-bottom: 0.6rem;

            background-color: ${(props) => props.theme.colors['white-700']};
          }
          div.bar-3 {
            width: 75%;
            height: 0.5rem;
            border-radius: 7px;

            background-color: ${(props) => props.theme.colors['white-700']};
          }
        }
      }

      > span {
        display: flex;
        align-items: center;

        margin-top: 1.8rem;

        font-family: 'Inter';
        font-size: ${(props) => props.theme.fontSize.sm};
        line-height: 1.7rem;

        color: ${(props) => props.theme.colors['gray-300']};

        strong {
          font-family: 'Inter';
          font-size: ${(props) => props.theme.fontSize.xl};
          line-height: ${(props) => props.theme.fontSize['2xl']};

          color: ${(props) => props.theme.colors['gray-800']};

          margin-inline: 0.8rem;
        }
      }
    }
  }
`;
