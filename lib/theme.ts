'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFEF46',
      light: '#FFF685',
      dark: '#E2D320',
      contrastText: '#111111',
    },
    secondary: {
      main: '#111111',
      light: '#2E2E2E',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#f8f6f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#55524c',
    },
    divider: '#dedad0',
  },
  typography: {
    fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          textTransform: 'none',
          padding: '12px 24px',
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          backgroundColor: '#FFEF46',
          color: '#111111',
          '&:hover': {
            backgroundColor: '#ffe91a',
            boxShadow: '0 8px 24px rgba(255, 239, 70, 0.45)',
          },
        },
        outlined: {
          borderColor: '#dedad0',
          color: '#111111',
          '&:hover': {
            borderColor: '#111111',
            backgroundColor: 'rgba(17, 17, 17, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #dedad0',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
          backgroundColor: '#ffffff',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
          fontSize: '0.8125rem',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: '#dedad0',
            },
            '&:hover fieldset': {
              borderColor: '#111111',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#111111',
              borderWidth: 2,
            },
          },
        },
      },
    },
  },
})

export default theme
