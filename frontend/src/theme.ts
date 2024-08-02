// theme.ts or theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080',
    },
    secondary: {
      main: '#FF7F50',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
  },
});

export default theme;
