import React, { useState, useEffect } from 'react';
import { Stack, Text } from '@fluentui/react';
import EventCard from './EventCard';
import { fetchEvents } from '../services/apiService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    getEvents();
  }, []);

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </Stack>
  );
};

export default EventList;
