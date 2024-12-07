import React, { createContext, useState, useContext } from 'react';
import { createTheme } from '@fluentui/react';
import fluentLightTheme from '../themes/fluentLightTheme';
import fluentDarkTheme from '../themes/fluentDarkTheme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(fluentLightTheme);

  const toggleTheme = () => {
    setTheme(theme === fluentLightTheme ? fluentDarkTheme : fluentLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
