import styled, { css } from 'styled-components';

export const ServicesContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 2.5rem 0 7rem 0;
`;

export const ServicesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 2.4rem;
  max-width: 80rem;
  width: 100%;

  div.earnings {
    box-shadow: -8px 30px 80px -25px rgba(82, 82, 82, 0.1);
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.white};

    padding: 3rem 4rem 2.4rem 4rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    max-width: 27rem;
    width: 100%;

    > span {
      display: inline-block;

      font-family: 'Inter';
      font-weight: 400;
      font-size: 1.3rem;
      line-height: ${(props) => props.theme.fontSize.base};

      text-align: center;

      margin-bottom: 2.6rem;

      color: ${(props) => props.theme.colors['blue-500']};
    }

    > div.progress-bars {
      position: relative;

      &::before {
        position: absolute;
        left: -4.4rem;
        top: 3.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        content: '$13,832';

        font-family: 'Inter';
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSize.sm};
        line-height: 1.7rem;

        text-align: center;

        color: ${(props) => props.theme.colors['purple-400']};

        max-width: 7.4rem;
        width: 100%;
        padding: 0.8rem 0.6rem;

        background: ${(props) => props.theme.colors.white};
        box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.04);
        border-radius: 4px;
      }

      img {
        max-width: 16rem;
        width: 100%;
        height: auto;
      }
    }

    > div.services-slug {
      display: flex;
      align-items: center;
      gap: 2.8rem;

      margin-top: 2.6rem;
    }
  }
`;

interface IServicesSlug {
  variant: 'blue' | 'red' | 'yellow';
}

export const ServicesSlug = styled.span<IServicesSlug>`
  display: flex;
  align-items: center;

  position: relative;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1rem;
  line-height: ${(props) => props.theme.fontSize.xs};
  letter-spacing: 0.01em;

  color: ${(props) => props.theme.colors['blue-500']};

  &::before {
    position: absolute;
    content: '';
    left: -1.2rem;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;

    ${(props) =>
      props.variant === 'blue' &&
      css`
        background-color: ${(props) => props.theme.colors['blue-800']};
      `};

    ${(props) =>
      props.variant === 'red' &&
      css`
        background-color: ${(props) => props.theme.colors['red-800']};
      `};

    ${(props) =>
      props.variant === 'yellow' &&
      css`
        background-color: ${(props) => props.theme.colors['yellow-300']};
      `};
  }
`;
