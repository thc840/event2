import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import CardComponent from './CardComponent';
import { useNavigate } from 'react-router-dom';

const EventList = ({ setActionButtons, isAuthenticated }) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setActionButtons([
        {
          label: 'Create Event',
          color: 'primary',
          onClick: () => navigate('/create')
        }
      ]);
    } else {
      setActionButtons([]);
    }
  }, [navigate, setActionButtons, isAuthenticated]);

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {events.map(event => (
          <Grid item xs={12} sm={6} md={4} key={event._id}>
            <CardComponent
              title={event.name}
              description={event.description}
              date={event.date}
              onDetails={() => handleDetails(event._id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventList;
