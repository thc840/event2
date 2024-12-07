import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
    color: ${({ theme }) => theme.palette.neutralPrimary};
    min-height: 100vh;
    font-family: 'Segoe UI', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: inherit;
  }

  .acrylic {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
  }
`;

export default GlobalStyle;
