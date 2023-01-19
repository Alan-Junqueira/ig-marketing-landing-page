import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const HeaderTop = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  height: 480px;

  background-image: linear-gradient(265.05deg, #e73635 4%, #6ad5ff 87.25%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;

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
    z-index: -1;
  }
`;

export const HeaderTopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  width: 100%;
  padding: 2.4rem;

  span {
    font-family: 'Lekton';
    font-weight: 700;
    font-size: 3.4rem;
    line-height: 3.5rem;

    letter-spacing: -0.04em;

    color: ${(props) => props.theme.colors.white};
  }

  ul {
    display: flex;
    gap: 3.2rem;

    font-family: 'Inter';
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 1.9rem;

    color: ${(props) => props.theme.colors['white--op-94']};

    li {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
  }

  button {
    font-size: 1.5rem;
    line-height: ${(props) => props.theme.fontSize.lg};
    font-family: 'Inter';

    text-align: center;

    color: #fffaf9;

    padding: 1.2rem 2rem;
    background: ${(props) => props.theme.colors['white--op-20']};
    backdrop-filter: blur(35px);

    border-radius: 21px;
  }
`;

export const HeaderBotton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderBottonInfo = styled.div`
  max-width: 1440px;
  width: 100%;
  padding-inline: 2.4rem;

  z-index: 1;

  div.header-aside {
    position: relative;
  }

  h1 {
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize['8xl']};
    line-height: 10.8rem;

    width: 100%;
    max-width: 57.1rem;

    margin-top: -10rem;
    margin-bottom: 2rem;

    color: ${(props) => props.theme.colors['blue-700']};

    background: linear-gradient(
      96.46deg,
      ${(props) => props.theme.colors['yellow-600']} 3.72%,
      ${(props) => props.theme.colors['orange-500']} 31.05%,
      ${(props) => props.theme.colors['orange--op-82']} 68.54%,
      ${(props) => props.theme.colors['blue-900']} 100%
    );

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-family: 'Inter';
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: ${(props) => props.theme.fontSize['3xl']};

    max-width: 49rem;
    width: 100%;

    margin-bottom: 4rem;

    color: ${(props) => props.theme.colors['blue-200']};
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    max-width: 20rem;
    width: 100%;

    padding: 1.8rem 3rem;
    margin-bottom: 12rem;

    font-family: 'Inter';
    font-size: 1.5rem;
    line-height: ${(props) => props.theme.fontSize.lg};

    color: ${(props) => props.theme.colors['white-100']};
    background: ${(props) => props.theme.colors['dark-blue-400']};
    border-radius: 26px;

    transition: all ease 0.3s;

    &:hover {
      filter: brightness(1.4);
    }

    svg {
      width: ${(props) => props.theme.fontSize.base};
      height: ${(props) => props.theme.fontSize.base};

      color: ${(props) => props.theme.colors['white-100']};
    }
  }

  span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.base};
    line-height: 1.9rem;

    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme.colors['gray-100']};

    margin: 0 auto;

    width: 100%;
    max-width: 25.3rem;
  }
`;

export const HeaderBoxLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 6.5rem;
  margin-bottom: 4rem;
`;
