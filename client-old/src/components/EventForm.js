import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { Card, Text, Button, Input, Label } from '@fluentui/react-components';
import { useNavigate } from 'react-router-dom';

const EventForm = ({ setActionButtons }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    organizer: ''
  });

  const navigate = useNavigate();

  const { name, description, date, location, organizer } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Card>
        <Box sx={{ padding: 2 }}>
          <Text variant="xLarge" block>Create Event</Text>
          <form onSubmit={onSubmit}>
            <div style={{ marginBottom: 16 }}>
              <Label>Event Name</Label>
              <Input name="name" value={name} onChange={onChange} required />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Label>Description</Label>
              <Input name="description" value={description} onChange={onChange} required multiline rows={4} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Label>Date</Label>
              <Input name="date" type="date" value={date} onChange={onChange} required />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Label>Location</Label>
              <Input name="location" value={location} onChange={onChange} required />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Label>Organizer</Label>
              <Input name="organizer" value={organizer} onChange={onChange} required />
            </div>
            <Button appearance="primary" type="submit">Create Event</Button>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default EventForm;
