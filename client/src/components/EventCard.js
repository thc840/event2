import React from 'react';
import { Card, Text } from '@fluentui/react-components';

const EventCard = ({ event }) => (
  <Card>
    <Text variant="large" block>{event.name}</Text>
    <Text>{event.description}</Text>
  </Card>
);

export default EventCard;
