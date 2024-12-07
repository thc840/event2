import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faUser, faSignOutAlt, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const drawerWidth = 280;

const Sidebar = ({ isAuthenticated, onLogout, mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <Box className="sidebar" sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
      <Typography variant="h6" noWrap component="div" sx={{ mb: 3 }}>
        College Events
      </Typography>
      <List sx={{ flexGrow: 1 }}>
        <ListItem button component={NavLink} to="/" className="nav-item" sx={{ my: 1, borderRadius: 1, px: 2, py: 1, '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' } }}>
          <ListItemIcon sx={{ minWidth: '40px' }}><FontAwesomeIcon icon={faHome} className="fa-icon" /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {isAuthenticated && (
          <ListItem button component={NavLink} to="/create" className="nav-item" sx={{ my: 1, borderRadius: 1, px: 2, py: 1, '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' } }}>
            <ListItemIcon sx={{ minWidth: '40px' }}><FontAwesomeIcon icon={faPlus} className="fa-icon" /></ListItemIcon>
            <ListItemText primary="Create Event" />
          </ListItem>
        )}
        {isAuthenticated ? (
          <>
            <ListItem button component={NavLink} to="/profile" className="nav-item" sx={{ my: 1, borderRadius: 1, px: 2, py: 1, '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' } }}>
              <ListItemIcon sx={{ minWidth: '40px' }}><FontAwesomeIcon icon={faUser} className="fa-icon" /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={onLogout} className="nav-item logout" sx={{ my: 1, borderRadius: 1, px: 2, py: 1, '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' } }}>
              <ListItemIcon sx={{ minWidth: '40px' }}><FontAwesomeIcon icon={faSignOutAlt} className="fa-icon" /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={NavLink} to="/register" className="nav-item" sx={{ my: 1, borderRadius: 1, px: 2, py: 1, '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' } }}>
              <ListItemIcon sx={{ minWidth: '40px' }}><FontAwesomeIcon icon={faUserPlus} className="fa-icon" /></ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem button component={NavLink} to="/login" className="nav-item" sx={{ my: 1, borderRadius: 1, px: 2, py: 1, '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' } }}>
              <ListItemIcon sx={{ minWidth: '40px' }}><FontAwesomeIcon icon={faSignInAlt} className="fa-icon" /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'background.default', color: 'text.primary' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'background.default', color: 'text.primary' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;
