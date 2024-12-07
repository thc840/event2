import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Text, Button } from '@fluentui/react-components';
import { Box } from '@mui/material';

const EventDetails = ({ setActionButtons }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvent();
  }, [id]);

  useEffect(() => {
    if (isAuthenticated) {
      setActionButtons([
        {
          label: 'Update Event',
          color: 'primary',
          onClick: () => navigate(`/update/${id}`)
        },
        {
          label: 'Delete Event',
          color: 'secondary',
          onClick: () => navigate(`/delete/${id}`)
        }
      ]);
    } else {
      setActionButtons([]);
    }
  }, [isAuthenticated, id, navigate, setActionButtons]);

  if (!event) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Card>
        <Box sx={{ padding: 2 }}>
          <Text variant="xLarge" block>{event.name}</Text>
          <Text variant="medium" block>{event.description}</Text>
          <Text variant="medium" color="gray" block>Date: {new Date(event.date).toLocaleDateString()}</Text>
          <Text variant="medium" color="gray" block>Location: {event.location}</Text>
          <Text variant="medium" color="gray" block>Organizer: {event.organizer}</Text>
        </Box>
        {isAuthenticated && (
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', padding: 2 }}>
            <Button appearance="primary" onClick={() => navigate(`/update/${id}`)}>Update Event</Button>
            <Button appearance="secondary" onClick={() => navigate(`/delete/${id}`)}>Delete Event</Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default EventDetails;
