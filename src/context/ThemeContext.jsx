// src/context/ThemeContext.jsx
import { createContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f5f5f5' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#121212' },
  },
});

export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  // Auto-detect time of day on first load
  useEffect(() => {
    const hour = new Date().getHours();
    const prefersDark = hour < 7 || hour > 19;
    setMode(prefersDark ? 'dark' : 'light');
  }, []);

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
