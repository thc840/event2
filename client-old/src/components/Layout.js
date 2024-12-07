import React from 'react';
import { Box, CssBaseline, Toolbar, IconButton } from '@mui/material';
import Sidebar from './Sidebar';
import ActionBar from './ActionBar';
import { Brightness4 } from '@mui/icons-material';
import { useTheme } from '../ThemeContext';

const drawerWidth = 280;

const Layout = ({ children, actionButtons, isAuthenticated, onLogout }) => {
  const { toggleTheme } = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar isAuthenticated={isAuthenticated} onLogout={onLogout} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, transition: 'margin 0.5s', minHeight: '100vh' }}
      >
        <Toolbar>
          <IconButton onClick={toggleTheme} color="inherit">
            <Brightness4 />
          </IconButton>
        </Toolbar>
        <ActionBar actionButtons={actionButtons} />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
