import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0
  }
  body {
    background-color: ${(props) => props.theme.colors.white};
    color: #1F1F26;
    -webkit-font-smoothing: antialiased
  }

  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button, a {
    cursor: pointer;
  }

  svg .svg-elem-1 {
  stroke-dashoffset: 279.751220703125px;
  stroke-dasharray: 279.751220703125px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
          transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}
`;