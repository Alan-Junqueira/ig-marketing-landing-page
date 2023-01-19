import styled from 'styled-components';

export const HeaderAsideInfoContainer = styled.aside`
  display: grid;
  grid-template-columns: 33rem 1fr;
  gap: 2.2rem;

  position: absolute;
  top: -28.5rem;
  right: -13.5rem;

  z-index: 100;

  max-width: 72rem;
  width: 100%;

  transition: all ease 0.3s;

  &:hover {
    right: 0;
  }
`;

export const HeaderAsideYourGrouth = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.fontSize['2xl']};

  padding: 3.1rem 1.6rem 1.5rem 1.6rem;
  width: 100%;
  max-width: 18.8rem;

  max-height: 21.8rem;
  height: 100%;

  margin-left: 10rem;
  margin-top: 1.3rem;

  background: ${(props) => props.theme.colors['white--op-20']};

  border-radius: 8px;

  &::before {
    position: absolute;
    right: -21px;
    top: -21px;

    content: '';
    width: 42px;
    height: 42px;

    background-image: url('/assets/images/profile.png');
    border: 3px solid ${(props) => props.theme.colors.white};
    box-shadow: -20px 25px 40px rgba(16, 37, 58, 0.15);
    border-radius: 50%;
  }

  h3 {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.xl};
    line-height: 2.5rem;

    text-align: center;

    color: ${(props) => props.theme.colors['white--op-94']};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    padding: 1.7rem 3.2rem 2rem 3.2rem;

    background: ${(props) => props.theme.colors['white-300']};
    border-radius: 8px;

    span {
      font-size: ${(props) => props.theme.fontSize.sm};
      line-height: 1.7rem;

      text-align: center;

      color: ${(props) => props.theme.colors['gray-600']};
    }

    strong {
      font-weight: 700;
      font-size: ${(props) => props.theme.fontSize['3xl']};
      line-height: ${(props) => props.theme.fontSize['4xl']};
      text-align: center;

      color: ${(props) => props.theme.colors['red-500']};
    }
  }
`;

export const HeaderAsideCircularProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.fontSize['3xl']};

  padding: ${(props) => props.theme.fontSize['2xl']};

  width: 100%;
  max-width: 31rem;
  height: 29rem;

  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 28px 60px -12px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  transition: all ease 0.3s;

  div.progress-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 2.8rem;

    span {
      position: absolute;
      left: -15px;
      top: 50px;

      padding: ${(props) => props.theme.fontSize.xs};

      width: 15.5rem;

      font-size: ${(props) => props.theme.fontSize.xs};
      line-height: ${(props) => props.theme.fontSize.base};
      color: ${(props) => props.theme.colors.white};

      letter-spacing: -0.01em;

      background: ${(props) => props.theme.colors['black-500']};
      border-radius: 6px;

      &::before {
        content: '';
        border-style: solid;
        border-color: ${(props) => props.theme.colors['black-500']} transparent
          transparent;
        border-width: 10px 10px 0;
        height: 0;
        width: 0;
        margin-left: 0.5rem;

        position: absolute;

        left: 7rem;
        bottom: -10px;
      }
    }

    img {
      width: 20rem;
      height: auto;
    }
  }
`;

export const HeaderAsideFollowerGrowth = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 40px 70px -18px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  padding: 2.6rem 2.3rem 4.6rem 2rem;
  margin-top: 2.8rem;

  max-width: 30.6rem;
  width: 100%;

  span.new-followers {
    font-family: 'Inter';
    font-size: ${(props) => props.theme.fontSize.xs};
    line-height: 1.5rem;

    color: ${(props) => props.theme.colors['gray-300']};

    margin-top: 0.4rem;
    margin-bottom: 2rem;

    strong {
      font-family: 'Inter';
      font-weight: 600;
      font-size: 2.2rem;
      line-height: 2.7rem;

      color: ${(props) => props.theme.colors['dark-gray-100']};
    }
  }
`;

export const HeaderAsideInfoGraphic = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
`;

export const VerticalLines = styled.div`
  position: absolute;
  bottom: 0.4rem;
  left: 3.2rem;

  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

export const HeaderAsideFollowerGrowthCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  background: ${(props) => props.theme.colors.white};
  border: 1.5px solid ${(props) => props.theme.colors['white-400']};
  border-radius: 8px;

  max-width: 35rem;
  width: 100%;

  margin-left: 1.2rem;
  margin-top: 2.5rem;
  padding: 2rem;

  > span {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 4rem;
    line-height: ${(props) => props.theme.fontSize['5xl']};
    letter-spacing: -0.02em;

    color: #191124;

    padding: 1.3rem 1.8rem;

    background: ${(props) => props.theme.colors['white-500']};
    border-radius: 6px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    span {
      font-family: 'Inter';
      font-size: ${(props) => props.theme.fontSize.base};
      line-height: 1.9rem;

      margin-bottom: 1.5rem;

      color: ${(props) => props.theme.colors['dark-gray-200']};
    }

    div.full {
      border-radius: 4px;
      height: 8px;
      width: 100%;
      background: ${(props) => props.theme.colors['white-500']};
      border-radius: 12px;
      margin-bottom: 0.8rem;
    }

    div.partial {
      border-radius: 4px;
      height: 8px;
      width: 60%;
      background: ${(props) => props.theme.colors['white-500']};
      border-radius: 12px;
      margin-bottom: 0.8rem;
    }
  }
`;

export const HeaderAsideEmojiCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  padding: 2rem 2.4rem;
  margin-top: 2.5rem;
  margin-left: 1.2rem;

  width: 100%;
  max-width: 20rem;

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 35px 80px -14px rgba(0, 0, 0, 0.08);
  border: 1.5px solid ${(props) => props.theme.colors['white-400']};
  border-radius: 8px;
`;
