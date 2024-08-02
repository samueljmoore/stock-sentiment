import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import App from './App';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

const domRoot = document.getElementById('root') as HTMLElement;
const root = createRoot(domRoot);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
