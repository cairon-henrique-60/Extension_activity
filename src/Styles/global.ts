import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    max-height: 100vh;
  }

  body, input, button {
    font: 16px Poppins, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
export default globalStyle;
