import { createTheme } from '@fluentui/react';

const fluentDarkTheme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#2b2b2b',
    neutralLighter: '#333333',
    neutralLight: '#3c3c3c',
    neutralQuaternaryAlt: '#454545',
    neutralQuaternary: '#4e4e4e',
    neutralTertiaryAlt: '#575757',
    neutralTertiary: '#808080',
    neutralSecondary: '#9a9a9a',
    neutralPrimaryAlt: '#b3b3b3',
    neutralPrimary: '#dcdcdc',
    neutralDark: '#f4f4f4',
    black: '#ffffff',
    white: '#1d1d1d',
  },
  defaultFontStyle: { fontFamily: 'Segoe UI, sans-serif' },
});

export default fluentDarkTheme;
