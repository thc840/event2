import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF', // White background
    },
    primary: {
      main: '#000000', // Black primary color
    },
    secondary: {
      main: '#6C757D', // Grey secondary color
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#6C757D', // Grey text
    },
    success: {
      main: '#000000', // Black for success as well
    },
    action: {
      hover: '#343A40', // Dark Grey for hover actions
    },
  },
  typography: {
    fontFamily: 'Noto Sans, Roboto, Arial, sans-serif',
  },
});

export default theme;
