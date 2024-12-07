import React from 'react';
import { Toolbar } from '@fluentui/react-components';
import { Box, Button } from '@mui/material';

const ActionBar = ({ actionButtons }) => {
  if (actionButtons.length === 0) {
    return null;
  }

  return (
    <Toolbar aria-label="Action bar" role="toolbar" style={{ padding: '8px 16px', height: '50px', background: 'var(--neutralLighterAlt)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        {actionButtons.map((button, index) => (
          <Button key={index} variant="contained" color={button.color} onClick={button.onClick} style={{ margin: '0 8px' }}>
            {button.label}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default ActionBar;
