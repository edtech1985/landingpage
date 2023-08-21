import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Mono', monospace, sans-serif;
  }
  
  body {
    margin: 0;
    width: 100vw;
    height: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    
    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: auto;
      max-height: 100vh;
    }
  }

:root {
  --background1: #C5D9D5;
  --background2: #314033;
  --background3: #4BE8BE;
  --primary-color: #55735F;
  --second-color: #80A689;
  --third-color: #C0E84B;
  --text1: #95BFA0;
  --text2: #314033;
}
  
`;

export default GlobalStyle;
