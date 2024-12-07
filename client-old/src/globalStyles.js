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

  .sidebar {
    background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
    color: ${({ theme }) => theme.palette.neutralPrimary};
  }

  .main-content {
    background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
    color: ${({ theme }) => theme.palette.neutralPrimary};
  }
`;

export default GlobalStyle;
