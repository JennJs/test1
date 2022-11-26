import { ThemeProvider, createTheme} from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BaseView } from './components/Base/BaseView';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: '#f7ffff', 
          backgroundColor: '#5bc99c',
          borderRadius: '20px',
          textTransform: "none",
          fontWeight: 'normal',
          minWidth: '170px',
          '&:hover': {
            backgroundColor: '#2c8c65',
          },
        },
        contained: {
          backgroundColor: '#1d89e0',
          px: '5px',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#1868a8',
          },
        }
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}> 
  <React.StrictMode>
    <BaseView />
  </React.StrictMode>
  </ThemeProvider>
);