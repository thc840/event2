import React from 'react';
import { Card, Text, Button } from '@fluentui/react-components';
import { Box } from '@mui/material';

const CardComponent = ({ title, description, date, onDetails }) => {
  return (
    <Card aria-label="Event Card" style={{ padding: '16px', marginBottom: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Box sx={{ marginBottom: '16px' }}>
        <Text variant="large" block>{title}</Text>
      </Box>
      <Box sx={{ marginBottom: '16px' }}>
        <Text variant="medium" block>{description}</Text>
      </Box>
      <Box sx={{ marginBottom: '16px' }}>
        <Text variant="medium" color="gray" block>Date: {new Date(date).toLocaleDateString()}</Text>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button appearance="primary" onClick={onDetails}>Details</Button>
      </Box>
    </Card>
  );
};

export default CardComponent;
