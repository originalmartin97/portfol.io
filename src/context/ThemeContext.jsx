// src/context/ThemeContext.jsx
import { createContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

export const ThemeContext = createContext();

// Keep skill chip colors as they are - they add nice visual interest
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
    background: { default: '#f8f7f3' }, // Adjusted to match the cream color in image
    paper: { default: '#f8f7f3' },
    primary: {
      main: '#000000', // Keep black for main elements
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    // Keep all skill chip colors
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
          borderColor: 'rgba(0,0,0,0.12)', // Lighter divider that matches the design
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
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
    // Keep the skill chip colors for dark mode
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
          borderColor: 'rgba(255,255,255,0.12)',
        },
      },
    },
  },
});

export function CustomThemeProvider({ children }) {
  // Check localStorage for saved theme preference, fallback to 'light'
  const [mode, setMode] = useState(() => {
    // Get saved theme from localStorage if available
    const savedTheme = localStorage.getItem('theme-mode');
    return savedTheme || 'light';
  });

  // Add transition state
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Effect to sync with localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const toggleTheme = () => {
    // Start transition effect
    setIsTransitioning(true);

    // Wait briefly then change theme
    setTimeout(() => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

      // End transition effect after theme has changed
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Slightly shorter than the CSS transition for smooth effect
    }, 100);
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Transition overlay that fades in/out during theme change */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: mode === 'light' ? 'rgba(248, 247, 243, 0.7)' : 'rgba(18, 18, 18, 0.7)',
            opacity: isTransitioning ? 1 : 0,
            zIndex: isTransitioning ? 9999 : -1, // Show above everything during transition
            pointerEvents: 'none', // Make sure clicks pass through
            transition: 'opacity 500ms ease',
          }}
        />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
