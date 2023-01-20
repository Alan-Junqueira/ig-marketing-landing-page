import styled from 'styled-components';

export const NewsletterContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NewsletterContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  padding: 5rem 0 6.5rem 0;

  position: relative;
  max-width: 98rem;
  width: 100%;
  height: 32.2rem;

  background-image: linear-gradient(265.05deg, #e73635 4%, #6ad5ff 87.25%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  z-index: 1;
  margin-block: 3rem;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    inset: 0;
    background-image: url('/assets/images/background-home.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 20px;
    z-index: -1;
  }

  h2 {
    font-weight: 600;
    font-size: 4rem;
    line-height: ${(props) => props.theme.fontSize['6xl']};

    color: ${(props) => props.theme.colors.white};
  }

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 2.8rem;

    text-align: center;
    letter-spacing: 0.01em;

    color: ${(props) => props.theme.colors['white--op-83']};
    width: 100%;
    max-width: 55rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 3rem;

    padding: 1.6rem 4rem;

    background: ${(props) => props.theme.colors['dark-blue-400']};
    border-radius: 26px;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 1.5rem;
    line-height: ${(props) => props.theme.fontSize.lg};

    color: ${(props) => props.theme.colors['white-100']};

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    transition: all ease .3s;

    &:hover {
      filter: brightness(1.4);
    }
  }
`;
