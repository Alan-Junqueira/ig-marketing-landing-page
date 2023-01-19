import styled from 'styled-components';

export const TestimonialContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 4.4rem;
  padding-bottom: 10rem;
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 98rem;
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

    max-width: 55rem;
    margin: 0 auto;

    text-align: center;
    letter-spacing: 0.01em;

    margin-bottom: 8rem;

    color: ${(props) => props.theme.colors['blue-300']};
  }

  > div {
    display: flex;
    justify-content: space-between;

    > div.quotation {
      blockquote {
        margin-top: 4rem;
        max-width: 48rem;
        width: 100%;

        q {
          display: inline-block;

          font-family: 'Inter';
          font-style: italic;
          font-weight: 500;
          font-size: 2.2rem;
          line-height: ${(props) => props.theme.fontSize['4xl']};

          margin-bottom: 5.5rem;

          color: ${(props) => props.theme.colors['gray-200']};
        }

        > div.quotation-owner {
          display: flex;
          align-items: center;
          justify-content: space-between;

          h3 {
            font-family: 'Lato';
            font-weight: 700;
            font-size: 2.5rem;
            line-height: ${(props) => props.theme.fontSize['3xl']};

            margin-bottom: 1.2rem;

            color: ${(props) => props.theme.colors['dark-blue-300']};
          }

          span {
            font-family: 'Inter';
            font-weight: 500;
            font-size: ${(props) => props.theme.fontSize.base};
            line-height: 1.9rem;

            color: ${(props) => props.theme.colors['gray-400']};
          }

          > div.quotation-pagination {
            display: flex;
            gap: 1.6rem;
            align-items: center;

            button {
              display: flex;
              align-items: center;
              justify-content: center;

              padding: 0.8rem;
              margin-top: 1.6rem;

              background-color: transparent;

              width: 3rem;
              height: auto;

              box-shadow: 0px 14px 30px -4px rgba(206, 206, 206, 0.5);
              border-radius: 2px;

              border: 1px solid transparent;

              transition: all ease 0.2s;

              &:hover {
                border-color: ${(props) =>
                  props.theme.colors['light-gray-100']};
              }
            }
          }
        }
      }
    }
  }
`;
