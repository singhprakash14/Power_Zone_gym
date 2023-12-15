
import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
