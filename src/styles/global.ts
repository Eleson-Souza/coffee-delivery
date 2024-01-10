import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
  width: 100vw;
  max-width: 70rem;
  margin: auto;
  
  background: ${(props) => props.theme["background"]};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
}

button {
  cursor: pointer;
}

h1, h2, h3 {
  color: ${(props) => props.theme["base-title"]}
}

h4, h5, h6 {
  color: ${(props) => props.theme["base-subtitle"]}
}
`;
