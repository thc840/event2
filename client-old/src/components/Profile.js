import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, Label, Text } from '@fluentui/react-components';
import { Box } from '@mui/material';

const Profile = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } };

      try {
        const res = await axios.get('/api/auth/profile', config);
        setFormData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } };

    try {
      await axios.put('/api/auth/profile', formData, config);
      alert('Profile Updated Successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Text variant="xLarge">Update Profile</Text>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 16 }}>
          <Label>Name</Label>
          <Input name="name" value={formData.name} onChange={onChange} required />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Label>Email</Label>
          <Input name="email" value={formData.email} onChange={onChange} required />
        </div>
        <Button appearance="primary" type="submit">Update Profile</Button>
      </form>
    </Box>
  );
};

export default Profile;
