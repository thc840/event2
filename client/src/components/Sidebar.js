import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Link } from '@fluentui/react';

const Sidebar = () => (
  <Stack horizontalAlign="start" tokens={{ childrenGap: 20 }}>
    <Link as={NavLink} to="/">Home</Link>
    <Link as={NavLink} to="/login">Login</Link>
    <Link as={NavLink} to="/register">Register</Link>
  </Stack>
);

export default Sidebar;
