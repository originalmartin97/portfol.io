// src/context/ThemeContext.jsx
import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

// Define vibrant skill chip colors for tech-savvy look
const skillChipColors = {
  warning: {
    main: '#ff9800',
    light: '#ffb74d',
    dark: '#f57c00',
    contrastText: '#000',
  },
  primary: {
    main: '#2196f3',
    light: '#64b5f6',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  info: {
    main: '#00bcd4',
    light: '#4dd0e1',
    dark: '#0097a7',
    contrastText: '#fff',
  },
  success: {
    main: '#4caf50',
    light: '#81c784',
    dark: '#388e3c',
    contrastText: '#fff',
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2',
    contrastText: '#fff',
  }
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f5f5f5' },
    primary: {
      main: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    // Add our custom skill chip colors
    ...skillChipColors
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#000000',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212' },
    primary: {
      main: '#ffffff',
    },
    // Add our custom skill chip colors - slightly brighter for dark mode
    warning: {
      main: '#ffb74d',
      light: '#ffd54f',
      dark: '#ff9800',
      contrastText: '#000',
    },
    primary: {
      main: '#64b5f6',
      light: '#90caf9',
      dark: '#42a5f5',
      contrastText: '#000',
    },
    info: {
      main: '#4dd0e1',
      light: '#80deea',
      dark: '#26c6da',
      contrastText: '#000',
    },
    success: {
      main: '#81c784',
      light: '#a5d6a7',
      dark: '#66bb6a',
      contrastText: '#000',
    },
    secondary: {
      main: '#ba68c8',
      light: '#ce93d8',
      dark: '#ab47bc',
      contrastText: '#000',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h4: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#ffffff',
        },
      },
    },
  },
});

export function CustomThemeProvider({ children }) {
  // Start with light theme by default
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
