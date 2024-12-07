import React from 'react';
import { Stack } from '@fluentui/react';
import Sidebar from './Sidebar';
import { useTheme } from '../utils/ThemeContext';
import { DefaultButton } from '@fluentui/react/lib/Button';
import GlobalStyle from '../assets/styles/globalStyles';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme.palette.neutralLighterAlt, color: theme.palette.neutralPrimary, minHeight: '100vh' }}>
      <GlobalStyle theme={theme} />
      <Stack horizontal>
        <Sidebar />
        <Stack grow>
          <DefaultButton text="Toggle Theme" onClick={toggleTheme} />
          {children}
        </Stack>
      </Stack>
    </div>
  );
};

export default Layout;
