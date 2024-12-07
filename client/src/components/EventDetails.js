import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Text } from '@fluentui/react';
import { fetchEventDetails } from '../services/apiService';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const data = await fetchEventDetails(id);
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    getEventDetails();
  }, [id]);

  if (!event) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Text variant="large">{event.name}</Text>
      <Text>{event.description}</Text>
      {/* Add more event details here as needed */}
    </Stack>
  );
};

export default EventDetails;
