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
`;